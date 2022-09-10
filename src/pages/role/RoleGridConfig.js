
import saveAs from 'file-saver';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';

import { entities } from '../../data/entities';


export function exportGrid(e) {
    const workbook = new Workbook(); 
    const worksheet = workbook.addWorksheet("Sales"); 
    exportDataGrid({ 
        worksheet: worksheet, 
        component: e.component
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Sales.xlsx"); 
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

function getEntityText(data) {

    let entity = data.entity
    return entities[entity];
}


const fonts = [
    {
        key: 'verdana',
        name: 'Verdana'
    },
    {
        key: 'helvetica',
        name: 'Helvetica'
    },
    {
        key: 'Chilanka',
        name: 'Chilanka'
    },
    {
        key: 'sans-serif',
        name: 'Sans Serif'
    },
    {
        key: 'Droid Sans',
        name: 'Droid Sans'
    },
]


export const GridConfig = {
    'settings': {
        id: "rules-dataGrid",
        keyExpr: "roleUID",
        height: "420",
        width: "100%",
        rtlEnabled: true,
        showBorders: true,
        wordWrapEnabled: false,
        columnAutoWidth: true,
        onExporting: exportGrid,
        allowColumnReordering: true,
        showColumnHeaders: true,
        allowColumnResizing: true,
        columnHidingEnabled: true,
        columnResizingMode: "widget", //  'nextColumn'
        // customizeColumns: customizeColumns(),

        fontSize: 14,
        font: 'Chilanka',
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
    'Export': {
        enabled: true,
    },
    'GroupPanel': {
        visible: true,
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
        mode: "dragAndDrop", // "select"
    },
    'HeaderFilter': {
        visible: true,
        allowSearch: true,
    },
    'FilterPanel': {
        visible: true,
        filterEnabled: true,
    },
    'FilterRow': {
        visible: true,
        betweenEndText: "End",
        applyFilterText: "Apply",
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
        title: "Synchronized Filter",
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
        placeholder: "Search...",
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
        },
        {
            dataField: "title",
            caption: "عنوان",
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
            dataField: "entity",
            caption: "موجودیت",
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
            calculateCellValue: getEntityText, // function for manipulate cell value
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
            format: "EEEE MMMM dd, yyyy HH:mm:ss",
        },
    ]
};