const onChange = () => {
	return(
		function onChange(e) {
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


export const TextAreaConfig = {
    'settings': {
        'methods': {
            onCut: onCut(),
            onCopy: onCopy(),
            onPaste: onPaste(),
            onInput: onInput(),
            onKeyUp: onKeyUp(),
            onChange: onChange(),
            onFocusIn: onFocusIn(),
            onKeyDown: onKeyDown(),
            onEnterKey: onEnterKey(),
            onFocusOut: onFocusOut(),
            onDisposing: onDisposing(),
            onInitialized: onInitialized(),
            onContentReady: onContentReady(),
            onValueChanged: onValueChanged(),
            onOptionChanged: onOptionChanged(),
        },
        id: "text-area",
        name: "", // Default Value: ''
        value: "", // Default Value: ''
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        label: "text area label", // Default Value: ''
        placeholder: "placeholder", // Default Value: ''
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        labelMode: "floating", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'underlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        visible: true,
        isValid: true,
        disabled: false,
        readOnly: false,
        spellcheck: false,
        rtlEnabled: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        autoResizeEnabled: false,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        maxLength: null, // Type: String | Number
        maxHeight: undefined, // Type: String | Number
        minHeight: undefined, // Type: String | Number
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};