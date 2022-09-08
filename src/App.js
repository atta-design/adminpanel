import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import SwitchMenu from "./layouts/sidebar/SwitchMenu";
import Sidebar from "../src/layouts/sidebar/Sidebar";
import Topbar from "./layouts/topbar/Topbar";
import Login from "../src/pages/login/Login";
import { ToastProvider } from "./utils/toast/toastProvider";
import { fetchMaindata } from "./redux/reducers/getDataReducer";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const reduxdata = useSelector((state) => state.requests);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxdata.request !== null) {
      if (reduxdata.request.status === 1) {
        setIsAuth(true);

      }
    }
  }, [reduxdata]);
  // authentication with Cookies
  useEffect(() => {
    if (Cookies.get("status") !== null) {
      if (Cookies.get("status") === "success") {
        setIsAuth(true);
      }
    }
  }, []);

  // calling main api for getting access informaion

  useEffect(() => {
    isAuth && dispatch(fetchMaindata("/Main/Index"));
  }, [isAuth]);
  return (
    <>
      <ToastProvider>
      
        <BrowserRouter>
          {" "}
          <div className="header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed">
            <div
              className={
                isAuth
                  ? "App page d-flex flex-row flex-column-fluid"
                  : "App page d-flex flex-row flex-column-fluid none"
              }
            >
              <Sidebar />
              <div className="wrapper d-flex flex-column flex-row-fluid">
                <Topbar />
                <div
                  className="content d-flex flex-column flex-column-fluid"
                  id="kt_content"
                >
                  <SwitchMenu />
                </div>
              </div>
            </div>

            {  isAuth === false && <Login />}
          </div>
        </BrowserRouter>

      </ToastProvider>
    
    </>
  );
}

export default App;
