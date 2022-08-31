import React from "react";
import { Link } from "react-router-dom";
import AccordionMenu from './AccordionMenu';

function SidbarMenu() {

const navigationList = [
    { id: 1, text: "داشبورد", icon: "home", path: "" },
    { id: 2, text: "لیست کاربران", icon: "user", path: "users" },
    { id: 3, text: "لیست نقش ها", icon: "tips", path: "roles" },
    { id: 4, text: "اخبار", icon: "info", path: "news" },
    { id: 5, text: "نقش ها 2", icon: "info", path: "roles2" }
];

let asideData = null;

asideData = navigationList.map((i, index) => {
    return (
        <div className="menu-item" key={index}>
            <Link className={"menu-link " + (i.id === 1 ? "" : "")} to={"/" + i.path}>
                <span className="menu-icon">
                    <span className="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <path d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3" />
                            <path d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000" />
                        </svg>
                    </span>
                </span>
                <span className="menu-title">{i.text}</span>
            </Link>
        </div>
        )
    }
)


    return (
        <>
            <div className="sticky-top  aside-menu flex-column-fluid">
                <div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                    <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
                        
                        {/* aside-menu */}
                        {asideData}

                        <div className="menu-item">
                            <div className="menu-content">
                                <div className="separator mx-1 my-4"></div>
                            </div>
                        </div>

                        {/* accordion menu */}
                            <AccordionMenu />
                        {/* accordion menu */}

                        {/* end aside-menu */}

                        
                    </div>
                </div>
            </div>
            <div className=" aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
                <a className="btn btn-custom btn-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="تنظیمات در این مکان">
                    <span className="btn-label">تنظیمات</span>

                    <span className="svg-icon btn-icon svg-icon-2">

                    </span>

                </a>
            </div>
        </>
    )

}
export default SidbarMenu;