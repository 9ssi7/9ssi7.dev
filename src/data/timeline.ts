import type { Translation } from "@/i18n/types";
import type { IconName } from "@/components/Icon.astro";
export type TimelineCategory =
  | "work"
  | "project"
  | "certificate"
  | "volunteer"
  | "publication"
  | "open-source";

type TimelineTag =
  | "node"
  | "mongodb"
  | "golang"
  | "react"
  | "typescript"
  | "vue"
  | "docker"
  | "postgres"
  | "kubernetes";

type TimelineTranslation = {
  title: string;
  subtitle?: string;
  description: string;
};

export type Timeline = {
  date: string;
  endDate?: string;
  category: TimelineCategory;
  translation: Translation<TimelineTranslation>;
  tags?: TimelineTag[];
  url?: string;
};

export const TimelineCategoryIcons: Record<TimelineCategory,  IconName> = {
  work: "building2",
  project: "code",
  certificate: "award",
  volunteer: "users",
  publication: "book",
  "open-source": "git-branch",
};

export const TimelineTagIcons: Record<TimelineTag,  IconName> = {
  node: "nodejs",
  mongodb: "mongodb",
  golang: "go",
  react: "react",
  typescript: "typescript",
  vue: "vue",
  docker: "docker",
  postgres: "postgres",
  kubernetes: "kubernetes",
};

export const TimelineCategoryColors: Record<TimelineCategory, string> = {
  work: "bg-blue-500/5 text-blue-500",
  project: "bg-yellow-500/5 text-yellow-500",
  certificate: "bg-purple-500/5 text-purple-500",
  volunteer: "bg-red-500/5 text-red-500",
  publication: "bg-pink-500/5 text-pink-500",
  "open-source": "bg-blue-500/5 text-blue-500",
};

export const TimelineTagColors: Record<TimelineTag, string> = {
  node: "bg-green-500/5 text-green-400",
  mongodb: "bg-green-500/5 text-green-500",
  golang: "bg-blue-500/5 text-blue-500",
  react: "bg-blue-500/5 text-blue-500",
  typescript: "bg-blue-500/5 text-blue-500",
  vue: "bg-green-500/5 text-green-500",
  docker: "bg-blue-500/5 text-blue-500",
  postgres: "bg-blue-500/5 text-blue-500",
  kubernetes: "bg-blue-500/5 text-blue-500",
};

export const TimelineCategoriesAsResponsiveDate: TimelineCategory[] = ["work"];
export const TimelineCategoriesAsStaticDate: TimelineCategory[] = [
  "certificate",
  "publication",
];

