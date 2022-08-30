export const TextBoxConfig = {
    'settings': {
        'methods': {
        },
        id: "default-text-box",
        maskRules: undefined,
        mask: "", // Default Value: ''
        name: "", // Default Value: ''
        value: "", // Default Value: ''
        defaultValue: "لورم ایپسوم",
        text: undefined, // Type: String
        maskChar: "_", // Default Value: '_'
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        label: "text box label", // Default Value: ''
        placeholder: "placeholder", // Default Value: ''
        hint: undefined, // Default Value: undefined Type: string
        showMaskMode: 'always', // Accepted Values: 'always' | 'onFocus'
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        maskInvalidMessage: "Value is invalid", // Default Value: 'Value is invalid'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        mode: "text", // Accepted Value:  'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
        visible: true,
        isValid: true,
        disabled: false,
        readOnly: false,
        spellcheck: false,
        rtlEnabled: true,
        useMaskedValue: false,
        showClearButton: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        maxLength: null, // Type: String | Number
        elementAttr: {
            style: {
                "font-weight": "bold",
                "font-family": "B Nazanin",
            }
        },
        inputAttr: {
            class: "form-control form-control-lg form-control-solid",
            style: {
                "font-weight": "bold",
                "font-family": "B Nazanin",
            }
        }, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};