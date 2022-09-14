import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        dashbord: "dashbord",
        Strategic_menu: "Strategic menu",
        Strategic_menu2: "Strategic menu2",
        addrole: "Add new Role",
        roleList: "Roles List",
        roleEdit: "Roles Edit",
        usersList: "Users List",
        CountryList: "Country List",
        CountryAdd: "Add Country",
        search: "Search",
        ProvinceList: "Province List",
        addProvince: "Add Province",
        provinceEdit: "Edit Province information ",
        countryEdit: "Edit Country information ",
        enterToPanel: "Enter to Admin Panel",
        email: "Email",
        password: "Password",
        passwordForget: "password recovery",
        save: "save",
        tradition: "tradition",
        foodCulture: " Food Culture",
        title: "title",
        PopularCondiments: "Popular Condiments",
        picture: "picture",
        operation: "Operation",
        existence: "existence",
        Description: "description",
        UsersInThisRole: "Users in this role",
        existenceShow: "Show Existence",
        existenceAdd: "Add Existence",
        existenceEdit: "Edit Existence",
        existenceDelete: "Delete Existence",
        existencedeclaration: "declaration Existence ",

        myprofile: "My Profile",
        myprojects: "My Projects",
        language: "language",
        settingAccount: "Setting Account",
        exit: "Exit",

        showChecbox:
          " By ticking this item, it is possible to show the desired entity ",
        addChecbox:
          " By ticking this item, it is possible to add to the desired entity ",
        editChecbox:
          "By ticking this item, it is possible to edit the desired entity",
        deleteChecbox:
          "By ticking this item, the possibility of deletion is applied to the desired entity",
        publishChecbox:
          "By checking this item, the possibility of declaration is applied to the desired entity",

        FetchingError: "An error occurred while receiving data",

        preparing: "preparing",

        deleteMassage: "?Are you sure about the deletion",
        yes: "Yes",
        No: "Cancel the operation",
        showSuccess: "Successful",
        showUnSuccess: "UnSuccessful",
      },
    },

    fa: {
      translation: {
        dashbord: "داشبورد",
        Strategic_menu: "منو راهبردی",
        Strategic_menu2: "منو راهبردی 2",
        addrole: "افزودن نقش جدید",
        roleList: "لیست نقش ها",
        roleEdit: "ویرایش نقش ها",
        usersList: "لیست کاربران",
        CountryList: "لیست کشورها",
        CountryAdd: "افزودن کشور",
        search: "جست و جو",
        ProvinceList: "لیست استان ها",
        addProvince: "افزودن استان",
        provinceEdit: "ویرایش اطلاعات استان",
        countryEdit: "ویرایش اطلاعات کشور ",
        enterToPanel: "ورود به پنل مدیریت",
        email: "ایمیل",
        password: "کلمه عبور",
        passwordForget: "بازیابی کلمه عبور",
        save: "ذخیره",
        tradition: "سنت",
        foodCulture: " فرهنگ غدایی",
        title: "عنوان",
        PopularCondiments: "چاشنی های محبوب",
        picture: "عکس",
        operation: "عملیات",
        existence: "موجودیت",
        Description: "توضیحات",
        UsersInThisRole: "کاربران در این نقش",
        existenceShow: "نمایش موجودیت",
        existenceAdd: "اضافه کردن موجودیت",
        existenceEdit: "ویرایش موجودیت",
        existenceDelete: "حذف  موجودیت",
        existencedeclaration: "عمومی کردن موجودیت ",

        myprofile: "پروفایل من",
        myprojects: "پروژه های من",
        language: "زبان",
        settingAccount: "اکانت تنظیمات",
        exit: "خروج",

        showChecbox:
          "با افرودن این آیتم فقط امکان نمایش در مجودیت مورد نظر اعمال می شود",
        addChecbox:
          "با افرودن این آیتم امکان افزودن در مجودیت مورد نظر اعمال می شود",
        editChecbox:
          "با تیک زدن این آیتم امکان ویرایش در موجودیت مورد نظر اعمال میشود",
        deleteChecbox:
          "با تیک زدن این آیتم امکان حذف در موجودیت مورد نظر اعمال میشود",
        publishChecbox:
          "با تیک زدن این آیتم امکان عمومی سازی در موجودیت مورد نظر اعمال میشود",

        FetchingError: "خطایی در دریافت داده رخ داده است",

        preparing: "درحال اماده سازی",

        deleteMassage: "ایا از حذف مطمئن هستید؟",
        yes: "بله",
        No: "لغو عملیات",
        showSuccess: "عملیات انجام شد",
        showUnSuccess: "عملیات ناموفق بود",
      },
    },

    ar: {
      translation: {
        dashbord: "الداشبورد",
        Strategic_menu: "قائمة استراتيج",
        Strategic_menu2: "قائمة استراتيجي" + "2",
        addrole: "اضف الادوار",
        roleList: "قائمه الادوار",
        roleEdit: "تحریر الادوار",
        usersList: "قائمه المستخدمین",
        CountryList: "قائمه البلاد",
        CountryAdd: "اضف دوله",
        search: "بحث",
        ProvinceList: "قائمه المقاطعات",
        addProvince: "اضف المقاطعه",
        provinceEdit: "تحریر معلومات المقاطعه",
        countryEdit: "  تحریر معلومات بلاد ",
        enterToPanel: "ادخل الی لوحه الاداره",
        email: "البريد الإلكتروني",
        password: " کلمه المرور",
        passwordForget: " استعادة كلمة السر",
        save: "حفظ",
        tradition: "التقليد",
        foodCulture: " ثقافه الاکل",
        title: "عنوان",
        PopularCondiments: "التوابل الشعبیه",
        picture: "صورة",
        operation: "العملية",
        existence: "وجود",
        Description: "وصف",
        UsersInThisRole: "المستخدمون فی هذا الدور",
        existenceShow: "اظهار الوجود",
        existenceAdd: "أضف الكيان",
        existenceEdit: "تحریر الکیان",
        existenceDelete: "احذف الکیان",
        existencedeclaration: "اعلان الکیان",

        myprofile: "ملفي ",
        myprojects: "مشاريعي",
        language: "الغه",
        settingAccount: "اعداد الحساب ",
        exit: "مخرج",

        showChecbox:
          "من خلال تحديد هذا العنصر ، يتم تطبيق إمكانية العرض فقط في الكيان المطلوب",
        addChecbox:
          "من خلال تحديد هذا العنصر ، من الممكن إضافته إلى الكيان المطلوب",
        editChecbox:
          "من خلال تحديد هذا العنصر ، من الممكن تحرير الكيان المطلوب",
        deleteChecbox:
          "من خلال تحديد هذا العنصر ، يتم تطبيق إمكانية الحذف على الكيان المطلوب",
        publishChecbox:
          "من خلال تحديد هذا العنصر ، يتم تطبيق إمكانية التعميم على الكيان المطلوب",

        FetchingError: "حدث خطأ أثناء تلقي البيانات",

        preparing: "جار التحمیل",

        deleteMassage: "هل أنت متأكد من الحذف؟",
        yes: "نعم",
        No: " قم بإلغاء العملیه ",
        showSuccess: `كان ناجحا
       `,
        showUnSuccess: `كان غیر ناجحا`,
      },
    },
  },

  lng: localStorage.getItem("lng"),
});