const TimelineItems: Timeline[] = [
  {
    date: "2025-01-08",
    category: "publication",
    translation: {
      tr: {
        title: "Weak Paket ile Go'da Verimli Kaynak Yönetimi",
        subtitle: "Medium", 
        description:
          "Pratik bir Server Sent Events Demosu ile",
      },
      en: {
        title: "Efficient Resource Management in Go with Weak Package",
        subtitle: "Medium",
        description:
          "with a practical Server Sent Events Demo",
      },
    },
    tags: ["golang"],
    url: "https://blog.9ssi7.dev/efficient-resource-management-in-go-with-weak-package-2e2d3542c6cc",
  },

  {
    date: "2025-01-08",
    category: "publication",
    translation: {
      tr: {
        title: "Go'da Iterator Deseni Kullanma",
        subtitle: "Medium", 
        description:
          "Birleşik Veri Kaynağı Entegrasyonu için Go'da Iterator Deseni Kullanma",
      },
      en: {
        title: "Leveraging Go’s Iterator Pattern",
        subtitle: "Medium",
        description:
          "for Unified Data Source Integration",
      },
    },
    tags: ["golang"],
    url: "https://engineering.teknasyon.com/leveraging-gos-iterator-pattern-30b7d3be783f",
  },
  
  {
    date: "2025-01-04",
    category: "publication",
    translation: {
      tr: {
        title: "Reflection'ın Go'da Performans Kritik Uygulamalar İçin Kullanılmasının Neden Tercih Edilmemesi Gerektiğini Anlatan Bir Makale",
        subtitle: "Medium",
        description:
          "Reflection'ın Go'da performans kritik uygulamalar için kullanılmasının neden tercih edilmemesi gerektiğini anlatan bir makale.",
      },
      en: {
        title: "Why You Should Avoid Reflection in Go for Performance-Critical Applications",
        subtitle: "Medium",
        description:
          "An article explaining why reflection should not be used for performance-critical applications in Go.",
      },
    },
    tags: ["golang"],
    url: "https://blog.9ssi7.dev/why-you-should-avoid-reflection-in-go-for-performance-critical-applications-1e835b341b35",
  },
  {
    date: "2024-11-12",
    category: "publication",
    translation: {
      tr: {
        title: "Şifresiz Mimari",
        subtitle: "Medium",
        description:
          "Geleneksel Kimlik Doğrulama Sistemlerinin Sorunlarını Çözmek",
      },
      en: {
        title: "Passwordless Architecture",
        subtitle: "Medium",
        description:
          "Solving the Problems of Traditional Authentication Systems",
      },
    },
    tags: ["golang"],
    url: "https://engineering.turistikrota.com/passwordless-architecture-18d03e4dcb6a",
  },

  {
    date: "2024-10-7",
    category: "publication",
    translation: {
      tr: {
        title: "Go'da Fonksiyonel Seçenekleri Yakalama",
        subtitle: "Medium",
        description:
          "Go'da fonksiyonel seçenekleri yakalama hakkında bir makale.",
      },
      en: {
        title: "Embracing Functional Options in Go",
        subtitle: "Medium",
        description:
          "An article about capturing functional options in Go.",
      },
    },
    tags: ["golang"],
    url: "https://blog.9ssi7.dev/embracing-functional-options-in-go-05e00381f23e",
  },


















  {
    date: "2024-08-30",
    endDate: "2025-01-01",
    category: "project",
    translation: {
      tr: {
        title: "Katkıda Bulunan",
        subtitle: "NomadWork",
        description:
          "Nomadwork uygulamasına backend tarafında katkıda bulundum. Bu süreçte Golang, Postgres ve Docker teknolojileri ile çalıştım.",
      },
      en: {
        title: "Contributor",
        subtitle: "Nomadwork",
        description:
          "I contributed to the Nomadwork application on the backend side. During this process, I worked with Golang, Postgres and Docker technologies.",
      },
    },
    tags: ["golang", "postgres", "docker"],
    url: "https://nomadwork.app",
  },
  {
    date: "2024-08-31",
    category: "publication",
    translation: {
      tr: {
        title: "Go'nun Ondalık Dilemması: decimal vs Standart Kütüphane Karşılaştırması",
        subtitle: "Medium",
        description:
          "Go'da decimal paketini standart kütüphanenin decimal uygulaması ile karşılaştıran bir makale.",
      },
      en: {
        title: "Go’s Decimal Dilemma: decimal vs Standard Library Showdown",
        subtitle: "Medium",
        description:
          "An article comparing the decimal package with the standard library's decimal implementation in Go.",
      },
    },
    tags: ["golang"],
    url: "https://9ssi7.medium.com/gos-decimal-dilemma-decimal-vs-standard-library-showdown-465f30ebab79",
  },
  {
    date: "2024-07-21",
    category: "publication",
    translation: {
      tr: {
        title: "Golang'da Gömülü Olarak Go Modüllerini Paylaşma",
        subtitle: "Medium",
        description:
          "Golang'da birden fazla Go modülünü tek bir depoda nasıl yönetebileceğinizi anlatan bir makale.",
      },
      en: {
        title: "Sharing Go Modules as Nested",
        subtitle: "Medium",
        description:
          "An article explaining how to manage multiple Go modules in a single repository.",
      },
    },
    tags: ["golang", "postgres"],
    url: "https://9ssi7.medium.com/sharing-go-modules-as-nested-ad64e608b681",
  },
  {
    date: "2024-07-01",
    category: "open-source",
    translation: {
      tr: {
        title: "gopre: Modern Mimariler için Go Proje Şablonu",
        subtitle: "Halka Açık Şablon",
        description:
          "düşünülmüş, standartlar uygulanmış, modern ve kabul edilebilir bir başlangıç noktası",
      },
      en: {
        title: "gopre: A Go Project Template for Modern Architectures",
        subtitle: "Public Template",
        description:
          "a well thought out, standards applied, modern and acceptable starting point",
      },
    },
    tags: ["golang", "postgres", "mongodb", "kubernetes", "docker"],
    url: "https://github.com/9ssi7/gopre",
  },
  {
    date: "2024-07-01",
    category: "open-source",
    translation: {
      tr: {
        title: "txn: Dağıtık İşlemler için Genel Kütüphane",
        subtitle: "Açık Kaynak Kütüphane",
        description:
          "İş mantığını depolara indirgemeden modern mimarilerde veritabanı bağımsızlığı ve veri tutarlılığı sağlamayı amaçlayan bir arayüz.",
      },
      en: {
        title: "txn: Generic Distributed Transaction Management for Go",
        subtitle: "Open Source Library",
        description:
          "An interface that aims to provide database independence and data consistency in modern architectures without reducing business logic to repositories.",
      },
    },
    tags: ["golang", "postgres", "mongodb"],
    url: "https://github.com/9ssi7/txn",
  },
  {
    date: "2024-06-03",
    category: "publication",
    translation: {
      tr: {
        title: "PostgreSQL'de JSONB ile I18n Yönetimi",
        subtitle: "Medium",
        description:
          "Golang'da i18n yönetmek için PostgreSQL'in JSONB veri tipini nasıl kullanabileceğinizi anlatan bir makale.",
      },
      en: {
        title: "Mastering I18n in Golang with PostgreSQL’s JSONB",
        subtitle: "Medium",
        description:
          "An article explaining how to use PostgreSQL's JSONB data type to manage i18n in Golang.",
      },
    },
    tags: ["golang", "postgres"],
    url: "https://9ssi7.medium.com/mastering-i18n-in-golang-with-postgresqls-jsonb-2631ad50376a",
  },
  {
    date: "2023-12-19",
    category: "publication",
    translation: {
      tr: {
        title: "Daha İyi Web Performansı için Görüntü Yüklemeyi Optimize Etme",
        subtitle: "Medium",
        description:
          "Web performansını artırmak için görüntü yükleme süreçlerini nasıl optimize edebileceğinizi anlatan bir makale.",
      },
      en: {
        title: "Optimizing Image Loading for Better Web Performance",
        subtitle: "Medium",
        description:
          "An article explaining how to optimize image loading processes to improve web performance.",
      },
    },
    tags: ["react", "typescript"],
    url: "https://9ssi7.medium.com/optimizing-image-loading-for-better-web-performance-381dbafba496",
  },
  {
    date: "2023-09-26",
    category: "publication",
    translation: {
      tr: {
        title: "Cihazlarım Özelliği: Birden Fazla İstemcide Oturumları Yönetme",
        subtitle: "Medium",
        description:
          "Birden fazla cihazda oturumları yönetmek için nasıl bir yapı oluşturabileceğinizi anlatan bir makale.",
      },
      en: {
        title: "My Devices Feature: Managing Sessions on Multiple Clients",
        subtitle: "Medium",
        description:
          "An article explaining how to create a structure to manage sessions on multiple devices.",
      },
    },
    url: "https://9ssi7.medium.com/the-my-devices-feature-multiple-clients-1b77f35961c3",
  },
  {
    date: "2023-06-01",
    category: "work",
    translation: {
      tr: {
        title: "Yazılım Geliştirici",
        subtitle: "MonoPayments",
        description:
          "MonoPayments'ta yazılım geliştirici olarak çalışmaktayım. Bu süreçte Golang, Vue, Docker, Redis ve Postgres teknolojileri ile birçok farklı mimariyi deneyimleme fırsatı buldum.",
      },
      en: {
        title: "Software Developer",
        subtitle: "MonoPayments",
        description:
          "I work as a software developer at MonoPayments. During this process, I had the opportunity to experience many different architectures with Golang, Vue, Docker, Redis and Postgres technologies.",
      },
    },
    tags: ["golang", "vue", "docker", "postgres"],
    url: "https://monopayments.com",
  },
  {
    date: "2023-06-16",
    category: "publication",
    translation: {
      tr: {
        title: "Harder, Better, Faster, Stronger Dockerfile",
        subtitle: "Medium",
        description:
          "Dockerfile'larınızı daha hızlı ve güvenli bir şekilde oluşturmak için bazı ipuçları.",
      },
      en: {
        title: "Harder, Better, Faster, Stronger Dockerfile",
        subtitle: "Medium",
        description:
          "Tips for building your Dockerfiles faster and more securely.",
      },
    },
    tags: ["docker"],
    url: "https://medium.com/goturkiye/harder-better-faster-stronger-dockerfile-7f5f5abd8c2f",
  },
  {
    date: "2023-08-01",
    translation: {
      tr: {
        title: "İleri Girişimcilik Eğitimi",
        subtitle: "KOSGEB",
        description:
          "KOSGEB tarafından düzenlenen İleri Girişimcilik Eğitimi'ne katıldım. KSB01UGE0111217267 numaralı sertifikaya sahibim. Bu eğitimde iş fikri geliştirme, iş planı hazırlama, pazarlama ve finansal konular hakkında bilgi edindim.",
      },
      en: {
        title: "Advanced Entrepreneurship Training",
        subtitle: "KOSGEB",
        description:
          "I attended the Advanced Entrepreneurship Training organized by KOSGEB. I have the certificate number KSB01UGE0111217267. In this training, I gained knowledge about business idea development, business plan preparation, marketing and financial issues.",
      },
    },
    category: "certificate",
    url: "https://www.turkiye.gov.tr/belge-dogrulama",
  },
  {
    date: "2023-04-01",
    translation: {
      tr: {
        title: "Geleneksel Girişimcilik Eğitimi",
        subtitle: "KOSGEB",
        description:
          "KOSGEB tarafından düzenlenen Geleneksel Girişimcilik Eğitimi'ne katıldım. KSB01UGE0110688366 numaralı sertifikaya sahibim. Bu eğitimde iş fikri geliştirme, iş planı hazırlama, pazarlama ve finansal konular hakkında bilgi edindim.",
      },
      en: {
        title: "Traditional Entrepreneurship Training",
        subtitle: "KOSGEB",
        description:
          "I attended the Traditional Entrepreneurship Training organized by KOSGEB. I have the certificate number KSB01UGE0110688366. In this training, I gained knowledge about business idea development, business plan preparation, marketing and financial issues.",
      },
    },
    category: "certificate",
    url: "https://www.turkiye.gov.tr/belge-dogrulama",
  },
  {
    date: "2023-02-01",
    category: "volunteer",
    translation: {
      tr: {
        title: "Gönüllü Yazılım Geliştirici",
        subtitle: "Açık Yazılım Ağı (AYA)",
        description:
          "Açık Yazılım Ağı'nda gönüllü yazılım geliştirici olarak çalışmaktayım. Bu süreçte açık kaynak projelerine katkıda bulunuyorum.",
      },
      en: {
        title: "Volunteer Software Developer",
        subtitle: "Açık Yazılım Ağı (AYA)",
        description:
          "I work as a volunteer software developer at the Open Source Network. During this process, I contribute to open source projects.",
      },
    },
    tags: ["node", "react", "golang", "typescript"],
    url: "https://acikyazilimagi.com",
  },
  {
    date: "2023-02-01",
    category: "project",
    translation: {
      tr: {
        title: "Kurucu",
        subtitle: "Turistik Rota",
        description:
          "Turistikrota projesini hayata geçirdim. Bu proje ile Türkiye'nin turistik bölgelerini ve rotalarını keşfetme fırsatı sunarak çevrimiçi rezervasyon sistemi sunmayı amaçladık.",
      },
      en: {
        title: "Founder",
        subtitle: "Turistik Rota",
        description:
          "I launched the Turistikrota project. With this project, we aimed to provide an online reservation system by offering the opportunity to explore Turkey's touristic regions and routes.",
      },
    },
    tags: ["golang", "mongodb", "react", "docker"],
    url: "https://turistikrota.com",
  },
  {
    date: "2022-07-01",
    endDate: "2022-10-01",
    category: "project",
    translation: {
      tr: {
        title: "Geliştirici",
        subtitle: "GalataJS Framework",
        description:
          "GalataJS NodeJS framework'ünü geliştirdim. Bu framework ile NodeJS projelerini daha hızlı ve güvenli bir şekilde geliştirmeyi amaçladık.",
      },
      en: {
        title: "Developer",
        subtitle: "GalataJS Framework",
        description:
          "I developed the GalataJS NodeJS framework. With this framework, we aimed to develop NodeJS projects faster and more securely.",
      },
    },
    tags: ["node", "typescript"],
    url: "https://github.com/galatajs",
  },
  {
    date: "2021-10-01",
    endDate: "2023-06-01",
    category: "work",
    translation: {
      tr: {
        title: "Full Stack Developer",
        subtitle: "Alfatek",
        description:
          "Alfatek'te Full stack Developer rolüne terfi ettim. Bu süreçte NodeJS, Php, MongoDB, MySQL, Redis, VueJS, Docker ve Kubernetes teknolojileri ile çalıştım.",
      },
      en: {
        title: "Full Stack Developer",
        subtitle: "Alfatek",
        description:
          "I was promoted to Full stack Developer role at Alfatek. I worked with NodeJS, Php, MongoDB, MySQL, Redis, VueJS, Docker and Kubernetes technologies.",
      },
    },
    tags: ["node", "mongodb", "vue", "docker", "kubernetes"],
    url: "https://www.alfatekyazilim.com.tr",
  },
  {
    date: "2021-06-01",
    endDate: "2021-10-01",
    category: "work",
    translation: {
      tr: {
        title: "Jr. Full Stack Developer",
        subtitle: "Alfatek",
        description:
          "Alfatek'te Jr Full stack Developer olarak yazılım geliştirme süreçlerine katıldım. Bu süreçte Socket.io, NodeJS ve MongoDB teknolojileri ile çalıştım.",
      },
      en: {
        title: "Jr. Full Stack Developer",
        subtitle: "Alfatek",
        description:
          "I joined the software development processes as a Jr Full stack Developer at Alfatek. I worked with Socket.io, NodeJS and MongoDB technologies.",
      },
    },
    tags: ["node", "mongodb"],
    url: "https://www.alfatekyazilim.com.tr",
  },
];

export const AllCategories: TimelineCategory[] = [
  "work",
  "project",
  "certificate",
  "volunteer",
  "publication",
  "open-source",
] as const;

export function isTimelineCategory(
  category: string | null
): category is TimelineCategory {
  if (category === null) return false;
  return [
    "work",
    "project",
    "certificate",
    "volunteer",
    "publication",
    "open-source",
  ].includes(category);
}

export default TimelineItems;
