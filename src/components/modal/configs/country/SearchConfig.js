export const TextBoxConfig = {
    'settings': {
        'methods': {
            onCut: null,
            onCopy: null,
            onPaste: null,
            onInput: null,
            onKeyUp: null,
            onChange: null,
            onKeyDown: null,
            onFocusIn: null,
            onEnterKey: null,
            onFocusOut: null,
            onDisposing: null,
            onInitialized: null,
            onContentReady: null,
            onOptionChanged: null,
        },
        id: "create-title-country-text-box",
        maskRules: {},
        mask: "", // Default Value: ''
        name: "", // Default Value: ''
        text: undefined, // Type: String
        maskChar: "_", // Default Value: '_'
        accessKey: undefined, // Type: String
        // className: "form-control form-control-lg form-control-solid", // Type: String
        className: undefined, // Type: String
        label: "عنوان", // Default Value: ''
        placeholder: "", // Default Value: ''
        hint: 'لطفا عنوان کشور را وارد کنید', // Default Value: undefined Type: string
        showMaskMode: 'always', // Accepted Values: 'always' | 'onFocus'
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        maskInvalidMessage: "Value is invalid", // Default Value: 'Value is invalid'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        mode: "text", // Accepted Value:  'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
        visible: true,
        disabled: false,
        readOnly: false,
        spellcheck: false,
        rtlEnabled: true,
        useMaskedValue: false,
        showClearButton: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        maxLength: null, // Type: String | Number
        elementAttr: {},
        inputAttr: {
			id: 'create-title-country-text-box-input',
			class : "form-control form-control-solid w-250px ps-15"
        }, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};