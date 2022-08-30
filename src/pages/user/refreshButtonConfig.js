const onClick = () => {
	return(
		function onClick(e) {
			// your code
		}
	)
};

const onContentReady = () => {
	return(
		function onContentReady(e) {
			// your code
		}
	)
};

const onDisposing = () => {
	return(
		function onDisposing(e) {
			// your code
		}
	)
};

const onInitialized = () => {
	return(
		function onInitialized(e) {
			// your code
		}
	)
};

const onOptionChanged = () => {
	return(
		function onOptionChanged(e) {
			// your code
		}
	)
};


export const ButtonConfig = {
    'settings': {
        'methods': {
            onClick: onClick(),
            onDisposing: onDisposing(),
            onInitialized: onInitialized(),
            onContentReady: onContentReady(),
            onOptionChanged: onOptionChanged(),
        },
        id: "user-refresh-button",
        icon: "", // Default Value: ''
        text: "دریافت مجدد اطلاعات", // Type: String
        accessKey: undefined, // Type: String
        className: "btn-primary", // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        stylingMode: 'contained', // Accepted Values: 'text' | 'outlined' | 'contained'
        type: 'default', // Accepted Values: 'back' | 'danger' | 'default' | 'normal' | 'success'
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