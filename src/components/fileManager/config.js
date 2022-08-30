import { fileItems } from './data.js';

import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';


// define the server files url
const remoteFileProvider = new RemoteFileSystemProvider({
    endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
});


// Handle the execution of the context item
const onItemClick = () => {
    return(
        function onItemClick(e) {
            // your code
        }
    )
}

// Specify what happens when the content is ready
const onContentReady = () => {
    return(
        function onContentReady(e) {
            // your code
        }
    )
};


// It is executed when the current directory is changed.
const onDirectoryChanged = () => {
    return(
        function onDirectoryChanged(e) {
            // your code
        }
    )
};


// It is executed when the directory is created.
const onDirectoryCreated = () => {
    return(
        function onDirectoryCreated(e) {
            // your code
        }
    )
};


// It is executed before the directory is created.
const onDirectoryCreating = () => {
    return(
        function onDirectoryCreating(e) {
            // your code
        }
    )
};


// It is executed when an error occurs.
const onErrorOccurred = () => {
    return(
        function onErrorOccurred(e) {
            // your code
        }
    )
};


// It is executed when a file is successfully uploaded.
const onFileUploaded = () => {
    return(
        function onFileUploaded(e) {
            // your code
        }
    )
};


// It is executed before a file is uploaded.
const onFileUploading = () => {
    return(
        function onFileUploading(e) {
            // your code
        }
    )
};


// It is executed when the focused item is changed.
const onFocusedItemChanged = () => {
    return(
        function onFocusedItemChanged(e) {
            // your code
        }
    )
};


// It is executed when a file or directory is copied.
const onItemCopied = () => {
    return(
        function onItemCopied(e) {
            // your code
        }
    )
};


// It is executed before a file or directory is copied.
const onItemCopying = () => {
    return(
        function onItemCopying(e) {
            // your code
        }
    )
};


// It is executed when a file or directory is deleted.
const onItemDeleted = () => {
    return(
        function onItemDeleted(e) {
            // your code
        }
    )
};


// It is executed before a file or directory is deleted.
const onItemDeleting = () => {
    return(
        function onItemDeleting(e) {
            // your code
        }
    )
};


// It is executed before a file is downloaded.
const onItemDownloading = () => {
    return(
        function onItemDownloading(e) {
            // your code
        }
    )
};


// It is executed when a file or directory is moved.
const onItemMoved = () => {
    return(
        function onItemMoved(e) {
            // your code
        }
    )
};


// It is executed before a file or directory is moved.
const onItemMoving = () => {
    return(
        function onItemMoving(e) {
            // your code
        }
    )
};


// It is executed when a file or directory is renamed.
const onItemRenamed = () => {
    return(
        function onItemRenamed(e) {
            // your code
        }
    )
};


// It is executed before a file or directory is renamed.
const onItemRenaming = () => {
    return(
        function onItemRenaming(e) {
            // your code
        }
    )
};


// It is executed after a UI component property is changed.
const onOptionChanged = () => {
    return(
        function onOptionChanged(e) {
            // your code
        }
    )
};


// It is executed when the selected file is opened.
const onSelectedFileOpened = () => {
    return(
        function onSelectedFileOpened(e) {
            // your code
        }
    )
};


// It is executed when a file system item is selected or selection is canceled.
const onSelectionChanged = () => {
    return(
        function onSelectionChanged(e) {
            // your code
        }
    )
};


// It is executed when a toolbar item is clicked.
const onToolbarItemClick = () => {
    return(
        function onToolbarItemClick(e) {
            // your code
        }
    )
};


// Don't change the header
// Change the body
export function createFile(fileExtension, fileManager) { 
    
    let directory = fileManager.getCurrentDirectory();

    const newItem = {
        __KEY__: Date.now(),
        name: `New file${fileExtension}`,
        isDirectory: false,
        size: 0,
    };

    if (!directory.isDirectory) {
        return false;
    }

    let array = null;
    if (!directory.dataItem) {
        array = FileManagerConfig.settings.fileSystemProvider;
    } else {
        array = directory.dataItem.items;
        if (!array) {
            array = [];
            directory.dataItem.items = array;
        }
    }

    array.push(newItem);
    return true;
};


