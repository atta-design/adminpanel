import { tasks } from './data.js';


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

const onGroupRendered = () => {
	return(
		function onGroupRendered(e) {
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

const onItemDeleted = () => {
	return(
		function onItemDeleted(e) {
			// your code
		}
	)
};

const onItemDeleting = () => {
	return(
		function onItemDeleting(e) {
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

const onItemReordered = () => {
	return(
		function onItemReordered(e) {
			// your code
		}
	)
};

const onItemSwipe = () => {
	return(
		function onItemSwipe(e) {
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

const onPageLoading = () => {
	return(
		function onPageLoading(e) {
			// your code
		}
	)
};

const onPullRefresh = () => {
	return(
		function onPullRefresh(e) {
			// your code
		}
	)
};

const onScroll = () => {
	return(
		function onScroll(e) {
			// your code
		}
	)
};

const onSelectAllValueChanged = () => {
	return(
		function onSelectAllValueChanged(e) {
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


export const ListConfig = {
    'settings': {
        'methods': {
            onScroll: onScroll(),
            onItemHold: onItemHold(),
            onDisposing: onDisposing(),
            onItemClick: onItemClick(),
            onItemSwipe: onItemSwipe(),
            onInitialized: onInitialized(),
            onItemDeleted: onItemDeleted(),
            onPageLoading: onPageLoading(),
            onPullRefresh: onPullRefresh(),
            onContentReady: onContentReady(),
            onItemDeleting: onItemDeleting(),
            onItemRendered: onItemRendered(),
            onGroupRendered: onGroupRendered(),
            onItemReordered: onItemReordered(),
            onOptionChanged: onOptionChanged(),
            onItemContextMenu: onItemContextMenu(),
            onSelectionChanged: onSelectionChanged(),
            onSelectAllValueChanged: onSelectAllValueChanged(),
        },
        id: "list",
        dataSource: tasks,
        selectAllText: "Select All",
        pageLoadingText: "Loading...",
        refreshingText: "Refreshing...",
        pulledDownText: "Release to refresh...",
        pullingDownText: "Pull down to refresh...",
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        nextButtonText: "more", // Default Value: 'more'
        hint: undefined, // Default Value: undefined Type: string
        menuMode: "context", // Accepted Values: 'context' | 'slide'
        keyExpr: null, // Type: String | Function Default Value: null
        selectAllMode: "page", // Accepted Values:  'allPages' | 'page'
        displayExpr: null, // Type: String | Function Default Value: null
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        noDataText: "No data to display", // Default Value: 'No data to display'
        pageLoadMode: "scrollBottom", // Accepted Values: 'nextButton' | 'scrollBottom'
        searchMode: "contains", // Accepted Values: 'contains' | 'startswith' | 'equals'
        selectionMode: "none", // Accepted Values: 'all' | 'multiple' | 'none' | 'single'
        showScrollbar: "onScroll", // Accepted Values: 'always' | 'never' | 'onHover' | 'onScroll'
        itemDeleteMode: "static", // Accepted Values: 'context' | 'slideButton' | 'slideItem' | 'static' | 'swipe' | 'toggle'
        searchTimeout: undefined, // Type: Number, Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
        visible: true,
        grouped: false,
        disabled: false,
        rtlEnabled: false,
        searchEnabled: false,
        scrollByThumb: false,
        bounceEnabled: false,
        indicateLoading: true,
        scrollByContent: true,
        scrollingEnabled: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        useNativeScrolling: true,
        activeStateEnabled: true,
        allowItemDeleting: false,
        collapsibleGroups: false,
        pullRefreshEnabled: false,
        repaintChangesOnly: false,
        showSelectionControls: true,
        tabIndex: 6, // Default Value: 0
        itemHoldTimeout: 750, // Default Value: 750
        elementAttr: {},
        menuItems: [], // [{text:'iran', action: onClick()}],
        searchExpr: null, // ["firstName", "lastName"]
    }
};