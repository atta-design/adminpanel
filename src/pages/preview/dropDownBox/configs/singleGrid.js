import '../css/style.css'
import { products } from "../../../../components/dropDown/box/data/gridProducts";


const gridBoxDisplayExpr = (item) => {
    return item && `${item.CompanyName} <${item.Phone}>`;
}


export const DropDownBoxConfig = {
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
            onInitialized: null,
            onValueChanged: null,
            onOptionChanged: null,
        },
        id: "single-grid-drop-down-box",
        valueExpr: "ID",
        displayExpr: gridBoxDisplayExpr,
        dataSource: products,
        name: "", // Default Value: ''
        label: "drop down box label", // Default Value: ''
        placeholder: "placeholder", // Default Value: ''
        labelMode: "hidden", // Accepted Value: 'static' | 'floating' | 'hidden'
        valueChangeEvent: "change", // "keyup", "blur", "change", "input", and "focusout"
        stylingMode: 'outlined', // Accepted Values: 'outlined' | 'underlined' | 'filled'
        text: undefined, // Type: String
        accessKey: undefined, // Type: String
        className: undefined, // Type: String
        fieldRender: undefined, //  Accepts a rendering function.
        fieldComponent: undefined, //  Accepts a custom component.
        dropDownButtonTemplate: 'dropDownButton', //  Accepts a custom component.
        ContentRender: undefined, //  Accepts a rendering function.
        ContentTemplate: 'content', //  Accepts a custom component.
        ContentComponent: undefined, //  Accepts a custom component.
        hint: undefined, // Default Value: undefined Type: string
        width: undefined, // Default Value: undefined Type: string number func
        height: undefined, // Default Value: undefined Type: string number func
        visible: true,
        disabled: false,
        opened: false,
        readOnly: false,
        rtlEnabled: false,
        deferRendering: false,
        showClearButton: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        openOnFieldClick: true,
        showDropDownButton: true,
        acceptCustomValue: false,
        activeStateEnabled: false,
        tabIndex: 0, // Default Value: 0
        maxLength: null, // Type: String | Number
        elementAttr: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
        dropDownOptions: {},
    },
	embedded: {
		type: 'grid', // Accepted Values: tree, grid, undefined
		defautlValue: null,
		selectionMode: 'single',  // Accepted Values: single, multiple
	},
    gridSettings:{
        rtlEnabled: false,
        filterRowVisible: true,
        hoverStateEnabled: true,
        scrollingMode: 'virtual',
        paging: {
            pageSize: 10,
            enabled: true,
        },
        columns: ['CompanyName', 'City', 'Phone'],
    },
    validationRules: [
	], // types: async|compare|custom|email|numeric|pattern|range|required|stringLength
};