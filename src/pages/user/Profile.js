
function Profile() {

    return (
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
                <div className="card mb-5 mb-xl-10">
                    <div className="card-body pt-9 pb-0">
                        <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                            <div className="me-7 mb-4">
                                <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                    <img src="assets/media/avatars/150-2.jpg" alt="image" />
                                    {/* <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div> */}
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex align-items-center mb-2">
                                            <a href="#" className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">username</a>
                                            <a href="#" className="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">پلن نقره ای</a>
                                        </div>

                                        <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                            <a className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                <span className="svg-icon svg-icon-4 me-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" fill="none" >
                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" opacity="0.3" />
                                                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" />
                                                        </g>
                                                    </svg>
                                                </span>
                                                09351554545
                                            </a>
                                            <a className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                <span className="svg-icon svg-icon-4 me-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<path d="M11.575,21.2 C6.175,21.2 2.85,17.4 2.85,12.575 C2.85,6.875 7.375,3.05 12.525,3.05 C17.45,3.05 21.125,6.075 21.125,10.85 C21.125,15.2 18.825,16.925 16.525,16.925 C15.4,16.925 14.475,16.4 14.075,15.65 C13.3,16.4 12.125,16.875 11,16.875 C8.25,16.875 6.85,14.925 6.85,12.575 C6.85,9.55 9.05,7.1 12.275,7.1 C13.2,7.1 13.95,7.35 14.525,7.775 L14.625,7.35 L17,7.35 L15.825,12.85 C15.6,13.95 15.85,14.825 16.925,14.825 C18.25,14.825 19.025,13.725 19.025,10.8 C19.025,6.9 15.95,5.075 12.5,5.075 C8.625,5.075 5.05,7.75 5.05,12.575 C5.05,16.525 7.575,19.1 11.575,19.1 C13.075,19.1 14.625,18.775 15.975,18.075 L16.8,20.1 C15.25,20.8 13.2,21.2 11.575,21.2 Z M11.4,14.525 C12.05,14.525 12.7,14.35 13.225,13.825 L14.025,10.125 C13.575,9.65 12.925,9.425 12.3,9.425 C10.65,9.425 9.45,10.7 9.45,12.375 C9.45,13.675 10.075,14.525 11.4,14.525 Z" fill="#000000"></path>
																</svg>
                                                </span>
                                                email@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-5 mb-xl-10">
                    <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-controls="kt_account_profile_details">
                        <div className="card-title m-0">
                            <h3 className="fw-bolder m-0">پروفایل جزییات</h3>
                        </div>
                    </div>
                    <div id="kt_account_profile_details" className="collapse show">
                        <form id="kt_account_profile_details_form" className="form">
                            <div className="card-body border-top p-9">
                                <div className="row mb-6">
                                    <label className="col-lg-4 col-form-label fw-bold fs-6">آواتار</label>
                                </div>
                                <div className="row mb-6">
                                    <label className="col-lg-2 col-form-label required fw-bold fs-6">نام و نام خانوادگی</label>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col-lg-6 fv-row">
                                                <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="نام"/>
                                            </div>
                                            <div className="col-lg-6 fv-row">
                                                <input type="text" name="lname" className="form-control form-control-lg form-control-solid" placeholder="نام خانوادگی" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile;