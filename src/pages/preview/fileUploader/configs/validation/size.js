const uploaderCustomData = {

};


export const FileUploaderConfig = {
    'settings': {
        'methods': {
            onProgress: null,
            onUploaded: null,
            onDisposing: null,
            onBeforeSend: null,
            onUploadError: null,
            onInitialized: null,
            onValueChanged: null,
            onContentReady: null,
            onUploadStarted: null,
            onUploadAborted: null,
            onOptionChanged: null,
            onFilesUploaded: null,
            onDropZoneEnter: null,
            onDropZoneLeave: null,
            uploadFile: null,
            uploadChunk: null,
            abortUpload: null,
        },
        uploadCustomData: uploaderCustomData,
        accept: "image/*",
        id: "file-uploader", 
        uploadUrl: "https://js.devexpress.com/Demos/NetCore/FileUploader/Upload", // Default Value: '/'
        name: "files[]", // Default Value: 'files[]'
        uploadButtonText: "Upload", // Default Value: 'Upload'
        uploadMethod: "POST", // Accepted Values: 'POST' | 'PUT'
        uploadedMessage: "Uploaded", // Default Value: 'Uploaded'
        selectButtonText: "Select Photo", // Default Value: 'Select File'
        uploadFailedMessage: "Upload failed", // Default Value: 'Upload failed'
        readyToUploadMessage: "Ready to upload", // Default Value: 'Ready to upload'
        uploadAbortedMessage: "Upload cancelled", // Default Value: 'Upload cancelled'
        uploadMode: "useButtons", // Accepted Values: 'instantly' | 'useButtons' | 'useForm'
        invalidFileExtensionMessage: "File type is not allowed", // Default Value: 'File type is not allowed'
        labelText: "", // Specifies the text displayed on the area to which an end-user can drop a file.
        invalidMaxFileSizeMessage: "File is too large", // The text displayed when the size of the file being uploaded is greater than the maxFileSize.
        invalidMinFileSizeMessage: "File is too small", // The text displayed when the size of the file being uploaded is greater than the minFileSize.
        visible: true,
        multiple: true,
        disabled: false,
        readOnly: false,
        rtlEnabled: false,
        showFileList: true,
        allowCanceling: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        allowedFileExtensions: [],
        progress: 0,
        tabIndex: 0,
        chunkSize: 0,
        maxFileSize: 4000000,
        minFileSize: 0,
        elementAttr: {},
        uploadHeaders: {},
        inputAttr: {}, // Specifies the attributes to be passed on to the underlying <input> element of the file type.
        accessKey: undefined, // Default Value: undefined
        hint: undefined, // Default Value: undefined Type: string
        height: undefined, // Default Value: undefined Type: string number func
        width: undefined, // Default Value: undefined Type: string number func
        dropZone: undefined, // Default Value: undefined Type: String | HTMLElement | jQuery
        dialogTrigger: undefined, // Default Value: undefined Type: String | HTMLElement | jQuery
    }
};