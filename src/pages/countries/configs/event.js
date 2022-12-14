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
        id: "event-select-box",
        valueExpr: "key",
        displayExpr: "title",
        dataSource: [
            {title:localStorage.getItem('lng')==='en'?'All':(localStorage.getItem('lng')==='fa'?'همه':'الجميع'), key: 0},
            {title: localStorage.getItem('lng')==='en'?'Inactive':(localStorage.getItem('lng')==='fa'?'غیر فعال':'غیر نشط'), key: 1},
            {title:localStorage.getItem('lng')==='en'?'َActive':(localStorage.getItem('lng')==='fa'?'فعال':'نشیط'), key: 3},
        ],
        searchExpr: null,
        noDataText: "",
        name: "", // Default Value: ''
        label: "", // Default Value: ''
        placeholder:localStorage.getItem('lng')==='en'?'Status':(localStorage.getItem('lng')==='fa'?'وضعیت':'حالة'), 
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
        hint: undefined, // Default Value: undefined Type: string
        width: '130px', // Default Value: undefined Type: string number func
        height: '43px', // Default Value: undefined Type: string number func
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
        style:{'marginRight':'1.5em'},
        elementAttr: {},
        inputAttr: {
            class: 'form-control form-control-solid'
        }, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    }
};