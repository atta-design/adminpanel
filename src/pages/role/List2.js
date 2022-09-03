import Pagination from "../../components/paging/Pagination";
import React, { useEffect, useState, createContext } from "react";
// components
import TableList1 from "../../components/tableList/TableList1";
//utiles
import { useToast } from "../../utils/toast/useToast";
import getStatusMessage from "../../utils/statusHandler";
import { TableListConfig } from "./configs/tableListConfig";
import RoleEditModal from "../../components/modal/RoleEditModal";
import { fetchRoledata } from "../../redux/reducers/getDataReducer";
import { useDispatch, useSelector } from "react-redux";

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
  const reduxdata = useSelector((state) => state.getData.roleRequest);
  const dispatch = useDispatch();

  const pageList = 6;
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
    dispatch(fetchRoledata(`/role/list?From=${0}&Count=${pageList}`));
    setIsLoading(false);
    // putting received datas in states and show error messages If it exists
    try {
      if (reduxdata.length !== 0) {
        if (reduxdata.status === 1) {
          setDataCount(reduxdata.content.count);

          setDataListView(reduxdata.content.items);
        } else {
          showMessage(true, getStatusMessage(reduxdata.status), "error");
        }
      }
    } catch (e) {
      showMessage(true, "خطایی در واکشی داده رخ داده است", "error");
    }
  }

// call getLoadData reducer for  getting role list data from api

  useEffect(() => {
    getLoadData();
  }, [reduxdata.status]);

  console.log();
  return (
    <DataContext.Provider value={value}>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container">
          <div className="card mb-5 mb-xl-8">
            <div className="card mb-5 mb-xl-8">
              <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bolder fs-3 mb-1">
                    لیست نقش ها
                  </span>
                </h3>
                <div className="card-toolbar"></div>
              </div>

              <div className="card-body py-3">
                {reduxdata.length !== 0 && (
                  <div>
                    {" "}
                    <TableList1
                      config={TableListConfig}
                      dataContext={DataContext}
                      modal={{ obj: RoleEditModal, title: "ویرایش نقش" }}
                    />
               
                    <Pagination
                      dataCount={dataCount}
                      pageList={pageList}
                      pageURL={"role/list"}
                      dataContext={DataContext}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default Roles2;
