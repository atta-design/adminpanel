import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LocalKeys } from "../../language/localkeys";
import React,{useState,useEffect} from 'react'
import "../../App.css";
import { useTranslation } from "react-i18next";


// localization process
function AccordionMenu() {
  const {t}= useTranslation()

  const data = useSelector((state) => state.getData.MaindataRequest.content);
  const[language,setLanguage]=useState()
console.log(data)
useEffect(()=>{
  setLanguage(localStorage.getItem("lng"))
},[t])

  return (
    <div>
      {data !== undefined &&
        data.userModules.map((userModule) =>
        LocalKeys
            .filter((entity) => entity.LocalKey === userModule.localKey)
            .map((Module, index) =>
           
              userModule.subMenu.length !== 0 ? (
                <div
                  key={index}
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span key={index} className="menu-link">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <path
                            d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                          <path
                            d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                            fill="#000000"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">{language==='en'? Module.localkey_lang.en :(language==='fa'? Module.localkey_lang.fa:Module.localkey_lang.en)}</span>
                    <span className="menu-arrow"></span>
                  </span>
                  {userModule.subMenu.map((user) =>
                    LocalKeys
                      .filter((entity) =>entity.LocalKey === user.localKey)
                      .map((Module, index) => (
                        <div
                          key={index}
                          className="menu-sub menu-sub-accordion menu-active-bg"
                        >{ console.log(Module)}
                          <div className="menu-item">
                            <Link className="menu-link" to={'/'+language +'/'+ Module.localkey_lang.en}>
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">{language==='en'? Module.localkey_lang.en :(language==='fa'? Module.localkey_lang.fa:Module.localkey_lang.en)}</span>
                            </Link>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              ) : (
                <div key={index}  className="menu-item newscontainer">
                  <Link className="menu-link" to={'/'+language +'/'+ Module.localkey_lang.en}>
                    <span className="menu-bullet"></span>
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <path
                            d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                          <path
                            d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                            fill="#000000"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title"> {language==='en'? Module.localkey_lang.en :(language==='fa'? Module.localkey_lang.fa:Module.localkey_lang.en)}</span>
                  </Link>
                </div>
              )
            )
        )}
    </div>
  );
}

export default AccordionMenu;
