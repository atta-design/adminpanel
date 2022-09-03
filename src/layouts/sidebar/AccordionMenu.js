import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { entities } from '../../data/entities'
import "../../App.css";

function AccordionMenu() {
  const data = useSelector((state) => state.getData.MaindataRequest.content);
  console.log(data)
const en=4
 const re= entities.filter((entity)=>entity.entity===en

  )
  console.log(re.map(r=>r.title))
  return (
    <div>

      {
      data !== undefined &&
        data.userModules.map((userModule, index) =>
          userModule.subMenu.length !== 0 ? (
            <div
              key={index}
              data-kt-menu-trigger="click"
              className="menu-item menu-accordion"
            >
              <span className="menu-link">
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
                <span className="menu-title"> {userModule.entity}</span>
                <span className="menu-arrow"></span>
              </span>
              {userModule.subMenu.map((user, index) => (
                  <div
                  key={index}
                  className="menu-sub menu-sub-accordion menu-active-bg">
                  <div className="menu-item">
                    <Link className="menu-link" to="##">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">{user.entity}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
           
                <div                   key={index}
                className="menu-item newscontainer">
            <Link className="menu-link" to="##">
              <span className="menu-bullet">
              </span>
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
              <span className="menu-title">                {userModule.entity}
 </span>
            </Link>
          </div>
          )
        )}

      {/* <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
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
          <span className="menu-title">دانشنامه ها</span>
          <span className="menu-arrow"></span>
        </span>

        <div className="menu-sub menu-sub-accordion menu-active-bg">
          <div className="menu-item">
            <Link className="menu-link" to="/encyclopedia/countries">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">کشورها</span>
            </Link>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
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
          <span className="menu-title">کامپوننت ها</span>
          <span className="menu-arrow"></span>
        </span>

        <div className="menu-sub menu-sub-accordion menu-active-bg">
          <div className="menu-item">
            <Link className="menu-link" to="/preview/filemanager">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">فایل منیجر</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link className="menu-link" to="/preview/fileuploader">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">فایل آپلودر</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link className="menu-link" to="/preview/textbox">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">textbox</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link className="menu-link" to="/preview/checkbox">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">checkbox </span>
            </Link>
          </div>
          <div className="menu-item">
            <Link className="menu-link" to="/preview/selectbox">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">selectbox </span>
            </Link>
          </div>
          <div className="menu-item">
            <Link className="menu-link" to="/preview/dropdownbox">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">dropdownbox </span>
            </Link>
          </div>
          <div className="menu-item">
            <Link className="menu-link" to="/preview/radioButton">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">radioButton </span>
            </Link>
          </div>

          <div className="menu-item">
            <Link className="menu-link" to="/preview/chips">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">Chips </span>
            </Link>
          </div>

          <div className="menu-item">
            <Link className="menu-link" to="/preview/calendar">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">Calendar </span>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AccordionMenu;
