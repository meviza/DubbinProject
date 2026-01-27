import streamlit as st
import os
import hashlib
import sqlite3
import fitz  # PyMuPDF
import datetime
from rapidfuzz import process, fuzz 
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.llms.ollama import Ollama
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

# --- AYARLAR ---
DATA_DIR = "./data"
DB_DIR = "./database"
DB_PATH = os.path.join(DB_DIR, "dubbin_records.db")

# --- BAŞLATMA (Veritabanı Burada Oluşur) ---
if not os.path.exists(DB_DIR): os.makedirs(DB_DIR)
if not os.path.exists(DATA_DIR): os.makedirs(DATA_DIR)

def get_db_connection():
    return sqlite3.connect(DB_PATH)

# Tabloyu oluştur (Dosya yoksa burada yaratılır)
try:
    conn = get_db_connection()
    conn.execute('CREATE TABLE IF NOT EXISTS seals (hash TEXT PRIMARY KEY, filename TEXT, date TEXT)')
    conn.close()
except Exception as e:
    st.error(f"Veritabanı hatası: {e}")

# AI Ayarları
Settings.llm = Ollama(model="llama3", request_timeout=300.0)
Settings.embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")

# --- YARDIMCI FONKSİYONLAR ---
def pdf_isaretle(input_path, riskli_cumleler):
    doc = fitz.open(input_path)
    found_count = 0
    for page in doc:
        text_lines = page.get_text("text").split('\n')
        for risk in riskli_cumleler:
            if len(risk) < 15: continue
            match = process.extractOne(risk, text_lines, scorer=fuzz.PartialRatio)
            if match and match[1] > 80: 
                instances = page.search_for(match[0])
                for inst in instances:
                    page.add_highlight_annot(inst)
                    found_count += 1
    output_p = "analiz_edildi.pdf"
    doc.save(output_p)
    return output_p, found_count

# --- ARAYÜZ ---
st.set_page_config(page_title="Dubbin AI Pro", layout="wide")
st.title("⚖️ Dubbin AI: Mülkiyet ve Hukuk Otomasyonu")

tab1, tab2, tab3 = st.tabs(["🛡️ Analiz & Mühürleme", "🔍 Mühür Doğrulama", "📚 Mevzuat"])

# RAG Motoru
@st.cache_resource
def index_yukle():
    if not os.listdir(DATA_DIR): return None
    return VectorStoreIndex.from_documents(SimpleDirectoryReader(DATA_DIR).load_data())

index = index_yukle()

# --- SEKME 1: ANALİZ ---
with tab1:
    col_l, col_r = st.columns([1, 1])
    with col_l:
        st.subheader("📑 Belge Analizi")
        up_file = st.file_uploader("Dosya Yükle", type="pdf", key="main")
        if up_file:
            f_bytes = up_file.getvalue()
            f_hash = hashlib.sha256(f_bytes).hexdigest()
            st.info(f"🔒 **Dijital Mühür:** `{f_hash[:20]}...`")
            
            if st.button("🚀 Riskleri Analiz Et"):
                if index:
                    engine = index.as_query_engine(system_prompt="Riskleri 'RISKLI_CUMLE:' etiketiyle listele.")
                    res = engine.query("Bu belgedeki mülkiyet risklerini analiz et.")
                    
                    risks = [line.split("RISKLI_CUMLE:")[1].strip() for line in str(res).split('\n') if "RISKLI_CUMLE:" in line]
                    
                    with open("temp.pdf", "wb") as f: f.write(f_bytes)
                    out_p, count = pdf_isaretle("temp.pdf", risks)
                    
                    st.write(str(res))
                    if count > 0:
                        with open(out_p, "rb") as f:
                            st.download_button("📥 İşaretli PDF İndir", f, "Dubbin_Analiz.pdf")
                    
                    # Veritabanına Kaydet
                    db = get_db_connection()
                    db.execute("INSERT OR REPLACE INTO seals VALUES (?, ?, ?)", (f_hash, up_file.name, str(datetime.datetime.now())))
                    db.commit()
                    db.close()
                else:
                    st.error("Lütfen data klasörüne kanun PDF'lerini ekleyin.")

    with col_r:
        st.subheader("💬 AI Ombudsman")
        user_input = st.text_input("Sorunuzu yazın:")
        if user_input and index:
            with st.spinner("Yanıtlanıyor..."):
                resp = index.as_query_engine().query(user_input)
                st.write(str(resp))

# --- SEKME 2: DOĞRULAMA ---
with tab2:
    st.subheader("🔍 Mühür Doğrulama")
    check_file = st.file_uploader("Doğrulanacak PDF", type="pdf", key="verify")
    if check_file:
        c_hash = hashlib.sha256(check_file.getvalue()).hexdigest()
        db = get_db_connection()
        try:
            record = db.execute("SELECT * FROM seals WHERE hash=?", (c_hash,)).fetchone()
            if record:
                st.success(f"✅ DOĞRULANDI! Tarih: {record[2]}")
            else:
                st.error("❌ Kayıt Bulunamadı.")
        except:
            st.error("Veritabanı okunamadı.")
        db.close()

# --- SEKME 3: MEVZUAT ---
with tab3:
    if os.path.exists(DATA_DIR):
        st.write(os.listdir(DATA_DIR))