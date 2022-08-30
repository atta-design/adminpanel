import { useState } from 'react';

// components
import {default as RadioGroup} from '../../../components/radioButton/RadioButton'
// configs
import { RadioGroupConfig as Event } from './configs/event';
import { RadioGroupConfig as Default } from './configs/default';
import { RadioGroupConfig as Disabled } from './configs/disabled';
import { RadioGroupConfig as Horizontal } from './configs/horizontal';
import { RadioGroupConfig as Template } from './configs/customTemplate';

import { tasks } from './data/tasks';
import './style/style.css'


export default function RadioButtonPreview() {

    const [value, setValue] = useState(null);
    const [cssClass, setCssClass] = useState(0);


    function get_css() {

        let css = Template.settings.dataSource.filter(
            (obj) => {
                return obj.id === cssClass;
            }
        )[0].text.toLowerCase();
        return css;
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
                                    <RadioGroup config={Default} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">غیرفعال</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <RadioGroup config={Disabled} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">افقی</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <RadioGroup config={Horizontal}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Custom Template</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <RadioGroup
                                        config={Template}
                                        className={get_css()}
                                        onValueChanged={(data) => setCssClass(data.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Event</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <RadioGroup
                                        config={Event}
                                        onValueChanged={(data) => setValue(data.value)}
                                    />
                                    <div id="tasks-list" dir="ltr">
                                        Tasks by selected priority:
                                        <ul id="list">
                                            {tasks.filter((task) => task.priority === value)
                                            .map((task) => <li key={task.id}>{task.subject}</li>)}
                                        </ul>
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