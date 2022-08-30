import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import {FileUploaderConfig} from './config';

import FileUploader from 'devextreme-react/file-uploader';


class FileUploaderComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config;
        } else {
            this.config = FileUploaderConfig;
        }

        if (props.onValueChanged) {
            this.onValueChanged = props.onValueChanged;
        } else {
            this.onValueChanged = this.config.settings.methods.onValueChanged;
        }

        if (props.onUploadStarted) {
            this.onUploadStarted = props.onUploadStarted;
        } else {
            this.onUploadStarted = this.config.settings.methods.onUploadStarted;
        }

        if (props.onProgress) {
            this.onProgress = props.onProgress;
        } else {
            this.onProgress = this.config.settings.methods.onProgress;
        }

        if (props.onDropZoneEnter) {
            this.onDropZoneEnter = props.onDropZoneEnter;
        } else {
            this.onDropZoneEnter = this.config.settings.methods.onDropZoneEnter;
        }

        if (props.onDropZoneLeave) {
            this.onDropZoneLeave = props.onDropZoneLeave;
        } else {
            this.onDropZoneLeave = this.config.settings.methods.onDropZoneLeave;
        }

        if (props.onUploaded) {
            this.onUploaded = props.onUploaded;
        } else {
            this.onUploaded = this.config.settings.methods.onUploaded;
        }

        if (props.onInitialized) {
            this.onInitialized = props.onInitialized;
        } else {
            this.onInitialized = this.config.settings.methods.onInitialized;
        }
    }

    
    render() {
        return (
            <FileUploader 
                id={this.config.settings.id}
                onProgress={this.onProgress}
                onUploaded={this.onUploaded}
                hint={this.config.settings.hint}
                name={this.config.settings.name}
                onInitialized={this.onInitialized}
                width={this.config.settings.width}
                height={this.config.settings.height}
                onValueChanged={this.onValueChanged}
                accept={this.config.settings.accept}
                onUploadStarted={this.onUploadStarted}
                onDropZoneEnter={this.onDropZoneEnter}
                onDropZoneLeave={this.onDropZoneLeave}
                visible={this.config.settings.visible}
                dropZone={this.config.settings.dropZone}
                multiple={this.config.settings.multiple}
                disabled={this.config.settings.disabled}
                readOnly={this.config.settings.readOnly}
                progress={this.config.settings.progress}
                tabIndex={this.config.settings.tabIndex}
                chunkSize={this.config.settings.chunkSize}
                uploadUrl={this.config.settings.uploadUrl}
                labelText={this.config.settings.labelText}
                inputAttr={this.config.settings.inputAttr}
                rtlEnabled={this.config.settings.rtlEnabled}
                uploadMode={this.config.settings.uploadMode}
                maxFileSize={this.config.settings.maxFileSize}
                minFileSize={this.config.settings.minFileSize}
                elementAttr={this.config.settings.elementAttr}
                showFileList={this.config.settings.showFileList}
                uploadMethod={this.config.settings.uploadMethod}
                uploadHeaders={this.config.settings.uploadHeaders}
                dialogTrigger={this.config.settings.dialogTrigger}
                allowCanceling={this.config.settings.allowCanceling}
                uploadFile={this.config.settings.methods.uploadFile}
                uploadChunk={this.config.settings.methods.uploadChunk}
                uploadedMessage={this.config.settings.uploadedMessage}
                abortUpload={this.config.settings.methods.abortUpload}
                onDisposing={this.config.settings.methods.onDisposing}
                uploadButtonText={this.config.settings.uploadButtonText}
                uploadCustomData={this.config.settings.uploadCustomData}
                onBeforeSend={this.config.settings.methods.onBeforeSend}
                selectButtonText={this.config.settings.selectButtonText}
                onUploadError={this.config.settings.methods.onUploadError}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                onContentReady={this.config.settings.methods.onContentReady}
                onUploadAborted={this.config.settings.methods.onUploadAborted}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
                onFilesUploaded={this.config.settings.methods.onFilesUploaded}
                uploadFailedMessage={this.config.settings.uploadFailedMessage}
                uploadAbortedMessage={this.config.settings.uploadAbortedMessage}
                readyToUploadMessage={this.config.settings.readyToUploadMessage}
                allowedFileExtensions={this.config.settings.allowedFileExtensions}
                invalidMaxFileSizeMessage={this.config.settings.invalidMaxFileSizeMessage}
                invalidMinFileSizeMessage={this.config.settings.invalidMinFileSizeMessage}
                invalidFileExtensionMessage={this.config.settings.invalidFileExtensionMessage}
            >
            </FileUploader>
        );
        
    }
}

export default FileUploaderComponent;