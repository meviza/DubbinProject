# Hashing ve Doğrulama fonksiyonları
import hashlib
import sqlite3
from datetime import datetime

def db_baslat():
    conn = sqlite3.connect('database/dubbin_records.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS seals 
                 (hash TEXT PRIMARY KEY, filename TEXT, date TEXT)''')
    conn.commit()
    conn.close()

def muhur_kaydet(file_hash, filename):
    conn = sqlite3.connect('database/dubbin_records.db')
    c = conn.cursor()
    try:
        c.execute("INSERT INTO seals VALUES (?, ?, ?)", 
                  (file_hash, filename, datetime.now().strftime("%d.%m.%Y %H:%M:%S")))
        conn.commit()
    except: pass # Zaten varsa kaydetme
    conn.close()