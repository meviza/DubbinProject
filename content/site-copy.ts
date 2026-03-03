import type { Locale } from "@/lib/locales";

type NavLink = {
  href: string;
  label: string;
};

type HeroMetric = {
  label: string;
  value: string;
  helper: string;
};

type Capability = {
  title: string;
  body: string;
};

type MarketGap = {
  region: string;
  gap: string;
  value: string;
};

type DashboardModule = {
  title: string;
  body: string;
  status: string;
};

type LocaleCopy = {
  languageName: string;
  common: {
    login: string;
    requestDemo: string;
    createRequest: string;
    dashboard: string;
    switchLanguage: string;
    securePreview: string;
  };
  nav: NavLink[];
  landing: {
    kicker: string;
    title: string;
    accent: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    trustNote: string;
    metrics: HeroMetric[];
    capabilitiesTitle: string;
    capabilitiesBody: string;
    capabilities: Capability[];
    marketTitle: string;
    marketBody: string;
    marketGaps: MarketGap[];
    productTitle: string;
    productBody: string;
    productPillars: string[];
  };
  login: {
    kicker: string;
    title: string;
    body: string;
    emailLabel: string;
    roleLabel: string;
    rolePlaceholder: string;
    cta: string;
    helper: string;
  };
  demo: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };
  request: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };
  intake: {
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    jurisdictionLabel: string;
    needLabel: string;
    privacyHint: string;
    endpointHint: string;
    localDraftHint: string;
    successWithEndpoint: string;
    successLocalOnly: string;
  };
  dashboard: {
    kicker: string;
    title: string;
    body: string;
    metrics: HeroMetric[];
    modules: DashboardModule[];
    workstreamsTitle: string;
    workstreams: string[];
    countriesTitle: string;
    countries: string[];
  };
};

