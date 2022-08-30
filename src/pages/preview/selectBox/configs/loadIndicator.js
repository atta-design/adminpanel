import { simpleProducts } from '../../../../components/selectBox/data.js';


export const SelectBoxConfig = {
    'settings': {
        'methods': {
            onCut: null,
            onCopy: null,
            onInput: null,
            onKeyUp: null,
            onPaste: null,
            onOpened: null,
            onChange: null,
            onClosed: null,
            onFocusIn: null,
            onKeyDown: null,
            onEnterKey: null,
            onFocusOut: null,
            onDisposing: null,
            onItemClick: null,
            onInitialized: null,
            onContentReady: null,
            onValueChanged: null,
            onOptionChanged: null,
            onSelectionChanged: null,
            onCustomItemCreating: null,
        },
        id: "default-select-box",
        valueExpr: "ID",
        displayExpr: "Name",
        dataSource: simpleProducts,
        searchExpr: null,
        noDataText: "",
        name: "", // Default Value: ''
        label: "", // Default Value: ''
        placeholder: "انتخاب...", // Default Value: ''
        searchMode: 'contains', // Accepted Values: 'contains' | 'startswith'
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        displayValue: undefined, // Type: String
        itemRender: undefined, //  Accepts a rendering function.
        itemComponent: undefined, //  Accepts a custom component.
        groupRender: undefined, //  Accepts a rendering function.
        groupComponent: undefined, //  Accepts a custom component.
        fieldRender: undefined, //  Accepts a rendering function.
        fieldComponent: undefined, //  Accepts a custom component.
        dropDownButtonTemplate: 'loadIndicator',
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        visible: true,
        grouped: false,
        disabled: false,
        readOnly: false,
        spellcheck: false,
        rtlEnabled: true,
        wrapItemText: false,
        searchEnabled: false,
        deferRendering: true,
        showClearButton: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        showDropDownButton: true,
        acceptCustomValue: false,
        activeStateEnabled: false,
        useItemTextAsTitle: false,
        showDataBeforeSearch: false,
        showSelectionControls: false,
        minSearchLength: 0,
        searchTimeout: 500,
        tabIndex: 0, // Default Value: 0
        maxLength: null, // Type: String | Number
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    }
};