import React from 'react';

// components
import Grid from "../../components/dataGrid/Grid";

//utiles
import { GridConfig as UsersListConfig } from "./config";


function Users() {

    return (
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
                <Grid config={UsersListConfig} />
            </div>
        </div>
    )
}


export default Users;