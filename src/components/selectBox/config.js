import { products } from './data.js';


const onChange = () => {
	return(
		function onChange(e) {
			// your code
		}
	)
};

const onClosed = () => {
	return(
		function onClosed(e) {
			// your code
		}
	)
};

const onContentReady = () => {
	return(
		function onContentReady(e) {
			// your code
		}
	)
};

const onCopy = () => {
	return(
		function onCopy(e) {
			// your code
		}
	)
};

const onCustomItemCreating = () => {
	return(
		function onCustomItemCreating(e) {
			// your code
		}
	)
};

const onCut = () => {
	return(
		function onCut(e) {
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

const onEnterKey = () => {
	return(
		function onEnterKey(e) {
			// your code
		}
	)
};

const onFocusIn = () => {
	return(
		function onFocusIn(e) {
			// your code
		}
	)
};

const onFocusOut = () => {
	return(
		function onFocusOut(e) {
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

const onInput = () => {
	return(
		function onInput(e) {
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

const onKeyDown = () => {
	return(
		function onKeyDown(e) {
			// your code
		}
	)
};

const onKeyUp = () => {
	return(
		function onKeyUp(e) {
			// your code
		}
	)
};

const onOpened = () => {
	return(
		function onOpened(e) {
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

const onPaste = () => {
	return(
		function onPaste(e) {
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

const onValueChanged = () => {
	return(
		function onValueChanged(e) {
			// your code
		}
	)
};


export const SelectBoxConfig = {
    'settings': {
        'methods': {
            onCut: onCut(),
            onCopy: onCopy(),
            onInput: onInput(),
            onKeyUp: onKeyUp(),
            onPaste: onPaste(),
            onOpened: onOpened(),
            onChange: onChange(),
            onClosed: onClosed(),
            onFocusIn: onFocusIn(),
            onKeyDown: onKeyDown(),
            onEnterKey: onEnterKey(),
            onFocusOut: onFocusOut(),
            onDisposing: onDisposing(),
            onItemClick: onItemClick(),
            onInitialized: onInitialized(),
            onContentReady: onContentReady(),
            onValueChanged: onValueChanged(),
            onOptionChanged: onOptionChanged(),
            onSelectionChanged: onSelectionChanged(),
            onCustomItemCreating: onCustomItemCreating(),
        },
        id: "select-box",
        valueExpr: "ID",
        displayExpr: "Name",
        dataSource: products,
        searchExpr: ['Name', 'Category'],
        noDataText: "No data to display",
        name: "", // Default Value: ''
        label: "select box label", // Default Value: ''
        placeholder: "placeholder", // Default Value: ''
        searchMode: 'contains', // Accepted Values: 'contains' | 'startswith'
        labelMode: "floating", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'underlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        displayValue: undefined, // Type: String
        itemRender: undefined, //  Accepts a rendering function.
        itemComponent: undefined, //  Accepts a custom component.
        groupRender: undefined, //  Accepts a rendering function.
        groupComponent: undefined, //  Accepts a custom component.
        fieldRender: undefined, //  Accepts a rendering function.
        fieldComponent: undefined, //  Accepts a custom component.
        dropDownButtonTemplate: undefined, //  Accepts a custom component.
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        visible: true,
        grouped: false,
        disabled: false,
        readOnly: false,
        spellcheck: false,
        rtlEnabled: false,
        wrapItemText: false,
        searchEnabled: true,
        deferRendering: true,
        showClearButton: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        showDropDownButton: true,
        acceptCustomValue: false,
        activeStateEnabled: false,
        useItemTextAsTitle: false,
        showDataBeforeSearch: false,
        showSelectionControls: false,
        minSearchLength: 0,
        searchTimeout: 500,
        tabIndex: 0, // Default Value: 0
        maxLength: null, // Type: String | Number
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};