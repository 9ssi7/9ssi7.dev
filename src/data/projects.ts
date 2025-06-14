import type { ProjectItem } from "./types";

export const ProjectItems: ProjectItem[] = [
  {
    date: "2025-02-02",
    endDate: "2025-02-02",
    category: "project",
    type: "personal",
    translation: {
      tr: {
        title: "Katkıda Bulunan",
        subtitle: "Tarotica",
        description:
          `Sadece 48 saatte Esra ile birlikte Tarotica’yı geliştirdik; kişiselleştirilmiş tarot ve fal deneyimi sunan bir mobil uygulama. Fikir, marka, API, landing page ve Expo ile uygulama geliştirme dahil tüm süreci tamamladık. Uygulamayı mağazalar için optimize edip TestFlight’ta beta testine açtık.
Teknolojiler: Cloudflare (D1, R2, KV, Queue, Workers, Pages), Expo, ChatGPT API, AWS SES, Figma, Canva AI.`,
      },
      en: {
        title: "Contributor",
        subtitle: "Tarotica",
        description:
          `In just 48 hours, Esra and I developed Tarotica, a mobile app for personalized tarot readings and fortune-telling. From idea and branding to API, landing page, and full app development with Expo, we covered the entire process. We also optimized the app for app stores and launched beta testing on TestFlight.
Tech stack: Cloudflare (D1, R2, KV, Queue, Workers, Pages), Expo, ChatGPT API, AWS SES, Figma, Canva AI.`,
      },
    },
    tags: ["node", "cloudflare"],
    url: "https://tarotic.app",
  },
  {
    date: "2024-08-30",
    endDate: "2025-01-01",
    category: "project",
    type: "personal",
    translation: {
      tr: {
        title: "Katkıda Bulunan",
        subtitle: "NomadWork",
        description:
          "Nomadwork uygulamasına backend tarafında katkıda bulundum. Bu süreçte Golang, Postgres ve Docker teknolojileri ile çalıştım.",
      },
      en: {
        title: "Contributor",
        subtitle: "NomadWork",
        description:
          "I contributed to the Nomadwork application on the backend side. During this process, I worked with Golang, Postgres and Docker technologies.",
      },
    },
    tags: ["golang", "postgres", "docker"],
    url: "https://nomadwork.app",
  },
  {
    date: "2022-07-01",
    endDate: "2022-10-01",
    category: "project",
    type: "personal",
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
]; 