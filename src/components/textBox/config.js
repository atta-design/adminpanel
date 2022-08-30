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

const CustomMaskRules = {
    //a single character
    's': '$',
 
    // a regular expression
    'h': /[0-9A-F]/,
 
    // an array of characters
    'n': ['$', '%', '&', '@'],
 
    // a function
    'f': function(char) {
        const allowedChars = ['a', 'b', 'c', '$', '_', '.'];
        return allowedChars.includes(char);
     }
}


export const TextBoxConfig = {
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
        id: '',
        maskRules: CustomMaskRules,
        mask: "", // Default Value: ''
        name: "", // Default Value: ''
        value: "", // Default Value: ''
        text: undefined, // Type: String
        maskChar: "_", // Default Value: '_'
        accessKey: undefined, // Type: String
        className: 'form-control form-control-solid', // Type: String
        label: "text box label", // Default Value: ''
        placeholder: "placeholder", // Default Value: ''
        hint: undefined, // Default Value: undefined Type: string
        showMaskMode: 'always', // Accepted Values: 'always' | 'onFocus'
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        labelMode: "floating", // Accepted Value: 'static' | 'floating' | 'hidden'
        maskInvalidMessage: "Value is invalid", // Default Value: 'Value is invalid'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'underlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        mode: "text", // Accepted Value:  'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
        visible: true,
        isValid: true,
        disabled: false,
        readOnly: false,
        spellcheck: false,
        rtlEnabled: false,
        useMaskedValue: false,
        showClearButton: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        maxLength: null, // Type: String | Number
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
		{type:'email', message: 'TextBox is invalid'},
		{type:'required', message: 'TextBox is Required'},
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};