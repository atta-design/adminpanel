export const ButtonConfig = {
    'settings': {
        'methods': {
            onClick: null,
            onDisposing: null,
            onInitialized: null,
            onContentReady: null,
            onOptionChanged: null,
        },
        id: "submit-button",
        icon: "", // Default Value: ''
        text: "ذخیره کنید", // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        stylingMode: 'contained', // Accepted Values: 'text' | 'outlined' | 'contained'
        type: 'default', // Accepted Values: 'back' | 'danger' | 'default' | 'normal' | 'success'
        visible: true,
        disabled: false,
        rtlEnabled: false,
        useSubmitBehavior: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        elementAttr: {
            style: {
                "font-weight": "bold",
                "font-family": "B Nazanin",
            },
            class: "btn btn-primary px-6"
        },
    }
};