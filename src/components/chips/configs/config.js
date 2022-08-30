import OData from 'devextreme/data/odata/store';


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

const data = new OData({
    url: 'https://js.devexpress.com/Demos/DevAV/odata/States?$select=Sate_ID,State_Long,State_Short',
    key: 'Sate_ID',
    keyType: 'Int32',
});


export const ChipsConfig = {
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
            onFocusOut: onFocusOut(),
            onEnterKey: onEnterKey(),
            onDisposing: onDisposing(),
            onInitialized: onInitialized(),
            onValueChanged: onValueChanged(),            
            onContentReady: onContentReady(),
            onOptionChanged: onOptionChanged(),
            onSelectionChanged: onSelectionChanged(),
        },
        id: '',
		key: 'Sate_ID',
        dataSource: data,
        searchExpr: ['State_Long',],
        valueExpr: "State_Long",
        searchMode: "contains", // Accepted Values: 'contains' | 'startswith'
        name: "", // Default Value: ''
        label: "", // Default Value: ''
        placeholder: "", // Default Value: ''
        itemRender: undefined,
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        displayValue: undefined, // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "keyup", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        visible: true,
        disabled: false,
        readOnly: false,
        spellcheck: false,
        rtlEnabled: false,
        wrapItemText: false,
        deferRendering: true,
        showClearButton: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        useItemTextAsTitle: false,
        activeStateEnabled: false,
        maxLength: null, // Type: String | Number
        tabIndex: 0, // Default Value: 0
        maxItemCount: 10,
        minSearchLength: 1,
        searchTimeout: 500,
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};