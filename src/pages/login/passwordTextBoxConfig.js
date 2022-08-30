const onChange = () => {
	return(
		function onChange(e) {
		}
	)
};

const onContentReady = () => {
	return(
		function onContentReady(e) {
		}
	)
};

const onCopy = () => {
	return(
		function onCopy(e) {
		}
	)
};

const onCut = () => {
	return(
		function onCut(e) {
		}
	)
};

const onDisposing = () => {
	return(
		function onDisposing(e) {
		}
	)
};

const onEnterKey = () => {
	return(
		function onEnterKey(e) {
		}
	)
};

const onFocusIn = () => {
	return(
		function onFocusIn(e) {
		}
	)
};

const onFocusOut = () => {
	return(
		function onFocusOut(e) {
		}
	)
};

const onInitialized = () => {
	return(
		function onInitialized(e) {
		}
	)
};

const onInput = () => {
	return(
		function onInput(e) {
		}
	)
};

const onKeyDown = () => {
	return(
		function onKeyDown(e) {
		}
	)
};

const onKeyUp = () => {
	return(
		function onKeyUp(e) {
		}
	)
};

const onOptionChanged = () => {
	return(
		function onOptionChanged(e) {
		}
	)
};

const onPaste = () => {
	return(
		function onPaste(e) {
		}
	)
};

const onValueChanged = () => {
	return(
		function onValueChanged(e) {
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
        id: "password-text-box",
        maskRules: CustomMaskRules,
        mask: "", // Default Value: ''
        name: "", // Default Value: ''
        text: undefined, // Type: String
        maskChar: "_", // Default Value: '_'
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        label: "رمز عبور", // Default Value: ''
        placeholder: "", // Default Value: ''
        hint: 'رمز عبور خود را وارد کنید', // Default Value: undefined Type: string
        showMaskMode: 'always', // Accepted Values: 'always' | 'onFocus'
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        maskInvalidMessage: "Value is invalid", // Default Value: 'Value is invalid'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        mode: "password", // Accepted Value:  'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
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
        inputAttr: {class: "form-control form-control-lg form-control-solid"}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
		{type:'required', message: 'رمز عبور الزامی است!'},
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};