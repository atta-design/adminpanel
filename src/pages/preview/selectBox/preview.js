import { useState } from 'react';
import { Template } from 'devextreme-react/core/template';
// components
import {default as SelectBox} from '../../../components/selectBox/SelectBox'

// configs
import { SelectBoxConfig as Icon } from './configs/icon';
import { SelectBoxConfig as Event } from './configs/event';
import { SelectBoxConfig as Disable } from './configs/disable';
import { SelectBoxConfig as Tempate } from './configs/template';
import { SelectBoxConfig as ReadOnly } from './configs/readonly';
import { SelectBoxConfig as DefaultMode } from './configs/default';
import { SelectBoxConfig as Placeholder } from './configs/placeholder';
import { SelectBoxConfig as GroupedData } from './configs/groupedData';
import { SelectBoxConfig as LoadIndicator } from './configs/loadIndicator';
import { SelectBoxConfig as CustomGroupedDataTemplate } from './configs/customGroupedDataTemplate';
import IndicatorIcon from './configs/indicatorIcon.js';



export default function SelectBoxPreview() {

    const [value, setValue] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    const deferredProducts = {
        loadMode: 'raw',
        load: () => {
            setIsLoaded(false);
            const promise = new Promise((resolve) => {
                setTimeout(() => {
                resolve(LoadIndicator.settings.dataSource);
                setIsLoaded(false);
                }, 3000);
            });
    
            return promise;
        },
    };
    

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
                                    <SelectBox config={DefaultMode} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">placeholder</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={Placeholder} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">غیرفعال</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={Disable} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">readOnly</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={ReadOnly} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Custom Template</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={Tempate} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Custom DropDown Icon</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={Icon} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">داده های گروه بندی شده</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={GroupedData} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Custom Group Template</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={CustomGroupedDataTemplate} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">استفاده از indicator</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={LoadIndicator} dataSource={deferredProducts}>
                                        <Template name='loadIndicator' render={() => <IndicatorIcon isLoaded={isLoaded} /> }/>
                                    </SelectBox>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Event</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <SelectBox config={Event} onValueChanged={(data) => setValue(data.value)}/>
                                    <div className="current-value">
                                        id محصول انتخابی شما <span>{value}</span>
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