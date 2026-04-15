import { createI18n } from "vue-i18n";
import { messages } from "./messages";

const LOCALE_STORAGE_KEY = "rovdex:locale";
const SUPPORTED_LOCALES = ["zh-CN", "en"];

function getInitialLocale() {
  if (typeof window === "undefined") {
    return "zh-CN";
  }
  const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return SUPPORTED_LOCALES.includes(savedLocale) ? savedLocale : "zh-CN";
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "en",
  messages,
});

export { LOCALE_STORAGE_KEY };
