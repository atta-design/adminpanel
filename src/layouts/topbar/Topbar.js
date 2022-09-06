import React from 'react'
import TopbarUserProfile from './TopbarUserProfile';
import TopbarMessage from './TopbarMessage';
import TopbarMenu from './TopbarMenu';
import { useTranslation } from "react-i18next";
import { useHistory  } from 'react-router-dom'

function Topbar(){
const {t,i18n }= useTranslation()
let history = useHistory();

// change language process
const languagehandler=(e)=>{
    i18n.changeLanguage(e.target.value)
    localStorage.setItem("lng",e.target.value)
    history.push("/"+e.target.value);}
    var selectValue = localStorage.getItem('lng');
    if(null === selectValue)
{
    selectValue = 'fa';
}
    return (
        <div id="kt_header" className="header align-items-stretch">
            <div className="container-fluid d-flex align-items-stretch justify-content-between">
                
                {/* show menu button */}
                <div className="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
                    <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
                        <span className="svg-icon svg-icon-2x mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" fill="none" >
                                    <rect x="0" y="0" width="24" height="24" />
                                    <rect fill="#000000" x="4" y="5" width="16" height="3" rx="1.5" />
                                    <path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#000000" opacity="0.3" />
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>
                
                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                    
                    <div className="d-flex align-items-stretch" id="kt_header_nav">
                        <div className="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                            <TopbarMenu />
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-stretch flex-shrink-0">

                        <select value={selectValue}  onChange={languagehandler}>
                            <option value='fa'>فارسی</option>
                            <option value='en'>English</option>
                            <option value='ar'>عربی</option>
                        </select>
                        <TopbarMessage />
                        <TopbarUserProfile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;