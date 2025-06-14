import type { Translation } from "@/i18n/types";
import type { IconName } from "@/components/Icon.astro";

export type BaseTranslation = {
  title: string;
  subtitle?: string;
  description: string;
};

export type BaseItem = {
  date: string;
  endDate?: string;
  translation: Translation<BaseTranslation>;
  tags?: string[];
  url?: string;
};

export type ProjectType = "personal" | "freelance";

export type WorkItem = BaseItem & {
  category: "work";
};

export type ProjectItem = BaseItem & {
  category: "project";
  type: ProjectType;
};

export type CertificateItem = BaseItem & {
  category: "certificate";
};

export type VolunteerItem = BaseItem & {
  category: "volunteer";
};

export const TagIcons: Record<string, IconName> = {
  node: "nodejs",
  mongodb: "mongodb",
  golang: "go",
  react: "react",
  typescript: "typescript",
  vue: "vue",
  docker: "docker",
  postgres: "postgres",
  kubernetes: "kubernetes",
  cloudflare: "cloudflare",
};

export const TagColors: Record<string, string> = {
  node: "bg-green-500/5 text-green-400",
  mongodb: "bg-green-500/5 text-green-500",
  golang: "bg-blue-500/5 text-blue-500",
  react: "bg-blue-500/5 text-blue-500",
  typescript: "bg-blue-500/5 text-blue-500",
  vue: "bg-green-500/5 text-green-500",
  docker: "bg-blue-500/5 text-blue-500",
  postgres: "bg-blue-500/5 text-blue-500",
  kubernetes: "bg-blue-500/5 text-blue-500",
  cloudflare: "bg-orange-500/5 text-orange-500",
}; 