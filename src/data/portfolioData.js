export const portfolioData = {
  profile: {
    name: "Muhammed Mahmoud",
    nameAr: "محمد محمود",
    titleEn: "Senior Flutter Developer | Mobile & Desktop Engineer",
    titleAr: "Senior Flutter Developer | مهندس فلاتر وتطبيقات الموبايل والديسكتوب",
    roleEn: "Senior Flutter Developer engineering high-performance Mobile (iOS & Android) and Desktop (Windows & macOS) systems",
    roleAr: "مهندس برمجيات متخصص في بناء وتطوير تطبيقات الموبايل والديسكتوب باستخدام Flutter و Clean Architecture",
    currentCompanyEn: "EGYTEL (Current Full-Time)",
    currentCompanyAr: "شركة إيجي تل للاتصالات (عملي الحالي)",
    previousCompanyEn: "INMAA TECH",
    previousCompanyAr: "شركة إنماء تك",
    educationEn: "Zagazig University — Faculty of Computers & Information (Class of 2024, A+ Graduation Project)",
    educationAr: "كلية الحاسبات والمعلومات — جامعة الزقازيق (دفعة 2024، مشروع تخرج A+)",
    phone: "01018089212",
    phoneFormatted: "+20 101 808 9212",
    email: "mohamed.mahmoud.fb@gmail.com",
    whatsapp: "https://wa.me/201018089212",
    linkedin: "https://www.linkedin.com/in/coachiko",
    github: "https://github.com",
    image: "./muhammed-mahmoud.jpg",
    cvUrl: "./Muhammed-Mahmoud-CV.pdf",
    cvName: "Muhammed Mahmoud CV",
    bioEn: "I am a Senior Flutter Developer with hands-on production experience building, architecting, and deploying commercial mobile and desktop software. Currently working full-time at EGYTEL engineering real-time VoIP softphones and enterprise CRM suites published on the Microsoft Store and Google Play. Previously at INMAA TECH, I delivered high-impact applications across FinTech multi-currency banking, healthcare, and real-estate booking. I build software adhering strictly to Clean Architecture, SOLID principles, and advanced state management (BLoC, Cubit, GetX) with native background services, WebSockets, and audio hardware integrations.",
    bioAr: "أنا مهندس برمجيات وتطبيقات فلاتر (Senior Flutter Developer) متخصص في بناء وهندسة تطبيقات الموبايل (iOS و Android) والديسكتوب (Windows و macOS). أعمل حالياً بدوام كامل في شركة إيجي تل (EGYTEL) على تطوير منظومة اتصالات الـ VoIP وسوفت فون الكول سنتر وأنظمة الـ CRM المنشورة على متجري Microsoft Store و Google Play. قبلها عملت في شركة إنماء تك (INMAA TECH) على تطوير وإطلاق منصات تجارية كبرى في الرعاية الصحية، والمحافظ المالية الرقمية، والقطاع العقاري. وقبل انطلاقي في سوق العمل تخرجت من كلية الحاسبات والمعلومات بجامعة الزقازيق بمشروع تخرج ذكاء اصطناعي (Alzaware) لتشخيص الزهايمر بتقييم A+.",
    stats: [
      {
        value: "8+",
        labelEn: "Production Systems Delivered",
        labelAr: "أنظمة وتطبيقات إنتاجية مكتملة",
        icon: "Layers"
      },
      {
        value: "3",
        labelEn: "Official Store Deployments (Google Play & Microsoft Store)",
        labelAr: "تطبيقات حية على المتاجر الرسمية (Google Play و Microsoft Store)",
        icon: "ShieldCheck"
      }
    ]
  },

  skillsMatrix: [
    {
      categoryEn: "Architecture & Engineering",
      categoryAr: "المعمارية وهندسة البرمجيات",
      icon: "Cpu",
      items: [
        { name: "Clean Architecture (Domain, Data, Presentation)", level: "Mastery" },
        { name: "Repository Pattern & Dependency Inversion", level: "Expert" },
        { name: "Modularization & Scalable Folder Design", level: "Expert" },
        { name: "MVC Architecture (.NET & Web Panels)", level: "Advanced" },
        { name: "Testable & Maintainable Codebases", level: "Mastery" }
      ]
    },
    {
      categoryEn: "State Management & Routing",
      categoryAr: "إدارة الحالة والتنقل",
      icon: "GitBranch",
      items: [
        { name: "GetX (Reactive State, Bindings, Dependency Injection)", level: "Mastery" },
        { name: "BLoC / Cubit State Pattern", level: "Advanced" },
        { name: "Dynamic Named Routing & Deep Linking", level: "Expert" },
        { name: "Async Stream Controllers & Observables", level: "Mastery" }
      ]
    },
    {
      categoryEn: "Cross-Platform & Desktop Mastery",
      categoryAr: "تطوير الديسكتوب والموبايل",
      icon: "Monitor",
      items: [
        { name: "Flutter Desktop (Windows, macOS, Linux)", level: "Production" },
        { name: "Flutter Mobile (Android & iOS)", level: "Production" },
        { name: "OS Windowing & Always-on-Top Management", level: "Expert" },
        { name: "Audio Device Hardware Selection & System Tray", level: "Advanced" },
        { name: "Microsoft Store Packaging (MSIX) & Google Play Publishing", level: "Published" }
      ]
    },
    {
      categoryEn: "Real-Time Telephony & Media",
      categoryAr: "الاتصالات والـ VoIP والميديا",
      icon: "PhoneCall",
      items: [
        { name: "SIP / VoIP Softphone Protocols & WebRTC", level: "Advanced" },
        { name: "In-App Call Recording Playback, Audio Export & Sharing", level: "Mastery" },
        { name: "Call Routing, Transfer & Auto-Answer/Copy Automations", level: "Mastery" },
        { name: "Live Video Streaming & Media Streaming", level: "Advanced" }
      ]
    },
    {
      categoryEn: "FinTech, Security & Core Tools",
      categoryAr: "التقنية المالية والأمان",
      icon: "ShieldAlert",
      items: [
        { name: "In-App Digital Wallet & Virtual Currency Ledgers", level: "Production" },
        { name: "PDF Statement & Invoice Generation & Export", level: "Mastery" },
        { name: "Secure OTP Phone Verification (International)", level: "Expert" },
        { name: "Live Currency Exchange Rate Engines", level: "Expert" },
        { name: "Receipt & Proof-of-Payment Verification Pipelines", level: "Production" }
      ]
    },
    {
      categoryEn: "AI, Maps & Cloud Backends",
      categoryAr: "الذكاء الاصطناعي والخرائط والباك إند",
      icon: "Brain",
      items: [
        { name: "Deep Learning Medical Image Classification (CNN / MRI)", level: "100% Honors" },
        { name: "AI Conversational Assistants & Chatbots", level: "Production" },
        { name: "Google Maps SDK, Geolocation & Radius Clustering", level: "Expert" },
        { name: "RESTful APIs with .NET MVC, PHP & MySQL", level: "Full-Stack" },
        { name: "Bilingual Internationalization (AR/EN RTL/LTR)", level: "Mastery" }
      ]
    }
  ],

  careerTimeline: [
    {
      periodEn: "Dec 2024 - Present",
      periodAr: "ديسمبر 2024 — مستمر حتى الآن",
      companyEn: "EGYTEL",
      companyAr: "شركة إيجي تل للاتصالات (Egytel)",
      roleEn: "Senior Flutter Developer (Full-Time)",
      roleAr: "Senior Flutter Developer (دوام كامل)",
      badgeEn: "Current Role",
      badgeAr: "عملي الحالي",
      status: "active",
      locationEn: "Cairo, Egypt",
      locationAr: "القاهرة، مصر",
      descriptionEn: "Architecting and maintaining enterprise VoIP softphone solutions and CRM desktop/mobile suites using Flutter. Implemented SIP calling with WebSockets, native audio device selection, and system tray management.",
      descriptionAr: "هندسة وتطوير منظومات الاتصالات المؤسسية والـ VoIP وأنظمة الـ CRM للموبايل والديسكتوب؛ مع دمج بروتوكولات SIP، وWebSockets، والتحكم المتقدم بأجهزة الصوت والنوافذ على الويندوز والماك.",
      projects: ["Hatif Desktop (Microsoft Store)", "Hatif Mobile (Google Play)"],
      highlightsEn: [
        "Architected Hatif Desktop with system tray minimize, always-on-top call popups, single-instance locks, and native Windows audio drivers.",
        "Engineered Hatif Mobile with SIP telephony, WebSocket event streams, background wake locks, and battery optimization.",
        "Integrated complete CRM with call logs, in-app recording playback, customer tickets, and live agent analytics."
      ],
      highlightsAr: [
        "بناء تطبيق الديسكتوب بخصائص System Tray و Always-on-Top مع هندسة مشغل صوت مدمج للويندوز وتجهيزه لمتجر مايكروسوفت (MSIX).",
        "تطوير تطبيق الأندرويد بمكالمات SIP وبروتوكولات WebSockets مع إدارة ذكية للبطارية وتنبيهات المكالمات في الخلفية.",
        "دمج نظام CRM متكامل لإدارة العملاء المحتملين وسجلات المكالمات والتسجيلات الصوتية ومؤشرات الأداء."
      ]
    },
    {
      periodEn: "Oct 2024 - Dec 2024",
      periodAr: "أكتوبر 2024 — ديسمبر 2024",
      companyEn: "INMAA TECH",
      companyAr: "شركة إنماء تك (Inmaa Tech)",
      roleEn: "Flutter Developer (Full-Time)",
      roleAr: "Flutter Developer (دوام كامل)",
      badgeEn: "Enterprise Solutions",
      badgeAr: "تطوير تطبيقات تجارية",
      status: "completed",
      locationEn: "Riyadh, KSA / Remote",
      locationAr: "الرياض، السعودية / عن بعد",
      descriptionEn: "Built and published commercial and consumer mobile applications across healthcare, FinTech digital banking, real estate, and digital media.",
      descriptionAr: "تصميم وبرمجة حزمة تطبيقات تجارية ومنصات خدمية كبرى للقطاع الصحي والتقنية المالية والقطاع العقاري والإعلامي.",
      projects: ["Arab Care (Google Play)", "Aqar Platform", "CHMD FinTech", "E7kky Platform"],
      highlightsEn: [
        "Shipped Arab Care to Google Play connecting patients with clinics, complete with in-app digital wallet transactions.",
        "Delivered CHMD multi-currency savings and inflation protection wallet with live exchange rates and PDF statements.",
        "Developed Aqar Super App with radius-based Google Maps geolocation, property listings, and event reservations.",
        "Engineered E7kky women's empowerment mobile platform featuring AI chatbot integration and event ticketing."
      ],
      highlightsAr: [
        "إطلاق تطبيق Arab Care على متجر Google Play مع محفظة رقمية مدمجة لحجز الأطباء والمستشفيات.",
        "برمجة تطبيق CHMD لحفظ العملات وحمايتها من التضخم مع محول أسعار لحظي وتصدير كشوف الحسابات كـ PDF.",
        "تطوير منصة عقار التفاعلية بالخرائط والبحث بالنطاق الجغرافي لحجز العقارات والخدمات.",
        "بناء تطبيق احكي لتمكين المرأة بمساعد ذكاء اصطناعي تفاعلي وحجز تذاكر المؤتمرات."
      ]
    },
    {
      periodEn: "Feb 2024",
      periodAr: "فبراير 2024",
      companyEn: "Independent Project",
      companyAr: "مشروع مستقل",
      roleEn: "Flutter & Backend Developer / System Analyst",
      roleAr: "مطور فلاتر وباك إند ومصمم تجربة المستخدم",
      badgeEn: "Independent App",
      badgeAr: "مشروع متكامل",
      status: "independent",
      locationEn: "Cairo, Egypt",
      locationAr: "القاهرة، مصر",
      descriptionEn: "Created the COACHIKO fitness & nutrition platform end-to-end, including Flutter mobile client, PHP/MySQL administration portal, and scientific calorie/macro calculation algorithms.",
      descriptionAr: "بناء منصة COACHIKO الرياضية والغذائية الشاملة من الصفر: تطبيق الموبايل بفلاتر، ولوحة تحكم ويب بـ PHP/MySQL، وخوارزميات حساب السعرات والماكروز والتدريب.",
      projects: ["COACHIKO Fitness & Nutrition"],
      highlightsEn: [
        "Implemented Clean Architecture with custom macronutrient engines and biometric progress tracking.",
        "Engineered visual body comparison tools and coach-to-client messaging with voice notes."
      ],
      highlightsAr: [
        "تطبيق معمارية Clean Architecture مع محرك غذائي لحساب الـ TDEE والماكروز ومتابعة قياسات الجسم.",
        "برمجة أداة المقارنة البصرية وتواصل مباشر بين المدرب والمتدرب بالملاحظات الصوتية."
      ]
    },
    {
      periodEn: "Jan 2024 (Graduation)",
      periodAr: "يناير 2024 (مشروع التخرج)",
      companyEn: "Faculty of Computers & Information, Zagazig University",
      companyAr: "كلية الحاسبات والمعلومات — جامعة الزقازيق",
      roleEn: "AI & Flutter Engineer (Graduation Project - A+)",
      roleAr: "مهندس فلاتر وذكاء اصطناعي (مشروع التخرج - تقدير A+)",
      badgeEn: "A+ Distinction",
      badgeAr: "تقدير A+ امتياز",
      status: "academic",
      locationEn: "Zagazig, Egypt",
      locationAr: "الزقازيق، مصر",
      descriptionEn: "Completed Alzaware prior to starting my professional software engineering career; built a clinical mobile diagnostic assistant that leverages Convolutional Neural Networks (CNN) to predict Alzheimer's disease from brain MRI scans.",
      descriptionAr: "مشروعي الأكاديمي المبتكر الذي نفذته قبل الانطلاق في مسيرتي الوظيفية؛ حيث وظفت تقنيات الذكاء الاصطناعي وشبكات التعلم العميق (CNN) لفحص صور الرنين المغناطيسي والتنبؤ بمرض الزهايمر ونال تقدير A+ مع مرتبة الشرف.",
      projects: ["Alzaware AI Detection"],
      highlightsEn: [
        "Trained and integrated a deep learning CNN model for brain MRI scan neuroimaging classification.",
        "Connected mobile client with ASP.NET MVC backend APIs with full bilingual theming and localization."
      ],
      highlightsAr: [
        "تدريب وربط نموذج تعلم عميق (CNN) لتشخيص صور الرنين المغناطيسي للدماغ.",
        "ربط التطبيق بباك إند مؤسسي مبني بـ ASP.NET MVC مع دعم كامل للغتين والوضع الليلي."
      ]
    }
  ],

  projects: [
    {
      id: "hatif-desktop",
      category: ["voip", "desktop"],
      folderName: "Hatif desktop",
      titleEn: "Egytel Hatif Desktop",
      titleAr: "إيجي تل هاتف - للديسكتوب",
      taglineEn: "Enterprise VoIP Softphone & Call Center CRM Suite",
      taglineAr: "منظومة الكول سنتر المتكاملة وسوفت فون لإدارة علاقات العملاء (CRM)",
      badgeEn: "Live on Microsoft Store",
      badgeAr: "منشور على Microsoft Store",
      clientEn: "EGYTEL (Current Role)",
      clientAr: "شركة إيجي تل (عملي الحالي)",
      liveLink: "https://apps.microsoft.com/detail/9n7rc1kr8kl5?hl=ar-SA&gl=EG",
      storePlatform: "Microsoft Store",
      overviewEn: "A full-scale enterprise desktop application built with Flutter Desktop for Windows, macOS, and Linux. Purpose-engineered for call center agents, customer service representatives, and outbound sales teams. Features an integrated SIP/VoIP softphone dialer, real-time performance analytics dashboards, comprehensive CRM lead & ticket management, and native productivity automations like Auto-Answer, Auto-Copy number upon accepting, compact floating mode, and hardware audio device selection.",
      overviewAr: "تطبيق ديسكتوب مؤسسي متكامل مبني بتقنية Flutter Desktop لأنظمة Windows و macOS و Linux، مخصص لموظفي الكول سنتر وفرق المبيعات والدعم الفني بشركة Egytelecoms ومنشور رسمياً على متجر مايكروسوفت. يجمع بين هاتف برمجي مدمج (SIP/VoIP Softphone)، ولوحات تحليلات بيانية حية للأداء، ونظام CRM لإدارة العملاء المحتملين وتذاكر الدعم، مع أدوات إنتاجية متقدمة كنسخ الرقم التلقائي للحافظة والرد التلقائي واختيار سماعات وميكروفونات النظام.",
      highlightPointsEn: [
        "Embedded softphone dialer with active call status, channels monitoring, and call transferring",
        "Auto-Copy caller's phone number directly to the operating system clipboard upon call acceptance",
        "Smart Auto-Answer engine with configurable delays for automatic queue distribution",
        "Inbound & Outbound live performance analytics with interactive service-level donut charts",
        "Integrated CRM managing Leads, Contacts, Tickets, and granular call logs",
        "Native OS window controls: Always On Top floating mode and ultra-compact dialer layout",
        "Published officially to the Microsoft Store with full MSIX packaging"
      ],
      highlightPointsAr: [
        "سوفت فون متكامل مع لوحة اتصال ذكية ومراقبة القنوات الحية وتحويل المكالمات",
        "خاصية النسخ التلقائي للرقم (Auto-Copy) للحافظة فور قبول المكالمة لتسريع فحص الأنظمة",
        "خاصية الرد التلقائي (Auto-Answer) مع تأخير زمني مخصص لتوزيع المكالمات الفوري",
        "لوحات بيانية تفاعلية لتحليلات المكالمات الواردة والصادرة ومستوى أداء موظفي الكول سنتر",
        "نظام CRM مدمج بالكامل لإدارة الـ Leads وجهات الاتصال وتذاكر الدعم وسجلات المكالمات",
        "تحكم مرن بالنوافذ: وضع Always on Top والوضع المصغر (Compact Mode) واختيار أجهزة الصوت",
        "منشور رسمياً على متجر Microsoft Store ومجهز بتقنيات حزم MSIX"
      ],
      techStack: [
        "Flutter Desktop",
        "Dart",
        "VoIP / SIP Engine",
        "WebSockets",
        "Live Data Visualization",
        "Window Manager",
        "OS Clipboard & Audio API",
        "Microsoft Store MSIX"
      ],
      thumbnail: "./projects/Hatif desktop/Screenshot 2026-09-29 141728.png",
      images: [
        "./projects/Hatif desktop/Screenshot 2026-09-29 141728.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141744.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141800.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141816.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141831.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141852.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141907.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141928.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141944.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 141958.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 142011.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 142023.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 142045.png",
        "./projects/Hatif desktop/Screenshot 2026-09-29 142103.png"
      ]
    },
    {
      id: "hatif-android",
      category: ["voip"],
      folderName: "Hatif android",
      titleEn: "Egytel Hatif Mobile",
      titleAr: "إيجي تل هاتف - تطبيق الأندرويد",
      taglineEn: "Enterprise Mobile Softphone & Call Center CRM",
      taglineAr: "تطبيق أندرويد متكامل لكول سنتر ومبيعات الهواتف وإدارة الـ CRM",
      badgeEn: "Live on Google Play",
      badgeAr: "منشور على Google Play",
      clientEn: "EGYTEL (Current Role)",
      clientAr: "شركة إيجي تل (عملي الحالي)",
      liveLink: "https://play.google.com/store/apps/details?id=com.egytelecoms.hatif&hl=ar",
      storePlatform: "Google Play",
      overviewEn: "The official mobile production app for Egytelecoms published on Google Play. Empowers call center agents and mobile sales executives to manage enterprise telephony on the go. Equipped with an in-app audio recording player enabling direct listening, downloading, and sharing of recorded customer calls, alongside real-time missed-call ring timelines, live agent presence monitors, and full CRM mobile management.",
      overviewAr: "التطبيق الرسمي المنشور على متجر Google Play لصالح شركة Egytelecoms. يُمكّن مسؤولي خدمة العملاء والمبيعات من إجراء واستقبال مكالمات الكول سنتر من الهاتف في أي مكان، مع مشغل صوتي متطور للاستماع لتسجيلات المكالمات السابقة وتنزيلها ومشاركتها، ومتابعة الجدول الزمني لرنين المكالمات الفائتة، ومراقبة حالة قنوات الوكلاء الحية.",
      highlightPointsEn: [
        "In-app call audio recording player with one-tap playback, local save, and social share",
        "Granular missed-call timeline displaying ring duration, agent extension, and abandonment reasons",
        "Mobile CRM module tracking leads status (New, Contact in future, Converted) and trusted contacts",
        "Real-time channels and agents overview (Available, On Call, Waiting, Inbound/Outbound counts)",
        "Quick dialer with instant contact and agent search"
      ],
      highlightPointsAr: [
        "مشغل صوتي مدمج لتسجيلات المكالمات مع إمكانية الاستماع الفوري والحفظ والمشاركة",
        "خط زمني تفصيلي للمكالمات الفائتة يوضح مدة الرنين وسبب الإلغاء وهوية الوكيل المستهدف",
        "إدارة متكاملة لعملاء الـ CRM المحتملين وجهات الاتصال مع تصنيف دقيق للحالات",
        "شاشة نظرة عامة حية تراقب الوكلاء المتاحين والمشغولين والقنوات المتصلة لحظياً",
        "لوحة اتصال سريعة تدعم البحث الفوري عن العملاء وموظفي الشركة"
      ],
      techStack: [
        "Flutter Mobile",
        "Dart",
        "VoIP & Telephony SIP",
        "Audio Recording Engine",
        "Mobile CRM",
        "Real-time Channels Stream",
        "Google Play Release"
      ],
      thumbnail: "./projects/Hatif android/1.jpg",
      images: [
        "./projects/Hatif android/1.jpg",
        "./projects/Hatif android/2.jpg",
        "./projects/Hatif android/3.jpg",
        "./projects/Hatif android/4.jpg",
        "./projects/Hatif android/5.jpg",
        "./projects/Hatif android/6.jpg",
        "./projects/Hatif android/7.jpg",
        "./projects/Hatif android/8.jpg"
      ]
    },
    {
      id: "chmd-app",
      category: ["fintech"],
      folderName: "CHMD app",
      titleEn: "CHMD Digital Banking & Exchange",
      titleAr: "تطبيق CHMD للصيرفة الرقمية والتحويلات",
      taglineEn: "Multi-Currency Savings & Inflation Protection Wallet (Inmaa Tech)",
      taglineAr: "منظومة مصرفية لحفظ العملات والحماية من التضخم والتحويلات اللحظية - إنماء تك",
      badgeEn: "FinTech Production Solution",
      badgeAr: "حل تقنية مالية إنتاجي",
      clientEn: "Inmaa Tech",
      clientAr: "شركة إنماء تك",
      overviewEn: "Developed during my tenure at Inmaa Tech, CHMD is a high-security multi-currency digital finance and money transfer platform designed to safeguard wealth against inflation. It enables users to hold balances in global currencies, execute instant transfers, track statements with dynamic PDF generation, view live locked exchange rates, and upload proof-of-payment receipts, backed by secure international SMS OTP verification.",
      overviewAr: "تم تطويره خلال عملي في شركة إنماء تك (Inmaa Tech)، وهو تطبيق مالي رقمي متقدم يساعد المستخدمين على حماية مدخراتهم من التضخم عبر حفظ وإدارة الأرصدة بعدة عملات عالمية، مع محول أسعار لحظي دقيق، وتصدير كشوف الحسابات كملفات PDF، ونظام إيداع مدعوم برفع إيصالات الدفع البنكي وتوثيق آمن عبر رموز OTP.",
      highlightPointsEn: [
        "Executive financial dashboard with balance privacy masking, daily debits/credits, and fast action triggers",
        "Complete transaction engine (Validated, In Progress, Canceled) with type filtering and PDF export",
        "Live international currency exchange board (USD, EUR, GBP, AED, MRU) with locked conversion rates",
        "Deposit (Credit Account) flow supporting instant receipt image attachment (Join receipt)",
        "Secure international OTP telephone authentication flow and profile data management"
      ],
      highlightPointsAr: [
        "لوحة معلومات مالية تفاعلية تعرض إجمالي الرصيد مع إمكانية الإخفاء والإيداع والسحب اليومي",
        "إدارة شاملة للمعاملات وفلاتر حسب الحالة وتصدير كشف حساب كامل بصيغة PDF",
        "لوحة أسعار صرف عملات عالمية لحظية مع تثبيت السعر أثناء تنفيذ عملية التحويل",
        "نظام إيداع رصيد فوري مع دعم رفع وإرفاق صور إيصالات السداد البنكي",
        "توثيق أمني دولي بالهاتف عبر رموز OTP لموريتانيا (+222) وإدارة متقدمة للحساب"
      ],
      techStack: [
        "Flutter",
        "Dart",
        "FinTech Security",
        "PDF Generation Engine",
        "Live Currency Exchange API",
        "OTP Phone Verification",
        "RESTful APIs"
      ],
      thumbnail: "./projects/CHMD app/photo_2026-09-29_15-06-53.jpg",
      images: [
        "./projects/CHMD app/photo_2026-09-29_15-06-53.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-06-55.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-06-56.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-10.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-13.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-14.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-15.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-18 (2).jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-18.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-19.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-20.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-21.jpg",
        "./projects/CHMD app/photo_2026-09-29_15-07-24.jpg"
      ]
    },
    {
      id: "coachiko-app",
      category: ["health-ai"],
      folderName: "COACHIKO app",
      titleEn: "COACHIKO Fitness & Nutrition",
      titleAr: "تطبيق COACHIKO للتدريب والتغذية الذكية",
      taglineEn: "Scientific Personal Coaching Platform Built on Clean Architecture",
      taglineAr: "منصة التدريب الرياضي والتغذية المحسوبة بنمط Clean Architecture",
      badgeEn: "Clean Architecture & Web Admin",
      badgeAr: "مبني بـ Clean Architecture ولوحة ويب",
      clientEn: "Independent Project (COACHIKO)",
      clientAr: "مشروع مستقل (كوتشيكو)",
      overviewEn: "A premier personal training and nutritional coaching ecosystem built with strict Clean Architecture principles (Domain, Data, Presentation layers). Rather than generic static routines, COACHIKO dynamically computes daily macronutrients (TDEE, Protein, Carbs, Fats) and custom workout splits based on client biometric data. Features side-by-side weekly photo transformation comparisons, coach-to-client voice and text messaging, workout performance tracking, and a comprehensive PHP/MySQL web admin dashboard for coach management.",
      overviewAr: "منظومة لياقة وتغذية شخصية ذكية قائمة على أسس علمية دقيقة وهندسة برمجية مبنية بنمط Clean Architecture لفصل طبقات البيانات والمنطق وواجهات العرض. يحسب التطبيق بدقة الاحتياج اليومي من السعرات والماكروز (TDEE، بروتين، كاربوهيدرات، دهون) حسب الوزن والهدف، ويحتوي على نظام مقارنة بصرية أسبوعية لصور قياسات الجسم، وتواصل مباشر صوتي وكتابي بين المدرب والمتدرب، مع لوحة تحكم ويب إدارية متكاملة بـ PHP و MySQL.",
      highlightPointsEn: [
        "Architected with Clean Architecture for peak maintainability, testability, and enterprise scalability",
        "Intelligent macronutrient engine computing exact TDEE, protein, carbs, and fat gram requirements",
        "Weekly visual transformation tool offering side-by-side photo and measurement comparisons",
        "Direct multimedia coach consultation supporting two-way voice notes and instant plan updates",
        "Full-featured web Admin Dashboard built in PHP & MySQL for subscriber lifecycle management",
        "Bilingual Arabic and English interface with modern dark aesthetic"
      ],
      highlightPointsAr: [
        "مبني بنمط المعمارية النظيفة Clean Architecture لضمان أعلى جودة واختبارية وقابلية للتوسع",
        "محرك غذائي ذكي يحسب بدقة جرامات البروتين والكارب والدهون وإجمالي السعرات (TDEE)",
        "أداة مقارنة بصرية أسبوعية لصور الجسم والمقاسات لرصد التطور الفعلي",
        "قناة تواصل تفاعلية بين الكوتش والعميل تدعم الملاحظات الصوتية والرسائل وتحديث الجداول فورياً",
        "لوحة تحكم إدارية كاملة (Web Admin Dashboard) مبنية بـ PHP و MySQL لإدارة المتدربين",
        "واجهة مستخدم عصرية بالوضع الليلي تدعم اللغتين العربية والإنجليزية"
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Clean Architecture",
        "PHP & MySQL Admin",
        "Nutritional TDEE Engine",
        "Voice Notes Messaging",
        "Visual Body Comparison",
        "Data Analytics"
      ],
      thumbnail: "./projects/COACHIKO app/photo_2026-09-29_15-09-01.jpg",
      images: [
        "./projects/COACHIKO app/photo_2026-09-29_15-09-01.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-12.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-28.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-35.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-03.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-04.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-05.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-06.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-07.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-08.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-09.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-10.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-11.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-13.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-14.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-15.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-18.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-20.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-21.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-22.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-26.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-29.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-32.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-36.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-37.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-38.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-39.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-09-43.jpg",
        "./projects/COACHIKO app/photo_2026-09-29_15-10-53.jpg"
      ]
    },
    {
      id: "alzheimer-app",
      category: ["health-ai"],
      folderName: "Alzhimar app",
      titleEn: "Alzaware - Clinical AI Diagnostics",
      titleAr: "تطبيق Alzaware للتشخيص الطبي بالذكاء الاصطناعي",
      taglineEn: "Deep Learning MRI Diagnostics Platform (Completed Before Industry Career)",
      taglineAr: "منظومة تشخيص صور الرنين المغناطيسي بالذكاء الاصطناعي (تم إنجازه قبل بدء العمل الوظيفي)",
      badgeEn: "Medical Deep Learning",
      badgeAr: "ذكاء اصطناعي طبي متقدم",
      clientEn: "Faculty of Computers & Information, Zagazig University (Graduation Project - A+)",
      clientAr: "كلية الحاسبات والمعلومات — جامعة الزقازيق (مشروع التخرج - تقدير A+)",
      overviewEn: "Completed as my university graduation project prior to starting my professional software engineering career, evaluated with an A+ distinction at the Faculty of Computers & Information, Zagazig University. It integrates a Deep Learning Convolutional Neural Network (CNN) model to analyze MRI brain scans, predicting the presence and stage of Alzheimer's Disease with clinical accuracy, linked to an ASP.NET MVC backend.",
      overviewAr: "مشروعي الأكاديمي المبتكر الذي طورته قبل انطلاقي في مسيرتي الوظيفية في كلية الحاسبات والمعلومات بجامعة الزقازيق وحصلت فيه على تقدير A+؛ حيث يوظف شبكات التعلم العميق (Deep Learning CNN) لفحص صور الرنين المغناطيسي (MRI) للدماغ والتنبؤ بمرض الزهايمر ومراحله بدقة سريرية عالية مع ربطه بباك إند مؤسسي بـ ASP.NET MVC.",
      highlightPointsEn: [
        "Clinical Deep Learning CNN system classifying MRI brain scans for early Alzheimer's detection",
        "Predictive stage classification aiding neurosurgeons and medical practitioners",
        "State management and reactive architecture implemented with GetX",
        "Enterprise .NET MVC backend providing secure medical data APIs",
        "Comprehensive dynamic theming (Dark & Light modes) and multi-language support (AR/EN)"
      ],
      highlightPointsAr: [
        "منظومة ذكاء اصطناعي عميقة (CNN) لتصنيف صور الرنين المغناطيسي والتنبؤ المبكر بمراحل المرض",
        "دعم اتخاذ القرار الطبي لأطباء المخ والأعصاب من خلال تحليلات بصرية دقيقة",
        "إدارة الحالة والتنقل بالاعتماد على GetX لسرعة الأداء وسلاسة التنقل",
        "ربط بباك إند مؤسسي مبني بـ ASP.NET MVC لحفظ البيانات والتقارير الطبية",
        "دعم كامل للوضعين الداكن والفاتح (Theming) والتعريب الكامل (Localization)"
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Deep Learning (CNN)",
        "GetX",
        ".NET MVC Backend",
        "MRI Medical Processing",
        "Dynamic Theming",
        "Bilingual Localization"
      ],
      thumbnail: "./projects/Alzhimar app/photo_2026-09-29_15-10-35.jpg",
      images: [
        "./projects/Alzhimar app/photo_2026-09-29_15-10-35.jpg",
        "./projects/Alzhimar app/photo_2026-09-29_15-10-37.jpg",
        "./projects/Alzhimar app/photo_2026-09-29_15-10-38.jpg",
        "./projects/Alzhimar app/photo_2026-09-29_15-10-40.jpg",
        "./projects/Alzhimar app/photo_2026-09-29_15-10-41.jpg",
        "./projects/Alzhimar app/photo_2026-09-29_15-10-42.jpg",
        "./projects/Alzhimar app/photo_2026-09-29_15-10-43.jpg"
      ]
    },
    {
      id: "aqar-app",
      category: ["superapp"],
      folderName: "Aqar app",
      titleEn: "Aqar Real Estate & Super Booking Platform",
      titleAr: "منصة عقار وحجوزات الخدمات المتكاملة",
      taglineEn: "Map-Driven Real Estate, Event Halls, Cars & Medical Services",
      taglineAr: "منصة خرائط تفاعلية لحجز العقارات وقاعات المناسبات وتأجير السيارات",
      badgeEn: "Enterprise Solution - Inmaa KSA",
      badgeAr: "مشروع تجاري لشركة إنماء السعودية",
      clientEn: "Inmaa Group (Saudi Arabia)",
      clientAr: "شركة إنماء (المملكة العربية السعودية)",
      overviewEn: "A massive multi-vertical commercial booking ecosystem developed for Saudi enterprise 'Inmaa'. Features an interactive Google Maps explorer displaying nearest properties, wedding and celebration halls (with fine details down to catering, food choices, and hospitality levels), luxury car rental fleets, and hospital consultations. Solves multi-category booking with sophisticated filtering and geo-spatial queries.",
      overviewAr: "تطبيق تجاري ضخم تم تطويره لصالح شركة «إنماء» في المملكة العربية السعودية، وهو منصة خدمات متكاملة وسوبر آب (Super App) لحجز وبيع وتأجير العقارات والمحلات التجارية، وقاعات الأفراح والمناسبات مع تفاصيل الضيافة وقوائم الطعام، وتأجير السيارات، وحجز المستشفيات، معتمدين على نظام خرائط جغرافية تفاعلي ذكي.",
      highlightPointsEn: [
        "Interactive Google Maps geolocation discovery for nearest properties, halls, and rental cars",
        "Deep multi-category booking engine covering residential, commercial, event halls, and healthcare",
        "Event hall reservation flow including catering types, food menus, and guest capacities",
        "Vehicle rental inventory with granular technical and pricing specifications",
        "Custom filter system handling location radius, price ranges, and multi-service attributes"
      ],
      highlightPointsAr: [
        "خريطة تفاعلية ذكية مدعومة بـ Google Maps لاستكشاف أقرب العقارات والخدمات المتاحة للمستخدم",
        "محرك حجز متطور يغطي العقارات السكنية والتجارية وقاعات الأفراح وتأجير السيارات",
        "نظام حجز قاعات دقيق يشمل خيارات الإعاشة وقوائم الأطعمة وسعة الضيوف",
        "قسم أسطول تأجير السيارات بكافة الفئات والمواصفات",
        "محرك بحث وفلاتر متقدمة بحسب النطاق الجغرافي والأسعار والتصنيفات"
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Google Maps SDK",
        "Geolocation Engine",
        "Complex Multi-Category Architecture",
        "State Management",
        "RESTful APIs"
      ],
      thumbnail: "./projects/Aqar app/photo_2026-09-29_15-08-03.jpg",
      images: [
        "./projects/Aqar app/photo_2026-09-29_15-08-03.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-05.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-07.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-08.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-09.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-10.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-11.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-12.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-13.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-14.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-15.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-16.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-17.jpg",
        "./projects/Aqar app/photo_2026-09-29_15-08-21.jpg"
      ]
    },
    {
      id: "arab-care",
      category: ["health-ai", "fintech"],
      folderName: "Arab care",
      titleEn: "Arab Care Health & FinTech",
      titleAr: "تطبيق عرب كير للرعاية الصحية والمحفظة الرقمية",
      taglineEn: "Telemedicine, Doctor Consultations & In-App Digital Wallet",
      badgeEn: "Live on Google Play",
      badgeAr: "منشور على Google Play",
      clientEn: "Inmaa Group (Saudi Arabia)",
      clientAr: "شركة إنماء (المملكة العربية السعودية)",
      liveLink: "https://play.google.com/store/apps/details?id=com.saberson.arabcare&hl=ar",
      storePlatform: "Google Play",
      overviewEn: "An official healthcare production app published on Google Play for Inmaa (Saudi Arabia). Enables patients to book specialist doctors and hospital visits with ease. Includes an internal virtual currency and digital wallet allowing patients to deposit, withdraw, and pay directly for medical services, complemented by real-time messaging between patients, clinics, and physicians.",
      overviewAr: "تطبيق رعاية صحية رسمي منشور على متجر Google Play لصالح شركة «إنماء» السعودية، متخصص في حجز المستشفيات والعيادات والأطباء الاستشاريين. يحتوي التطبيق على محفظة إلكترونية رقمية تدعم عملة داخلية لشحن الرصيد والدفع وسحب الأموال، إلى جانب قناة شات وتواصل مباشر بين المريض والطبيب المعالج أو إدارة المستشفى.",
      highlightPointsEn: [
        "End-to-end hospital and doctor appointment scheduling system",
        "Built-in FinTech digital wallet with in-app balance top-up, withdrawal, and service settlement",
        "Direct real-time communication channel between patients and treating physicians",
        "Patient medical history, test results, and digital consultation records",
        "Integrated payment gateways ensuring compliant financial transactions"
      ],
      highlightPointsAr: [
        "منظومة حجز مواعيد دقيقة للأطباء والمستشفيات بمختلف التخصصات الطبية",
        "محفظة مالية رقمية (Digital Wallet) تدعم العملة الداخلية للشحن والدفع وسحب الأرصدة",
        "تواصل ومراسلة فورية مباشرة بين المريض والطبيب المعالج أو المستشفى",
        "إدارة السجلات والتقارير الطبية ونتائج الفحوصات والوصفات",
        "بوابات دفع آمنة متوافقة مع معايير المعاملات المالية"
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Digital Wallet Ledger",
        "Doctor-Patient Chat Stream",
        "Appointment Engine",
        "State Management",
        "Secure Payments"
      ],
      thumbnail: "./projects/Arab care/photo_2026-09-29_15-04-38.jpg",
      images: [
        "./projects/Arab care/photo_2026-09-29_15-04-38.jpg",
        "./projects/Arab care/photo_2026-09-29_15-04-40 (2).jpg",
        "./projects/Arab care/photo_2026-09-29_15-04-40 (3).jpg",
        "./projects/Arab care/photo_2026-09-29_15-04-40.jpg",
        "./projects/Arab care/photo_2026-09-29_15-04-41.jpg",
        "./projects/Arab care/photo_2026-09-29_15-04-39.jpg"
      ]
    },
    {
      id: "e7kky-app",
      category: ["superapp"],
      folderName: "E7kky",
      titleEn: "E7kky Media & AI Assistant",
      titleAr: "منصة وتطبيق احكي لتمكين المرأة والمجتمع",
      taglineEn: "Women's Empowerment Platform, AI Assistant & Conference Ticketing",
      taglineAr: "المنصة الرسمية لتمكين المرأة مع مساعد ذكاء اصطناعي وحجز الفعاليات",
      badgeEn: "Official Media Platform",
      badgeAr: "التطبيق الرسمي لمنصة احكي",
      clientEn: "E7kky Platform (E7kky.com)",
      clientAr: "مؤسسة احكي الإعلامية (E7kky.com)",
      overviewEn: "The official mobile app for 'E7kky', the influential media brand empowering Arab women. Features ticket booking for high-profile annual conferences (such as 'E7kky to Empower'), an interactive digital lifestyle magazine, a conversational AI Assistant ('Ask E7kky'), in-app community messaging, live streamed panel discussions, and merchandise store.",
      overviewAr: "التطبيق الرسمي لمنصة «احكي» الرائدة في تمكين المرأة العربية ونشر الوعي الثقافي والاجتماعي. يتيح التطبيق متابعة وحجز المؤتمرات والفعاليات الكبرى (مثل مؤتمرات E7kky to Empower)، وقراءة مقالات ومجلة احكي التفاعلية، ويشمل مساعد ذكاء اصطناعي تفاعلي (Ask E7kky) وشات داخلي يربط عضوات المجتمع، بالإضافة لبث مباشر للجلسات ومتجر المنصة.",
      highlightPointsEn: [
        "Ask E7kky: Built-in conversational AI chatbot offering instant advice and intelligent interaction",
        "Conferences & workshops ticketing engine for major empowerment events",
        "Rich digital magazine with categorised journalism, blogs, and inspiring stories",
        "Live streaming integration for interactive conferences and panel discussions",
        "Social authentication (Google, Facebook, Email, Guest Mode) and community discussion channels"
      ],
      highlightPointsAr: [
        "مساعد ذكاء اصطناعي تفاعلي (Ask E7kky) لتقديم الإجابات والدعم التفاعلي الذكي",
        "محرك حجز تذاكر المؤتمرات وورش العمل لفعاليات التمكين الكبرى",
        "مجلة رقمية تفاعلية غنية بالأقسام الثقافية والأخبار والقصص الملهمة",
        "بثوث مباشرة (Live Stream) للندوات والجلسات الحوارية التفاعلية",
        "تسجيل دخول متعدد (Google, Facebook, Guest Mode) وشات داخلي للتواصل"
      ],
      techStack: [
        "Flutter",
        "Dart",
        "AI Chatbot Assistant",
        "Event Ticketing Engine",
        "Live Streaming",
        "Digital Magazine Feed",
        "Social Logins",
        "Bilingual Localization"
      ],
      thumbnail: "./projects/E7kky/photo_2026-09-29_15-12-20.jpg",
      images: [
        "./projects/E7kky/photo_2026-09-29_15-12-13.jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-14.jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-15 (2).jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-15.jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-16.jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-17 (2).jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-17.jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-18.jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-19.jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-20.jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-21 (2).jpg",
        "./projects/E7kky/photo_2026-09-29_15-12-21.jpg"
      ]
    }
  ]
};
