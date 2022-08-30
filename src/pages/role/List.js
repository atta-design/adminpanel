import { useHistory } from 'react-router-dom';
import React from 'react';

// components
import Grid from '../../components/dataGrid/Grid';
import {default as Button} from '../../components/button/Button';

import { GridConfig as RolesListConfig } from "./config";
import { ButtonConfig as AddRuleButtonConfig } from './AddRuleButtonConfig';


function Roles() {

    const history = useHistory();

    return (
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
                <div className="card">
                    <div className="card-header border-0 pt-6">
                        <div className="card-title">
                            <h2 className="fw-bolder text-dark mb-9">لیست نقش ها</h2>
                        </div>
                        <div className="card-toolbar">
                            <div className="d-flex justify-content-end">
                                <Button 
                                    config={AddRuleButtonConfig}
                                    onClick={() => {
                                        history.replace("/role/add")
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    <Grid
                        config={RolesListConfig}
                    />
                }
            </div>
        </div>
    );
}

export default Roles;