import saveAs from 'file-saver';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import convertToJalali from '../../utils/convertToJalali';


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


export function exportGrid(e) {
    const workbook = new Workbook(); 
    const worksheet = workbook.addWorksheet("News"); 
    exportDataGrid({ 
        worksheet: worksheet, 
        component: e.component
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "News.xlsx"); 
        }); 
    });
    e.cancel = true; 
}


function DetailSection(props) {

    const news = props.data.data;

    return (
        <div>
            <p className="employee-notes">{news.title}</p>
        </div>
    );
}

const renderRank = (container, options) => {
    container.textContent = options.rowIndex + 1;
}


const fonts = [
    // {
    //     key: 'verdana',
    //     name: 'Verdana'
    // },
    // {
    //     key: 'helvetica',
    //     name: 'Helvetica'
    // },
    // {
    //     key: 'Chilanka',
    //     name: 'Chilanka'
    // },
    // {
    //     key: 'sans-serif',
    //     name: 'Sans Serif'
    // },
    // {
    //     key: 'Droid Sans',
    //     name: 'Droid Sans'
    // },
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
        id: "news-dataGrid",
        keyExpr: "newsUID",
        noDataText: "",
        height: "420",
        width: "100%",
        rtlEnabled: true,
        showBorders: true,
        wordWrapEnabled: false,
        columnAutoWidth: true,
        onExporting: exportGrid,
        allowColumnReordering: true,
        showColumnHeaders: true,
        remoteOperations: true,
        allowColumnResizing: true,
        columnHidingEnabled: true,
        columnResizingMode: "widget", //  'nextColumn'
        // customizeColumns: {customizeColumns},
        
        paging: {
            enabled: true,
            defaultPageIndex: 0,
            defaultPageSize: 10,
        },
        
        fontSize: 14,
        font: "B Nazanin, Chilanka",
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
            alignment: "center",
            sortOrder: "asc", // "desc"
            filterable: false,
            allowResizing: true,
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
            dataField: "preTitle",
            caption: "پیش عنوان",
            dataType: "string",
            visible: true,
            // visibleIndex: "0",
            // width: 50,
            // fixed: true,
            alignment: "center",
            // sortOrder: "asc", // "desc"
            filterable: true,
            allowResizing: true,
            allowFixing: true,
            allowReordering: true,
            allowHiding: true, // can to add to column chooser
            showInColumnChooser: false, // can to show to column chooser
            // fixedPosition: "left", // "right"
            // cssClass: 'custom', // can pass css to column
            // cellRender: {renderGridCell}, // pass html for grid cell
            // customizeText: {function}, // function for manipulate text of column header
            // calculateCellValue: {function}, // function for manipulate cell value
            // groupIndex: 0,
            // headerCellRender: {renderHeader}, // Header column template
            // often used for time and date exp: Tuesday August 30, 1983 03:30:00
            // format: "EEEE MMMM dd, yyyy HH:mm:ss",
        },
        {
            dataField: "title",
            caption: "عنوان",
            dataType: "string",
            visible: true,
            // visibleIndex: "0",
            // width: 50,
            // fixed: true,
            alignment: "center",
            // sortOrder: "asc", // "desc"
            filterable: true,
            allowResizing: true,
            allowFixing: true,
            allowReordering: true,
            allowHiding: true, // can to add to column chooser
            showInColumnChooser: false, // can to show to column chooser
            // fixedPosition: "left", // "right"
            // cssClass: 'custom', // can pass css to column
            // cellRender: {renderGridCell}, // pass html for grid cell
            // customizeText: {function}, // function for manipulate text of column header
            // calculateCellValue: {function}, // function for manipulate cell value
            // groupIndex: 0,
            // headerCellRender: {renderHeader}, // Header column template
            // often used for time and date exp: Tuesday August 30, 1983 03:30:00
            // format: "EEEE MMMM dd, yyyy HH:mm:ss",
        },
        {
            dataField: "summary",
            caption: "خلاصه",
            dataType: "string",
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
    ]
};