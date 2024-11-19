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
    lng: "NP",
    fallbackLng: "NP",
    returnObjects: true,
    resources: {
      EN: {
        translation: { ...engLng },
      },
      NP: { translation: { ...npLng } },
    },
  });

export { i18next };
