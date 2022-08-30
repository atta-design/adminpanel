import React from 'react';
import { Link } from 'react-router-dom';
import CustomStore from 'devextreme/data/custom_store';
import saveAs from 'file-saver';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';

import { entities } from '../../data/entities';
import convertToJalali from '../../utils/convertToJalali';


const roles = new CustomStore({
    loadMode: 'processed',
    key: "roleUID",
    load: (loadOptions) => {
        let searchValue = "";
        let from = loadOptions.skip;
        let count = loadOptions.take;
        if (loadOptions.filter)
            searchValue = loadOptions.filter.filterValue;
        let url = `http://api-portal.saeedsafaee.ir/Role/List?From=${from}&Count=${count}&search=${searchValue}`
        return fetch(url)
            .then("error")
            .then(response => response.json())
            .then(result => {
                return {
                    data: result.content.items,
                    totalCount: result.content.count
                };
            })
            .catch(() => { 'pass' });
    }
});

export function exportGrid(e) {
    const workbook = new Workbook(); 
    const worksheet = workbook.addWorksheet("Rules"); 
    exportDataGrid({ 
        worksheet: worksheet, 
        component: e.component
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Rules.xlsx"); 
        }); 
    });
    e.cancel = true; 
}


function DetailSection(props) {
    
    const rule = props.data.data;

    return (
        <div>
            <p className="employee-notes">{rule.description}</p>
        </div>
    );
}

const renderRank = (container, options) => {
    container.textContent = options.rowIndex + 1;
}


function renderTitle(data) {
    return(
        <Link
            to={{
                pathname: `/editRole/${data.data.roleUID}`,
            }}
        >
                <li>{data.text}</li>
        </Link>
    )
}

function convertToPersainModifyDate(data) {
    const new_date = convertToJalali({
        date_unix:data.modifyDate,
        format:"dddd DD MMMM YYYY, HH:mm:ss"
    })
    return new_date;
}

function convertToPersainCreateDate(data) {
    const new_date = convertToJalali({
        date_unix:data.createDate,
        format:"dddd DD MMMM YYYY, HH:mm:ss"
    })
    return new_date;
}

const fonts = [
    {
        key: 'B Nazanin, Chilanka',
        name: 'B-Nazanin'
    },
]


