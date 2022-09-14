import { entities } from "../../../data/entities"

import convertToJalali from "../../../utils/convertToJalali";


function convertToPersain(data) {

    const new_date = convertToJalali({
        date_unix:data,
        format:"dddd DD MMMM YYYY, HH:mm:ss"
    })
    return new_date;
}


export const TableListConfig = {
    'events': {
        'edit': {
            url: '/editRole/',
            key: 'roleUID'
        },
        // 'delete': {
        //     url: '',
        //     key: 'roleUID'
        // }
    },
    'columns': [
        {
            dataField: "title",
            caption: localStorage.getItem('lng')==='en'?'Title':(localStorage.getItem('lng')==='fa'?'عنوان':'العنوان'),
            dataType: "string",
            visible: true,
            alignment: "right",
            // className: 'custom',
        },
        {
            dataField: "entity",
            caption: localStorage.getItem('lng')==='en'?'Description':(localStorage.getItem('lng')==='fa'?'توضیح':'وصف'),
            dataType: "string",
            visible: true,
            alignment: "center",
            // className: 'custom',
            lookup:{
                dataSource: entities,
                valueExpr: "entity",
                displayExpr: "title",
            },
        },
        {
            dataField: "createDate",
            caption: localStorage.getItem('lng')==='en'?'Date of Creation':(localStorage.getItem('lng')==='fa'?'تاریخ ایجاد':'تاریخ الخلق'),
            dataType: "date",
            visible: true,
            alignment: "center",
            // className: 'custom',
            // cellRender: renderTitle
            // often used for time and date exp: Tuesday August 30, 1983 03:30:00
            // format: "EEEE MMMM dd, yyyy HH:mm:ss",
            calculateCellValue: convertToPersain,
        },
        {
            dataField: "modifyDate",
            caption: localStorage.getItem('lng')==='en'?'Date of Edition':(localStorage.getItem('lng')==='fa'?'تاریخ ویرایش':'تاریخ التحریر'),
            dataType: "date",
            visible: true,
            alignment: "center",
            // className: 'custom',
            // cellRender: renderTitle
            // often used for time and date exp: Tuesday August 30, 1983 03:30:00
            // format: "EEEE MMMM dd, yyyy HH:mm:ss",
            calculateCellValue: convertToPersain,
        },
    ],
}