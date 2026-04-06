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
    "btn.details": "View Details →",
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
    "btn.details": "عرض التفاصيل →",
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
    "btn.details": "Подробнее →",
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

// ── STATE ──────────────────────────
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
