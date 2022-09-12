import React, { useEffect, useState, createContext } from "react";
import Pagination from "../../components/paging/Pagination";
// import { ButtonConfig as AddRuleButtonConfig } from './AddRuleButtonConfig';
// import {default as Button} from '../../components/button/Button';
import { useHistory } from 'react-router-dom';
import { GridConfig as UsersListConfig } from "./config";

// components
import Rolelist from "./UsersList";
//utiles
import { useToast } from "../../utils/toast/useToast";
import getStatusMessage from "../../utils/statusHandler";
import { TableListConfig } from "./config";
import RoleEditModal from "../../components/modal/RoleEditModal";
import { fetchusersdata } from "../../redux/reducers/getDataReducer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../layouts/common/Loading";
export const DataContext = createContext({
  dataListView: [],
  setDataListView: () => {},
  setDataCount: () => {},
  currentPage: [],
  setCurrentPage: () => {},
  searchValue: "",
  setSearchValue: () => {},
  filterStatusValue: "",
  setFilterStatusValue: () => {},
  sortValue: "",
  setSortValue: () => {},
  isLoading: false,
  setIsLoading: () => {},
  uid: false,
  setUid: () => {},
});

function Roles2() {
  const reduxdata = useSelector((state) => state.getData.userRequest);
  const history = useHistory();
  const dispatch = useDispatch();
  const pageList =5;
  const { showMessage } = useToast();
  const [uid, setUid] = useState("");
  const [dataCount, setDataCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [dataListView, setDataListView] = useState([]);

  const value = {
    dataListView,
    setDataListView,
    searchValue,
    setSearchValue,
    currentPage,
    setCurrentPage,
    isLoading,
    setIsLoading,
    uid,
    setUid,
  };

  async function getLoadData(e) {
    dispatch(fetchusersdata(`/Account/List?From=${0}&Count=${pageList}`));
    try {
      if (reduxdata.length !== 0) {
        if (reduxdata.status === 1) {
          setDataCount(reduxdata.content.count);
        setIsLoading(false);


          setDataListView(reduxdata.content.items);
        } else {
          showMessage(true, getStatusMessage(reduxdata.status), "error");
        }
      }
    } catch (e) {
      showMessage(true, "خطایی در واکشی داده رخ داده است", "error");
    }
  }

  useEffect(() => {
    getLoadData();
  }, [reduxdata.status]);

  return (
    <DataContext.Provider value={value}>
   {isLoading?<Loading/>:   <div className=" post d-flex flex-column-fluid" >
        <div id="  kt_content_container" >
          <div className="border border-2 border border-secondary card mx-18 mb-5 mb-xl-8">
            <div className="card mb-5 mb-xl-8">
              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bolder fs-1 mb-1">
                    لیست نقش ها
                  </span>
                </h3>
               
              </div> 
              <div className="card-toolbar">
                <div className="d-flex justify-content-end px-10">
              {/* <Button 
                                    config={AddRuleButtonConfig}
                                    onClick={() => {
                                        history.replace("/role/add")
                                    }}
                                /> */}
                                </div>
                                </div>
              <div className=" card-body py-3">
                {reduxdata.length !== 0 && (
                  <div>
                    {" "}
                      <Rolelist
                      config={UsersListConfig}
                      dataContext={DataContext}
                      modal={{ obj: RoleEditModal, title: "ویرایش نقش" }}
                    />
                  
                  <Pagination
                      dataCount={dataCount}
                      pageList={pageList}
                      pageURL={"Account/list"}
                      dataContext={DataContext}
                    />
                  
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>}
     
    </DataContext.Provider>
  );
}

export default Roles2;
