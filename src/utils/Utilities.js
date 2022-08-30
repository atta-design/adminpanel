/* eslint-disable */

import CryptoJS from 'crypto-js';
import moment from 'moment-jalaali';

let hashKey = '03d9cd5b67194c37b338f0f5cadd294b';

export const NESHAN_API_KEY = 'web.wwUPDCwcpgTsrx2XkakyUSMSya4fZEH2zMqQjrDD';
export const NESHAN_SERVICE_API_KEY = 'service.iZmfqF14K4gxsoEAf8wPXF81OanM74cjm5Uo5KpQ';

export const encrypt = (str) => {
  return CryptoJS.AES.encrypt(str, hashKey).toString();
};

export const decrypt = (str) => {
  let dec = CryptoJS.AES.decrypt(str, hashKey);
  return dec.toString(CryptoJS.enc.Utf8);
};

export const convertStringToUrlSafe = (str) => {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const persianNumber = (num) => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

export const getCurrentMonth = () => {
  return moment().jMonth() + 1;
};

export const getCurrentYear = () => {
  return moment().jYear();
};

export const fromDate2Timestamp = (year, month) => {
  return moment(`${year}/${month}/1`, 'jYYYY/jM/jD').utc().unix();
};
export const toDate2Timestamp = (year, month) => {
  month++;

  let m = moment(`${year}/${month}/1`, 'jYYYY/jM/jD').utc().unix();

  if (month === 13) {
    year++;
    m = moment(`${year}/1/1`, 'jYYYY/jM/jD').utc().unix();
  }
  return m;
};

export const getNewCustomerDate = (day) => {
  return moment().subtract(day, 'd').format('yyyy/MM/DD');
};

export const getPersianDate = (epoch) => {
  return persianNumber(moment.unix(epoch).format('HH:mm - jYYYY/jM/jD'));
};

export const getPersianCurrency = (currency) => {
  var currencyString = currency.toLocaleString('fa-IR'); // ۱۲٬۳۴۵٫۶۷۹
  currencyString = currencyString.replace(/\٬/g, ',‬');
  return currencyString;
};

export const getRangeItem = (item) => {
  var title = 'داخل محدوده';
  var timeTitle = 'ساعت';
  var price = `${getPersianCurrency(item.price)} ریال`;
  var time = item.timeValue;

  if (item.rangeType === 2) title = 'خارج محدوده';
  if (item.rangeType === 3) title = 'خارج شهر';
  if (item.timeType === 2) timeTitle = 'روز';
  if (item.price === 0) price = 'رایگان';
  if (item.timeValue === 0) {
    time = 'ارسال فوری';
    timeTitle = '';
  }
  return { title, timeTitle, time, price };
};

export const getNormalPhone = (phone) => {
  if (!phone) return '0';
  return '0' + phone.slice(-10);
};

export const EventType = {
  None: 0,
  CreateOrder: 1,
  EditOrder: 2,
  CancelOrder: 3,
  ConfirmOrder: 4,
  CustomerIssue: 5,
  CloseOrder: 6,
  Settlment: 7
};

export const InvoiceType = {
  Increase: 1,
  Reduce: 2
};

export const OP = {
  None: 0,
  TaxRead: 1,
  TaxWrite: 2,
  DeliveryRead: 3,
  DeliveryWrite: 4,
  DiscountRead: 5,
  DiscountWrite: 6,
  CommissionRead: 7,
  CommissionWrite: 8,
  EventRead: 9,
  EventWrite: 10,
  OrderRead: 11,
  OrderWrite: 12,
  OperatorRead: 13,
  OperatorWrite: 14,
  StoreRead: 15,
  StoreWrite: 16,
  UserRead: 17,
  UserWrite: 18,
  CustomerRead: 19,
  CustomerWrite: 20,
  ProductRead: 21,
  ProdtuctWrite: 22,
  PayaRead: 23,
  TaskRead: 24,
  DashboardRead: 25,
  CategoryRead: 26,
  CategoryWrite: 27
};

export const ODP = {
  None: 0,
  Customer: 1,
  Order: 2,
  Store: 3,
  User: 4,
  Commission: 5,
  Product: 6
};

export const getEnumColor = (enumObject, value) => {
  if (enumObject === OrderStatus) {
    switch (value) {
      case OrderStatus.Pending:
      case OrderStatus.WaitToSend:
      case OrderStatus.Accept:
        return 'secondary';
      case OrderStatus.CanceledByCustomer:
      case OrderStatus.CanceledByUser:
        return 'error';
      case OrderStatus.Sent:
        return 'info';
      case OrderStatus.CustomerIssue:
        return 'warning';
      case OrderStatus.Delivered:
      case OrderStatus.Settlement:
      case OrderStatus.Done:
        return 'success';
    }
  }

  if (enumObject === DeliveryRageType) {
    switch (value) {
      case DeliveryRageType.InRange:
        return 'success';
      case DeliveryRageType.OutRange:
        return 'info';
      case DeliveryRageType.OutCity:
        return 'warning';
    }
  }

  if (enumObject === InvoiceStatus) {
    switch (value) {
      case InvoiceStatus.Pending:
        return 'secondary';
      case InvoiceStatus.Done:
        return 'success';
      case InvoiceStatus.Cancel:
        return 'error';
      case InvoiceStatus.Close:
        return 'primary';
      case InvoiceStatus.WithDrowable:
        return 'warning';
    }
  }

  if (enumObject === InvoiceType) {
    switch (value) {
      case InvoiceType.Reduce:
        return 'warning';
      case InvoiceType.Increase:
        return 'success';
    }
  }

  return 'default';
};

export const getEnaumKey = (enumObject, value) => {
  const key = Object.keys(enumObject).find((key) => enumObject[key] === value);

  if (enumObject === OrderStatus) {
    switch (value) {
      case OrderStatus.Pending:
        return 'در انتظار';
      case OrderStatus.WaitToSend:
        return 'منتظر ارسال';
      case OrderStatus.Accept:
        return 'پذیرفته شده';
      case OrderStatus.CanceledByCustomer:
        return 'لغو مشتری';
      case OrderStatus.CanceledByUser:
        return 'لغو فروشنده';
      case OrderStatus.Sent:
        return 'ارسال شده';
      case OrderStatus.CustomerIssue:
        return 'شکایت مشتری';
      case OrderStatus.Delivered:
        return 'دریافت شده';
      case OrderStatus.Settlement:
        return 'تسویه شده';
      case OrderStatus.Done:
        return 'بسته شده';
    }
  }

  if (enumObject === InvoiceStatus) {
    switch (value) {
      case InvoiceStatus.Pending:
        return 'در انتظار';
      case InvoiceStatus.Done:
        return 'پرداخت شده';
      case InvoiceStatus.Cancel:
        return 'لغو شده';
      case InvoiceStatus.Close:
        return 'بسته شده';
      case InvoiceStatus.WithDrowable:
        return 'قابل برگشت';
    }
  }

  if (enumObject === InvoiceType) {
    switch (value) {
      case InvoiceType.Reduce:
        return 'کاهشی';
      case InvoiceType.Increase:
        return 'افزایشی';
    }
  }

  if (enumObject === ProductStatus) {
    switch (value) {
      case ProductStatus.Waiting:
        return 'در انتظار بررسی';
      case ProductStatus.Published:
        return 'منتشر شده';
      case ProductStatus.DeActive:
        return 'غیر فعال';
      case ProductStatus.Deleted:
        return 'حذف شده';
    }
  }

  if (enumObject === PayaStatus) {
    switch (value) {
      case PayaStatus.Idle:
        return 'در انتظار';
      case PayaStatus.Success:
        return 'موفق';
      case PayaStatus.UnSuccess:
        return 'ناموفق';
    }
  }

  if (enumObject === CommissionType) {
    switch (value) {
      case CommissionType.Default:
        return 'اصلی';
      case CommissionType.Custom:
        return 'سفارشی';
    }
  }

  if (enumObject === CommissionStatus) {
    switch (value) {
      case CommissionStatus.Active:
        return 'فعال';
      case CommissionStatus.DeActive:
        return 'غیر فعال';
    }
  }

  if (enumObject === ProductStatus) {
    switch (value) {
      case ProductStatus.Pending:
        return 'در انتظار بررسی';
      case ProductStatus.Published:
        return 'منتشر شده';
      case ProductStatus.DeActive:
        return 'غیر فعال';
      case ProductStatus.Deleted:
        return 'حذف شده';
    }
  }

  if (enumObject === ProductVarietyType) {
    switch (value) {
      case ProductVarietyType.None:
        return 'اصلی';
      case ProductVarietyType.Color:
        return 'رنگ';
      case ProductVarietyType.Size:
        return 'اندازه';
    }
  }

  if (enumObject === StoreStatus) {
    switch (value) {
      case StoreStatus.Waiting:
        return 'در انتظار بررسی';
      case StoreStatus.Published:
        return 'منتشر شده';
      case StoreStatus.Deleted:
        return 'حذف شده';
    }
  }

  if (enumObject === UserStatus) {
    switch (value) {
      case UserStatus.DeActive:
        return 'غیر فعال';
      case UserStatus.Active:
        return 'فعال';
    }
  }

  if (enumObject === TaskStatus) {
    switch (value) {
      case PayaStatus.Idle:
        return 'در انتظار';
      case PayaStatus.Success:
        return 'موفق';
      case PayaStatus.UnSuccess:
        return 'ناموفق';
    }
  }

  if (enumObject === DeliveryRageType) {
    switch (value) {
      case DeliveryRageType.InRange:
        return 'داخل محدوده';
      case DeliveryRageType.OutRange:
        return 'خارج محدوه';
      case DeliveryRageType.OutCity:
        return 'سایر نقاط کشور';
    }
  }

  if (enumObject === WorkTimeDayType) {
    switch (value) {
      case WorkTimeDayType.Idle:
        return 'ساعت';
      case WorkTimeDayType.Success:
        return 'روز';
    }
  }

  return key;
};

export const DeliveryRageType = {
  InRange: 1,
  OutRange: 2,
  OutCity: 3
};

export const WorkTimeDayType = {
  Hour: 1,
  Day: 2
};

export const TaskStatus = {
  Idle: 1,
  Success: 2,
  UnSuccess: 3
};

export const OrderStatus = {
  Pending: 0,
  WaitToSend: 1,
  Accept: 2,
  CanceledByCustomer: 3,
  CanceledByUser: 4,
  Sent: 5,
  CustomerIssue: 6,
  Delivered: 7,
  Settlement: 8,
  Done: 9
};

export const InvoiceStatus = {
  Pending: 0,
  Done: 1,
  Cancel: 2,
  Close: 3,
  WithDrowable: 4
};

export const StoreStatus = {
  Waiting: 0,
  Published: 1,
  Deleted: -1
};

export const ProductVarietyType = {
  None: 0,
  Color: 1,
  Size: 2
};

export const ProductStatus = {
  Published: 1,
  DeActive: 2,
  Deleted: 3
};

export const CommissionStatus = {
  Active: 1,
  DeActive: 2
};

export const CommissionType = {
  Default: 1,
  Custom: 2
};

export const PayaStatus = {
  Idle: 1,
  Success: 2,
  UnSuccess: 3
};

export const UserStatus = {
  Active: 1,
  DeActive: 2
};

export function OperatorPermissionValues() {
  return Object.values(OP);
}

export const OperatorPermissionKeys = () => {
  return Object.keys(OP);
};

export const AlertSeverity = {
  Success: 'success',
  Warning: 'warning',
  Info: 'info',
  Error: 'error'
};