const copy: Record<Locale, LocaleCopy> = {
  en: {
    languageName: "English",
    common: {
      login: "Login",
      requestDemo: "Request Demo",
      createRequest: "Create Request",
      dashboard: "Dashboard",
      switchLanguage: "Language",
      securePreview: "Secure preview",
    },
    nav: [
      { href: "#capabilities", label: "Capabilities" },
      { href: "#markets", label: "Market Gaps" },
      { href: "#product", label: "Product" },
    ],
    landing: {
      kicker: "Premium Legal Intelligence",
      title: "A legal AI operating system built for",
      accent: "cross-border execution",
      body:
        "Dubbin is positioned as a premium legal command layer for review, drafting, fundraising readiness, precedent building, and evidence-linked work across multiple jurisdictions.",
      primaryCta: "Open Dashboard Preview",
      secondaryCta: "Enter Secure Login",
      trustNote:
        "Public repo stays presentation-safe. Sensitive AI, corpus, and security controls remain private.",
      metrics: [
        {
          label: "Review throughput",
          value: "4.2 min",
          helper: "structured issue extraction with source-linked follow-up",
        },
        {
          label: "Jurisdiction readiness",
          value: "12 packs",
          helper: "EU, US, APAC, MENA expansion architecture",
        },
        {
          label: "Lead conversion surface",
          value: "3 paths",
          helper: "login, demo request, custom intake",
        },
      ],
      capabilitiesTitle: "Premium product surface",
      capabilitiesBody:
        "The public-facing site sells a serious platform: faster than manual review, safer than generic chat products, and more realistic for international legal operations.",
      capabilities: [
        {
          title: "Contract review and redline orchestration",
          body:
            "Clause-level risk extraction, asymmetric obligation detection, remediation suggestions, and source-linked escalation packs.",
        },
        {
          title: "Academic and research-grade drafting support",
          body:
            "Support for policy notes, legal memos, board materials, and source-dense drafting that reads like expert work instead of AI filler.",
        },
        {
          title: "Fundraising and disclosure readiness",
          body:
            "Pre-check founder decks, information forms, diligence packets, and investor-facing disclosures before platform or counsel review.",
        },
      ],
      marketTitle: "Market gaps with real demand",
      marketBody:
        "The strongest wedge is not one country alone. The platform should open where regulatory density is high, AI adoption is rising, and mid-market legal teams remain underserved.",
      marketGaps: [
        {
          region: "Europe",
          gap: "SME and private-market teams need multilingual legal tooling beyond English-only contract AI.",
          value: "GDPR, AI Act, multi-country vendor and employment documents.",
        },
        {
          region: "United States",
          gap: "Mid-market legal teams need premium review workflows without top-firm software budgets.",
          value: "Faster turnaround, board-ready summaries, funding and vendor packs.",
        },
        {
          region: "India",
          gap: "Startup and growth-stage companies need scalable diligence and financing prep at lower cost.",
          value: "High volume founder workflows, repeatable documentation, speed pressure.",
        },
        {
          region: "Japan and Korea",
          gap: "Cross-border manufacturing, trade, and vendor operations need bilingual, high-trust document control.",
          value: "Structured review, negotiation prep, export-sensitive documentation.",
        },
      ],
      productTitle: "Product architecture for scale",
      productBody:
        "Public UI is structured as a premium front door. Private systems can power deeper intelligence later without redoing the information architecture.",
      productPillars: [
        "Clean route architecture with static export support",
        "Atomic UI primitives, reusable sections, and route-level templates",
        "Public-safe lead capture with private endpoint handoff",
        "Multi-language ready content model",
      ],
    },
    login: {
      kicker: "Secure Access",
      title: "Member login built for enterprise trust",
      body:
        "This public login is a premium access surface. Real authentication stays in the private application, while the public site demonstrates the member experience and conversion path.",
      emailLabel: "Work email",
      roleLabel: "Primary use case",
      rolePlaceholder: "Founding team, legal operations, law firm, investor relations",
      cta: "Continue to dashboard preview",
      helper: "No personal email is exposed in the public codebase.",
    },
    demo: {
      kicker: "Private Demo",
      title: "Request a guided product walkthrough",
      body:
        "Capture qualified leads for sales, pilots, and investor demos without exposing internal operations or private contact channels.",
      cta: "Save draft and open secure demo intake",
    },
    request: {
      kicker: "Custom Intake",
      title: "Create a tailored legal AI request",
      body:
        "Use this for pilot programs, enterprise onboarding, cross-border expansion, or a niche workflow that needs custom playbooks and data.",
      cta: "Save request and open secure intake",
    },
    intake: {
      nameLabel: "Full name",
      emailLabel: "Work email",
      companyLabel: "Company or firm",
      jurisdictionLabel: "Target jurisdiction",
      needLabel: "What do you need Dubbin to solve?",
      privacyHint:
        "This public site stores the draft locally in the browser first. Sensitive processing should stay in the private stack.",
      endpointHint:
        "A secure external intake portal opens in a new tab. This keeps the destination private and keeps personal email out of the page source.",
      localDraftHint:
        "No secure endpoint is configured yet. The request draft is saved locally so you can connect a private form service later.",
      successWithEndpoint:
        "Draft saved locally. The secure intake portal was opened in a new tab.",
      successLocalOnly:
        "Draft saved locally. Connect a secure external form URL before publishing publicly.",
    },
    dashboard: {
      kicker: "Member Workspace",
      title: "A dashboard that sells premium capability",
      body:
        "This preview is designed to feel denser, calmer, and more executive than generic admin panels. It positions Dubbin as a serious operating system, not a simple chatbot.",
      metrics: [
        {
          label: "Multi-region workspaces",
          value: "24",
          helper: "parallel matters across EU, US, GCC, and APAC",
        },
        {
          label: "Evidence-linked outputs",
          value: "96%",
          helper: "board-ready summaries, clause rationale, source chains",
        },
        {
          label: "Draft acceleration",
          value: "3.4x",
          helper: "contracts, memos, fundraising, and research artifacts",
        },
      ],
      modules: [
        {
          title: "Academic drafting mode",
          body:
            "Build legal memos, policy briefs, and source-dense internal writing with structured references and clear reasoning layers.",
          status: "Research-grade",
        },
        {
          title: "Precedent and case pool",
          body:
            "Position future private systems around rich precedent capture, reusable playbooks, and evidence clusters by jurisdiction.",
          status: "Precedent-ready",
        },
        {
          title: "Global jurisdiction packs",
          body:
            "Stage expansion for Europe, the United States, Australia, China, India, Japan, and Korea with local language and workflow overlays.",
          status: "Expansion map",
        },
      ],
      workstreamsTitle: "Core workstreams",
      workstreams: [
        "Contract review and redline",
        "Raise readiness and disclosure checks",
        "Cross-border policy and compliance notes",
        "Precedent clustering and legal research memory",
      ],
      countriesTitle: "Priority launch territories",
      countries: [
        "European Union",
        "United States",
        "Australia",
        "India",
        "Japan",
        "Korea",
      ],
    },
  },
  tr: {
    languageName: "Turkce",
    common: {
      login: "Giris",
      requestDemo: "Demo Talebi",
      createRequest: "Talep Olustur",
      dashboard: "Panel",
      switchLanguage: "Dil",
      securePreview: "Guvenli on izleme",
    },
    nav: [
      { href: "#capabilities", label: "Yetenekler" },
      { href: "#markets", label: "Pazar Bosluklari" },
      { href: "#product", label: "Urun" },
    ],
    landing: {
      kicker: "Premium Hukuk Zekasi",
      title: "Sinirlar arasi operasyon icin kurulan",
      accent: "hukuk AI isletim sistemi",
      body:
        "Dubbin; sozlesme inceleme, taslak hazirlama, kitle fonlama hazirligi, emsal olusturma ve kaynak baglantili hukuk calismasi icin premium bir komut katmani olarak konumlanir.",
      primaryCta: "Panel On Izlemesini Ac",
      secondaryCta: "Guvenli Giris Ekranina Git",
      trustNote:
        "Acik repo sadece sunum katmanini icerir. Hassas AI, veri havuzu ve guvenlik kontrolleri ozel repoda kalir.",
      metrics: [
        {
          label: "Inceleme hizi",
          value: "4.2 dk",
          helper: "yapisal bulgu cikarimi ve kaynak baglantili aksiyon",
        },
        {
          label: "Yetki alani hazirligi",
          value: "12 paket",
          helper: "AB, ABD, APAC ve MENA acilim mimarisi",
        },
        {
          label: "Lead donusum yolu",
          value: "3 akis",
          helper: "giris, demo talebi ve ozel talep toplama",
        },
      ],
      capabilitiesTitle: "Premium urun yuzeyi",
      capabilitiesBody:
        "Kamuya acik site ciddi bir platform satar: manuel incelemeden hizli, genel amacli sohbet araclarindan guvenli ve uluslararasi hukuk operasyonlari icin daha gercekci.",
      capabilities: [
        {
          title: "Sozlesme inceleme ve redline orkestrasyonu",
          body:
            "Madde seviyesinde risk cikarimi, dengesiz yukumluluk tespiti, duzeltme onerileri ve kaynak baglantili ust inceleme paketleri.",
        },
        {
          title: "Akademik ve arastirma duzeyi taslak desteği",
          body:
            "Politika notlari, hukuk memolari, yonetim kurulu materyalleri ve kaynak yogun metinler icin profesyonel kalite.",
        },
        {
          title: "Fonlama ve aciklama hazirligi",
          body:
            "Kurucu sunumlari, bilgi formlari, diligence paketleri ve yatirimciya donuk aciklamalari platform veya avukat incelemesinden once kontrol et.",
        },
      ],
      marketTitle: "Gercek ihtiyac olan pazar bosluklari",
      marketBody:
        "En guclu giris noktasi tek bir ulke degil. Regulator yogunlugunun yuksek, AI benimsemesinin hizlandigi ve orta segment hukuk ekiplerinin zayif hizmet aldigi alanlar hedeflenmeli.",
      marketGaps: [
        {
          region: "Avrupa",
          gap: "KOBI ve ozel piyasa ekipleri, sadece Ingilizce calisan araclarin otesinde cok dilli hukuk altyapisina ihtiyac duyuyor.",
          value: "GDPR, AI Act ve cok ulkeli tedarikci ile istihdam dokumanlari.",
        },
        {
          region: "Amerika",
          gap: "Orta segment hukuk ekipleri, buyuk hukuk burosu yazilim butcesi olmadan premium inceleme akisina ihtiyac duyuyor.",
          value: "Hizli donus, yonetim seviyesinde ozet ve fonlama paketleri.",
        },
        {
          region: "Hindistan",
          gap: "Startup ve buyume asamasindaki sirketler dusuk maliyetle olceklenebilir diligence ve fonlama hazirligi istiyor.",
          value: "Yuksek hacimli kurucu akislari, tekrar eden belgeler, hiz baskisi.",
        },
        {
          region: "Japonya ve Kore",
          gap: "Sinirlar arasi uretim ve ticaret operasyonlari iki dilli, yuksek guvenli belge yonetimi gerektiriyor.",
          value: "Yapisal inceleme, pazarlik hazirligi ve ihracata duyarli dokumantasyon.",
        },
      ],
      productTitle: "Olceklenebilir urun mimarisi",
      productBody:
        "Kamuya acik UI premium bir on kapi olarak kurgulandi. Ozel sistemler daha derin zekayi ileride bu mimariyi bozmadan tasiyabilir.",
      productPillars: [
        "Statik export destekli temiz route mimarisi",
        "Atomic UI primitive'leri ve tekrar kullanilan bolumler",
        "Public-safe talep toplama ve ozel endpoint aktarimi",
        "Cok dilli icerik modeli",
      ],
    },
    login: {
      kicker: "Guvenli Erisim",
      title: "Kurumsal guven hissi veren giris yuzeyi",
      body:
        "Bu acik giris ekrani premium erisim katmanidir. Gercek kimlik dogrulama ozel uygulamada kalir; public site ise uye deneyimi ve donusum yolunu gosterir.",
      emailLabel: "Is e-postasi",
      roleLabel: "Ana kullanim alani",
      rolePlaceholder: "Kurucu ekip, hukuk operasyonu, hukuk burosu, yatirimci iliskileri",
      cta: "Panel on izlemeye devam et",
      helper: "Public kod tabaninda kisisel e-posta acik edilmez.",
    },
    demo: {
      kicker: "Ozel Demo",
      title: "Yonlendirmeli urun gosterimi talep et",
      body:
        "Satis, pilot kullanim ve yatirimci demolari icin nitelikli talepleri toplarken ozel operasyonlari ve iletisim kanallarini gizli tut.",
      cta: "Taslagi kaydet ve guvenli demo akisina git",
    },
    request: {
      kicker: "Ozel Talep",
      title: "Ihtiyacina ozel hukuk AI talebi olustur",
      body:
        "Pilot programlar, kurumsal kurulum, ulke acilimi veya ozel playbook gerektiren dikey kullanimlar icin bu akisi kullan.",
      cta: "Talebi kaydet ve guvenli akisa git",
    },
    intake: {
      nameLabel: "Ad soyad",
      emailLabel: "Is e-postasi",
      companyLabel: "Sirket veya buro",
      jurisdictionLabel: "Hedef ulke veya yetki alani",
      needLabel: "Dubbin hangi sorunu cozsun?",
      privacyHint:
        "Bu acik site taslagi once tarayicida saklar. Hassas isleme her zaman ozel sistemde kalmali.",
      endpointHint:
        "Guvenli dis talep portali yeni sekmede acilir. Boylece hedef gizli kalir ve kisisel e-posta sayfa kaynaginda gorunmez.",
      localDraftHint:
        "Henuz guvenli bir endpoint tanimli degil. Ozel bir form servisi baglayana kadar talep taslagi lokal olarak saklanir.",
      successWithEndpoint:
        "Taslak lokal olarak kaydedildi. Guvenli talep portali yeni sekmede acildi.",
      successLocalOnly:
        "Taslak lokal olarak kaydedildi. Yayinlamadan once guvenli bir dis form URL'i bagla.",
    },
    dashboard: {
      kicker: "Uye Calisma Alani",
      title: "Premium yetenegi satan bir panel",
      body:
        "Bu on izleme; genel admin panellerinden daha sakin, daha yogun ve daha yonetici seviyesi his vermek icin tasarlandi. Dubbin'i basit bir sohbet araci degil, gercek bir isletim sistemi gibi konumlar.",
      metrics: [
        {
          label: "Cok bolgeli calisma alanlari",
          value: "24",
          helper: "AB, ABD, Korfez ve APAC uzerinde paralel isler",
        },
        {
          label: "Kanita bagli ciktilar",
          value: "96%",
          helper: "yonetim seviyesinde ozet, madde mantigi ve kaynak zinciri",
        },
        {
          label: "Taslak hizlanmasi",
          value: "3.4x",
          helper: "sozlesme, memo, fonlama ve arastirma ciktilari",
        },
      ],
      modules: [
        {
          title: "Akademik taslak modu",
          body:
            "Yapisal referans ve acik akil yurutme katmanlari ile hukuk memolari, politika notlari ve kaynak yogun ic yazilar hazirla.",
          status: "Arastirma seviyesi",
        },
        {
          title: "Emsal ve dava havuzu",
          body:
            "Ozel sistemlerde zengin emsal toplama, tekrar kullanilan playbook'lar ve ulke bazli kanit kumelemesi icin guclu zemin kur.",
          status: "Emsal hazir",
        },
        {
          title: "Global ulke paketleri",
          body:
            "Avrupa, Amerika, Avustralya, Cin, Hindistan, Japonya ve Kore icin dil ve workflow katmanlariyla acilim planla.",
          status: "Acilim haritasi",
        },
      ],
      workstreamsTitle: "Ana akışlar",
      workstreams: [
        "Sozlesme inceleme ve redline",
        "Fonlama hazirligi ve aciklama kontrolu",
        "Sinirlar arasi politika ve uyum notlari",
        "Emsal kumeleme ve hukuk arastirma hafizasi",
      ],
      countriesTitle: "Oncelikli ulkeler",
      countries: [
        "Avrupa Birligi",
        "Amerika Birlesik Devletleri",
        "Avustralya",
        "Hindistan",
        "Japonya",
        "Kore",
      ],
    },
  },
};

export function getLocaleCopy(locale: Locale) {
  return copy[locale];
}
