
import saveAs from 'file-saver';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';


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
        'methods': {
            onRowUpdated: null,
            onRowUpdating: null,
        },
        id: "dataGrid",
        keyExpr: "EmployeeID",
        noDataText: 'No data',
        height: "420",
        width: "100%",
        rtlEnabled: false,
        showBorders: true,
        wordWrapEnabled: false,
        // dataSource: employees,
        columnAutoWidth: true,
        onExporting: exportGrid,
        allowColumnReordering: true,
        remoteOperations: true,
        showColumnHeaders: true,
        allowColumnResizing: true,
        columnHidingEnabled: true,
        columnResizingMode: "widget", //  'nextColumn'
        // customizeColumns: {customizeColumns},

        paging: {
            enabled: true,
            pageSize: 10,
        },

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
    'Editing': {
        mode: 'row',
        allowAdding: true,
        allowUpdating: false,
        allowDeleting: false,
    },
    'Export': {
        enabled: true,
        allowExportSelectedData: true,
        texts: {
            exportTo: 'Export',
            exportAll: 'Export all data',
            exportSelectedRows: 'Export selected rows'
        }
    },
    'GroupPanel': {
        visible: true,
        emptyPanelText: "Drag a column header here to group by that column"
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
        title: "Column Chooser",
        mode: "dragAndDrop", // "select"
        emptyPanelText: "Drag a column here to hide it"
    },
    'HeaderFilter': {
        visible: true,
        allowSearch: true,
    },
    'FilterPanel': {
        visible: true,
        filterEnabled: true,
        texts: {
            clearFilter: "Clear",
            createFilter: "Create Filter",
            filterEnabledHint: "Enable the filter"
        }
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
        texts: {
            ungroup: "Ungroup",
            ungroupAll: "Ungroup All",
            groupByThisColumn: "Group by This Column",
            groupContinuesMessage: "Continues on the next page",
            groupContinuedMessage: "Continued from the previous page",
        }
    },
    'columns': [
        {
            dataField: "EmployeeID",
            caption: "ID",
            dataType: "string",
            visible: true,
            visibleIndex: "0",
            width: 50,
            fixed: true,
            alignment: "center",
            sortOrder: "asc", // "desc"
            filterable: false,
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
            dataField: "TitleOfCourtesy",
            caption: "Courtesy",
            dataType: "string",
            visible: true,
            // visibleIndex: "0",
            width: 50,
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
            dataField: "FullName",
            caption: "Full Name",
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
            dataField: "Address",
            caption: "Address",
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
            dataField: "HomePhone",
            caption: "Home Phone",
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
            dataField: "Position",
            caption: "Position",
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
            dataField: "BirthDate",
            caption: "BirthDate",
            dataType: "date",
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
            format: "EEEE MMMM dd, yyyy HH:mm:ss",
        },
    ]
};