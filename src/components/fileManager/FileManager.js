import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';

import { FileManagerConfig, createFile } from './config'

import FileManager, {
    Upload,
    Toolbar,
    ItemView,
    Permissions,
    ContextMenu,
    Notifications,
} from 'devextreme-react/file-manager';


class FileManagerComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config;
        } else {
            this.config = FileManagerConfig;
        }

        if (props.createFile) {
            this.createFile = props.config;
        } else {
            this.createFile = createFile;
        }

        this.fileManagerRef = React.createRef();
        this.toolbarItems = this.config.Toolbar.items
        this.toolbarItems.forEach(element => {
            if (element.widget === 'dxMenu') {
                if (element.options.key === "createFile") {
                    element.options.onItemClick = this.onItemClick.bind(this);
                }
            }
        });
    }

    render() {
        return (
            <FileManager
                ref={this.fileManagerRef}
                id={this.config.settings.id}
                hint={this.config.settings.hint}
                width={this.config.settings.width}
                height={this.config.settings.height}
                visible={this.config.settings.visible}
                disabled={this.config.settings.disabled}
                className={this.config.settings.className}
                rtlEnabled={this.config.settings.rtlEnabled}
                elementAttr={this.config.settings.elementAttr}
                onItemMoved={this.config.settings.methods.onItemMoved}
                onItemMoving={this.config.settings.methods.onItemMoving}
                onItemCopied={this.config.settings.methods.onItemCopied}
                onItemCopying={this.config.settings.methods.onItemCopying}
                onItemRenamed={this.config.settings.methods.onItemRenamed}
                onItemDeleted={this.config.settings.methods.onItemDeleted}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                onItemRenaming={this.config.settings.methods.onItemRenaming}
                onItemDeleting={this.config.settings.methods.onItemDeleting}
                onFileUploaded={this.config.settings.methods.onFileUploaded}
                fileSystemProvider={this.config.settings.fileSystemProvider}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                onContentReady={this.config.settings.methods.onContentReady}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
                onErrorOccurred={this.config.settings.methods.onErrorOccurred}
                onFileUploading={this.config.settings.methods.onFileUploading}
                onItemDownloading={this.config.settings.methods.onItemDownloading}
                allowedFileExtensions={this.config.settings.allowedFileExtensions}
                onSelectionChanged={this.config.settings.methods.onSelectionChanged}
                onToolbarItemClick={this.config.settings.methods.onToolbarItemClick}
                customizeThumbnail={this.config.settings.methods.customizeThumbnail}
                onDirectoryCreated={this.config.settings.methods.onDirectoryCreated}
                onDirectoryCreating={this.config.settings.methods.onDirectoryCreating}
                onFocusedItemChanged={this.config.settings.methods.onFocusedItemChanged}
                onSelectedFileOpened={this.config.settings.methods.onSelectedFileOpened}
                onContextMenuItemClick={this.config.settings.methods.onContextMenuItemClick}
                onCurrentDirectoryChanged={this.config.settings.methods.onCurrentDirectoryChanged}
                selectionMode={
                    this.config.settings.selectionMode ? this.config.settings.selectionMode : "single"
                }
                rootFolderName={
                    this.config.settings.rootFolderName ? this.config.settings.rootFolderName : "Root"
                }
            >
                <Notifications 
                    showPanel={this.config.Notifications.showPanel}
                    showPopup={this.config.Notifications.showPopup}
                />
                <Upload 
                    maxFileSize={
                        this.config.Upload.maxFileSize ? this.config.Upload.maxFileSize : 0
                    }
                    chunkSize={
                        this.config.Upload.chunkSize ? this.config.Upload.chunkSize : 200000
                    }
                />
                <Permissions
                    copy={this.config.Permissions.copy}
                    move={this.config.Permissions.move}
                    create={this.config.Permissions.create}
                    upload={this.config.Permissions.upload}
                    remove={this.config.Permissions.remove}
                    rename={this.config.Permissions.rename}
                    download={this.config.Permissions.download}
                />
                <ItemView
                    details={{columns: this.config.Columns}}
                    showFolders={this.config.ItemView.showFolders}
                    showParentFolder={this.config.ItemView.showParentFolder}
                ></ItemView>
                <Toolbar
                    items={this.toolbarItems}
                    fileSelectionItems={this.config.Toolbar.fileSelectionItems}
                ></Toolbar>
                <ContextMenu
                    items={this.config.ContextMenu.items}
                ></ContextMenu>          
            </FileManager>
        );
    }

    get fileManager() {
        return this.fileManagerRef.current.instance;
    }

    onItemClick({ itemData, viewArea, fileSystemItem }) {

        let updated = false;
        
        if (itemData.extension) {
            updated = this.createFile(itemData.extension, this.fileManager);
        }
    
        if (updated) {
            this.fileManager.refresh();
        }
    }
}

export default FileManagerComponent;