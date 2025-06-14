import type { WorkItem } from "./types";

const mono: WorkItem = {
  date: "2023-06-01",
  category: "work",
  translation: {
    tr: {
      title: "Yazılım Mühendisi",
      subtitle: "MonoPayments",
      description: `Belge Zaman Damgası, Hazine ve Kredi Raporlayıcı gibi temel ürünler için yüksek güvenilirlik, ölçeklenebilirlik ve sürdürülebilirlik sağlayan mikroservisler tasarladım ve geliştirdim.

Belge Zaman Damgası Servisi: Türk hükümetinin KamuSM platformuyla entegre çalışan, müşterilerimiz için yasal olarak bağlayıcı belge zaman damgaları üreten ve doğrulayan mevzuata uygun bir servis geliştirdim.

Hazine Mikroservisi: Monopayments ile anlaşmalı bankalar arasındaki tüm etkileşimleri yöneten sağlam bir adaptör katmanı geliştirdim ve bakımını sağladım. Hesap özetleri, fon transferleri, kredi işlemleri ve gerçek zamanlı hesap bilgisi entegrasyonlarını hayata geçirdim. Birden fazla bankacılık API’sinin kolayca eklenebilmesini sağlayan esnek bir sağlayıcı sistemi tasarladım.

Kredi Raporlayıcı: Farklı bankalardan gelen günlük kredi kullanım raporlarını toplayan ve normalleştiren bir servis geliştirdim. Veri çıkarma, dönüştürme ve birleştirme süreçlerini otomatikleştirerek iş müşterileri için kullanıcı dostu, bütünleşik bir raporlama arayüzü oluşturdum.

İş müşterilerinin ihtiyaçlarına uygun olarak, yüksek performanslı sorgulama ve raporlama modüllerine odaklanan, okuma ağırlıklı özellikler geliştirdim.

CRM Projesi: Mühendislik ekibi içinde görev dağılımı ve çevik yönetimi de kapsayan özel bir CRM platformunun geliştirilmesine liderlik ettim.

Teknoloji Yığını & Yetkinlikler: Golang, JavaScript, Vue.js, Docker ve PostgreSQL konularında uzmanım. Bankacılık sistemleri, asenkron/senkron API tasarım desenleri ve güvenli finansal entegrasyonlar alanında derin bilgiye sahibim.

Alan Uzmanlığı: Bankacılık ve fintech entegrasyonları, belge mevzuat uyumluluğu ve büyük ölçekli veri işleme konularında doğrudan deneyimim bulunuyor.`,
    },
    en: {
      title: "Software Engineer",
      subtitle: "MonoPayments",
      description: `Designed and developed microservices for core products such as Document Timestamp, Treasury, and Loan Reporter, ensuring high reliability, scalability, and maintainability.

Document Timestamp Service: Built a compliant service that integrates with the Turkish government's KamuSM platform to generate and validate legally binding document timestamps for our clients.

Treasury Microservice: Developed and maintained a robust adapter layer responsible for all interactions between Monopayments and partnered banks. Implemented integrations for account summaries, fund transfers, credit operations, and real-time account information retrieval. Designed a flexible provider system to support onboarding and management of multiple banking APIs.

Loan Reporter: Engineered a service to aggregate and normalize daily loan usage reports sent by various banks in different Excel formats. Automated data extraction, transformation, and unification, resulting in a streamlined, user-friendly reporting interface for business customers.

Delivered read-oriented features in alignment with business customer requirements, focusing on high-performance query and reporting modules.

CRM Project: Led the development of a custom CRM platform, including task distribution and agile management within the engineering team.

Technical Stack & Competencies: Proficient in Golang, JavaScript, Vue.js, Docker, and PostgreSQL. Deep understanding of banking systems, asynchronous/synchronous API design patterns, and secure financial integrations.

Domain Expertise: Hands-on experience in banking and fintech integrations, document compliance, and large-scale data processing.`,
    },
  },
  tags: ["golang", "vue", "docker", "postgres"],
  url: "https://monopayments.com",
};

