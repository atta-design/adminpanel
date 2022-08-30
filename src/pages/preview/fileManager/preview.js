// components
import {default as FileManager} from '../../../components/fileManager/FileManager'

// configs
import { FileManagerConfig } from '../../../components/fileManager/config'


export default function FileManagerPreview() {
    

    return(
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
				<div className="card">
                    <div className="gx-xxl-8">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                                <div className="card-header border-0 pt-5">
                                    <h2 className="card-title fw-bolder text-dark">فایل منیجر</h2>
                                </div>
                                <div className="card-body py-3">
                                    <FileManager config={FileManagerConfig} />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}