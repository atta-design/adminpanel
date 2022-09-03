import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../src/layouts/sidebar/Sidebar";
import Topbar from "./layouts/topbar/Topbar";
import SwitchMenu from "./layouts/sidebar/SwitchMenu";
import Login from "../src/pages/login/Login";
import { ToastProvider } from "./utils/toast/toastProvider";
import { fetchMaindata } from "./redux/reducers/getDataReducer";
import { useDispatch, useSelector } from "react-redux";
function App() {


  const [isAuth, setIsAuth] = useState(true);
  const reduxdata = useSelector((state) => state.requests);
  const dispach = useDispatch();

  // validation of authentication process 

  useEffect(() => {

    if (reduxdata.request !== null) {
      if (reduxdata.request.status === 1) {
        setIsAuth(true);

      }
    }
   
  }, [reduxdata]);

// calling main api for getting access informaion 

  useEffect(() => {
    dispach(fetchMaindata("/Main/Index"));

  }, []);
  return (
    <>
      <ToastProvider>
        <BrowserRouter> <div className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed">
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
              </div></div>
            </div>
          
        
          {isAuth === false && <Login />}
          </div>
        </BrowserRouter>
      </ToastProvider>
    </>
  );
}

export default App;
