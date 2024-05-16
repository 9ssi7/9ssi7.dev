import type { AstroCookies } from "astro";
import { routes, type Locale, type RouteKey } from "./ui";
import { getLangFromCookie, getLangFromUrl, useTranslatedPath } from "./utils";

type Muster = {
  lang: Locale;
  route: RouteKey;
};

export default function initI18n(
  url: URL,
  cookies: AstroCookies,
  muster?: Muster
) {
  const lang = getLangFromUrl(url);
  const cookieLang = getLangFromCookie(cookies);
  const p = useTranslatedPath(cookieLang);

  if (
    muster &&
    routes[lang][muster.route] !== routes[muster.lang][muster.route]
  ) {
    return p(muster.route);
  }
}
