import { useEffect, useState } from "react";
import { useToast } from "../../utils/toast/useToast";
import getStatusMessage from "../../utils/statusHandler";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/reducers/postDataReducer";
import Cookies from "js-cookie";
// component
import ButtonComponent from "../../components/button/Button";
import TextBoxComponent from "../../components/textBox/TextBox";
import { ButtonConfig as SubmitConfig } from "./submitButtonConfig";
import { TextBoxConfig as EmailConfig } from "./emailTextBoxConfig";
import { TextBoxConfig as PasswordConfig } from "./passwordTextBoxConfig";
import Loading from '../../layouts/common/Loading'

function Login() {
  const reduxdata = useSelector((state) => state.requests);
  const dispatch = useDispatch();

  const { showMessage } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadPanelVisible, setLoadPanelVisible] = useState(false);

  // sending username and password to server(in redux reducer)

  async function handleSubmit(e) {
    setLoadPanelVisible(true);
    e.preventDefault();

    var postOjb = {
      username: email,
      password: password,
    };

    dispatch(fetchUsers("/Account/Login", postOjb));
  }
  // putting received datas in states and show error messages If it exists

  useEffect(() => {
    if (reduxdata.request !== null) {
      if (reduxdata.request.status === 1) {
        const status='success'
        Cookies.set("status", status);

        setLoadPanelVisible(false);
      } else {
       
        showMessage(true, getStatusMessage(reduxdata.request.status), "error");
    setLoadPanelVisible(false);
      } 
    }
}, [reduxdata]);


  return (
    <div> {loadPanelVisible ? < Loading/>:
    <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">

      <a href="index.html" className="mb-12">
        <img
          alt="Logo"
          src="/assets/media/logos/logo-2-dark.svg"
          className="h-45px"
        />
      </a>
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <form
          className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
          onSubmit={handleSubmit}
          id="kt_sign_in_form"
        >
          <div className="text-center mb-10">
            <h1 className="text-dark mb-3">ورود به پرتال مدیریت</h1>
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">ایمیل</label>
            <TextBoxComponent
              config={EmailConfig}
              onValueChanged={(data) => setEmail(data.value)}
            ></TextBoxComponent>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>

          <div className="fv-row mb-10 fv-plugins-icon-container">
            <div className="d-flex flex-stack mb-2">
              <label className="form-label fw-bolder text-dark fs-6 mb-0">
                کلمه عبور
              </label>
              <a className="link-primary fs-6 fw-bolder">فراموشی رمز</a>
            </div>
            <TextBoxComponent
              config={PasswordConfig}
              onValueChanged={(data) => setPassword(data.value)}
            ></TextBoxComponent>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div className="text-center">
            <ButtonComponent config={SubmitConfig}></ButtonComponent>
          
          </div>
        </form>
      </div>
    </div>}</div>
  );
}

export default Login;
