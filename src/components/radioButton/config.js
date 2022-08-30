import { tasks } from './data.js';


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


export const RadioGroupConfig = {
    'settings': {
        'methods': {
            onDisposing: onDisposing(),
            onInitialized: onInitialized(),
            onContentReady: onContentReady(),
            onValueChanged: onValueChanged(),
            onOptionChanged: onOptionChanged(),
        },
        id: "radio-button",
        valueExpr: "id",
        displayExpr: "subject",
        dataSource: tasks,
        name: "", // Default Value: ''
        layout: "vertical", // Accepted Values: 'horizontal' | 'vertical'
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        itemRender: undefined, //  Accepts a rendering function.
        itemComponent: undefined, //  Accepts a custom component.
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        visible: true,
        isValid: true,
        disabled: false,
        readOnly: false,
        rtlEnabled: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        elementAttr: {},
    }
};