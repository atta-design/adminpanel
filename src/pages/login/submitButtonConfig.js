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
        id: "submit-button",
        icon: "", // Default Value: ''
        text: "ورود", // Type: String
        accessKey: undefined, // Type: String
        className: "btn btn-lg btn-primary w-100 mb-5", // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: '100%', // Default Value: undefined Type: string number func
        height: '100%', // Default Value: undefined Type: string number func
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
            }
        },
    }
};