const onContentReady = () => {
	return(
		function onContentReady(e) {
			// your code
		}
	)
};

const onDisposing = () => {
	return(
		function onDisposing(e) {
			// your code
		}
	)
};

const onHidden = () => {
	return(
		function onHidden(e) {
			// your code
		}
	)
};

const onHiding = () => {
	return(
		function onHiding(e) {
			// your code
		}
	)
};

const onInitialized = () => {
	return(
		function onInitialized(e) {
			// your code
		}
	)
};

const onOptionChanged = () => {
	return(
		function onOptionChanged(e) {
			// your code
		}
	)
};

const onResize = () => {
	return(
		function onResize(e) {
			// your code
		}
	)
};

const onResizeEnd = () => {
	return(
		function onResizeEnd(e) {
			// your code
		}
	)
};

const onResizeStart = () => {
	return(
		function onResizeStart(e) {
			// your code
		}
	)
};

const onShowing = () => {
	return(
		function onShowing(e) {
			// your code
		}
	)
};

const onShown = () => {
	return(
		function onShown(e) {
			// your code
		}
	)
};

const onTitleRendered = () => {
	return(
		function onTitleRendered(e) {
			// your code
		}
	)
};




export const PopupConfig = {
    'settings': {
        'methods': {
            onShown: onShown(),
            onHidden: onHidden(),
            onHiding: onHiding(),
            onResize: onResize(),
            onShowing: onShowing(),
            onDisposing: onDisposing(),
            onResizeEnd: onResizeEnd(),
            onResizeStart: onResizeStart(),
            onInitialized: onInitialized(),
            onContentReady: onContentReady(),
            onOptionChanged: onOptionChanged(),
            onTitleRendered: onTitleRendered(),
        },
        id: "popup",
        shadingColor: "",
        title: "",
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        contentComponent: undefined,
        contentRender: undefined,
        contentTemplate: 'content',
        titleComponent: undefined,
        titleRender: undefined,
        titleTemplate: 'title',
        hint: undefined, // Default Value: undefined Type: string
        container: undefined, // Default Value: undefined Type: String | HTMLElement | jQuery
        dragAndResizeArea: undefined, // Default Value: undefined Type: String | HTMLElement | jQuery
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        visible: false,
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