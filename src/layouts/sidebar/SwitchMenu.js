import React,{useState,useEffect} from 'react';
import {Switch, Route,Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Countries from '../../pages/countries/countryList'
import Roles from '../../pages/role/Roles'
import AddRole from '../../pages/role/Add';
import EditRole from '../../pages/role/Edit';
import CountryCreateModal from '../../components/modal/CountryCreateModal';
import Users from '../../pages/user/Users';
import Provinces from '../../pages/province/provinceList'

function SwitchMenu(){
    const {t}= useTranslation()
    var selectValue = localStorage.getItem('lng');
    if(null === selectValue)
{
    selectValue = 'fa';
}
    const[language,setLanguage]=useState('')

    useEffect(()=>{
      setLanguage(selectValue)
    },[t])
    
    
    return(
        <Switch>
            <Route exact path="/">
    <Redirect to={language} />
</Route>
           
            <Route path={'/'+language +'/Country'} component={Countries} />
            <Route path={'/'+language +'/Roles'} component={Roles} />
            <Route path={'/'+language +'/Users'} component={Users} />
            <Route path={'/'+language +'/Province'} component={Provinces} />

            <Route path="/role/add" component={AddRole} />
            <Route path="/role/Edit" component={EditRole} />
            <Route path="/Nations/add" component={CountryCreateModal} />
           

        </Switch>
    )
}


export default SwitchMenu;