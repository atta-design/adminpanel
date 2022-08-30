import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa";


export default function convertToJalali({date_unix, format} ) {

    const date = new DateObject({
        date: date_unix * 1000,
        calendar: persian,
        locale: persian_fa,
    })

    if (typeof(format) === 'string'){
        return date.format(format);
    }

    return date.format();
}