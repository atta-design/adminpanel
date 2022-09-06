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
            key: 'countryUID'
        },
        'delete': {
            url: 'Country/Delete?uid=',
            key: 'countryUID'
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
            caption: "نام",
            dataType: "string",
            visible: true,
            alignment: "right",
            classNameHeader: 'min-w-50px'
        },
        {
            dataField: "status",
            caption: "وضعیت",
            dataType: "string",
            visible: true,
            alignment: "center",
            classNameHeader: 'min-w-50px',
            template: getStatusSpan
        },
        {
            dataField: "createDate",
            caption: "تاریخ ایجاد",
            dataType: "date",
            visible: true,
            alignment: "center",
            calculateCellValue: convertToPersain,
        },
        {
            dataField: "modifyDate",
            caption: "تاریخ ویرایش",
            dataType: "date",
            visible: true,
            alignment: "center",
            calculateCellValue: convertToPersain,
        },
    ],
}