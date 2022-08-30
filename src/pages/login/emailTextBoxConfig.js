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
            onOptionChanged: onOptionChanged(),
        },
        id: "email-text-box",
        maskRules: {},
        mask: "", // Default Value: ''
        name: "", // Default Value: ''
        text: undefined, // Type: String
        maskChar: "_", // Default Value: '_'
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        label: "ایمیل", // Default Value: ''
        placeholder: "", // Default Value: ''
        hint: 'لطفا ایمیل خود را وارد کنید', // Default Value: undefined Type: string
        showMaskMode: 'always', // Accepted Values: 'always' | 'onFocus'
        width: '100%', // Default Value: undefined Type: string number func
        height: '100%', // Default Value: undefined Type: string number func
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        maskInvalidMessage: "Value is invalid", // Default Value: 'Value is invalid'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        mode: "email", // Accepted Value:  'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
        visible: true,
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
		{type:'email', message: 'ایمیل نامعتبر است!'},
		{type:'required', message: 'ایمیل الزامی است!'},
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};