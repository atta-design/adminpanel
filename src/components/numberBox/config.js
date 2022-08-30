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


export const  NumberBoxConfig = {
    'settings': {
        'methods': {
            onCut: onCut(),
            onCopy: onCopy(),
            onPaste: onPaste(),
            onInput: onInput(),
            onKeyUp: onKeyUp(),
            onChange: onChange(),
            onKeyDown: onKeyDown(),
            onFocusIn: onFocusIn(),
            onEnterKey: onEnterKey(),
            onFocusOut: onFocusOut(),
            onDisposing: onDisposing(),
            onInitialized: onInitialized(),
            onContentReady: onContentReady(),
            onValueChanged: onValueChanged(),
            onOptionChanged: onOptionChanged(),
        },
        id: "number-box",
        invalidValueMessage: "Value must be number",
        name: "", // Default Value: ''
        format: "", // Default Value: ''
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        label: "number box label", // Default Value: ''
        placeholder: "placeholder", // Default Value: ''
        mode: "number", // Accepted Values: 'number' | 'text' | 'tel'
        validationMessageMode: "auto", // Accepted Values: 'always' | 'auto'
        labelMode: "floating", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'underlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        visible: true,
        disabled: false,
        readOnly: false,
        rtlEnabled: false,
        showSpinButton: false,
        showClearButton: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        useLargeSpinButtons: true,
        step: 1, // Default Value: 1
        tabIndex: 0, // Default Value: 0
        max: undefined, // Type: Number
        min: undefined, // Type: Number
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};