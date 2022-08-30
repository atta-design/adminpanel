import { products } from "./data/treeProducts";

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

const onCopy = () => {
	return(
		function onCopy(e) {
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

const onValueChanged = () => {
	return(
		function onValueChanged(e) {
			// your code
		}
	)
};


export const DropDownBoxConfig = {
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
            onInitialized: onInitialized(),
            onValueChanged: onValueChanged(),
            onOptionChanged: onOptionChanged(),
        },
        id: "drop-down-box",
        valueExpr: "id",
        displayExpr: "name",
        dataSource: products,
        name: "", // Default Value: ''
        label: "drop down box label", // Default Value: ''
        placeholder: "placeholder", // Default Value: ''
        labelMode: "floating", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'underlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        fieldRender: undefined, //  Accepts a rendering function.
        fieldComponent: undefined, //  Accepts a custom component.
        dropDownButtonTemplate: 'dropDownButton', //  Accepts a custom component.
        contentRender: undefined, //  Accepts a rendering function.
        contentTemplate: 'content', //  Accepts a custom component.
        contentComponent: undefined, //  Accepts a custom component.
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        visible: true,
        disabled: false,
        opened: false,
        readOnly: false,
        rtlEnabled: false,
        deferRendering: false,
        showClearButton: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        openOnFieldClick: true,
        showDropDownButton: true,
        acceptCustomValue: false,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        maxLength: null, // Type: String | Number
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
        dropDownOptions: {},
    },
	embedded: {
		type: 'tree', // Accepted Values: tree, grid, undefined
		defautlValue: null,
		dataStructure: 'plain', // Accepted Values: plain, tree ; if type is tree
		parentIdExpr: 'categoryId', // if type is tree
		selectionMode: 'single',  // Accepted Values: single, multiple
	}, 
    validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};