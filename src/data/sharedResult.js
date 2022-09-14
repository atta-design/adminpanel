export const sharedResults = [
    {
        status: 0,
        message: localStorage.getItem('lng')==='en'?'unknown':
        (localStorage.getItem('lng')==='fa'?'نامعلوم':'مجهول'),
    },
    {
        status: 1,
        message: localStorage.getItem('lng')==='en'?'successful':
        (localStorage.getItem('lng')==='fa'?'موقفیت آمیز':'ناجح'),
    },
    {
        status: 2,
        message:localStorage.getItem('lng')==='en'?'Unsuccessful':
        (localStorage.getItem('lng')==='fa'?'عملیات ناموفق':'غیرناجح'),
    },
    {
        status: 6,
        message: "خالی نیست"
    },
    {
        status: 7,
        message: "توکن نامعتبر است"
    },
    {
        status: 8,
        message: "درخواست نامعتبر است"
    },
    {
        status: 9,
        message: "رد دسترسی"
    },
    //user
    {
        status: 10,
        message: localStorage.getItem('lng')==='en'?'Password or email is invalid':
        (localStorage.getItem('lng')==='fa'?'رمز یا ایمیل نامعتبر است':'کلمه المرور او برید الالکترونی غیر صالح'),
    },
    {
        status: 11,
        message: "کد نامعتبر است"
    },
    {
        status: 12,
        message:localStorage.getItem('lng')==='en'?'User not found':
        (localStorage.getItem('lng')==='fa'?'کاربر یافت نشد':'المستخدم لیس موجود'),
    },
    {
        status: 13,
        message: "کاربر خارج شد"
    },
    {
        status: 14,
        message: "شماره نامعتبر است"
    },
    {
        status: 50,
        message:localStorage.getItem('lng')==='en'?' Not found':
        (localStorage.getItem('lng')==='fa'?' یافت نشد':' لیس موجود'),
    },
    {
        status: 51,
        message: "وجود ندارد"
    },
    {
        status: 52,
        message: "نقش ندارد"
    }
]