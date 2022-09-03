import React from "react";
import AccordionMenu from './AccordionMenu';

function SidbarMenu() {



    return (
        <>
            <div className="aside-menu flex-column-fluid" >
                <div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                    <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
                        
                   

                        <div className="menu-item">
                            <div className="menu-content">
                                <div className="separator mx-1 my-4"></div>
                            </div>
                        </div>

                            <AccordionMenu />
                     
                        
                    </div>
                </div>
            </div>
            


        </>
    )

}
export default SidbarMenu;