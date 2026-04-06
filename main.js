/* ═══════════════════════════════════════
   ALFASIS DEFENSE — main.js
═══════════════════════════════════════ */

// ── TRANSLATIONS ──────────────────────
const T = {
  en: {
    "nav.about": "About",
    "nav.products": "Products",
    "nav.news": "News",
    "nav.contact": "Contact",
    "hero.line1": "ADVANCED",
    "hero.line2": "DEFENSE",
    "hero.line3": "SYSTEMS",
    "hero.sub": "Electronic warfare · Tactical drones · Airborne EW platforms",
    "hero.cta1": "Explore Systems",
    "hero.cta2": "Request Consultation",
    "stats.jammers": "Jammer Systems",
    "stats.drones": "Drone Platforms",
    "stats.domains": "Capability Domains",
    "stats.ops": "Operational",
    "about.tag": "WHO WE ARE",
    "about.title": "Mission-driven defense engineering",
    "about.p1": "Alfasis Savunma Mühendislik A.Ş. is a Turkish defense technology company established in 2021, headquartered in Ankara. We develop and deliver advanced electronic warfare systems, tactical UAV platforms, and airborne EW solutions to defense and security organizations worldwide.",
    "about.p2": "Our portfolio addresses three operational domains: RF suppression and electronic warfare, tactical and strategic drone systems, and the ALFAUAV airborne platform. Every system is engineered for real mission requirements.",
    "badge.est": "Est.",
    "domain.ew": "Electronic Warfare",
    "domain.ew.desc": "Counter-UAV jammers, directional EW systems, and RF shielding for fixed, mobile, naval, and armored deployments.",
    "domain.uav": "Drone Systems",
    "domain.uav.desc": "Tactical, cargo, FPV strike, and long-range kamikaze UAVs for defense and security operations.",
    "domain.alfauav.desc": "VTOL airborne ISR and electronic warfare platform for extended-range tactical missions.",
    "products.tag": "SYSTEMS PORTFOLIO",
    "products.title": "All systems.",
    "products.sub": "Browse the full portfolio across electronic warfare, drone systems, and airborne EW platforms.",
    "cat.jammers": "Electronic Warfare",
    "cat.drones": "Drone Systems",
    "badge.ew": "Electronic Warfare",
    "p.alfa850v.desc": "Fixed-site 360° counter-UAV protection with 24/7 continuous jamming capability.",
    "p.alfa850v.spec1": "24/7 Continuous Operation",
    "p.alfa850v.spec2": "360° Omnidirectional Coverage",
    "p.alfa850v.spec3": "All UAV Frequency Bands",
    "p.alfa850vmob.desc": "Vehicle-mounted counter-UAV protection for mobile operations, convoys, and tactical deployments.",
    "p.alfa850vmob.spec1": "Vehicle Roof-Mount Integration",
    "p.alfa850vmob.spec2": "360° Mobile Coverage",
    "p.alfa850vmob.spec3": "Operates at Full Speed",
    "p.alfatank.desc": "Tank-integrated counter-UAV protection engineered for armored platforms and frontline operations.",
    "p.alfatank.spec1": "Armored Platform Integration",
    "p.alfatank.spec2": "DC 24V Vehicle Power",
    "p.alfatank.spec3": "Compact 60×60×60 cm",
    "p.alfanaval.desc": "Vessel-integrated counter-UAV protection for naval ships, patrol boats, and maritime platforms.",
    "p.alfanaval.spec1": "Marine-Grade Integration",
    "p.alfanaval.spec2": "220V AC / 24V DC Power",
    "p.alfanaval.spec3": "Salt & Weather Resistant",
    "p.vega.desc": "Long-range directional suppression for counter-UAV and high-value site protection.",
    "p.vega.spec1": "Directional RF Suppression",
    "p.vega.spec2": "Long-Range Reach",
    "p.vega.spec3": "Multi-Band Coverage",
    "p.ied.desc": "Receiver-blind technology — neutralize remote-controlled IED triggers across all known threat frequencies.",
    "p.ied.spec1": "Receiver-Blind Technology",
    "p.ied.spec2": "GSM · RF · LoRa · GNSS",
    "p.ied.spec3": "Full IED Frequency Coverage",
    "p.securadio.desc": "Hertz-precision RF shielding for critical institutions — block unauthorized radio communication without disrupting legitimate signals.",
    "p.securadio.spec1": "1 Hz Frequency Precision",
    "p.securadio.spec2": "Minimum Bandwidth Blocking",
    "p.securadio.spec3": "Critical Infrastructure",
    "badge.strike": "Strike UAV",
    "badge.strategic": "Strategic UAV",
    "badge.fpv": "FPV Strike",
    "badge.recon": "Reconnaissance",
    "badge.cargo": "Cargo UAV",
    "p.k100.desc": "Long-range precision strike — 100 km operational range, 2 kg payload, 2-hour flight endurance.",
    "p.k100.spec1": "100 km Strike Range",
    "p.k100.spec2": "2 kg Payload",
    "p.k100.spec3": "2-Hour Endurance",
    "p.k400.desc": "Extended range strategic strike — 400 km range, 5 kg payload, 4-hour loitering endurance.",
    "p.k400.spec1": "400 km Strike Range",
    "p.k400.spec2": "5 kg Payload",
    "p.k400.spec3": "4-Hour Endurance",
    "p.k750.desc": "Long-range strike asset — 750 km range, 15 kg heavy warhead, 7-hour operational endurance.",
    "p.k750.spec1": "750 km Operational Range",
    "p.k750.spec2": "15 kg Heavy Warhead",
    "p.k750.spec3": "7-Hour Endurance",
    "p.km1000.desc": "Strategic long-range stealth strike — 1,000 km range, low radar cross-section airframe, 15 kg payload.",
    "p.km1000.spec1": "1,000 km Strategic Range",
    "p.km1000.spec2": "Low Radar Cross-Section",
    "p.km1000.spec3": "9-Hour Endurance",
    "p.d1000.desc": "High-speed FPV kamikaze — 1–7 kg payload, 150–200+ km/h speed, up to 20 km range.",
    "p.d1000.spec1": "7 kg Strike Payload",
    "p.d1000.spec2": "200+ km/h Speed",
    "p.d1000.spec3": "20 km Range",
    "p.d1050.desc": "Jam-proof fiber optic FPV kamikaze — operates in GPS-denied and electronic warfare environments. 25 km range.",
    "p.d1050.spec1": "Fiber Optic Cable Link",
    "p.d1050.spec2": "GPS-Denied Operation",
    "p.d1050.spec3": "25 km Range",
    "p.wf1.desc": "Precision strike at 400+ km/h — AI guidance module, 1 kg payload, autonomous target tracking.",
    "p.wf1.spec1": "400+ km/h Top Speed",
    "p.wf1.spec2": "AI Guidance Module",
    "p.wf1.spec3": "50 Hz Autonomous Tracking",
    "p.safir.desc": "High-speed FPV platform — 150–200+ km/h, long range, day and night operations.",
    "p.safir.spec1": "150–200+ km/h Speed",
    "p.safir.spec2": "FPV Goggle Control",
    "p.safir.spec3": "Day & Night Ops",
    "p.talon.desc": "Long-range fixed-wing mini UAV — hand-launched, 50–100 min endurance, low radar cross-section.",
    "p.talon.spec1": "No Runway Required",
    "p.talon.spec2": "Low Radar Cross-Section",
    "p.talon.spec3": "50–100 min Endurance",
    "p.m1000.desc": "Extended endurance surveillance multicopter — 1-hour flight, 30× optical zoom gimbal, 15 km range.",
    "p.m1000.spec1": "1-Hour Endurance",
    "p.m1000.spec2": "30× Optical Zoom",
    "p.m1000.spec3": "15 km Range",
    "p.v2346.desc": "Multi-wingspan VTOL — 2m to 6m variants, 2–8 hour endurance, optional Anti-GNSS card.",
    "p.v2346.spec1": "4 Wingspan Variants (2–6 m)",
    "p.v2346.spec2": "VTOL — No Runway",
    "p.v2346.spec3": "2–8 Hour Endurance",
    "p.alga.desc": "Precision strike and reconnaissance — dual-locking ammunition release, military-grade flight control.",
    "p.alga.spec1": "Dual-Locking Release",
    "p.alga.spec2": "Military Flight Control",
    "p.alga.spec3": "GPS Waypoint Navigation",
    "p.p5.desc": "Tactical payload multicopter — 5 kg capacity, 45 min endurance, 30× gimbal, optional thermal camera.",
    "p.p5.spec1": "5 kg Tactical Payload",
    "p.p5.spec2": "45-Minute Endurance",
    "p.p5.spec3": "Precision Drop Mechanism",
    "p.p10.desc": "Heavy tactical payload platform — 10 kg capacity, 40 min endurance, GPS-coordinated drop system.",
    "p.p10.spec1": "10 kg Heavy Payload",
    "p.p10.spec2": "40-Minute Endurance",
    "p.p10.spec3": "Precision Drop System",
    "p.mp50.desc": "Maximum capacity heavy lift — 50 kg payload, 30 min endurance, 10 km operational range.",
    "p.mp50.spec1": "50 kg Maximum Payload",
    "p.mp50.spec2": "30-Minute Endurance",
    "p.mp50.spec3": "10 km Range",
    "p.p100.desc": "Ultra heavy lift UAV — 100 kg payload, 25 min endurance, 7 km range.",
    "p.p100.spec1": "100 kg Payload",
    "p.p100.spec2": "25-Minute Endurance",
    "p.p100.spec3": "GPS Precision Drop",
    "p.yukbey.desc": "Heavy lift logistics platform — 30 kg capacity, dual battery system, 30 km range.",
    "p.yukbey.spec1": "30 kg Payload",
    "p.yukbey.spec2": "Dual Battery Failover",
    "p.yukbey.spec3": "30 km Range",
    "p.atalay.desc": "Urban response heavy-duty drone — 50 kg payload, modular system for firefighting, inspection, and logistics.",
    "p.atalay.spec1": "50 kg Payload Capacity",
    "p.atalay.spec2": "Modular Payload System",
    "p.atalay.spec3": "Multi-Mission Config",
    "cs.drones": "Drone Systems — Coming Soon",
    "cs.drones.desc": "Tactical, cargo, FPV strike, and long-range kamikaze UAV platforms. Full portfolio launching shortly.",
    "cs.alfauav.desc": "VTOL airborne ISR and electronic warfare platform for extended-range tactical missions.",
    "cs.cta": "Request Information",
    "news.tag": "INSIGHTS",
    "news.title": "Defense Technology Articles",
    "news.cat.ew": "Electronic Warfare",
    "news.cat.drone": "Drone Systems",
    "news.cat.detect": "Detection Systems",
    "news.1.title": "How Counter-UAV Jammer Systems Work",
    "news.1.desc": "A technical overview of RF suppression principles, frequency bands, and deployment strategies used in modern counter-UAV electronic warfare systems.",
    "news.2.title": "Fixed-Wing vs Multicopter: Defense Applications Compared",
    "news.2.desc": "Understanding the operational trade-offs between fixed-wing and multicopter UAV platforms for reconnaissance, strike, and logistics missions.",
    "news.3.title": "UAV Detection: Radar, RF Analysis, and Optical Systems",
    "news.3.desc": "A comparative analysis of the three primary counter-UAV detection technologies and how they complement each other in integrated C-UAS architectures.",
    "contact.tag": "GET IN TOUCH",
    "contact.title": "Tell us what you are evaluating.",
    "contact.desc": "Share your product interest, mission profile, or deployment context and we will respond promptly.",
    "contact.whatsapp": "Chat on WhatsApp",
    "form.name": "Full Name",
    "form.org": "Organization",
    "form.email": "Email Address",
    "form.interest": "Area of Interest",
    "form.select": "Select interest area",
    "form.ew": "Electronic Warfare Systems",
    "form.drones": "Drone Systems",
    "form.general": "General Consultation",
    "form.message": "Message",
    "form.submit": "Request Consultation",
    "footer.desc": "Advanced defense and security technologies — electronic warfare, drone systems, and airborne EW platforms.",
    "footer.nav": "Navigation",
    "footer.capabilities": "Capabilities",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
  },

  ar: {
    "nav.about": "من نحن",
    "nav.products": "المنتجات",
    "nav.news": "الأخبار",
    "nav.contact": "اتصل بنا",
    "hero.line1": "أنظمة",
    "hero.line2": "دفاعية",
    "hero.line3": "متطورة",
    "hero.sub": "الحرب الإلكترونية · الطائرات التكتيكية · منصات الحرب الإلكترونية الجوية",
    "hero.cta1": "استكشف الأنظمة",
    "hero.cta2": "طلب استشارة",
    "stats.jammers": "أنظمة التشويش",
    "stats.drones": "منصات الطائرات",
    "stats.domains": "مجالات القدرة",
    "stats.ops": "تشغيلي",
    "about.tag": "من نحن",
    "about.title": "هندسة دفاعية موجهة بالمهمة",
    "about.p1": "شركة ألفاسيس للدفاع والهندسة هي شركة تركية لتكنولوجيا الدفاع تأسست عام 2021، ومقرها أنقرة. نطور ونقدم أنظمة حرب إلكترونية متقدمة ومنصات طائرات UAV التكتيكية وحلول الحرب الإلكترونية الجوية لمنظمات الدفاع والأمن حول العالم.",
    "about.p2": "تغطي محفظتنا ثلاثة مجالات تشغيلية: كبت التردد الراديوي والحرب الإلكترونية، وأنظمة الطائرات التكتيكية والاستراتيجية، ومنصة ALFAUAV الجوية. كل نظام مهندس لمتطلبات المهمة الحقيقية.",
    "badge.est": "تأسست",
    "domain.ew": "الحرب الإلكترونية",
    "domain.ew.desc": "أجهزة تشويش لمكافحة الطائرات، وأنظمة الحرب الإلكترونية الاتجاهية، ودروع الترددات الراديوية للنشر الثابت والمتحرك والبحري والمدرع.",
    "domain.uav": "أنظمة الطائرات",
    "domain.uav.desc": "طائرات تكتيكية وشحن وضرب FPV وكاميكازي بعيدة المدى لعمليات الدفاع والأمن.",
    "domain.alfauav.desc": "منصة VTOL الجوية للاستطلاع والحرب الإلكترونية لمهام تكتيكية بعيدة المدى.",
    "products.tag": "محفظة الأنظمة",
    "products.title": "جميع الأنظمة.",
    "products.sub": "تصفح المحفظة الكاملة عبر الحرب الإلكترونية وأنظمة الطائرات ومنصات الحرب الإلكترونية الجوية.",
    "cat.jammers": "الحرب الإلكترونية",
    "cat.drones": "أنظمة الطائرات",
    "badge.ew": "الحرب الإلكترونية",
    "p.alfa850v.desc": "حماية 360° ثابتة ضد الطائرات مع قدرة تشويش مستمرة على مدار الساعة.",
    "p.alfa850v.spec1": "تشغيل مستمر 24/7",
    "p.alfa850v.spec2": "تغطية كروية 360°",
    "p.alfa850v.spec3": "جميع ترددات الطائرات",
    "p.alfa850vmob.desc": "حماية مركبة ضد الطائرات للعمليات المتحركة والقوافل والنشر التكتيكي.",
    "p.alfa850vmob.spec1": "تركيب على سقف المركبة",
    "p.alfa850vmob.spec2": "تغطية متحركة 360°",
    "p.alfa850vmob.spec3": "يعمل بالسرعة الكاملة",
    "p.alfatank.desc": "حماية دبابات ضد الطائرات مهندسة للمنصات المدرعة وعمليات الخطوط الأمامية.",
    "p.alfatank.spec1": "تكامل المنصة المدرعة",
    "p.alfatank.spec2": "طاقة المركبة 24 فولت تيار مستمر",
    "p.alfatank.spec3": "مدمج 60×60×60 سم",
    "p.alfanaval.desc": "حماية بحرية ضد الطائرات للسفن الحربية والقوارب الدورية والمنصات البحرية.",
    "p.alfanaval.spec1": "تكامل بحري متين",
    "p.alfanaval.spec2": "طاقة 220 فولت أو 24 فولت",
    "p.alfanaval.spec3": "مقاوم للملح والطقس",
    "p.vega.desc": "كبت اتجاهي بعيد المدى لحماية المواقع ذات القيمة العالية ومكافحة الطائرات.",
    "p.vega.spec1": "كبت RF اتجاهي",
    "p.vega.spec2": "مدى تشغيلي طويل",
    "p.vega.spec3": "تغطية متعددة النطاقات",
    "p.ied.desc": "تقنية عمى المستقبل — تحييد محفزات IED عن بعد عبر جميع ترددات التهديد.",
    "p.ied.spec1": "تقنية عمى المستقبل",
    "p.ied.spec2": "GSM · RF · LoRa · GNSS",
    "p.ied.spec3": "تغطية كاملة لترددات IED",
    "p.securadio.desc": "درع ترددات راديوية بدقة هرتز للمؤسسات الحيوية — حجب الاتصالات غير المصرح بها دون تعطيل الإشارات المشروعة.",
    "p.securadio.spec1": "دقة 1 هرتز",
    "p.securadio.spec2": "حجب الحد الأدنى من النطاق",
    "p.securadio.spec3": "البنية التحتية الحيوية",
    "badge.strike": "طائرة ضاربة",
    "badge.strategic": "طائرة استراتيجية",
    "badge.fpv": "ضربة FPV",
    "badge.recon": "استطلاع",
    "badge.cargo": "طائرة شحن",
    "p.k100.desc": "ضربة دقيقة بعيدة المدى — 100 كم نطاق تشغيلي، حمولة 2 كغ، مدة طيران ساعتين.",
    "p.k100.spec1": "نطاق ضرب 100 كم",
    "p.k100.spec2": "حمولة 2 كغ",
    "p.k100.spec3": "مدة 2 ساعة",
    "p.k400.desc": "ضربة استراتيجية موسعة المدى — 400 كم، حمولة 5 كغ، مدة تحليق 4 ساعات.",
    "p.k400.spec1": "نطاق ضرب 400 كم",
    "p.k400.spec2": "حمولة 5 كغ",
    "p.k400.spec3": "مدة 4 ساعات",
    "p.k750.desc": "أصل ضرب بعيد المدى — 750 كم، رأس حربي 15 كغ، مدة 7 ساعات.",
    "p.k750.spec1": "نطاق تشغيلي 750 كم",
    "p.k750.spec2": "رأس حربي 15 كغ",
    "p.k750.spec3": "مدة 7 ساعات",
    "p.km1000.desc": "ضربة استراتيجية شبحية — 1000 كم، مقطع رادار منخفض، حمولة 15 كغ.",
    "p.km1000.spec1": "نطاق استراتيجي 1000 كم",
    "p.km1000.spec2": "مقطع رادار منخفض",
    "p.km1000.spec3": "مدة 9 ساعات",
    "p.d1000.desc": "كاميكازي FPV عالي السرعة — 1-7 كغ حمولة، 200+ كم/س، نطاق 20 كم.",
    "p.d1000.spec1": "حمولة ضرب 7 كغ",
    "p.d1000.spec2": "سرعة 200+ كم/س",
    "p.d1000.spec3": "نطاق 20 كم",
    "p.d1050.desc": "كاميكازي FPV بألياف بصرية مضاد للتشويش — يعمل في بيئات إنكار GPS.",
    "p.d1050.spec1": "رابط ألياف بصرية",
    "p.d1050.spec2": "تشغيل بدون GPS",
    "p.d1050.spec3": "نطاق 25 كم",
    "p.wf1.desc": "ضربة دقيقة بسرعة 400+ كم/س — وحدة توجيه ذكاء اصطناعي، تتبع مستقل.",
    "p.wf1.spec1": "سرعة 400+ كم/س",
    "p.wf1.spec2": "وحدة توجيه AI",
    "p.wf1.spec3": "تتبع مستقل 50 هرتز",
    "p.safir.desc": "منصة FPV عالية السرعة — 200+ كم/س، مدى طويل، عمليات ليلية ونهارية.",
    "p.safir.spec1": "سرعة 200+ كم/س",
    "p.safir.spec2": "تحكم FPV",
    "p.safir.spec3": "عمليات ليلية ونهارية",
    "p.talon.desc": "طائرة جناح ثابت مصغرة — إطلاق يدوي، مدة 50-100 دقيقة، مقطع رادار منخفض.",
    "p.talon.spec1": "لا تحتاج مدرجاً",
    "p.talon.spec2": "مقطع رادار منخفض",
    "p.talon.spec3": "مدة 50-100 دقيقة",
    "p.m1000.desc": "مراقبة متعددة الدوارات — ساعة طيران، تكبير بصري 30×، نطاق 15 كم.",
    "p.m1000.spec1": "مدة ساعة واحدة",
    "p.m1000.spec2": "تكبير بصري 30×",
    "p.m1000.spec3": "نطاق 15 كم",
    "p.v2346.desc": "VTOL متعدد الأجنحة — من 2م إلى 6م، مدة 2-8 ساعات، بطاقة Anti-GNSS اختيارية.",
    "p.v2346.spec1": "4 أحجام أجنحة (2-6 م)",
    "p.v2346.spec2": "VTOL بلا مدرج",
    "p.v2346.spec3": "مدة 2-8 ساعات",
    "p.alga.desc": "ضربة دقيقة واستطلاع — نظام إطلاق ذكي، تحكم طيران عسكري.",
    "p.alga.spec1": "نظام إطلاق مزدوج",
    "p.alga.spec2": "تحكم طيران عسكري",
    "p.alga.spec3": "ملاحة GPS",
    "p.p5.desc": "متعدد الدوارات تكتيكي — 5 كغ، 45 دقيقة، كاميرا حرارية اختيارية.",
    "p.p5.spec1": "حمولة تكتيكية 5 كغ",
    "p.p5.spec2": "مدة 45 دقيقة",
    "p.p5.spec3": "نظام إسقاط دقيق",
    "p.p10.desc": "منصة حمولة ثقيلة — 10 كغ، 40 دقيقة، نظام إسقاط GPS.",
    "p.p10.spec1": "حمولة ثقيلة 10 كغ",
    "p.p10.spec2": "مدة 40 دقيقة",
    "p.p10.spec3": "نظام إسقاط دقيق",
    "p.mp50.desc": "رفع ثقيل بحد أقصى — حمولة 50 كغ، 30 دقيقة، نطاق 10 كم.",
    "p.mp50.spec1": "حمولة 50 كغ",
    "p.mp50.spec2": "مدة 30 دقيقة",
    "p.mp50.spec3": "نطاق 10 كم",
    "p.p100.desc": "طائرة رفع ثقيل فائق — حمولة 100 كغ، 25 دقيقة، نطاق 7 كم.",
    "p.p100.spec1": "حمولة 100 كغ",
    "p.p100.spec2": "مدة 25 دقيقة",
    "p.p100.spec3": "إسقاط GPS دقيق",
    "p.yukbey.desc": "منصة لوجستية — حمولة 30 كغ، بطاريتان، نطاق 30 كم.",
    "p.yukbey.spec1": "حمولة 30 كغ",
    "p.yukbey.spec2": "نظام بطاريتين",
    "p.yukbey.spec3": "نطاق 30 كم",
    "p.atalay.desc": "طائرة ثقيلة متعددة المهام — حمولة 50 كغ، نظام حمولة معياري.",
    "p.atalay.spec1": "حمولة 50 كغ",
    "p.atalay.spec2": "نظام حمولة معياري",
    "p.atalay.spec3": "تكوين متعدد المهام",
    "cs.drones": "أنظمة الطائرات — قريباً",
    "cs.drones.desc": "منصات طائرات تكتيكية وشحن وضرب FPV وكاميكازي بعيدة المدى. المحفظة الكاملة تُطلق قريباً.",
    "cs.alfauav.desc": "منصة VTOL الجوية للاستطلاع والحرب الإلكترونية لمهام تكتيكية بعيدة المدى.",
    "cs.cta": "طلب معلومات",
    "news.tag": "مقالات",
    "news.title": "مقالات تكنولوجيا الدفاع",
    "news.cat.ew": "الحرب الإلكترونية",
    "news.cat.drone": "أنظمة الطائرات",
    "news.cat.detect": "أنظمة الكشف",
    "news.1.title": "كيف تعمل أنظمة تشويش الطائرات",
    "news.1.desc": "نظرة عامة تقنية على مبادئ كبت RF ونطاقات التردد واستراتيجيات النشر المستخدمة في أنظمة الحرب الإلكترونية الحديثة.",
    "news.2.title": "الجناح الثابت مقابل متعدد الدوارات: مقارنة تطبيقات الدفاع",
    "news.2.desc": "فهم المقايضات التشغيلية بين منصات الطائرات ذات الأجنحة الثابتة ومتعددة الدوارات للاستطلاع والضرب والخدمات اللوجستية.",
    "news.3.title": "كشف الطائرات: الرادار وتحليل RF والأنظمة البصرية",
    "news.3.desc": "تحليل مقارن لتقنيات الكشف الثلاث الرئيسية لمكافحة الطائرات وكيفية تكاملها في بنيات C-UAS.",
    "contact.tag": "تواصل معنا",
    "contact.title": "أخبرنا ما الذي تقيّمه.",
    "contact.desc": "شارك اهتمامك بالمنتج أو ملف المهمة أو سياق النشر وسنرد بسرعة.",
    "contact.whatsapp": "تحدث عبر واتساب",
    "form.name": "الاسم الكامل",
    "form.org": "المنظمة",
    "form.email": "البريد الإلكتروني",
    "form.interest": "مجال الاهتمام",
    "form.select": "اختر مجال الاهتمام",
    "form.ew": "أنظمة الحرب الإلكترونية",
    "form.drones": "أنظمة الطائرات",
    "form.general": "استشارة عامة",
    "form.message": "الرسالة",
    "form.submit": "طلب استشارة",
    "footer.desc": "تكنولوجيا دفاع وأمن متقدمة — الحرب الإلكترونية وأنظمة الطائرات ومنصات الحرب الإلكترونية الجوية.",
    "footer.nav": "التنقل",
    "footer.capabilities": "القدرات",
    "footer.contact": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة.",
  },

  ru: {
    "nav.about": "О нас",
    "nav.products": "Продукция",
    "nav.news": "Новости",
    "nav.contact": "Контакты",
    "hero.line1": "ПЕРЕДОВЫЕ",
    "hero.line2": "ОБОРОННЫЕ",
    "hero.line3": "СИСТЕМЫ",
    "hero.sub": "Радиоэлектронная борьба · Тактические БПЛА · Воздушные платформы РЭБ",
    "hero.cta1": "Обзор систем",
    "hero.cta2": "Запросить консультацию",
    "stats.jammers": "Системы подавления",
    "stats.drones": "Платформы БПЛА",
    "stats.domains": "Области применения",
    "stats.ops": "Работоспособность",
    "about.tag": "О НАС",
    "about.title": "Оборонная инженерия, ориентированная на задачу",
    "about.p1": "Alfasis Savunma Mühendislik A.Ş. — турецкая компания в области оборонных технологий, основанная в 2021 году в Анкаре. Мы разрабатываем и поставляем передовые системы радиоэлектронной борьбы, тактические платформы БПЛА и воздушные решения РЭБ для оборонных и силовых организаций по всему миру.",
    "about.p2": "Наш портфель охватывает три операционных домена: подавление радиочастот и РЭБ, тактические и стратегические системы БПЛА, а также воздушная платформа ALFAUAV. Каждая система разработана под реальные задачи.",
    "badge.est": "Осн.",
    "domain.ew": "Радиоэлектронная борьба",
    "domain.ew.desc": "Глушители БПЛА, направленные системы РЭБ и экранирование для стационарного, мобильного, морского и бронированного развёртывания.",
    "domain.uav": "Системы БПЛА",
    "domain.uav.desc": "Тактические, грузовые, ударные FPV и дальнобойные БПЛА-камикадзе для оборонных и силовых операций.",
    "domain.alfauav.desc": "Воздушная платформа VTOL для ISR и РЭБ при выполнении тактических задач большой дальности.",
    "products.tag": "ПОРТФЕЛЬ СИСТЕМ",
    "products.title": "Все системы.",
    "products.sub": "Полный портфель систем радиоэлектронной борьбы, БПЛА и воздушных платформ РЭБ.",
    "cat.jammers": "Радиоэлектронная борьба",
    "cat.drones": "Системы БПЛА",
    "badge.ew": "Радиоэлектронная борьба",
    "p.alfa850v.desc": "Стационарная защита 360° от БПЛА с непрерывным подавлением 24/7.",
    "p.alfa850v.spec1": "Непрерывная работа 24/7",
    "p.alfa850v.spec2": "Всенаправленное покрытие 360°",
    "p.alfa850v.spec3": "Все частотные диапазоны БПЛА",
    "p.alfa850vmob.desc": "Мобильная защита от БПЛА для транспортных операций, конвоев и тактических развёртываний.",
    "p.alfa850vmob.spec1": "Монтаж на крышу транспорта",
    "p.alfa850vmob.spec2": "Мобильное покрытие 360°",
    "p.alfa850vmob.spec3": "Работа на полной скорости",
    "p.alfatank.desc": "Защита танков от БПЛА для бронированных платформ и операций переднего края.",
    "p.alfatank.spec1": "Интеграция на бронеплатформу",
    "p.alfatank.spec2": "Питание 24В постоянного тока",
    "p.alfatank.spec3": "Компактный 60×60×60 см",
    "p.alfanaval.desc": "Морская защита от БПЛА для военных кораблей, патрульных катеров и морских платформ.",
    "p.alfanaval.spec1": "Морское исполнение",
    "p.alfanaval.spec2": "Питание 220В / 24В",
    "p.alfanaval.spec3": "Защита от соли и погоды",
    "p.vega.desc": "Направленное подавление большой дальности для защиты от БПЛА и объектов высокой ценности.",
    "p.vega.spec1": "Направленное подавление RF",
    "p.vega.spec2": "Большая дальность действия",
    "p.vega.spec3": "Многодиапазонное покрытие",
    "p.ied.desc": "Технология ослепления приёмника — нейтрализация дистанционных взрывателей IED по всем известным частотам угроз.",
    "p.ied.spec1": "Технология ослепления приёмника",
    "p.ied.spec2": "GSM · RF · LoRa · GNSS",
    "p.ied.spec3": "Полное покрытие частот IED",
    "p.securadio.desc": "Экранирование с точностью до 1 Гц для критических объектов — блокировка несанкционированной радиосвязи без нарушения законных сигналов.",
    "p.securadio.spec1": "Точность 1 Гц",
    "p.securadio.spec2": "Минимальная блокировка полосы",
    "p.securadio.spec3": "Критическая инфраструктура",
    "badge.strike": "Ударный БПЛА",
    "badge.strategic": "Стратегический БПЛА",
    "badge.fpv": "FPV Удар",
    "badge.recon": "Разведка",
    "badge.cargo": "Грузовой БПЛА",
    "p.k100.desc": "Высокоточный удар большой дальности — 100 км, полезная нагрузка 2 кг, 2 часа полёта.",
    "p.k100.spec1": "Дальность удара 100 км",
    "p.k100.spec2": "Нагрузка 2 кг",
    "p.k100.spec3": "Продолжительность 2 часа",
    "p.k400.desc": "Стратегический удар расширенной дальности — 400 км, нагрузка 5 кг, 4 часа барражирования.",
    "p.k400.spec1": "Дальность удара 400 км",
    "p.k400.spec2": "Нагрузка 5 кг",
    "p.k400.spec3": "Продолжительность 4 часа",
    "p.k750.desc": "Ударный актив большой дальности — 750 км, тяжёлая боеголовка 15 кг, 7 часов.",
    "p.k750.spec1": "Дальность 750 км",
    "p.k750.spec2": "Боеголовка 15 кг",
    "p.k750.spec3": "Продолжительность 7 часов",
    "p.km1000.desc": "Стратегический малозаметный удар — 1000 км, малая ЭПР, нагрузка 15 кг.",
    "p.km1000.spec1": "Стратегическая дальность 1000 км",
    "p.km1000.spec2": "Малая радиолокационная ЭПР",
    "p.km1000.spec3": "Продолжительность 9 часов",
    "p.d1000.desc": "Высокоскоростной FPV-камикадзе — нагрузка 1–7 кг, скорость 200+ км/ч, дальность 20 км.",
    "p.d1000.spec1": "Ударная нагрузка 7 кг",
    "p.d1000.spec2": "Скорость 200+ км/ч",
    "p.d1000.spec3": "Дальность 20 км",
    "p.d1050.desc": "Защищённый от помех FPV-камикадзе на оптоволокне — работает при подавлении GPS.",
    "p.d1050.spec1": "Оптоволоконный канал",
    "p.d1050.spec2": "Работа без GPS",
    "p.d1050.spec3": "Дальность 25 км",
    "p.wf1.desc": "Точный удар на скорости 400+ км/ч — модуль ИИ-наведения, автономное сопровождение.",
    "p.wf1.spec1": "Скорость 400+ км/ч",
    "p.wf1.spec2": "Модуль ИИ-наведения",
    "p.wf1.spec3": "Автономное слежение 50 Гц",
    "p.safir.desc": "Высокоскоростная FPV-платформа — 200+ км/ч, большая дальность, день и ночь.",
    "p.safir.spec1": "Скорость 200+ км/ч",
    "p.safir.spec2": "Управление в очках FPV",
    "p.safir.spec3": "Работа день и ночь",
    "p.talon.desc": "Мини-БПЛА с фиксированным крылом — ручной запуск, 50–100 мин, малая ЭПР.",
    "p.talon.spec1": "Без взлётной полосы",
    "p.talon.spec2": "Малая радиолокационная ЭПР",
    "p.talon.spec3": "Продолжительность 50–100 мин",
    "p.m1000.desc": "Мультикоптер наблюдения — 1 час полёта, 30× оптический зум, дальность 15 км.",
    "p.m1000.spec1": "Продолжительность 1 час",
    "p.m1000.spec2": "Оптический зум 30×",
    "p.m1000.spec3": "Дальность 15 км",
    "p.v2346.desc": "VTOL с несколькими размахами — от 2м до 6м, 2–8 часов, опциональная карта Anti-GNSS.",
    "p.v2346.spec1": "4 варианта размаха (2–6 м)",
    "p.v2346.spec2": "VTOL — без полосы",
    "p.v2346.spec3": "Продолжительность 2–8 часов",
    "p.alga.desc": "Точный удар и разведка — двойная система сброса, военная система управления полётом.",
    "p.alga.spec1": "Двойная система сброса",
    "p.alga.spec2": "Военная система управления",
    "p.alga.spec3": "GPS навигация",
    "p.p5.desc": "Тактический мультикоптер — 5 кг, 45 мин, опциональная тепловизионная камера.",
    "p.p5.spec1": "Тактическая нагрузка 5 кг",
    "p.p5.spec2": "Продолжительность 45 мин",
    "p.p5.spec3": "Система точного сброса",
    "p.p10.desc": "Тяжёлая тактическая нагрузка — 10 кг, 40 мин, система GPS-сброса.",
    "p.p10.spec1": "Тяжёлая нагрузка 10 кг",
    "p.p10.spec2": "Продолжительность 40 мин",
    "p.p10.spec3": "Система точного сброса",
    "p.mp50.desc": "Максимальный тяжёлый подъём — нагрузка 50 кг, 30 мин, дальность 10 км.",
    "p.mp50.spec1": "Нагрузка 50 кг",
    "p.mp50.spec2": "Продолжительность 30 мин",
    "p.mp50.spec3": "Дальность 10 км",
    "p.p100.desc": "Сверхтяжёлый БПЛА — нагрузка 100 кг, 25 мин, дальность 7 км.",
    "p.p100.spec1": "Нагрузка 100 кг",
    "p.p100.spec2": "Продолжительность 25 мин",
    "p.p100.spec3": "Точный GPS-сброс",
    "p.yukbey.desc": "Логистическая платформа — нагрузка 30 кг, двойные аккумуляторы, дальность 30 км.",
    "p.yukbey.spec1": "Нагрузка 30 кг",
    "p.yukbey.spec2": "Двойные аккумуляторы",
    "p.yukbey.spec3": "Дальность 30 км",
    "p.atalay.desc": "Тяжёлый многоцелевой БПЛА — нагрузка 50 кг, модульная система.",
    "p.atalay.spec1": "Нагрузка 50 кг",
    "p.atalay.spec2": "Модульная система",
    "p.atalay.spec3": "Многоцелевая конфигурация",
    "cs.drones": "Системы БПЛА — скоро",
    "cs.drones.desc": "Тактические, грузовые, ударные FPV и дальнобойные БПЛА-камикадзе. Полный портфель скоро.",
    "cs.alfauav.desc": "Воздушная платформа VTOL для ISR и РЭБ при выполнении тактических задач большой дальности.",
    "cs.cta": "Запросить информацию",
    "news.tag": "МАТЕРИАЛЫ",
    "news.title": "Статьи по оборонным технологиям",
    "news.cat.ew": "Радиоэлектронная борьба",
    "news.cat.drone": "Системы БПЛА",
    "news.cat.detect": "Системы обнаружения",
    "news.1.title": "Как работают системы подавления БПЛА",
    "news.1.desc": "Технический обзор принципов подавления RF, частотных диапазонов и стратегий развёртывания в современных системах РЭБ.",
    "news.2.title": "Самолётные vs мультикоптерные БПЛА: сравнение применения в обороне",
    "news.2.desc": "Операционные компромиссы между самолётными и мультикоптерными платформами для разведки, ударов и логистики.",
    "news.3.title": "Обнаружение БПЛА: радар, анализ RF и оптические системы",
    "news.3.desc": "Сравнительный анализ трёх основных технологий обнаружения БПЛА и их взаимодополняемость в архитектурах C-UAS.",
    "contact.tag": "СВЯЗАТЬСЯ",
    "contact.title": "Расскажите, что вы оцениваете.",
    "contact.desc": "Поделитесь интересующим продуктом, профилем задачи или условиями развёртывания — мы ответим оперативно.",
    "contact.whatsapp": "Написать в WhatsApp",
    "form.name": "Полное имя",
    "form.org": "Организация",
    "form.email": "Электронная почта",
    "form.interest": "Область интереса",
    "form.select": "Выберите область",
    "form.ew": "Системы РЭБ",
    "form.drones": "Системы БПЛА",
    "form.general": "Общая консультация",
    "form.message": "Сообщение",
    "form.submit": "Запросить консультацию",
    "footer.desc": "Передовые технологии в области обороны и безопасности — РЭБ, системы БПЛА и воздушные платформы.",
    "footer.nav": "Навигация",
    "footer.capabilities": "Возможности",
    "footer.contact": "Контакты",
    "footer.rights": "Все права защищены.",
  }
};

