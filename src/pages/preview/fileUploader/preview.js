import {useState} from 'react';
import ProgressBar from 'devextreme-react/progress-bar';

// components
import {default as FileUploader} from '../../../components/fileUploader/FileUploader';

// configs
import { FileUploaderConfig as Form } from './configs/form';
import { FileUploaderConfig as Async } from './configs/async';
import { FileUploaderConfig as Chunk } from './configs/chunk';
import { FileUploaderConfig as DropZone } from './configs/dropZone';
import { FileUploaderConfig as Size } from './configs/validation/size';
import { FileUploaderConfig as Extension } from './configs/validation/extension';

import './style/async.css'


export default function FileUploaderPreview() {

    const [selectedFiles, setSelectedFiles] = useState([])
    

    // Chunk settings ###################################
    const [chunks, setChunks] = useState([])


    function onUploadProgress(e) {
        const chunk = {
            bytesTotal: e.bytesTotal,
            segmentSize: e.segmentSize,
            bytesLoaded: e.bytesLoaded,
        };
        setChunks(oldChunks => [...oldChunks, chunk]);
    }

    function getValueInKb(value) {
        return `${(value / 1024).toFixed(0)}kb`;
    }
    // ##################################################


    // Drop zone ########################################
    const [imageSource, setImageSource] = useState('');
    const [textVisible, setTextVisible] = useState(true);
    const [progressValue, setProgressValue] = useState(0);
    const [progressVisible, setProgressVisible] = useState(false);
    const [isDropZoneActive, setIsDropZoneActive] = useState(false);


    function onDropZoneEnter(e) {
        if (e.dropZoneElement.id === 'dropzone-external') {
            setIsDropZoneActive(true);
        }
    }
    
    function onDropZoneLeave(e) {
        if (e.dropZoneElement.id === 'dropzone-external') {
            setIsDropZoneActive(false);
        }
    }

    function onUploaded(e) {
        const { file } = e;
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setIsDropZoneActive(false);
            setImageSource(fileReader.result)
        };
        fileReader.readAsDataURL(file);
        setProgressValue(0);
        setTextVisible(false);
        setProgressVisible(false);
    }

    function onProgress(e) {
        setProgressValue((e.bytesLoaded / e.bytesTotal) * 100);
    }

    function onUploadStarted() {
        setImageSource('');
        setProgressVisible(true);
    }
    // ##################################################


    return(
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
				<div className="card">
                    <div className="row g-5 gx-xxl-8">
                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Form</h3>
                                </div>

                                <div className="card-body pt-0">
                                    <div className="fileuploader-container">
                                        <FileUploader config={Form} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Async and multiple</h3>
                                </div>

                                <div className="card-body pt-0">
                                    <FileUploader config={Async} onValueChanged={(e) => setSelectedFiles(e.value)} />
                                </div>
                                <div className="content-fileuploder" style={{ display: selectedFiles.length > 0 ? 'block' : 'none' }} dir="ltr">
                                    <div>
                                        <h4>Selected Files</h4>
                                        {
                                            selectedFiles.map((file, i) => <div className="selected-item" key={i}>
                                            <span>{`Name: ${file.name}`}<br /></span>
                                            <span>{`Size ${file.size}`}<br /></span>
                                            <span>{`Type ${file.size}`}<br /></span>
                                            <span>{`Last Modified Date: ${file.lastModifiedDate}`}</span>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Validation</h3>
                                </div>

                                <div className="card-body pt-0">
                                    <div className="file-uploader-block" dir="ltr">
                                        <FileUploader config={Size} />
                                        <span className="note" dir="ltr">{'Maximum file size: '}
                                            <span>4 MB</span>
                                            .
                                        </span>
                                    </div>
                                </div>

                                <div className="card-body pt-0">
                                    <div className="file-uploader-block" dir="ltr">
                                        <FileUploader config={Extension} />
                                        <span className="note" dir="ltr">{'Allowed file extensions: '}
                                            <span>.jpg, .jpeg, .gif, .png</span>
                                            .
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Chunk</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="file-uploader-block" dir="ltr">
                                        <FileUploader
                                            config={Chunk}
                                            onProgress={onUploadProgress}
                                            onUploadStarted={() => setChunks([])}
                                        />
                                        <span className="note">Allowed file extensions: <span>.jpg, .jpeg, .gif, .png</span>.</span><br />
                                        <span className="note">Maximum file size: <span>4 MB.</span></span>
                                        <div className="chunk-panel" dir="ltr">
                                            {
                                                chunks.map((c, i) => <div key={i}>
                                                <span>Chunk size:</span>
                                                <span className="segment-size dx-theme-accent-as-text-color">{getValueInKb(c.segmentSize)}</span>
                                                <span>, Uploaded:</span>
                                                <span className="loaded-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesLoaded)}</span>
                                                <span>/</span>
                                                <span className="total-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesTotal)}</span>
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Custom Drop Zone</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="widget-container flex-box">
                                        <span>Profile Picture</span>
                                        <div id="dropzone-external" className={`flex-box ${isDropZoneActive ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color'}`}>
                                            {imageSource && <img id="dropzone-image" src={imageSource} alt="" />}
                                            {textVisible
                                            && <div id="dropzone-text" className="flex-box">
                                                <span>Drag & Drop the desired file</span>
                                                <span>…or click to browse for a file instead.</span>
                                            </div>}
                                            <ProgressBar
                                                id="upload-progress"
                                                min={0}
                                                max={100}
                                                width="30%"
                                                showStatus={false}
                                                visible={progressVisible}
                                                value={progressValue}
                                            ></ProgressBar>
                                            <FileUploader
                                                config={DropZone}
                                                onUploaded={onUploaded}
                                                onProgress={onProgress}
                                                onDropZoneEnter={onDropZoneEnter}
                                                onDropZoneLeave={onDropZoneLeave}
                                                onUploadStarted={onUploadStarted}    
                                            />
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}