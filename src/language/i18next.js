import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        dashbord: "dashbord",
        Strategic_menu: "Strategic menu",
        Strategic_menu2: "Strategic menu2",
      },
    },

    fa: {
      translation: {
        dashbord: "داشبورد",
        Strategic_menu: "منو راهبردی",
        Strategic_menu2: "منو راهبردی 2",
      },
    },

    ar: {
      translation: {
        dashbord: "الداشبورد",
        Strategic_menu: "قائمة استراتيج",
        Strategic_menu2: "قائمة استراتيجي" + "2",
      },
    },
  },

  lng: localStorage.getItem("lng"),
});
