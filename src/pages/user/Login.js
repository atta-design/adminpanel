

function Login() {
    return (
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <a href="index.html" className="mb-12">
                <img alt="Logo" src="/assets/media/logos/logo-2-dark.svg" className="h-45px" />
            </a>
            <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" id="kt_sign_in_form">
                    <div className="text-center mb-10">
                        <h1 className="text-dark mb-3">ورود  به پرتال مدیریت</h1>
                    </div>
                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <label className="form-label fs-6 fw-bolder text-dark">ایمیل</label>
                        <input className="form-control form-control-lg form-control-solid" type="text" name="email" />

                        <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>

                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <div className="d-flex flex-stack mb-2">
                            <label className="form-label fw-bolder text-dark fs-6 mb-0">کلمه عبور</label>
                            <a href className="link-primary fs-6 fw-bolder">فراموشی رمز</a>
                        </div>
                        <input className="form-control form-control-lg form-control-solid" type="password" name="password" />
                        <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="text-center">
                        <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5">
                            <span className="indicator-label">ورود</span>
                            <span className="indicator-progress">لطفا صبر کنید...
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login;