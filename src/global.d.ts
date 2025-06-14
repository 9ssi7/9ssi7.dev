import type { Locale } from "./i18n/ui";

declare global {
	namespace App {
		interface Locals {
			lang: Locale
		}
	}
}