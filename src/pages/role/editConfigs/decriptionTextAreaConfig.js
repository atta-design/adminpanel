export const TextAreaConfig = {
    'settings': {
        'methods': {
            onCut: null,
            onCopy: null,
            onPaste: null,
            onInput: null,
            onKeyUp: null,
            onChange: null,
            onFocusIn: null,
            onKeyDown: null,
            onEnterKey: null,
            onFocusOut: null,
            onDisposing: null,
            onInitialized: null,
            onContentReady: null,
            onValueChanged: null,
            onOptionChanged: null,
        },
        id: "edit-description-text-area",
        name: "", // Default Value: ''
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        label: "توضیحات", // Default Value: ''
        placeholder: "", // Default Value: ''
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: "150", // Default Value: undefined Type: string number func
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        visible: true,
        disabled: false,
        readOnly: false,
        spellcheck: true,
        rtlEnabled: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        autoResizeEnabled: false,
        activeStateEnabled: true,
        tabIndex: 0, // Default Value: 0
        maxLength: 250, // Type: String | Number
        maxHeight: undefined, // Type: String | Number
        minHeight: undefined, // Type: String | Number
        elementAttr: {},
        inputAttr: {
			id: 'edit-description-text-area-input',
            class: "form-control form-control-solid"
        }, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
		{type:'required', message: 'توضیحات الزامی است!'},
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};