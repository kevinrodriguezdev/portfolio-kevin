import { translations, type Lang, type TranslationKey } from "./translations";

export const defaultLang: Lang = "es";

export function getLangFromUrl(url: URL): Lang {
  const params = url.searchParams.get("lang");
  if (params === "en") return "en";
  return "es";
}

export function t(key: TranslationKey, lang: Lang = defaultLang): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}
