function TopbarMenu() {
    return (
        <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
            <div className="menu-item me-lg-1">
                <a className="menu-link active py-3" href="index.html">
                    <span className="menu-title">داشبورد</span>
                </a>
            </div>
            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" className="menu-item menu-lg-down-accordion me-lg-1">
                <span className="menu-link py-3">
                    <span className="menu-title"> منوی راهبردی</span>
                    <span className="menu-arrow d-lg-none"></span>
                </span>
            </div>
            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" className="menu-item menu-lg-down-accordion me-lg-1">
                <span className="menu-link py-3">
                    <span className="menu-title"> منوی راهبردی2</span>
                    <span className="menu-arrow d-lg-none"></span>
                </span>
            </div>
        </div>
    )
}

export default TopbarMenu;