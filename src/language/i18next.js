import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        dashbord: "dashbord",
        Strategic_menu: "Strategic menu",
        Strategic_menu2: "Strategic menu2",
        roleList:"Roles List",
        roleEdit:"Roles Edit",
       usersList:"Users List",
       CountryList:"Country List",
       CountryAdd:"Add Country",
       search:"Search",
       ProvinceList:'Province List',
       addProvince:"Add Province",
       provinceEdit:"Edit Province information ",
       countryEdit:"Edit Country information ",
       enterToPanel:"Enter to Admin Panel",
       email:"Email",
       password:"Password",
       passwordForget:'password recovery',
       save:'save',
       tradition:'tradition',
       foodCulture:' Food Culture',
       title:'title',
       PopularCondiments:'Popular Condiments',
       picture:'picture',
       operation:'Operation'



      },
    },

    fa: {
      translation: {
        dashbord: "داشبورد",
        Strategic_menu: "منو راهبردی",
        Strategic_menu2: "منو راهبردی 2",
        roleList:"لیست نقش ها",
        roleEdit:"ویرایش نقش ها",
        usersList:"لیست کاربران",
        CountryList:"لیست کشورها",
        CountryAdd:"افزودن کشور",
        search:"جست و جو",
        ProvinceList:'لیست استان ها',
        addProvince:"افزودن استان",
        provinceEdit:"ویرایش اطلاعات استان",
        countryEdit:"ویرایش اطلاعات کشور ",
        enterToPanel:"ورود به پنل مدیریت",
        email:"ایمیل",
        password:"کلمه عبور",
        passwordForget:'بازیابی کلمه عبور',
        save:'ذخیره',
        tradition:'سنت',
        foodCulture:' فرهنگ غدایی',
        title:'عنوان',
        PopularCondiments:'چاشنی های محبوب',
        picture:'عکس',
        operation:'عملیات'





      },
    },

    ar: {
      translation: {
        dashbord: "الداشبورد",
        Strategic_menu: "قائمة استراتيج",
        Strategic_menu2: "قائمة استراتيجي" + "2",
        roleList:"قائمه الادوار",
        roleEdit:"تحریر الادوار",
        usersList:"قائمه المستخدمین",
        CountryList:"قائمه البلاد",
        CountryAdd:"اضف دوله",
        search:"بحث",
        ProvinceList:'قائمه المقاطعات',
        addProvince:"اضف المقاطعه",
        provinceEdit:"تحریر معلومات المقاطعه",
        countryEdit:"  تحریر معلومات بلاد ",
        enterToPanel:"ادخل الی لوحه الاداره",
        email:"البريد الإلكتروني",
        password:" کلمه المرور",
        passwordForget:' استعادة كلمة السر',
        save:'حفظ',
        tradition:'التقليد',
        foodCulture:' ثقافه الاکل',
        title:'عنوان',
        PopularCondiments:'التوابل الشعبیه',
        picture:'صورة',
        operation:'العملية'



      },
    },
  },

  lng: localStorage.getItem("lng"),
});
