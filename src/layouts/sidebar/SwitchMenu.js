import React,{useState,useEffect} from 'react';
import {Switch, Route,Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";




function SwitchMenu(){
    const {t}= useTranslation()

    const[language,setLanguage]=useState('')

    useEffect(()=>{
      setLanguage(localStorage.getItem("lng"))
    },[t])
    
    
    return(
        <Switch>
            <Route exact path="/">
    <Redirect to={language} />
</Route>
            {/* <Route path={language }  />
            <Route path='/fa/login'  />
            <Route path="/fa/users"  />
            <Route path="/fa/roles"  />
            <Route path="/fa/roles2"  />
            <Route path="/fa/role/add"  /> */}
            
        </Switch>
    )
}


export default SwitchMenu;