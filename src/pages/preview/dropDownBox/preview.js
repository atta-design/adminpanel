// components
import {default as DropDownBox} from '../../../components/dropDown/box/DropDown'

// configs
import { DropDownBoxConfig as SingleTree } from './configs/singleTree';
import { DropDownBoxConfig as SingleGrid } from './configs/singleGrid';
import { DropDownBoxConfig as MultipleGrid } from './configs/multipleGrid';
import { DropDownBoxConfig as MultipleTree } from './configs/multipleTree';


export default function DropDownBoxPreview() {
    

    return(
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
				<div className="card">
                    <div className="gx-xxl-8">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                                <div className="card-header border-0 pt-5">
                                    <h2 className="card-title fw-bolder text-dark">تک انتخابی</h2>
                                </div>
                                <div className="card-body py-3">
                                    <DropDownBox config={SingleTree} />
                                </div>
                                <div className="card-body py-3">
                                    <DropDownBox config={SingleGrid} />
                                </div>
                        </div>
                    </div>
                </div>
                
				<div className="card">
                    <div className="gx-xxl-8">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                                <div className="card-header border-0 pt-5">
                                    <h2 className="card-title fw-bolder text-dark">چند انتخابی</h2>
                                </div>
                                <div className="card-body py-3">
                                    <DropDownBox config={MultipleTree} />
                                </div>
                                <div className="card-body py-3">
                                    <DropDownBox config={MultipleGrid} />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}