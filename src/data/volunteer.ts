import type { VolunteerItem } from "./types";

export const VolunteerItems: VolunteerItem[] = [
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
]; 