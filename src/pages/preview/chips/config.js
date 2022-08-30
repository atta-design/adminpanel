function itemRender(data) {
    // return <span>{data.State_Long} ({data.State_Short})</span>;
    if (data) {
        return(
            <div dir='ltr'>
                <span>{data.email} ({data.phone})</span>
            </div>
        )
    } else {
        return(
            <div dir='ltr'>
                <span></span>
            </div>
        )
    }
}


export const ChipsConfig = {
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
            onFocusOut: null,
            onEnterKey: null,
            onDisposing: null,
            onInitialized: null,
            onValueChanged: null,            
            onContentReady: null,
            onOptionChanged: null,
            onSelectionChanged: null,
        },
        id: '',
        key: 'userUID',
        // dataSource: data,
        // dataSource: 'https://js.devexpress.com/Demos/DevAV/odata/States?$select=Sate_ID,State_Long,State_Short',
        dataSource: 'https://api-portal.saeedsafaee.ir/Search/Index',
        searchExpr: ['email',],
        valueExpr: "email",
        searchMode: "contains", // Accepted Values: 'contains' | 'startswith'
        name: "", // Default Value: ''
        label: "", // Default Value: ''
        placeholder: "", // Default Value: ''
        itemRender: itemRender,
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        displayValue: undefined, // Type: String
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "keyup", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        visible: true,
        disabled: false,
        readOnly: false,
        spellcheck: false,
        rtlEnabled: false,
        wrapItemText: false,
        deferRendering: true,
        showClearButton: false,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        useItemTextAsTitle: false,
        activeStateEnabled: false,
        maxLength: null, // Type: String | Number
        tabIndex: 0, // Default Value: 0
        maxItemCount: 10,
        minSearchLength: 1,
        searchTimeout: 500,
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
    },
	validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};