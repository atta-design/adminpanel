import React from 'react';
import SidbarMenu from './SidbarMenu';
import SidebarLogo from './SidebarLogo';


function Sidebar(){
    return (
		<>
		 <div id="kt_aside" className="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
			
		 	<SidebarLogo />
		 	<SidbarMenu />
			
		 </div>
		 
		 

</>
    )
}
            
export default Sidebar;