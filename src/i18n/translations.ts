export const en = {
  basics_page: "Page",
  basics_not_found: "not found",
  basics_not_found_desc:
    "The page you're looking for doesn't exist or has been moved.",
  page_home: "Home",

  cities_istanbul_turkey: "Istanbul, Turkey",
  software_developer: "Software Developer",

  basics_learn_more: "Learn More",
  basics_present: "Present",

  about_me: "About Me",
  about_me_pragraphs: [
    "I am a software and product developer with a passion for building innovative solutions and a knack for problem-solving. I possess a strong proficiency in Golang, JavaScript, and Docker, and I'm a lifelong learner, always seeking new challenges and opportunities to expand my skillset.",
    "My passion lies in crafting user-centric products that make a genuine impact. I'm particularly drawn to the power of open-source collaboration, where diverse perspectives come together to drive innovation and create value for communities worldwide.",
    "Beyond coding, I relish engaging in technical discussions, always striving to find common ground and uncover the most effective solutions. My approach to debate is collaborative and open-minded, fostering a spirit of brainstorming and mutual learning.",
    "I'm driven by a genuine desire to make a difference through technology, and I'm excited to contribute my skills and expertise to projects that push the boundaries of what's possible.",
  ],

  github_graph_title: "Contributions",
  github_graph_subtitle: "Total {{total}} contributions in the last year",
  github_graph_tooltip: "{{count}} contributions on {{date}}",

  timeline_title: "Timeline",
  timeline_desc: "Here are some highlights from my journey so far.",

  category_work: "Work",
  category_education: "Education",
  category_project: "Projects",
  category_certificate: "Certifications",
  category_volunteer: "Volunteer",
  category_publication: "Publications",
  "category_open-source": "Open Source",
  category_all: "All",

  header_about: "About",
  header_projects: "Projects",
  header_work: "Work",
  header_blog: "Blog",
};

export const tr = {
  basics_page: "Sayfa",
  basics_not_found: "bulunamadı",
  basics_not_found_desc: "Aramakta olduğunuz sayfa mevcut değil veya taşındı.",
  page_home: "Anasayfa",

  cities_istanbul_turkey: "İstanbul, Türkiye",
  software_developer: "Yazılım Geliştirici",

  basics_learn_more: "Daha Fazla Bilgi",
  basics_present: "Şu Anda",

  about_me: "Hakkımda",
  about_me_pragraphs: [
    "Yenilikçi çözümler üretme tutkusuna ve problem çözme becerisine sahip bir yazılım ve ürün geliştiricisiyim. Golang, JavaScript ve Docker'da güçlü bir uzmanlığa sahibim ve yaşam boyu öğrenen biriyim, becerilerimi genişletmek için her zaman yeni zorluklar ve fırsatlar arıyorum.",
    "Benim tutkum, gerçek bir etki yaratan, kullanıcı odaklı ürünler yaratmaktır. Özellikle yenilikçiliği teşvik etmek ve dünya çapındaki topluluklar için değer yaratmak amacıyla farklı bakış açılarının bir araya geldiği açık kaynak işbirliğinin gücü ilgimi çekiyor.",
    "Kodlamanın ötesinde, teknik tartışmalara katılmayı seviyorum, her zaman ortak bir zemin bulmaya ve en etkili çözümleri ortaya çıkarmaya çalışıyorum. Tartışmaya yaklaşımım işbirlikçi ve açık fikirlidir, beyin fırtınası ve karşılıklı öğrenme ruhunu teşvik eder.",
    "Teknoloji aracılığıyla bir fark yaratmaya yönelik gerçek bir istekle hareket ediyorum ve mümkün olanın sınırlarını zorlayan projelere becerilerim ve uzmanlığımla katkıda bulunmaktan heyecan duyuyorum.",
  ],

  github_graph_title: "Katkıları",
  github_graph_subtitle: "Son bir yılda toplam {{total}} katkı",
  github_graph_tooltip: "{{date}} tarihinde {{count}} katkı",

  timeline_title: "Zaman Çizelgesi",
  timeline_desc: "Şimdiye kadar olan yolculuğumdan bazı önemli noktalar.",

  category_work: "İş",
  category_education: "Eğitim",
  category_project: "Projeler",
  category_certificate: "Sertifikalar",
  category_volunteer: "Gönüllü",
  category_publication: "Yayınlar",
  "category_open-source": "Açık Kaynak",
  category_all: "Hepsi",

  header_about: "Hakkımda",
  header_projects: "Projeler",
  header_work: "Deneyim",
  header_blog: "Blog",
};

export type TranslationKeys = keyof typeof en;

export type TranslationValues = {
  [key in TranslationKeys]: string | string[];
};
