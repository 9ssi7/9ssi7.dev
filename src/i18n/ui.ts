import { en, tr, type TranslationValues } from "./translations";

export const languages = {
  en: "English",
  tr: "Türkçe",
};

export const showDefaultLang = true;
export const defaultLang = "en";

export const LocaleCodes: Record<Locale, string> = {
  en: "en-US",
  tr: "tr-TR",
};

export const ui: Record<keyof typeof languages, TranslationValues> = {
  en: en,
  tr: tr,
} as const;

const enRoutes = {
  "": "",
};

const trRoutes = {
  "": "",
};

export const routes: Record<keyof typeof languages, Record<string, string>> = {
  en: enRoutes,
  tr: trRoutes,
} as const;

export type RouteKey = keyof typeof enRoutes;
export type Locale = keyof typeof ui;

export enum Locales {
  en = "en",
  tr = "tr",
}
