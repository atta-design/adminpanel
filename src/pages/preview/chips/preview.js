// components
import Chips from "../../../components/chips/Chips";

// configs
import { ChipsConfig } from "./config";


export default function ChipsPreview() {

    
    return(
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
				<div className="card">
                    <div className="gx-xxl-8">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                            <div className="card-header border-0 pt-5">
                                <h2 className="card-title fw-bolder text-dark">Chips</h2>
                            </div>
                            <div className="card-body py-3" dir="ltr">
                                <Chips config={ChipsConfig} filterParams={['entity=2']} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}