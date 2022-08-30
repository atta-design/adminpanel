import { multiViewItems } from './data.js';

import CompanyItem from './CompanyItems.js';


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

const onInitialized = () => {
	return(
		function onInitialized(e) {
			// your code
		}
	)
};

const onItemClick = () => {
	return(
		function onItemClick(e) {
			// your code
		}
	)
};

const onItemContextMenu = () => {
	return(
		function onItemContextMenu(e) {
			// your code
		}
	)
};

const onItemHold = () => {
	return(
		function onItemHold(e) {
			// your code
		}
	)
};

const onItemRendered = () => {
	return(
		function onItemRendered(e) {
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

const onSelectionChanged = () => {
	return(
		function onSelectionChanged(e) {
			// your code
		}
	)
};

const onTitleClick = () => {
	return(
		function onTitleClick(e) {
			// your code
		}
	)
};

const onTitleHold = () => {
	return(
		function onTitleHold(e) {
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

const itemTitleRender = () => {
	return(
		function itemTitleRender(company) {
			return <span>{company.CompanyName}</span>;
		}
	)
};


export const TabPanelConfig = {
    'settings': {
        'methods': {
            onItemHold: onItemHold(),
            onTitleHold: onTitleHold(),
            onDisposing: onDisposing(),
            onItemClick: onItemClick(),
            onTitleClick: onTitleClick(),
            onInitialized: onInitialized(),
            onContentReady: onContentReady(),
            onItemRendered: onItemRendered(),
            onOptionChanged: onOptionChanged(),
            onTitleRendered: onTitleRendered(),
            onItemContextMenu: onItemContextMenu(),
            onSelectionChanged: onSelectionChanged(),
        },
        id: "tab-panel",
        dataSource: multiViewItems,
        itemComponent: CompanyItem,
        noDataText: "No data to display",
        itemTemplate: 'item', // Specifies a custom template for items.
        itemTitleRender: itemTitleRender(), //  Accepts a rendering function.
        itemTitleTemplate: 'title', // Specifies a custom template for item titles.
        accessKey: undefined, // Type: String
        itemRender: undefined, //  Accepts a rendering function.
        hint: undefined, // Default Value: undefined Type: string
        itemTitleComponent: undefined, //  Accepts a custom component.
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        loop: false,
        visible: true,
        disabled: false,
        rtlEnabled: false,
        swipeEnabled: false,
        deferRendering: true,
        showNavButtons: false,
        scrollingEnabled: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        animationEnabled: false,
        activeStateEnabled: false,
        repaintChangesOnly: false,
        tabIndex: 0, // Default Value: 0
        itemHoldTimeout: 750, // Default Value: 750
        elementAttr: {},
    }
};