const restayway: WorkItem = {
  date: "2023-06-01",
  category: "work",
  translation: {
    tr: {
      title: "Kurucu Yazılım Mühendisi",
      subtitle: "Restayway (eski adıyla Turistik Rota)",
      description: `Restayway’i, gezginleri özenle seçilmiş destinasyonlar ve konaklama seçenekleriyle buluşturan modern bir seyahat platformu olarak tasarladım ve geliştirdim.

Platform Temeli: B2C ve B2B kullanıcılar için ölçeklenebilir arama, kişiselleştirilmiş öneriler ve çoklu dil desteği sunan Go (Golang) tabanlı uçtan uca backend mimarisine liderlik ettim.

İşletme Paneli: İş ortaklarının mülk, rezervasyon, içerik, fiyatlandırma ve politika yönetimini gerçekleştirebileceği, gelişmiş erişim kontrolü ve aktivite takibi sunan sağlam bir yönetim paneli inşa ettim.

İçerik Otomasyonu: Uluslararası büyümeyi hızlandırmak amacıyla, OpenAI ve Perplexity API’lerini kullanarak hızlı içerik üretimi ve görsel oluşturma süreçlerini otomatikleştiren yapay zeka destekli pipeline’lar geliştirdim.

Arama & Keşif: Yazım hatalarına toleranslı, n-gram sorguları ve yerel SEO destekli yüksek performanslı bir keşif motoru (Elasticsearch) tasarladım.

Olay Tabanlı İş Akışları: Bağlama duyarlı event handling ve asenkron rezervasyon, bildirim ve entegrasyon süreçlerini (NATS JetStream) devreye aldım.

DevOps: Hızlı ve güvenilir sürüm yayınları için CI/CD pipeline’ları kurdum ve bulut tabanlı, containerize dağıtımlar gerçekleştirdim.

Teknoloji Yığını: Go, React, MongoDB, Elasticsearch, Docker, NATS, OpenAI API.

Pazar yeri sistemleri, iş ortaklarının onboarding süreçleri, otomatik içerik üretimi ve ölçeklenebilir arama altyapıları konusunda uzmanlık sahibiyim.`,
    },
    en: {
      title: "Founding Software Engineer",
      subtitle: "Restayway (formerly Turistik Rota)",
      description: `Architected and developed Restayway, a modern travel platform connecting travelers with curated destinations and accommodations.

Platform Core: Led the end-to-end backend architecture with Go (Golang), enabling scalable search, personalized recommendations, and multilingual support for B2C and B2B users.

Business Panel: Built a robust admin panel for partners to manage properties, bookings, content, pricing, and policies, with advanced access controls and activity auditing.

Content Automation: Developed AI-powered pipelines using OpenAI and Perplexity APIs for rapid content creation and image generation, accelerating international expansion.

Search & Discovery: Engineered a high-performance discovery engine with Elasticsearch, supporting typo-tolerance, n-gram queries, and local SEO.

Event-Driven Workflows: Implemented context-aware event handling and asynchronous booking, notification, and integration processes (NATS JetStream).

DevOps: Established CI/CD pipelines and containerized cloud deployments for fast, reliable releases.

Tech Stack: Go, React, MongoDB, Elasticsearch, Docker, NATS, OpenAI API.

Expertise in marketplace systems, business onboarding, automated content, and scalable search.`,
    },
  },
  tags: ["golang", "react", "docker", "mongodb"],
  url: "https://restayway.com",
};