// ── MODAL DATA ──────────────────────
const MODALS = {
  "alfa-850v": {
    img: "https://www.rdnsoft.com/products/alfa-850v/images/hero.webp",
    cat: "Electronic Warfare",
    title: "ALFA Drone-UAV Jammer System",
    desc: "A fixed-type omnidirectional drone-UAV jammer system engineered for continuous 24/7 operation, delivering 360° RF suppression across all critical UAV control, GNSS, telemetry, and video frequencies.",
    specs: [
      { label: "Operation", val: "24/7 Continuous" },
      { label: "Coverage", val: "360° Omnidirectional" },
      { label: "Elevation", val: "60° Coverage" },
      { label: "Antenna", val: "Min. 4 dBi Gain" },
      { label: "Deployment", val: "Fixed Installation" },
      { label: "Weather", val: "All-weather outdoor" }
    ]
  },
  "alfa-850v-mobile": {
    img: "https://www.rdnsoft.com/products/alfa-850v-mobile/images/hero.webp",
    cat: "Electronic Warfare",
    title: "ALFA 850V Mobile Drone-UAV Jammer",
    desc: "A roof-mounted mobile electronic warfare system built into a tactical enclosure, delivering 360° RF suppression against UAV threats while the vehicle is stationary or in motion.",
    specs: [
      { label: "Mounting", val: "Vehicle Roof-Mount" },
      { label: "Coverage", val: "360° Mobile" },
      { label: "Antenna", val: "Min. 9 dBi Gain" },
      { label: "Elevation", val: "60° Coverage" },
      { label: "Operation", val: "Stationary & Mobile" },
      { label: "Integration", val: "SUV / Pickup / Tactical" }
    ]
  },
  "alfa-tank": {
    img: "https://www.rdnsoft.com/products/alfa-tank/images/hero.webp",
    cat: "Electronic Warfare",
    title: "ALFA TANK Drone-UAV Jammer System",
    desc: "A purpose-built drone-UAV jammer system designed for direct integration onto tanks and armored vehicles, delivering 360° RF suppression against hostile UAVs in active combat and high-threat environments.",
    specs: [
      { label: "Platform", val: "Tank / Armored Vehicle" },
      { label: "Power", val: "DC 24V Onboard" },
      { label: "Dimensions", val: "60 × 60 × 60 cm" },
      { label: "Coverage", val: "360°" },
      { label: "Installation", val: "Turret Mount" },
      { label: "Environment", val: "Active Combat" }
    ]
  },
  "alfa-naval": {
    img: "https://www.rdnsoft.com/products/alfa-naval/images/hero.webp",
    cat: "Electronic Warfare",
    title: "ALFA NAVAL Drone-UAV Jammer System",
    desc: "A purpose-built marine drone-UAV jammer system for naval vessels and sea platforms, delivering 360° RF suppression in maritime patrol, coastal defense, and port security operations.",
    specs: [
      { label: "Platform", val: "Naval / Marine" },
      { label: "Power", val: "220V AC or 24V DC" },
      { label: "Dimensions", val: "800 × 1000 × 600 mm" },
      { label: "Enclosure", val: "Marine-grade" },
      { label: "Coverage", val: "360°" },
      { label: "Environment", val: "High humidity / Salt" }
    ]
  },
  "vega": {
    img: "https://www.rdnsoft.com/products/vega/images/vega-hero.webp",
    cat: "Electronic Warfare",
    title: "VEGA Multi-Band Directional Jammer",
    desc: "A high-power directional electronic warfare system built for long-range RF denial, perimeter security, and strategic counter-UAV operations. Focuses jamming energy toward the threat direction for stronger and more controlled denial effect.",
    specs: [
      { label: "Type", val: "Directional" },
      { label: "Mode", val: "Long-Range RF Denial" },
      { label: "Application", val: "Perimeter Security" },
      { label: "Bands", val: "Multi-Band" },
      { label: "Beam", val: "Focused Directional" },
      { label: "Use Case", val: "High-Value Site Protection" }
    ]
  },
  "ied": {
    img: "https://www.rdnsoft.com/products/ied-jammer/images/hero.webp",
    cat: "Electronic Warfare",
    title: "IED Jammer — Remote IED Blocking System",
    desc: "An advanced IED blocking system that neutralizes remote-controlled bomb triggers across 315/433 MHz RF, LoRa, PMR/VHF/UHF, GSM, and GNSS frequencies. Unlike conventional jammers, it blinds only the receiver for extended range at lower power.",
    specs: [
      { label: "Technology", val: "Receiver-Blind" },
      { label: "Frequencies", val: "315/433 MHz, GSM, GNSS" },
      { label: "Also covers", val: "LoRa, PMR/VHF/UHF" },
      { label: "Range", val: "Extended vs. conventional" },
      { label: "Power", val: "Lower than conventional" },
      { label: "Interference", val: "Minimal collateral" }
    ]
  },
  "securadio": {
    img: "https://www.rdnsoft.com/products/securadio/images/hero.webp",
    cat: "Electronic Warfare",
    title: "SECURADIO Advanced RF Shielding System",
    desc: "An advanced radio frequency shielding system designed to suppress unauthorized AM/FM and HF radio communication in critical facilities, with 1 Hz frequency precision and minimal bandwidth impact on legitimate channels.",
    specs: [
      { label: "Precision", val: "1 Hz Frequency" },
      { label: "Target", val: "AM/FM and HF Radio" },
      { label: "Blocking", val: "Minimum Bandwidth" },
      { label: "Impact", val: "Minimal on adjacent" },
      { label: "Application", val: "Critical Institutions" },
      { label: "Mode", val: "Surgical Suppression" }
    ]
  }
};

  "k-100": {
    img: "https://www.rdnsoft.com/products/k-100/images/hero.webp",
    cat: "Strike UAV — Fixed Wing Kamikaze",
    title: "K-100 — Long-Range Precision Strike Platform",
    desc: "1.8 m wingspan fixed-wing kamikaze UAV with 2 kg payload, 2-hour flight time, and 100 km operational range. Fixed-wing efficiency delivers 10× the range of comparable multicopter platforms.",
    specs: [
      { label: "Range", val: "100 km" },
      { label: "Payload", val: "2 kg" },
      { label: "Endurance", val: "2 Hours" },
      { label: "Wingspan", val: "1.8 m" },
      { label: "Type", val: "Fixed-Wing Kamikaze" },
      { label: "Capability", val: "Loitering Strike" }
    ]
  },
  "k-400": {
    img: "https://www.rdnsoft.com/products/k-400/images/hero.webp",
    cat: "Strike UAV — Fixed Wing Kamikaze",
    title: "K-400 — Extended Range Strategic Strike Platform",
    desc: "Fixed-wing kamikaze UAV with 5 kg payload, 4-hour endurance, and 400 km operational range for strategic strike missions beyond tactical air defense perimeter.",
    specs: [
      { label: "Range", val: "400 km" },
      { label: "Payload", val: "5 kg" },
      { label: "Endurance", val: "4 Hours" },
      { label: "Type", val: "Fixed-Wing Kamikaze" },
      { label: "Loitering", val: "Target Search" },
      { label: "Capability", val: "Strategic Depth" }
    ]
  },
  "k-750": {
    img: "https://www.rdnsoft.com/products/k-750/images/hero.webp",
    cat: "Strike UAV — Fixed Wing Kamikaze",
    title: "K-750 — Long-Range Strike Asset",
    desc: "Fixed-wing kamikaze with 15 kg payload, 7-hour endurance, and 750 km range for operational-level precision strike. Reaches targets at operational depth, beyond most tactical air defense systems.",
    specs: [
      { label: "Range", val: "750 km" },
      { label: "Payload", val: "15 kg Heavy Warhead" },
      { label: "Endurance", val: "7 Hours" },
      { label: "Type", val: "Fixed-Wing Kamikaze" },
      { label: "Target", val: "Hardened / Reinforced" },
      { label: "Depth", val: "Operational Level" }
    ]
  },
  "km-1000": {
    img: "https://www.rdnsoft.com/products/km-1000/images/hero.webp",
    cat: "Strategic UAV — Stealth Kamikaze",
    title: "KM-1000 — Strategic Long-Range Strike System",
    desc: "Stealth-configured fixed-wing kamikaze with 15 kg payload, 9-hour endurance, and 1,000 km strategic strike range. Low radar cross-section airframe geometry for air defense network penetration.",
    specs: [
      { label: "Range", val: "1,000 km" },
      { label: "Payload", val: "15 kg" },
      { label: "Endurance", val: "9 Hours" },
      { label: "Stealth", val: "Low RCS Airframe" },
      { label: "Type", val: "Strategic Kamikaze" },
      { label: "Capability", val: "Air Defense Penetration" }
    ]
  },
  "d-1000": {
    img: "https://www.rdnsoft.com/products/d-1000/images/hero.webp",
    cat: "FPV Strike — Kamikaze",
    title: "D-1000 — High-Speed Precision Strike Platform",
    desc: "FPV kamikaze drone with 1–7 kg payload, 150–200+ km/h speed, and up to 20 km range for precision strike missions. High-speed approach minimizes target reaction time.",
    specs: [
      { label: "Payload", val: "1–7 kg" },
      { label: "Speed", val: "200+ km/h" },
      { label: "Range", val: "20 km" },
      { label: "Type", val: "FPV Kamikaze" },
      { label: "Class", val: "Largest FPV Payload" },
      { label: "Control", val: "First Person View" }
    ]
  },
  "d-1050": {
    img: "https://www.rdnsoft.com/products/d-1050/images/hero.webp",
    cat: "FPV Strike — Fiber Optic",
    title: "D-1050 — Jam-Proof Precision Strike Platform",
    desc: "FPV kamikaze drone with fiber optic cable link for GPS-denied and electronic warfare environments. 1–5 kg payload, 25 km range. Cannot be jammed, spoofed, or intercepted.",
    specs: [
      { label: "Link", val: "Fiber Optic Cable" },
      { label: "Payload", val: "1–5 kg" },
      { label: "Range", val: "25 km" },
      { label: "GPS", val: "GPS-Denied Capable" },
      { label: "Jam Resistance", val: "Unjammable" },
      { label: "Environment", val: "EW Contested" }
    ]
  },
  "white-falcon": {
    img: "https://www.rdnsoft.com/products/white-falcon-a1/images/hero.webp",
    cat: "FPV Strike — AI Guided",
    title: "WHITE FALCON A1 — Precision Strike at 400+ km/h",
    desc: "Compact high-speed FPV attack drone with AI guidance module, 1 kg payload capacity, and 400+ km/h top speed. 50 Hz autonomous tracking pursues targets through evasive maneuvers.",
    specs: [
      { label: "Speed", val: "400+ km/h" },
      { label: "Payload", val: "1 kg" },
      { label: "AI Tracking", val: "50 Hz / 16×16 px" },
      { label: "Guidance", val: "Autonomous AI Module" },
      { label: "Target Memory", val: "Yes" },
      { label: "Min. Contrast", val: "5% Target Detection" }
    ]
  },
  "safir": {
    img: "https://www.rdnsoft.com/products/safir/images/hero.webp",
    cat: "Reconnaissance — FPV Platform",
    title: "SAFIR — High-Speed First Person View Platform",
    desc: "Advanced FPV drone designed for professional missions with high speed, long range, and fully customizable hardware for day and night operations.",
    specs: [
      { label: "Speed", val: "150–200+ km/h" },
      { label: "Control", val: "FPV Goggle" },
      { label: "Operations", val: "Day & Night" },
      { label: "Hardware", val: "Fully Customizable" },
      { label: "Range", val: "Long Range" },
      { label: "Application", val: "Professional Mission" }
    ]
  },
  "talon": {
    img: "https://www.rdnsoft.com/products/talon/images/hero.webp",
    cat: "Reconnaissance — Fixed Wing",
    title: "TALON — Long-Range Reconnaissance & Surveillance",
    desc: "Electric-powered fixed-wing mini UAV for tactical reconnaissance, surveillance, target acquisition, and border security with 50–100 minute endurance and hand-launch capability.",
    specs: [
      { label: "Launch", val: "Hand-Launch" },
      { label: "Landing", val: "Belly Land" },
      { label: "Endurance", val: "50–100 Minutes" },
      { label: "RCS", val: "Minimal / Discreet" },
      { label: "Airframe", val: "EPO" },
      { label: "Application", val: "Border / ISR" }
    ]
  },
  "m-1000": {
    img: "https://www.rdnsoft.com/products/m-1000/images/hero.webp",
    cat: "Reconnaissance — Surveillance Multicopter",
    title: "M-1000 — Extended Endurance Surveillance Platform",
    desc: "1-hour endurance observation multicopter with 30× day gimbal camera and 15 km range for persistent surveillance and reconnaissance operations.",
    specs: [
      { label: "Endurance", val: "1 Hour" },
      { label: "Optical Zoom", val: "30×" },
      { label: "Range", val: "15 km" },
      { label: "Gimbal", val: "3-Axis Stabilized" },
      { label: "Application", val: "Persistent ISR" },
      { label: "Vision", val: "Day Camera" }
    ]
  },
  "v-2346": {
    img: "https://www.rdnsoft.com/products/v-2346/images/hero.webp",
    cat: "VTOL — Fixed Wing",
    title: "V-2346 — Multi-Wingspan Long-Range VTOL Platform",
    desc: "Fixed-wing VTOL UAV series in 2m, 3.2m, 4m, and 6m wingspan variants with 2–8 hour endurance and optional Anti-GNSS card for electronic warfare environments.",
    specs: [
      { label: "Variants", val: "2m / 3.2m / 4m / 6m" },
      { label: "Endurance", val: "2–8 Hours" },
      { label: "Launch", val: "Vertical — No Runway" },
      { label: "Anti-GNSS", val: "Optional Card" },
      { label: "Deployment", val: "Ship / Vehicle / Field" },
      { label: "Type", val: "Fixed-Wing VTOL" }
    ]
  },
  "alga": {
    img: "https://www.rdnsoft.com/products/alga/images/hero.webp",
    cat: "Strike & Reconnaissance",
    title: "ALGA — Precision Strike & Reconnaissance Platform",
    desc: "A tactical drone with precision targeting system and dual-locking ammunition release apparatus, operating with high precision in reconnaissance, surveillance, and pinpoint strike operations.",
    specs: [
      { label: "Release", val: "Dual-Lock Mechanism" },
      { label: "Navigation", val: "Autonomous Waypoint" },
      { label: "Flight Control", val: "AG-Series Military" },
      { label: "GPS", val: "Fix + Emergency Land" },
      { label: "Safety", val: "Anti-Accidental Lock" },
      { label: "Application", val: "Strike + Recon" }
    ]
  },
  "p-5": {
    img: "https://www.rdnsoft.com/products/p-5/images/hero.webp",
    cat: "Cargo UAV — Multicopter",
    title: "P-5 — Tactical Payload & Surveillance Multicopter",
    desc: "5 kg payload multicopter with 45-minute endurance, 30× gimbal camera, dropping ability, and optional thermal camera for tactical operations.",
    specs: [
      { label: "Payload", val: "5 kg" },
      { label: "Endurance", val: "45 Minutes" },
      { label: "Camera", val: "30× Gimbal + Thermal" },
      { label: "Drop", val: "GPS-Coordinated" },
      { label: "Type", val: "Tactical Multicopter" },
      { label: "Application", val: "Supply + Surveillance" }
    ]
  },
  "p-10": {
    img: "https://www.rdnsoft.com/products/p-10/images/hero.webp",
    cat: "Cargo UAV — Multicopter",
    title: "P-10 — Heavy Tactical Payload Platform",
    desc: "10 kg payload multicopter with 40-minute endurance, 30× gimbal camera, and precision dropping capability for heavy tactical and logistics missions.",
    specs: [
      { label: "Payload", val: "10 kg" },
      { label: "Endurance", val: "40 Minutes" },
      { label: "Camera", val: "30× Gimbal" },
      { label: "Drop System", val: "GPS Precision" },
      { label: "Type", val: "Heavy Tactical" },
      { label: "Application", val: "Crew-Served Weapons / Sensors" }
    ]
  },
  "mp-50": {
    img: "https://www.rdnsoft.com/products/mp-50/images/hero.webp",
    cat: "Cargo UAV — Heavy Lift",
    title: "MP-50 — Maximum Capacity Heavy Lift Platform",
    desc: "50 kg payload multicopter with 30-minute endurance and 10 km range for the heaviest tactical and logistics missions. Precision drop at GPS-designated coordinates.",
    specs: [
      { label: "Payload", val: "50 kg" },
      { label: "Endurance", val: "30 Minutes" },
      { label: "Range", val: "10 km" },
      { label: "Drop", val: "GPS Precision" },
      { label: "Class", val: "Industry-Leading Payload" },
      { label: "Type", val: "Heavy Lift Multicopter" }
    ]
  },
  "p-100": {
    img: "https://www.rdnsoft.com/products/p-100/images/hero.webp",
    cat: "Cargo UAV — Ultra Heavy Lift",
    title: "P-100 — Ultra Heavy Lift UAV Platform",
    desc: "100 kg payload multicopter with 25-minute endurance for the heaviest tactical aerial operations at ranges up to 7 km. Maximum payload capacity for any tactical multicopter.",
    specs: [
      { label: "Payload", val: "100 kg" },
      { label: "Endurance", val: "25 Minutes" },
      { label: "Range", val: "7 km" },
      { label: "Drop", val: "GPS Coordinated" },
      { label: "Class", val: "Maximum Multicopter" },
      { label: "Type", val: "Ultra Heavy Lift" }
    ]
  },
  "yukbey": {
    img: "https://www.rdnsoft.com/products/yukbey/images/hero.webp",
    cat: "Cargo UAV — Logistics",
    title: "YÜKBEY — Heavy Lift Logistics Platform",
    desc: "30 kg carrying capacity cargo drone with dual battery system for safe, uninterrupted aerial logistics. Twin 25,000 mAh Li-ion packs with automatic failover. 30 km range.",
    specs: [
      { label: "Payload", val: "30 kg" },
      { label: "Battery", val: "Dual 25,000 mAh Li-ion" },
      { label: "Failover", val: "Automatic" },
      { label: "Range", val: "30 km" },
      { label: "Type", val: "Logistics Cargo" },
      { label: "Application", val: "Medical / Tactical Supply" }
    ]
  },
  "atalay": {
    img: "https://www.rdnsoft.com/products/atalay/images/hero.webp",
    cat: "Multi-Mission UAV",
    title: "ATALAY — Urban Response Platform",
    desc: "Heavy-duty multi-mission drone for firefighting, structural inspection, and facade cleaning in high-rise urban environments. 50 kg payload with quick-swap modular system.",
    specs: [
      { label: "Payload", val: "50 kg" },
      { label: "Stability", val: "Full Flight Stability" },
      { label: "Payload System", val: "Quick-Swap Modular" },
      { label: "Missions", val: "Fire / Inspection / Clean" },
      { label: "Tooling", val: "No Specialized Tools" },
      { label: "Environment", val: "Urban High-Rise" }
    ]
  },
