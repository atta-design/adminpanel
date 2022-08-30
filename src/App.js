import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../src/layouts/sidebar/Sidebar";
import Loading from "./layouts/common/Loding";
import Topbar from "./layouts/topbar/Topbar";
import SwitchMenu from "./layouts/sidebar/SwitchMenu";
import Login from "../src/pages/login/Login";
import { ToastProvider } from "./utils/toast/toastProvider";
import { useSelector } from "react-redux";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const reduxdata = useSelector((state) => state.requests);

  useEffect(() => {
    if (reduxdata.request !== null) {
      if (reduxdata.request.status === 1) {
        setIsAuth(true);
      }
    }
    if (isLoading === "pending") {
      setIsLoading(true);
    }

  }, [reduxdata]);

  return (
    <>
      <ToastProvider>  
                <BrowserRouter>
                    <div className={isAuth ? "App page d-flex flex-row flex-column-fluid" : "App page d-flex flex-row flex-column-fluid none"}>
                        <Sidebar />
                        <div className="wrapper d-flex flex-column flex-row-fluid">
                            <Topbar />
                            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <SwitchMenu />
                            </div>
                        </div>
                    </div>
                    <div className={isLoading === true ? "loading-app" : "loading-app loading-app-finish"}>
                        <Loading></Loading>
                    </div>
                    {
                    isAuth === false
                        && 
                        <Login />
                    }
                </BrowserRouter>
            </ToastProvider>
    </>
  );
}

export default App;