const alfa: WorkItem = {
  date: "2021-10-01",
  endDate: "2023-06-01",
  category: "work",
  translation: {
    tr: {
      title: "Software Engineer",
      subtitle: "Alfatek",
      description: `Gerçek zamanlı mesajlaşma özelliklerine sahip, yüksek performanslı, hata toleranslı ve kesintisiz bir kullanıcı deneyimine odaklanan ölçeklenebilir bir C2C sohbet platformu tasarladım ve geliştirdim.

Kullanıcılara uygulama içi ve anlık bildirimlerin güvenilir bir şekilde iletilmesini sağlayan, bağımsız çalışabilen, yüksek verimli ve minimum kesintiyle çalışan sağlam bir asenkron bildirim sistemi inşa ettim.

C2C müşterilerine özel, zengin analizler, kullanıcı yönetimi ve operasyonel kontroller sunan, sezgisel ve duyarlı arayüze sahip tam kapsamlı bir dashboard geliştirdim.

Platformun mevcut altyapısına Progressive Web App (PWA) desteği ekleyerek ve çapraz platform mobil uygulama geliştirme sürecine liderlik ederek, mobil erişilebilirliği ve kullanıcı etkileşimini önemli ölçüde artırdım.

Teknoloji Yığını ve Uzmanlıklar: JavaScript, Vue.js, PHP, MongoDB, NATS, Redis, Kubernetes ve Docker konularında yetkinim. Son kullanıcıya yönelik uygulamalar için dağıtık sistemler ve gerçek zamanlı mimariler tasarlama konusunda deneyim sahibiyim.`,
    },
    en: {
      title: "Software Engineer",
      subtitle: "Alfatek",
      description: `Designed and implemented a scalable C2C chat platform with real-time messaging capabilities, focusing on high performance, fault tolerance, and seamless user experience.

Built a robust asynchronous notification system, architected for standalone operation, high throughput, and minimal downtime, enabling reliable delivery of in-app and push notifications to users.

Developed a full-stack dashboard tailored for C2C clients, providing rich analytics, user management, and operational controls with an intuitive and responsive UI.

Led the development of a cross-platform mobile application and introduced Progressive Web App (PWA) capabilities to the existing platform, significantly enhancing mobile accessibility and user engagement.

Technical Stack & Expertise: Proficient in JavaScript, Vue.js, PHP, MongoDB, NATS, Redis, Kubernetes, and Docker. Experienced in designing distributed systems and real-time architectures for consumer-facing applications.`,
    },
  },
  tags: ["node", "mongodb", "vue", "docker", "kubernetes"],
  url: "https://www.alfatekyazilim.com.tr",
};

const jrAlfa: WorkItem = {
  date: "2021-06-01",
  endDate: "2021-10-01",
  category: "work",
  translation: {
    tr: {
      title: "Jr. Yazılım Mühendisi",
      subtitle: "Alfatek",
      description: `Mevcut sohbet sisteminde mimari iyileştirmeler gerçekleştirerek ölçeklenebilirlik, sürdürülebilirlik ve uzun vadeli bakım kolaylığını önemli ölçüde artırdım.

Hem WebSocket hem de HTTP protokollerini destekleyen, protokolden bağımsız bir iletişim modülü geliştirdim. Böylece farklı istemci uygulamaları için gerçek zamanlı ve geleneksel API entegrasyonlarının sorunsuz bir şekilde sağlanmasını mümkün kıldım.

Teknoloji Yığını: MongoDB, Redis ve JavaScript konularında yetkinim. Backend geliştirme ve dağıtık sistemlerde gerçek zamanlı veri akışının optimizasyonu konusunda deneyim sahibiyim.`,
    },
    en: {
      title: "Jr. Software Engineer",
      subtitle: "Alfatek",
      description: `Implemented architectural enhancements to the legacy chat system, significantly improving its scalability, maintainability, and long-term sustainability.

Developed a protocol-agnostic communication module supporting both WebSocket and HTTP protocols, enabling seamless real-time and traditional API integrations for diverse client applications.

Technical Stack: Proficient in MongoDB, Redis, and JavaScript. Experienced in backend development and optimizing real-time data flow in distributed systems.`,
    },
  },
  tags: ["node", "mongodb"],
  url: "https://www.alfatekyazilim.com.tr",
};

export const WorkItems: WorkItem[] = [mono, restayway, alfa, jrAlfa];