export const GridConfig = {
    'settings': {
        'methods': {
            onSaving: null,
            onEditingStart: null,
        },
        id: "rules-dataGrid",
        keyExpr: "roleUID",
        noDataText: "",
        width: "100%",
        dataSource: roles,
        rtlEnabled: true,
        showBorders: true,
        wordWrapEnabled: false,
        columnAutoWidth: true,
        remoteOperations: true,
        onExporting: exportGrid,
        allowColumnReordering: true,
        rowAlternationEnabled: true,
        showColumnHeaders: true,
        allowColumnResizing: true,
        columnHidingEnabled: true,
        columnResizingMode: "widget", //  'nextColumn'

        paging: {
            enabled: true,
            defaultPageIndex: 0,
            defaultPageSize: 10,
        },

        fontSize: 14,
        font: 'B Nazanin, Chilanka',
        MinFontSize: 1,
        MaxFontSize: 50,
        apllyFilterChangeable: true,
        visibleApplyFilterButton: false,
    },
    'toolbarItems': {
        groupPanel: true,
        searchPanel: true,
        exportButton: true,
        columnChooserButton: true,
        fontChangeable: {
            fonts: fonts,
            visible: true,
            disabled: false,
            valueExpr: "key",
            displayExpr: "name",
        },
        fontSizeChangeable: {
            width: 50,
            visible: true,
            name: 'fontSize',
            style:{
                textAlign: 'center',
            }
        },
    },
    'Editing': {
        mode: 'row',
        allowAdding: false,
        allowUpdating: false,
        allowDeleting: false,
    },
    'Export': {
        enabled: true,
        allowExportSelectedData: true,
        texts: {
            exportTo: 'صادر کردن',
            exportAll: 'صادر کردن تمام داده',
            exportSelectedRows: 'صادر کردن ردیف های انتخاب شده'
        }
    },
    'GroupPanel': {
        visible: true,
        emptyPanelText: "برای گروه بندی بر اساس ستون، ستون را به اینجا بکشید"
    },
    'ColumnFixing': {
        enabled: true,
    },
    'Sorting': {
        mode: "multiple", /* single */
    },
    'Selection': {
        mode: "single", /* multiple */
    },
    'ColumnChooser': {
        enabled: true,
        title: "انتخابگر ستون",
        mode: "dragAndDrop", // "select"
        emptyPanelText: "برای مخفی کردن یک ستون به اینجا درگ کنید"
    },
    'HeaderFilter': {
        visible: true,
        allowSearch: true,
    },
    'FilterPanel': {
        visible: true,
        filterEnabled: true,
        texts: {
            clearFilter: "پاک کردن فیلتر",
            createFilter: "ایجاد  فیلتر",
            filterEnabledHint: "فعال کردن فیلتر"
        }
    },
    'FilterRow': {
        visible: true,
        betweenEndText: "End",
        applyFilterText: "اعمال",
        betweenStartText: "Start",
        resetOperationText: "Search",
        OperationDescriptions: {
            startsWith: "Begins with",
            endsWith: "Ends with",
        }
    },
    'FilterBuilderPopup': {
        width: 400,
        visible: true,
        title: "فیلتر همگام",
        position: {
            of: window,
            at: 'top',
            my: 'top',
            offset: { y: 10 },
        },
    },
    'SearchPanel': {
        width: 240,
        visible: true,
        placeholder: "جستجو ...",
        highlightSearchText: true,
        highlightCaseSensitive: true,
        searchVisibleColumnsOnly: false,
    },
    'MasterDetail': {
        enabled: true,
        component: DetailSection,
    },
    'Grouping': {
        autoExpandAll: true,
        allowCollapsing: true,
        contextMenuEnabled: false,
        texts: {
            ungroup: "حذف گروه",
            ungroupAll: "لغو گروه کردن همه",
            groupContinuedMessage: "ادامه از صفحه قبل",
            groupContinuesMessage: "ادامه در صفحه بعد",
            groupByThisColumn: "گروه بندی بر اساس این ستون",
        }
    },
    'columns': [
        {
            caption: "ردیف",
            dataType: "string",
            visible: true,
            visibleIndex: "0",
            width: 50,
            fixed: false,
            alignment: "right",
            sortOrder: "asc", // "desc"
            filterable: true,
            allowResizing: false,
            allowFixing: true,
            renderAsync: true,
            allowReordering: true,
            allowHiding: true, // can to add to column chooser
            showInColumnChooser: false, // can to show to column chooser
            fixedPosition: "left", // "right"
            // cssClass: 'custom', // can pass css to column
            cellTemplate: renderRank, // pass html for grid cell
            // groupIndex: 0,
            sortIndex: 1,
        },
        {
            dataField: "title",
            caption: "عنوان",
            dataType: "string",
            visible: true,
            alignment: "right",
            // sortOrder: "asc", // "desc"
            deferRendering: false,
            filterable: false,
            allowResizing: false,
            allowFixing: false,
            allowReordering: false,
            allowHiding: true, // can to add to column chooser
            showInColumnChooser: false, // can to show to column chooser
            // cssClass: 'custom', // can pass css to column
            cellTemplate: "titleTemplate",
            // cellRender: renderTitle
        },
        {
            dataField: "entity",
            caption: "موجودیت",
            dataType: "string",
            visible: true,
            alignment: "center",
            // sortOrder: "asc", // "desc"
            filterable: false,
            allowResizing: false,
            allowFixing: true,
            allowReordering: true,
            allowHiding: true, // can to add to column chooser
            showInColumnChooser: false, // can to show to column chooser
            // cssClass: 'custom', // can pass css to column
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
            // sortOrder: "asc", // "desc"
            filterable: true,
            allowResizing: true,
            allowFixing: true,
            allowReordering: true,
            allowHiding: true, // can to add to column chooser
            showInColumnChooser: false, // can to show to column chooser
            // cssClass: 'custom', // can pass css to column
            // often used for time and date exp: Tuesday August 30, 1983 03:30:00
            // format: "EEEE MMMM dd, yyyy HH:mm:ss",
            calculateCellValue: convertToPersainCreateDate,
        },
        {
            dataField: "modifyDate",
            caption: "تاریخ ویرایش",
            dataType: "date",
            visible: true,
            alignment: "center",
            // sortOrder: "asc", // "desc"
            filterable: true,
            allowResizing: true,
            allowFixing: true,
            allowReordering: true,
            allowHiding: true, // can to add to column chooser
            showInColumnChooser: false, // can to show to column chooser
            // cssClass: 'custom', // can pass css to column
            // often used for time and date exp: Tuesday August 30, 1983 03:30:00
            // format: "EEEE MMMM dd, yyyy HH:mm:ss",
            calculateCellValue: convertToPersainModifyDate,
        },
        {
            dataField: "description",
            visible: false,
        },
        {
            dataField: "view",
            visible: false,
        },
        {
            dataField: "add",
            visible: false,
        },
        {
            dataField: "delete",
            visible: false,
        },
        {
            dataField: "edit",
            visible: false,
        },
        {
            dataField: "publish",
            visible: false,
        },
    ],
    templates: [
        {name: "titleTemplate", render: renderTitle}
    ]
};