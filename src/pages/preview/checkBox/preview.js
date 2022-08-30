// components
import {default as CheckBox} from '../../../components/checkBox/CheckBox'

// configs
import { CheckBoxConfig as Checked } from './configs/checked';
import { CheckBoxConfig as Unchecked } from './configs/unchecked';
import { CheckBoxConfig as Indeterminate } from './configs/indeterminate';
import { CheckBoxConfig as HandleValue } from './configs/handleValue';
import { CheckBoxConfig as Disable } from './configs/disable';


export default function CheckBoxPreview() {

    const setValue = (value) => {

        document.getElementById('disable-check-box').firstChild.value = value
        document.getElementById('disable-check-box').setAttribute("aria-checked", value)
        
        if (!value) {
            document.getElementById('disable-check-box').setAttribute("class", "dx-widget dx-checkbox dx-state-disabled dx-state-focuse")    
        } else {
            document.getElementById('disable-check-box').setAttribute("class", "dx-widget dx-checkbox dx-checkbox-checked dx-state-disabled dx-state-focuse")    
        }
    }


    return(
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
				<div className="card">
                    <div className="row g-5 gx-xxl-8">
                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخاب شده</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <CheckBox config={Checked} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">انتخاب نشده</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <CheckBox config={Unchecked} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">نامشخص</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <CheckBox config={Indeterminate} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Handle value change</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <CheckBox config={HandleValue} onValueChanged={(data) => setValue(data.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">غیرفعال</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <CheckBox config={Disable} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}