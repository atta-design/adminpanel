import saveAs from 'file-saver';
import { Workbook } from 'exceljs';
import CustomStore from 'devextreme/data/custom_store';
import { exportDataGrid } from 'devextreme/excel_exporter';
import convertToJalali from '../../utils/convertToJalali';


function convertToPersainCreateDate(data) {
    const new_date = convertToJalali({
        date_unix:data.createDate,
        format:"dddd DD MMMM YYYY, HH:mm:ss"
    })
    return new_date;
}

export function exportGrid(e) {
    const workbook = new Workbook(); 
    const worksheet = workbook.addWorksheet("Users"); 
    exportDataGrid({ 
        worksheet: worksheet, 
        component: e.component
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Users.xlsx"); 
        }); 
    });
    e.cancel = true; 
}


function DetailSection(props) {
    const employee = props.data.data;
    return (
        <div>
            <img
                className="employee-photo"
                alt={employee.FullName}
                src={employee.Photo}
            />
            <p className="employee-notes">{employee.Notes}</p>
        </div>
    );
}

const renderRank = (container, options) => {
    container.textContent = options.rowIndex + 1;
}


const fonts = [
    {
        key: 'B Nazanin, Chilanka',
        name: 'B-Nazanin'
    },
]

const users = new CustomStore({
    loadMode: 'processed',
    key: "userUID",
    load: (loadOptions) => {
        let from = loadOptions.skip;
        let count = loadOptions.take;
        let url = `http://api-portal.saeedsafaee.ir/account/list?From=${from}&Count=${count}`
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


export const GridConfig = {
    'settings': {
        'methods': {
            onSaving: null,
            onEditingStart: null,
        },
        id: "users-dataGrid",
        keyExpr: "userUID",
        dataSource: users,
        noDataText: "",
        height: "420",
        width: "100%",
        className: undefined,
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
            dataField: "firstname",
            caption: "نام",
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
            dataField: "lastname",
            caption: "نام خانوادگی",
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
            dataField: "email",
            caption: "ایمیل",
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
            dataField: "age",
            caption: "سن",
            dataType: "number",
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
            dataField: "phone",
            caption: "شماره",
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
            format: "EEEE MMMM dd, yyyy HH:mm:ss",
            calculateCellValue: convertToPersainCreateDate,
        },
    ]
};