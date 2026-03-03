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
      { href: "#capabilities", label: "Product" },
      { href: "#markets", label: "Markets" },
      { href: "#product", label: "Access" },
    ],
    landing: {
      kicker: "Premium Legal Intelligence",
      title: "A legal AI operating system built for",
      accent: "cross-border execution",
      body:
        "Quiet, fast, and built for high-trust legal work across jurisdictions.",
      primaryCta: "Open Dashboard Preview",
      secondaryCta: "Enter Secure Login",
      trustNote:
        "Public surface only. AI, data, and security controls stay private.",
      metrics: [
        {
          label: "Review throughput",
          value: "4.2 min",
          helper: "source-linked review",
        },
        {
          label: "Jurisdiction readiness",
          value: "12 packs",
          helper: "global rollout",
        },
        {
          label: "Access paths",
          value: "3 paths",
          helper: "login, demo, intake",
        },
      ],
      capabilitiesTitle: "Product surface",
      capabilitiesBody:
        "Built to feel controlled, premium, and credible at first glance.",
      capabilities: [
        {
          title: "Review",
          body:
            "Clause-level findings with source-linked next actions.",
        },
        {
          title: "Draft",
          body:
            "Clean drafting for memos, notes, and board-facing output.",
        },
        {
          title: "Raise",
          body:
            "A tighter surface for fundraising and disclosure prep.",
        },
      ],
      marketTitle: "Market focus",
      marketBody:
        "Launch where regulation is dense, trust matters, and mid-market teams are underserved.",
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
      productTitle: "Private command layer",
      productBody: "A premium front door with room for deeper private systems.",
      productPillars: [
        "Review",
        "Draft",
        "Raise",
        "Research",
      ],
    },
    login: {
      kicker: "Secure Access",
      title: "Member login with a premium front door",
      body:
        "A quiet access surface for clients, counsel, and pilot users.",
      emailLabel: "Work email",
      roleLabel: "Primary use case",
      rolePlaceholder: "Founding team, legal operations, law firm, investor relations",
      cta: "Continue to dashboard preview",
      helper: "No personal email is exposed in the public codebase.",
    },
    demo: {
      kicker: "Private Demo",
      title: "Request a private walkthrough",
      body:
        "A short path into a serious product demo.",
      cta: "Save draft and open secure demo intake",
    },
    request: {
      kicker: "Custom Intake",
      title: "Create a tailored request",
      body:
        "Use this for pilots, enterprise onboarding, or custom workflows.",
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
      title: "A dashboard that feels expensive",
      body:
        "Less noise. More signal. Built to look like a serious operating layer.",
      metrics: [
        {
          label: "Multi-region workspaces",
          value: "24",
          helper: "parallel matters",
        },
        {
          label: "Evidence-linked outputs",
          value: "96%",
          helper: "decision-ready outputs",
        },
        {
          label: "Draft acceleration",
          value: "3.4x",
          helper: "faster legal production",
        },
      ],
      modules: [
        {
          title: "Academic drafting mode",
          body:
            "Research-grade output with clean reasoning layers.",
          status: "Research-grade",
        },
        {
          title: "Precedent and case pool",
          body:
            "Structured precedent memory for repeatable work.",
          status: "Precedent-ready",
        },
        {
          title: "Global jurisdiction packs",
          body:
            "Localized packs for expansion by market.",
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
      { href: "#capabilities", label: "Urun" },
      { href: "#markets", label: "Pazar" },
      { href: "#product", label: "Erisim" },
    ],
    landing: {
      kicker: "Premium Hukuk Zekasi",
      title: "Sinirlar arasi operasyon icin kurulan",
      accent: "hukuk AI isletim sistemi",
      body:
        "Sakin, hizli ve yuksek guven gerektiren hukuk isleri icin kuruldu.",
      primaryCta: "Panel On Izlemesini Ac",
      secondaryCta: "Guvenli Giris Ekranina Git",
      trustNote:
        "Bu sadece public yuzey. AI, veri ve guvenlik ozel repoda kalir.",
      metrics: [
        {
          label: "Inceleme hizi",
          value: "4.2 dk",
          helper: "kaynak bagli inceleme",
        },
        {
          label: "Yetki alani hazirligi",
          value: "12 paket",
          helper: "global acilim",
        },
        {
          label: "Erisim yolu",
          value: "3 akis",
          helper: "giris, demo, intake",
        },
      ],
      capabilitiesTitle: "Urun yuzeyi",
      capabilitiesBody:
        "Ilk bakista kontrollu, premium ve guvenilir hissettirmek icin kuruldu.",
      capabilities: [
        {
          title: "Review",
          body:
            "Madde bazli bulgu ve kaynak bagli aksiyonlar.",
        },
        {
          title: "Draft",
          body:
            "Memo, not ve yonetim seviyesi ciktilar icin temiz taslaklar.",
        },
        {
          title: "Raise",
          body:
            "Fonlama ve aciklama hazirligi icin daha temiz bir yuzey.",
        },
      ],
      marketTitle: "Pazar odagi",
      marketBody:
        "Regulasyonun yogun, guvenin kritik ve orta segmentin bos oldugu pazarlar hedefte.",
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
      productTitle: "Ozel komut katmani",
      productBody: "Premium bir on kapi. Derin sistemler arkada kalabilir.",
      productPillars: [
        "Review",
        "Draft",
        "Raise",
        "Research",
      ],
    },
    login: {
      kicker: "Guvenli Erisim",
      title: "Premium bir on kapi hissi veren giris",
      body:
        "Musteri, avukat ve pilot kullanicilar icin sakin bir erisim yuzeyi.",
      emailLabel: "Is e-postasi",
      roleLabel: "Ana kullanim alani",
      rolePlaceholder: "Kurucu ekip, hukuk operasyonu, hukuk burosu, yatirimci iliskileri",
      cta: "Panel on izlemeye devam et",
      helper: "Public kod tabaninda kisisel e-posta acik edilmez.",
    },
    demo: {
      kicker: "Ozel Demo",
      title: "Ozel urun gosterimi talep et",
      body:
        "Kisa ve profesyonel bir demo akisina gir.",
      cta: "Taslagi kaydet ve guvenli demo akisina git",
    },
    request: {
      kicker: "Ozel Talep",
      title: "Ihtiyacina ozel talep olustur",
      body:
        "Pilot, kurumsal kurulum veya ozel workflow icin kullan.",
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
      title: "Pahali hissettiren bir panel",
      body:
        "Daha az gurultu, daha fazla sinyal. Gercek bir operasyon katmani gibi gorunur.",
      metrics: [
        {
          label: "Cok bolgeli calisma alanlari",
          value: "24",
          helper: "paralel matter akisi",
        },
        {
          label: "Kanita bagli ciktilar",
          value: "96%",
          helper: "karar hazir ciktilar",
        },
        {
          label: "Taslak hizlanmasi",
          value: "3.4x",
          helper: "daha hizli hukuk uretimi",
        },
      ],
      modules: [
        {
          title: "Akademik taslak modu",
          body:
            "Arastirma duzeyi ciktilar ve temiz akil yurutme katmanlari.",
          status: "Arastirma seviyesi",
        },
        {
          title: "Emsal ve dava havuzu",
          body:
            "Tekrar eden isler icin duzenli emsal hafizasi.",
          status: "Emsal hazir",
        },
        {
          title: "Global ulke paketleri",
          body:
            "Pazar bazli lokal paketler ve dil katmanlari.",
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
