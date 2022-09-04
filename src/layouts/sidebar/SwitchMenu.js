import React from 'react';
import {Switch, Route,Redirect } from "react-router-dom";




function SwitchMenu(){
    
    return(
        <Switch>
            <Route exact path="/">
    <Redirect to="/fa" />
</Route>
            <Route path="/fa/news"  />
            <Route path='/fa/login'  />
            <Route path="/fa/users"  />
            <Route path="/fa/roles"  />
            <Route path="/fa/roles2"  />
            <Route path="/fa/role/add"  />
            
        </Switch>
    )
}


export default SwitchMenu;