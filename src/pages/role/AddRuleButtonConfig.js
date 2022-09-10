export const ButtonConfig = {
    'settings': {
        'methods': {
            onClick: null,
            onDisposing: null,
            onInitialized: null,
            onContentReady: null,
            onOptionChanged: null,
        },
        id: "user-refresh-button",
        icon: "", // Default Value: ''
        text: "نقش جدید", // Type: String
        accessKey: undefined, // Type: String
        className: "btn-primary", // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        stylingMode: 'contained', // Accepted Values: 'text' | 'outlined' | 'contained'
        type: 'success', // Accepted Values: 'back' | 'danger' | 'default' | 'normal' | 'success'
        visible: true,
        disabled: false,
        rtlEnabled: false,
        useSubmitBehavior: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        elementAttr: {
            style: {
                "font-weight": "bold",
                "font-family": "B Nazanin",
            }
        },
    }
};