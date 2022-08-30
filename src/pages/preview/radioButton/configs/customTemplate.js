import { priorityEntities } from '../data/status';


function renderCustomItem(data) {
    return <div>{data.text}</div>;
}


export const RadioGroupConfig = {
    'settings': {
        'methods': {
            onDisposing: null,
            onInitialized: null,
            onContentReady: null,
            onValueChanged: null,
            onOptionChanged: null,
        },
        id: "template-radio-button",
        valueExpr: "id",
        displayExpr: "text",
        dataSource: priorityEntities,
        defaultValue: priorityEntities[0].id,
        name: "", // Default Value: ''
        layout: "vertical", // Accepted Values: 'horizontal' | 'vertical'
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        itemRender: renderCustomItem, //  Accepts a rendering function.
        itemComponent: undefined, //  Accepts a custom component.
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        visible: true,
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