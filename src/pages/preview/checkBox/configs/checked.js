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

const onContentReady = () => {
	return(
		function onContentReady(e) {
			// your code
		}
	)
};

const onValueChanged = () => {
	return(
		function onValueChanged(e) {
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


export const CheckBoxConfig = {
    'settings': {
        'methods': {
            onDisposing: onDisposing(),
            onInitialized: onInitialized(),
            onContentReady: onContentReady(),
            onValueChanged: onValueChanged(),
            onOptionChanged: onOptionChanged(),
        },
        id: "checked-check-box",
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
        defaultValue: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        elementAttr: {},
    }
};