import { defineMiddleware } from "astro:middleware";
import { getLangFromPath } from "./i18n/utils";

export const onRequest = defineMiddleware((context, next) => {
    const lang = getLangFromPath(context.url.pathname);
    context.locals.lang = lang;
    return next();
});