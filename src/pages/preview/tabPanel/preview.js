/* eslint react/jsx-no-bind: off */
import React, { useState } from 'react';

// components
import {default as TabPanel} from '../../../components/tabPanel/TabPanel'

// configs
import { TabPanelConfig as First } from './configs/first';

import './css/styles.css'


export default function TabPanelPreview() {

    // Example 1 ###########################################
    const [selectedIndex, setSelectedIndex] = useState(0);


    function onSelectionChanged(args) {
        if (args.name === 'selectedIndex') {
            setSelectedIndex(old => args.value);
        }
    }
    // #####################################################


    return(
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
				<div className="card">
                    <div className="gx-xxl-8">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                            <div className="card-header border-0 pt-5">
                                <h2 className="card-title fw-bolder text-dark">مثال</h2>
                            </div>
                            <div className="card-body py-3" dir="ltr">
                                <TabPanel
                                    config={First}
                                    selectedIndex={selectedIndex}
                                    onOptionChanged={onSelectionChanged}
                                />
                                <div className="item-box">
                                    Item <span>{ selectedIndex + 1 }</span> of <span>{ First.settings.dataSource.length }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}