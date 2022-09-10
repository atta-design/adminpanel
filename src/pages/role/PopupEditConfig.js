export const PopupConfig = {
    'settings': {
        'methods': {
            onShown: null,
            onHidden: null,
            onHiding: null,
            onResize: null,
            onShowing: null,
            onDisposing: null,
            onResizeEnd: null,
            onResizeStart: null,
            onInitialized: null,
            onContentReady: null,
            onOptionChanged: null,
            onTitleRendered: null,
        },
        id: "popup-edit-role",
        shadingColor: "",
        title: "Edit Role",
        // visible: popupEditVisible,
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        contentComponent: undefined,
        contentRender: undefined,
        contentTemplate: 'content',
        titleComponent: undefined,
        titleRender: undefined,
        titleTemplate: 'title',
        hint: undefined, // Default Value: undefined Type: string
        container: 'body', // Default Value: undefined Type: String | HTMLElement | jQuery
        dragAndResizeArea: undefined, // Default Value: undefined Type: String | HTMLElement | jQuery
        width: '50%', // Default Value: undefined Type: string number func
        height: '50%', // Default Value: undefined Type: string number func
        resizeEnabled: false,
        disabled: false,
        rtlEnabled: false,
        closeOnOutsideClick: false,  // Accepted: Boolean and Function
        deferRendering: true,
        dragOutsideBoundary: false,
        dragEnabled: true,
        restorePosition: true,
        hideOnParentScroll: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        shading: true,
        fullScreen: false,
        showCloseButton: true,
        showTitle: true,
        tabIndex: 0, // Default Value: 0
        maxHeight: null, // Type: Number | String | Function Return Value: Number | String  Default Value: null
        maxWidth: null, // Type: Number | String | Function Return Value: Number | String  Default Value: null
        minHeight: null, // Type: Number | String | Function Return Value: Number | String  Default Value: null
        minWidth: null, // Type: Number | String | Function Return Value: Number | String  Default Value: null
        position: { my: 'center', at: 'center', of: window }, // Accepted Values: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top'
        elementAttr: {},
        wrapperAttr: {},
        animation: {
            hide: { type: 'slide', duration: 400, from: { position: { my: 'center', at: 'center', of: window } }, to: { position: { my: 'top', at: 'bottom', of: window } }},
            show: { type: 'slide', duration: 400, from: { position: { my: 'top', at: 'bottom', of: window } }, to: { position: { my: 'center', at: 'center', of: window } }}
        },
    },
    'toolbarItems': [],
};