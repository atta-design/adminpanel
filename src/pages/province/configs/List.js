import convertToJalali from "../../../utils/convertToJalali";


function convertToPersain(data) {
    const new_date = convertToJalali({
        date_unix:data,
        format:"dddd DD MMMM YYYY, HH:mm:ss"
    })
    return new_date;
}

const getStatusSpan = (value) => {
    if ([0, 1, 2].includes(value)) {
        return(
            <span className="badge badge-light-danger fs-8 fw-bolder">غیرفعال</span>
        )
    } else {
        return(
            <span className="badge badge-light-success fs-8 fw-bolder">فعال</span>
        )
    }
}


const getPicture = (data) => {
    return `/assets/media/avatars/${data}.jpg`
}


export const TableListConfig = {
    'events': {
        'edit': {
            url: '/editRole/',
            key: 'provinceUID'

        },
        'delete': {
            url: 'province/Delete?uid=',
            key: 'provinceUID'

        }
    },
    'columns': [
        {
            dataField: "thumbnailUID",
            caption: "",
            dataType: "img",
            visible: true,
            alignment: "right",
            calculateCellValue: getPicture,
        },
        {
            dataField: "title",
            caption: localStorage.getItem('lng')==='en'?'Name':(localStorage.getItem('lng')==='fa'?'نام':'اسم'),
            dataType: "string",
            visible: true,
            alignment: "right",
            classNameHeader: 'min-w-50px'
        },
        {
            dataField: "status",
            caption: localStorage.getItem('lng')==='en'?'Status':(localStorage.getItem('lng')==='fa'?'وضعیت':'حالة'),
            dataType: "string",
            visible: true,
            alignment: "center",
            classNameHeader: 'min-w-50px',
            template: getStatusSpan
        },
        {
            dataField: "createDate",
            caption: localStorage.getItem('lng')==='en'?'Date of Creation':(localStorage.getItem('lng')==='fa'?'تاریخ ایجاد':'تاریخ الخلق'),
            dataType: "date",
            visible: true,
            alignment: "center",
            calculateCellValue: convertToPersain,
        },
        {
            dataField: "modifyDate",
            caption: localStorage.getItem('lng')==='en'?'Date of Edition':(localStorage.getItem('lng')==='fa'?'تاریخ ویزایش':'تاریخ التحریر'),
            dataType: "date",
            visible: true,
            alignment: "center",
            calculateCellValue: convertToPersain,
        },
    ],
}