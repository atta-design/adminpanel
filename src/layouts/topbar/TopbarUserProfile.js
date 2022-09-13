import { useTranslation } from "react-i18next";
import { useHistory  } from 'react-router-dom'
function TopbarUserProfile() {
    const {t,i18n }= useTranslation()
let history = useHistory();
    const languagehandler=(e)=>{
        i18n.changeLanguage(e)
        localStorage.setItem("lng",e)
        history.push("/"+e);
        window.location.reload()
       
    }
        var selectValue = localStorage.getItem('lng');
        if(null === selectValue)
    {
        selectValue = 'fa';
    }

    return (
        <>
            <div className="d-flex align-items-stretch flex-shrink-0">

                {/* sub user profile */}
                <div className="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                    <div className="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                        <img src="/assets/media/avatars/150-4.jpg" alt="metronic" />
                    </div>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                        <div className="menu-item px-3">
                            <div className="menu-content d-flex align-items-center px-3">
                                <div className="symbol symbol-50px me-5">
                                    <img alt="Logo" src="/assets/media/avatars/150-4.jpg" />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="fw-bolder d-flex align-items-center fs-5">افخمی</div>
                                    <a href="#" className="fw-bold text-muted text-hover-primary fs-7">test@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-5">
                            <a href="account/" className="menu-link px-5">پروفایل من</a>
                        </div>
                        <div className="menu-item px-5">
                            <a href="pages/projects/list.html" className="menu-link px-5">
                                <span className="menu-text">پروژه ها من</span>
                                <span className="menu-badge">
                                    <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                                </span>
                            </a>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start" data-kt-menu-flip="bottom">

                        </div>
                        <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start" data-kt-menu-flip="bottom">
													<a href="#" className="menu-link px-5">
														<span className="menu-title position-relative">زبان
														<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">{selectValue==='en'?
                                                        <span>English</span>:(selectValue==='fa'?<span>فارسی</span>:<span>عربی</span>)}
                                                        {selectValue==='en'?
                                                        <span><img className="w-15px h-15px rounded-1 ms-2" src='/assets/media/flags/united-states.svg' alt="metronic" />
                                                        </span>:(selectValue==='fa'?<span><img className="w-15px h-15px rounded-1 ms-2" src='/assets/media/flags/iran.svg' alt="metronic" /></span>:
                                                        <span><img className="w-15px h-15px rounded-1 ms-2" src='/assets/media/flags/saudi-arabia.svg' alt="metronic" /></span>)}
														</span></span>
													</a>
													<div className="menu-sub menu-sub-dropdown w-175px py-4">
														<div className="menu-item px-3" onClick={()=>languagehandler('fa')}>
															<a href="##" className="menu-link d-flex px-5">
															<span className="symbol symbol-20px me-4">
																<img className="rounded-1" src="/assets/media/flags/iran.svg" alt="metronic" />
															</span>فارسی</a>
														</div>
														<div className="menu-item px-3" onClick={()=>languagehandler('en')} >
															<a href="##" className="menu-link d-flex px-5 ">
															<span className="symbol symbol-20px me-4">
																<img className="rounded-1" src="/assets/media/flags/united-states.svg" alt="metronic" />
															</span>انگلیسی</a>
														</div>
														
														
														
														<div className="menu-item px-3" onClick={()=>languagehandler('ar')}>
															<a href="##" className="menu-link d-flex px-5">
															<span className="symbol symbol-20px me-4">
																<img className="rounded-1" src="/assets/media/flags/saudi-arabia.svg" alt="metronic" />
															</span>عربی</a>
														</div>
														
													
													
													
														
													</div>
													
												</div>
                        <div className="menu-item px-5 my-1">
                            <a href="account/settings.html" className="menu-link px-5">اکانت تنظیمات</a>
                        </div>
                        <div className="menu-item px-5">
                            <a href="authentication/flows/basic/sign-in.html" className="menu-link px-5">خروج</a>
                        </div>
                    </div>
                </div>
                {/* end user profile */}
            </div>
        </>
    )
}

export default TopbarUserProfile;