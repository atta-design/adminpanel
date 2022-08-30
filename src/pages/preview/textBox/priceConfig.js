export const  NumberBoxConfig = {
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
            onValueChanged: null,
            onOptionChanged: null,
        },
        id: "number-box",
        invalidValueMessage: "Value must be number",
        name: "", // Default Value: ''
        format: "﷼ #,###.##", // Default Value: ''
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        label: "", // Default Value: ''
        placeholder: "", // Default Value: ''
        mode: "number", // Accepted Values: 'number' | 'text' | 'tel'
        validationMessageMode: "auto", // Accepted Values: 'always' | 'auto'
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
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