/* You can specify an icon in the following formats:
The icon's URL.
The icon's name if the icon is from the DevExtreme icon library.
The icon's CSS class if the icon is from an external icon library (see External Icon Libraries).
The icon in the Base64 format. */
// Specify icons for files and folders
const customizeIcon = () => {
    return (
        function customizeIcon(fileManagerItem) {
            // if (fileManagerItem.isDirectory){
                // specify directory icone
                // return ...
            // };
            // const fileExtension = fileManagerItem.getExtension();
            // switch (fileExtension) {
                // specify directory icon
                // case '.<extension>':
                //     return ...;
            // };
        }
    )
};


// Specify allowed file extension
const allowedFileExtensions = [];


export const FileManagerConfig = {
    'settings': {
        'methods': {
            onItemMoved: onItemMoved(),
            onItemMoving: onItemMoving(),
            onItemCopied: onItemCopied(),
            onItemCopying: onItemCopying(),
            onItemRenamed: onItemRenamed(),
            onItemDeleted: onItemDeleted(),
            onItemDeleting: onItemDeleting(),
            onItemRenaming: onItemRenaming(),
            onContentReady: onContentReady(),
            onFileUploaded: onFileUploaded(),
            onFileUploading: onFileUploading(),
            onOptionChanged: onOptionChanged(),
            onErrorOccurred: onErrorOccurred(),
            customizeThumbnail: customizeIcon(),
            onContextMenuItemClick: onItemClick(),
            onItemDownloading: onItemDownloading(),
            onSelectionChanged: onSelectionChanged(),
            onToolbarItemClick: onToolbarItemClick(),
            onDirectoryCreated: onDirectoryCreated(),
            onDirectoryCreating: onDirectoryCreating(),
            onFocusedItemChanged: onFocusedItemChanged(),
            onSelectedFileOpened: onSelectedFileOpened(),
            onCurrentDirectoryChanged: onDirectoryChanged(),
        },
        height: 450,
        visible: true,
        // className: '',
        // width: "400px",
        elementAttr: {},
        disabled: false,
        // height: "500px",
        id: "FileManager",
        rtlEnabled: true,
        hint: "It is the hint",
        focusStateEnabled: true,
        activeStateEnabled: true,
        hoverStateEnabled: false,
        fileSystemProvider: fileItems,
        // fileSystemProvider: remoteFileProvider,
        allowedFileExtensions: allowedFileExtensions,
        accessKey: undefined, // Default Value: undefined
        rootFolderName: "~/Files", // Default Value: 'Root'
        selectionMode: "multiple", // Accepted Values: 'multiple' | 'single'
    },
    'Upload': {
        maxFileSize: 1000000,  // Default Value: 0
        chunkSize: 500000, //Default Value: 200000
    },
    'ItemView': {
        showFolders: true, 
        showParentFolder: false,
    },
    'Notifications': {
        showPanel: true,
        showPopup: true,
    },
    'Permissions': {
        copy: true,
        move: true,
        create: true,
        upload: true,
        remove: true,
        rename: true,
        download: true,
    },
    'Columns': [
        {
            visible: true,
            sortIndex: 0, // Default Value: undefined
            // width: "95%", // Default Value: undefined
            // visibleIndex: 0, // Default Value: undefined
            // hidingPriority: 0, // Default Value: undefined
            caption: "Icon", // Default Value is undefined
            // cssClass: "cssClass", // Default Value is undefined
            dataField: "thumbnail", // Default Value is undefined
            sortOrder: "asc", //Accepted Values: undefined | 'asc' | 'desc'
            alignment: "left", //Accepted Values: undefined | 'center' | 'left' | 'right'
            dataType: "object", // Accepted Values: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'
        },
        {
            visible: true,
            caption: "Name",
            sortOrder: "asc",
            dataField: "name",
            dataType: "object",
        },
        // ...
    ],
    'Toolbar': {
        'items': [
            {
                visible: true,
                // text: "",
                disabled: false,
                showText: "always", // inMenu
                // icon: "", // Default Value: ''
                cssClass: "",// Default Value: undefined
                options: {}, // Specify the options of widget that you want to use for item
                locateInMenu: "never", //Accepted Values: 'always' | 'auto' | 'never' default:never
                location: "before", //Accepted Values: 'after' | 'before' | 'center' default before
                name: "showNavPane", //Accepted Values: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'
                // widget: undefined, // Accepted Values: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
            },
            {
                name: 'separator',
            },
            {
                visible: true,
                // text: "",
                disabled: false,
                showText: "always", // inMenu
                // icon: "", // Default Value: ''
                cssClass: "",// Default Value: undefined
                options: {}, // Specify the options of widget that you want to use for item
                locateInMenu: "never", //Accepted Values: 'always' | 'auto' | 'never' default:never
                location: "before", //Accepted Values: 'after' | 'before' | 'center' default before
                name: "create", //Accepted Values: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'
                // widget: undefined, // Accepted Values: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
            },
            // You can add other extension for creating
            {
                widget: "dxMenu",
                options:{
                    key: 'createFile', // Don't change
                    items: [
                        {
                            text: 'Create new file',
                            icon: 'plus',
                            items: [
                                {
                                    text: 'Text Document',
                                    extension: '.txt',
                                },
                                {
                                    text: 'RTF Document',
                                    extension: '.rtf',
                                },
                                {
                                    text: 'Spreadsheet',
                                    extension: '.xls',
                                },
                            ],
                        },
                    ],
                },
                
            },
            {
                visible: true,
                // text: "",
                disabled: false,
                showText: "always", // inMenu
                // icon: "", // Default Value: ''
                // cssClass: "",// Default Value: undefined
                options: {}, // Specify the options of widget that you want to use for item
                locateInMenu: "never", //Accepted Values: 'always' | 'auto' | 'never' default:never
                location: "before", //Accepted Values: 'after' | 'before' | 'center' default before
                name: "upload", //Accepted Values: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'
                // widget: undefined, // Accepted Values: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
            },
            {
                visible: true,
                // text: "",
                disabled: false,
                showText: "always", // inMenu
                icon: "", // Default Value: ''
                // cssClass: "",// Default Value: undefined
                options: {}, // Specify the options of widget that you want to use for item
                locateInMenu: "never", //Accepted Values: 'always' | 'auto' | 'never' default:never
                location: "after", //Accepted Values: 'after' | 'before' | 'center' default before
                name: "switchView", //Accepted Values: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'
                // widget: undefined, // Accepted Values: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
            },
            {
                visible: true,
                text: "",
                disabled: false,
                showText: "always", // inMenu
                // icon: "", // Default Value: ''
                // cssClass: "",// Default Value: undefined
                options: {}, // Specify the options of widget that you want to use for item
                locateInMenu: "never", //Accepted Values: 'always' | 'auto' | 'never' default:never
                location: "after", //Accepted Values: 'after' | 'before' | 'center' default before
                name: "refresh", //Accepted Values: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'
                // widget: undefined, // Accepted Values: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
            },
        ],
        'fileSelectionItems': [
            {
                visible: true,
                text: "RenamE",
                disabled: false,
                showText: "always", // inMenu
                icon: "rename", // Default Value: ''
                // cssClass: "",// Default Value: undefined
                options: {}, // Specify the options of widget that you want to use for item exp: onClick
                locateInMenu: "never", //Accepted Values: 'always' | 'auto' | 'never' default:never
                location: "before", //Accepted Values: 'after' | 'before' | 'center' default before
                name: "rename", //Accepted Values: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'
                // widget: undefined, // Accepted Values: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
            },
            {
                visible: true,
                text: "Copy to",
                icon: "copy",
                name: "copy",
            },
            {
                visible: true,
                text: "Move to",
                name: "move",
            },
        ],
    },
    'ContextMenu': {
        'items': [
            {
                visible: true,
                disabled: false,
                selected: false,
                beginGroup: false,
                selectable: false,
                text: "Remove it",
                closeMenuOnClick: true,
                name: 'delete', // Accepted Values: 'create' | 'upload' | 'refresh' | 'download' | 'move' | 'copy' | 'rename' | 'delete'
            },
            {
                visible: true,
                icon: "rename",
                disabled: false,
                selected: false,
                beginGroup: false,
                selectable: false,
                text: "Rename it",
                closeMenuOnClick: true,
                name: 'rename', // Accepted Values: 'create' | 'upload' | 'refresh' | 'download' | 'move' | 'copy' | 'rename' | 'delete'
            },
            {
                visible: true,
                icon: "refresh",
                disabled: false,
                selected: false,
                beginGroup: true,
                selectable: false,
                text: "Refresh",
                closeMenuOnClick: true,
                name: 'refresh', // Accepted Values: 'create' | 'upload' | 'refresh' | 'download' | 'move' | 'copy' | 'rename' | 'delete'
            },
        ],
    }
};