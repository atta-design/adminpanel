

function Col8() {
    return (
        <div className="col-xxl-8">
            <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                <div className="card-header border-0 pt-5">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="card-label fw-bolder fs-3 mb-1">اخرین محصولات</span>
                    </h3>
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
                <div className="card-body py-3">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
                            <div className="table-responsive">
                                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr className="border-0">
                                            <th className="p-0 w-50px"></th>
                                            <th className="p-0 min-w-150px"></th>
                                            <th className="p-0 min-w-140px"></th>
                                            <th className="p-0 min-w-110px"></th>
                                            <th className="p-0 min-w-50px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="symbol symbol-45px me-2">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <a  className="text-dark fw-bolder text-hover-primary mb-1 fs-6">کاشی سه رنگ مهتاب</a>
                                                <span className="text-muted fw-bold d-block"> در حال ازمایش</span>
                                            </td>
                                            <td className="text-end text-muted fw-bold">React, HTML</td>
                                            <td className="text-end">
                                                <span className="badge badge-light-success">تایید شده</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="symbol symbol-45px me-2">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <a  className="text-dark fw-bolder text-hover-primary mb-1 fs-6"> هوش مصنوعی در تولید</a>
                                                <span className="text-muted fw-bold d-block">موفق ترین</span>
                                            </td>
                                            <td className="text-end text-muted fw-bold">dotnet core, MYSQL</td>
                                            <td className="text-end">
                                                <span className="badge badge-light-warning">درحال پردازش</span>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="symbol symbol-45px me-2">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <a  className="text-dark fw-bolder text-hover-primary mb-1 fs-6"> هوش مصنوعی در تولید</a>
                                                <span className="text-muted fw-bold d-block">موفق ترین</span>
                                            </td>
                                            <td className="text-end text-muted fw-bold">dotnet core, MYSQL</td>
                                            <td className="text-end">
                                                <span className="badge badge-light-warning">درحال پردازش</span>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Col8;