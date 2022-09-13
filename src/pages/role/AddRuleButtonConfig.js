


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
        icon: "", 
        text: localStorage.getItem('lng')==='en'?'Add new role':(localStorage.getItem('lng')==='fa'?'افزودن نفش جدید':'اضف دورا جدیدا') ,
        accessKey: undefined, 
        className: "btn-primary", 
        hint: undefined, 
        width: undefined, 
        height: undefined,
        stylingMode: 'contained',
        type: 'success', 
        visible: true,
        disabled: false,
        rtlEnabled: false,
        useSubmitBehavior: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, 
        elementAttr: {
            style: {
                "font-weight": "bold",
                "font-family": "B Nazanin",
            }
        },
    }
};