import EmployeeTemplate from '../data/EmployeeTemplate';


export const TabPanelConfig = {
    'settings': {
        'methods': {
            onItemHold: null,
            onTitleHold: null,
            onDisposing: null,
            onItemClick: null,
            onTitleClick: null,
            onInitialized: null,
            onContentReady: null,
            onItemRendered: null,
            onOptionChanged: null,
            onTitleRendered: null,
            onItemContextMenu: null,
            onSelectionChanged: null,
        },
        id: "drag-drop-tab-panel",
        dataSource: undefined,
        itemComponent: EmployeeTemplate,
        noDataText: "No data to display",
        itemTemplate: 'item', // Specifies a custom template for items.
        itemTitleRender: undefined, //  Accepts a rendering function.
        itemTitleTemplate: 'title', // Specifies a custom template for item titles.
        accessKey: undefined, // Type: String
        itemRender: undefined, //  Accepts a rendering function.
        hint: undefined, // Default Value: undefined Type: string
        itemTitleComponent: undefined, //  Accepts a custom component.
        width: '100%', // Default Value: undefined Type: string number func
        height: '410', // Default Value: undefined Type: string number func
        loop: true,
        visible: true,
        disabled: false,
        rtlEnabled: false,
        swipeEnabled: true,
        deferRendering: false,
        showNavButtons: true,
        scrollingEnabled: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        animationEnabled: true,
        activeStateEnabled: false,
        repaintChangesOnly: true,
        tabIndex: 0, // Default Value: 0
        itemHoldTimeout: 750, // Default Value: 750
        elementAttr: {},
    }
};