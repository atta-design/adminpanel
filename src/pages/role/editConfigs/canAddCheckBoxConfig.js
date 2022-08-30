export const CheckBoxConfig = {
    'settings': {
        'methods': {
            onDisposing: null,
            onInitialized: null,
            onContentReady: null,
            onValueChanged: null,
            onOptionChanged: null,
        },
        id: "check-box",
        name: "", // Default Value: ''
        text: "", // Default Value: ''
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        iconSize: undefined, // Default Value: undefined Type: string number
        visible: true,
        disabled: false,
        readOnly: false,
        rtlEnabled: false,
        defaultValue:false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        elementAttr: {},
    }
};