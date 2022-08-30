const fileUploader_abortUpload = () => {
    return(
        function fileUploader_abortUpload(file, uploadInfo) {
            // your code
        }
    )
};

const onBeforeSend = () => {
    return(
        function onBeforeSend(e) {
            e.request.withCredentials = true;
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

const onDisposing = () => {
    return (
        function onDisposing(e) {
            // your code
        }
    )
};

const onDropZoneEnter = () => {
    return (
        function onDropZoneEnter(e) {
            // your code
        }
    )
};

const onDropZoneLeave = () => {
    return (
        function onDropZoneLeave(e) {
            // your code
        }
    )
};

const onFilesUploaded = () => {
    return (
        function onFilesUploaded(e) {
            // your code
        }
    )
};

const onInitialized = () => {
    return (
        function onInitialized(e) {
            // your code
        }
    )
};

const onOptionChanged = () => {
    return (
        function onOptionChanged(e) {
            // your code
        }
    )
};

const onProgress = () => {
    return (
        function onProgress(e) {
            // your code
        }
    )
};

const onUploadAborted = () => {
    return (
        function onUploadAborted(e) {
            // your code
        }
    )
};

const onUploaded = () => {
    return (
        function onUploaded(e) {
            // your code
        }
    )
};

const onUploadError = () => {
    return (
        function onUploadError(e) {
            // your code
        }
    )
};

const onUploadStarted = () => {
    return (
        function onUploadStarted(e) {
            // your code
        }
    )
};

const onValueChanged = () => {
    return (
        function onValueChanged(e) {
            // your code
        }
    )
};

const fileUploader_uploadChunk = () => {
    return (
        function fileUploader_uploadChunk(file, uploadInfo) {
            // your code
        }
    )
};

const fileUploader_uploadFile= () => {
    return (
        function fileUploader_uploadFile(file, progressCallback) {
            // your code
        }
    )
}

const uploaderCustomData = {

};


export const FileUploaderConfig = {
    'settings': {
        'methods': {
            onProgress: onProgress(),
            onUploaded: onUploaded(),
            onDisposing: onDisposing(),
            onBeforeSend: onBeforeSend(),
            onUploadError: onUploadError(),
            onInitialized: onInitialized(),
            onValueChanged: onValueChanged(),
            onContentReady: onContentReady(),
            onUploadStarted: onUploadStarted(),
            onUploadAborted: onUploadAborted(),
            onOptionChanged: onOptionChanged(),
            onFilesUploaded: onFilesUploaded(),
            onDropZoneEnter: onDropZoneEnter(),
            onDropZoneLeave: onDropZoneLeave(),
            uploadFile: fileUploader_uploadFile(),
            uploadChunk: fileUploader_uploadChunk(),
            abortUpload: fileUploader_abortUpload(),
        },
        uploadCustomData: uploaderCustomData,
        accept: "image/*",
        id: "file-uploader", 
        uploadUrl: "/", // Default Value: '/'
        name: "files[]", // Default Value: 'files[]'
        uploadButtonText: "Upload", // Default Value: 'Upload'
        uploadMethod: "POST", // Accepted Values: 'POST' | 'PUT'
        uploadedMessage: "Uploaded", // Default Value: 'Uploaded'
        selectButtonText: "Select File", // Default Value: 'Select File'
        uploadFailedMessage: "Upload failed", // Default Value: 'Upload failed'
        readyToUploadMessage: "Ready to upload", // Default Value: 'Ready to upload'
        uploadAbortedMessage: "Upload cancelled", // Default Value: 'Upload cancelled'
        uploadMode: "instantly", // Accepted Values: 'instantly' | 'useButtons' | 'useForm'
        invalidFileExtensionMessage: "File type is not allowed", // Default Value: 'File type is not allowed'
        labelText: "or Drop file here", // Specifies the text displayed on the area to which an end-user can drop a file.
        invalidMaxFileSizeMessage: "File is too large", // The text displayed when the size of the file being uploaded is greater than the maxFileSize.
        invalidMinFileSizeMessage: "File is too small", // The text displayed when the size of the file being uploaded is greater than the minFileSize.
        visible: true,
        isValid: true,
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
        maxFileSize: 0,
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