let currentLang = 'en';

// ── INIT ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLang();
  initCatTabs();
  initModal();
  initForm();
  applyLang('en');
});

// ── NAVBAR ──────────────────────────
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ── LANGUAGE ──────────────────────────
function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      applyLang(lang);
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add('active'));
    });
  });
}

function applyLang(lang) {
  currentLang = lang;
  const dict = T[lang] || T.en;
  const isRTL = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
}

// ── CATEGORY TABS ──────────────────────────
function initCatTabs() {
  const tabs = document.querySelectorAll('.cat-tab');
  const grids = {
    jammers: document.getElementById('cat-jammers'),
    drones: document.getElementById('cat-drones'),
    alfauav: document.getElementById('cat-alfauav'),
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.cat;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      Object.entries(grids).forEach(([key, el]) => {
        el.classList.toggle('hidden', key !== cat);
      });
    });
  });
}

// ── MODAL ──────────────────────────
function initModal() {
  const overlay = document.getElementById('productModal');
  const closeBtn = document.getElementById('modalClose');
  const content = document.getElementById('modalContent');

  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.modal;
      const data = MODALS[id];
      if (!data) return;

      const specsHTML = data.specs.map(s => `
        <div class="modal-spec-item">
          <div class="spec-label">${s.label}</div>
          <div class="spec-val">${s.val}</div>
        </div>
      `).join('');

      content.innerHTML = `
        <img src="${data.img}" alt="${data.title}" />
        <div class="modal-cat">${data.cat}</div>
        <h2>${data.title}</h2>
        <p>${data.desc}</p>
        <div class="modal-specs">${specsHTML}</div>
        <div class="modal-cta">
          <a href="#contact" class="btn-primary" onclick="closeModal()">Request Quote</a>
          <a href="https://wa.me/905425288514" target="_blank" class="btn-ghost">WhatsApp</a>
        </div>
      `;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}
window.closeModal = closeModal;

// ── CONTACT FORM ──────────────────────────
function initForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    if (!name || !email) return;

    // Build mailto link
    const org = document.getElementById('forg').value.trim();
    const interest = document.getElementById('finterest').value;
    const message = document.getElementById('fmessage').value.trim();
    const subject = encodeURIComponent(`Alfasis Defense Inquiry — ${interest || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${org}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:info@alfasisdefense.com?subject=${subject}&body=${body}`;
    note.textContent = '✓ Opening your email client...';
    setTimeout(() => { note.textContent = ''; }, 4000);
  });
}
