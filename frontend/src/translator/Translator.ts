import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import engLng from "../locales/ENG/ENG.json";
import npLng from "../locales/NP/NP.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    returnObjects: true,
    resources: {
      EN: {
        translation: { ...engLng },
      },
      NP: {
        translation: { ...npLng },
      },
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"], // Check localStorage first
      caches: ["localStorage"], // Save the language in localStorage
    },
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export { i18next };
