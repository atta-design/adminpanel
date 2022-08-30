import CompanyItem from '../data/companyItems.js';
import { multiViewItems } from '../../../../components/tabPanel/data.js';


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
        width: '100%', // Default Value: undefined Type: string number func
        height: '260', // Default Value: undefined Type: string number func
        loop: true,
        visible: true,
        disabled: false,
        rtlEnabled: false,
        swipeEnabled: true,
        deferRendering: true,
        showNavButtons: false,
        scrollingEnabled: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        animationEnabled: true,
        activeStateEnabled: false,
        repaintChangesOnly: false,
        tabIndex: 0, // Default Value: 0
        itemHoldTimeout: 750, // Default Value: 750
        elementAttr: {},
    }
};