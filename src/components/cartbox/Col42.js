

function Col42() {
    return (
        <div className="col-xl-4">
            <div className="card card-xl-stretch mb-xl-8">
                <div className="card-header border-0">
                    <h3 className="card-title fw-bolder text-dark">اعلان ها</h3>
                    <div className="card-toolbar">
                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                            <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" fill="none" >
                                        <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
                                        <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                        <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                        <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="card-body pt-5">
                    {/* start item */}
                    <div className="d-flex align-items-sm-center mb-7">
                        <div className="symbol symbol-50px me-5">
                            <span className="symbol-label">
                                <img src="/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                            </span>
                        </div>
                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                                <a  className="text-gray-800 text-hover-primary fs-6 fw-bolder">بالا نویسندگان</a>
                                <span className="text-muted fw-bold d-block fs-7">جوادی و جمشیدی</span>
                            </div>
                            <span className="badge badge-light fw-bolder my-2">+82 تومان </span>
                        </div>
                    </div>
                    {/* end */}
                     {/* start item */}
                     <div className="d-flex align-items-sm-center mb-7">
                        <div className="symbol symbol-50px me-5">
                            <span className="symbol-label">
                                <img src="/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                            </span>
                        </div>
                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                                <a  className="text-gray-800 text-hover-primary fs-6 fw-bolder">محصولات تولید شده برخط</a>
                                <span className="text-muted fw-bold d-block fs-7">جوادی و جمشیدی</span>
                            </div>
                            <span className="badge badge-light fw-bolder my-2">+82 تومان </span>
                        </div>
                    </div>
                    {/* end */}

                </div>
            </div>
        </div>

    )
}

export default Col42;