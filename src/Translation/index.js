import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//import Languages Files
import enJson from "./en.json";
import arJson from "./ar.json";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang"),
  fallbackLng: "ar",
  resources: {
    en: {
      translation: {
        ...enJson,
      },
    },
    ar: {
      translation: {
        ...arJson,
      },
    },
  },
});
export default i18n;
