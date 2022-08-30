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
            caption: "عنوان",
            dataType: "string",
            visible: true,
            alignment: "right",
            // className: 'custom',
        },
        {
            dataField: "entity",
            caption: "موجودیت",
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
            caption: "تاریخ ایجاد",
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
            caption: "تاریخ ویرایش",
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