// components
import {default as TextBox} from '../../../components/textBox/TextBox'
import {default as NumberBox} from '../../../components/numberBox/NumberBox'

// configs
import { TextBoxConfig as Mask } from './maskConfig';
import { TextBoxConfig as Event } from './eventConfig';
import { NumberBoxConfig as Price } from './priceConfig';
import { TextBoxConfig as Disable } from './disableConfig';
import { TextBoxConfig as Email } from './emailViewConfig';
import { TextBoxConfig as ClearButton} from './clearButtonConfig';
import { TextBoxConfig as DefaultMode } from './defaultModeConfig';
import { TextBoxConfig as Placeholder } from './placeholderConfig';
import { TextBoxConfig as PasswordMode} from './passwordModeConfig';


export default function TextBoxPreview() {

    const setValue = (value) => {
        value = `${value.replace(/\s/g, '').toLowerCase()}@gmail.com`
        document.getElementById('email-text-box-input').value = value
    }

    
    return(
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
				<div className="card">
                    <div className="row g-5 gx-xxl-8">
                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">پیش فرض</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <TextBox config={DefaultMode} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">placeholder</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <TextBox config={Placeholder} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">با دکمه پاک کردن</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <TextBox config={ClearButton} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">حالت رمز</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <TextBox config={PasswordMode} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">غیرفعال</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <TextBox config={Disable} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Mask</h3>
                                </div>
                                <div className="card-body pt-0" dir="ltr">
                                    <TextBox config={Mask} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Event</h3>
                                </div>
                                <div className="card-body pt-0" dir='ltr'>
                                    <TextBox config={Event} onValueChanged={(data) => setValue(data.value)}/>
                                    <TextBox config={Email}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">قیمت</h3>
                                </div>
                                <div className="card-body pt-0" dir='ltr'>
                                    <NumberBox config={Price}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}