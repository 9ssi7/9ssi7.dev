import type { AstroCookies } from "astro";
import { type TranslationKeys } from "./translations";
import {
  LocaleCodes,
  defaultLang,
  routes,
  showDefaultLang,
  ui,
  type Locale,
  type RouteKey,
} from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (Object.keys(ui).includes(lang)) return lang as Locale;
  return defaultLang;
}

export function getLangFromPath(path: string) {
  const [, lang] = path.split("/");
  if (Object.keys(ui).includes(lang)) return lang as Locale;
  return defaultLang;
}

export function getLocaleFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return lang;
}

export function isLangSupported(lang: string) {
  return lang in ui;
}

export function getLangFromHeaders(headers: Headers) {
  const lang = headers.get("accept-language")?.split(",")[0]?.split("-")[0];
  if (lang === undefined) return defaultLang;
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

export function getLangFromCookie(cookies: AstroCookies) {
  const lang = cookies.get("lang");
  if (typeof lang !== "string") return defaultLang;
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: TranslationKeys, params?: Record<string, string>) {
    const translation = ui[lang][key];
    if (Array.isArray(translation)) return ui[lang][key][0];
    if (params) {
      return Object.keys(params).reduce(
        (acc, k) => acc.replace(`{{${k}}}`, params[k]),
        translation
      );
    }
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Locale) {
  return function translatePath(path: RouteKey, l: Locale = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation =
      routes[l] !== undefined && routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;
    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

export function useI18n(initLang: Locale) {
  const lang = Object.keys(ui).includes(initLang) ? initLang : defaultLang;
  return {
    lang,
    t: useTranslations(lang),
    p: useTranslatedPath(lang),
    d: (date: string, opts?: Intl.DateTimeFormatOptions): string => {
      return new Date(date).toLocaleDateString(LocaleCodes[lang], {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...opts,
      });
    },
    tv: (key: TranslationKeys): string[] => {
      const translation = ui[lang][key];
      if (Array.isArray(translation)) return translation;
      return [];
    },
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== undefined ? route[path] : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
