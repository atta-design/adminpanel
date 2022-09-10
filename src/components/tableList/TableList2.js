import { useContext, useState } from "react";
import { PostApi, GetDataApi } from "../../managers/HttpManager";

// layouts
import Loading from "../../layouts/common/Spinner";

// utils
import { useToast } from "../../utils/toast/useToast";
import getStatusMessage from "../../utils/statusHandler";
import "./style.css";
const Swal = require("sweetalert2");

export default function TableList2(props) {
  const config = props.config;
  const Modal = props.modal.obj;
  const modalTitle = props.modal.title;
  const DataContext = props.dataContext;

  const { showMessage } = useToast();

  const {
    dataListView,
    setDataListView,
    setDataCount,
    setCurrentPage,
    searchValue,
    filterStatusValue,
    setSortValue,
    isLoading,
    setIsLoading,
    uid,
    setUid,
  } = useContext(DataContext);

  async function getSortedData(sort) {
    try {
      setSortValue(sort);
      setIsLoading(true);

      let url = `/country/list?From=${0}&Count=${6}&Search=${searchValue}`;
      if (filterStatusValue) {
        url += `&Status=${filterStatusValue}`;
      }
      if (sort) {
        url += `&Sort=${sort}`;
      }
      const data = await GetDataApi(url);
      if (data.status === 1) {
        setCurrentPage(1);
        setIsLoading(false);
        setDataCount(data.content.count);
        setDataListView(data.content.items);
      } else {
        setIsLoading(false);
        showMessage(true, getStatusMessage(data.status), "error");
      }
    } catch (e) {
      setIsLoading(false);
      showMessage(true, "خطایی در واکشی داده رخ داده است", "error");
    }
  }

  const useSortableData = (config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }

      setSortConfig({ key, direction });

      if (key === "createDate") {
        if (direction === "ascending") {
          getSortedData(7);
        } else {
          getSortedData(8);
        }
      }

      if (key === "modifyDate") {
        if (direction === "ascending") {
          getSortedData(9);
        } else {
          getSortedData(10);
        }
      }
    };

    return { requestSort };
  };
  const { requestSort } = useSortableData();

  async function swalFire(data) {
    try {
      const request = await PostApi("/Country/Delete", data);
      window.location.reload();
      if (request.status === 1) {
      } else {
      }
    } catch (e) {}

    //     try {

    //         const request = await PostApi('/Country/Delete',data);
    //   window.location.reload()
    //         if (request.status === 1) {
    //             // setLoadPanelVisible(false)
    //             // showMessage(true, getStatusMessage(data.status), 'success');

    //         } else {
    //             // setLoadPanelVisible(false)
    //             // showMessage(true, getStatusMessage(data.status), 'error');
    //         }
    //     }
    //     catch (e) {
    //         // showMessage(true, 'خطایی در واکشی داده رخ داده است', 'error');
    //     }
    //     // const swalWithBootstrapButtons = Swal.mixin({
    //     //     customClass: {
    //     //         cancelButton: 'btn btn-danger',
    //     //         confirmButton: 'btn btn-success',
    //     //     },
    //     //     buttonsStyling: false
    //     // });
    //     // Swal.fire({
    //     //     icon: 'warning',
    //     //     title: 'آیا از حذف کشور اطمینان دارید؟',
    //     //     text: "شما نمی توانید این را برگردانید!",
    //     //     showCancelButton: true,
    //     //     confirmButtonColor: '#3085d6',
    //     //     cancelButtonColor: '#d33',
    //     //     confirmButtonText: 'آره حذف کن',
    //     //     cancelButtonText: `نه حذف نکن`,
    //     //     customClass:{
    //     //         icon: 'icon-swal'
    //     //     },
    //     //     preConfirm: async () => {
    //     //         try {

    //     //             const request = await PostApi('/Country/Delete',data);
    //     //             console.log(request)
    //     //             if (request.status !== 1) {
    //     //                 Swal.showValidationMessage(
    //     //                     `عملیات ناموفق بود`
    //     //                 )
    //     //                 const con = await GetDataApi('/Country/List');
    //     //             console.log( con
    //     //                 )
    //     //             }else{
    //     //                 // getLoadData()

    //     //             }
    //     //         }
    //     //         catch (e) {
    //     //             throw new Error('خطایی در واکشی داده رخ داده است')
    //     //         }
    //     //     }
    //     // }).then((result) => {
    //     //     if (result.isConfirmed) {
    //     //         swalWithBootstrapButtons.fire(
    //     //             'حذف شد!',
    //     //             'نقش باموفقیت حذف شد.',
    //     //             'success'
    //     //         )
    //     //     }
    //     // });
  }

  const getTemplate = (data, column, cIndex) => {
    if (typeof column.template === "function") {
      return column.template(getValue(column, data));
    } else {
      return (
        <a className={getClassName(column, cIndex)}>{getValue(column, data)}</a>
      );
    }
  };

  const getTD = (data, column, cIndex) => {
    if (cIndex === 0) {
      return (
        <td key={cIndex}>
          <div className="d-flex align-items-center">
            <div className="symbol symbol-50px me-5">
              <img
                alt={column.alt || "image" + cIndex}
                src={
                  getValue(column, data) || "/assets/media/avatars/150-4.jpg"
                }
                className={getClassName(column, cIndex)}
              />
            </div>
          </div>
        </td>
      );
    } else {
      if (column.dataType === "img") {
        <td key={cIndex}>
          <img
            alt={column.alt || "image" + cIndex}
            src={getValue(column, data)}
            className={getClassName(column, cIndex)}
          />
        </td>;
      } else {
        return <td key={cIndex}>{getTemplate(data, column, cIndex)}</td>;
      }
    }
  };

  const getHeaderClassName = (item, index) => {
    if (typeof item.classNameHeader === "string") {
      return item.classNameHeader;
    } else {
      if (index === 0) {
        return "ps-4 min-w-45px rounded-start";
      }
      return "min-w-100px";
    }
  };

  const getClassName = (item, index) => {
    if (typeof item.className === "string") {
      return item.className;
    } else {
      if (index === 0) {
        return "text-dark fw-bolder mb-1 fs-6";
      }
      return "text-dark fw-bolder text-hover-primary d-block mb-1 fs-8";
    }
  };

  const getValue = (column, data) => {
    if (typeof column.calculateCellValue === "function") {
      return column.calculateCellValue(data[column.dataField]);
    }
    if (typeof column.lookup === "object") {
      try {
        return column.lookup.dataSource.filter((i, index) => {
          return i[column.lookup.valueExpr] === data[column.dataField];
        })[0][column.lookup.displayExpr];
      } catch {
        return "";
      }
    }
    return data[column.dataField];
  };

  const isEventsAvailable = () => {
    return config.events.length !== 0;
  };

  const checkEventsAvailable = (cIndex) => {
    if (isEventsAvailable()) {
      return (
        <th key={cIndex} className="min-w-50px sorting sorting_asc">
          عملیات
        </th>
      );
    }
  };

  const getEvents = (data, index) => {
    let events = [];
    if (isEventsAvailable()) {
      if (config.events.edit) {
        events.push(
          <a
            key={index}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            onClick={() => setUid(data[config.events.edit.key])}
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_edit_role"
          >
            <span className="svg-icon svg-icon-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <path
                  d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                  fill="#000000"
                  transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                ></path>
                <path
                  d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                  fill="#000000"
                  opacity="0.3"
                ></path>
              </svg>
            </span>
          </a>
        );
      }
      if (config.events.delete) {
        events.push(
          <a
            onClick={() => swalFire(data, config.events.delete)}
            key={index}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          >
            <span className="svg-icon svg-icon-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" fill="none">
                  <rect x="0" y="0" width="24" height="24"></rect>
                  <path
                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                    fill="#000000"
                    opacity="0.3"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        );
      }
      return events;
    } else {
      return events;
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="table-responsive">
      <table className="table align-middle gs-0 gy-4">
        <thead>
          <tr className="fw-bolder text-muted bg-light">
            {config.columns.map((column, cIndex) => {
              return (
                <th
                  key={cIndex}
                  onClick={() => requestSort(column["dataField"])}
                  className={getHeaderClassName(column, cIndex)}
                >
                  {column.caption}
                </th>
              );
            })}
            {checkEventsAvailable(config.columns.length + 1)}
          </tr>
        </thead>
        <tbody>
          {[...dataListView.entries()].map(([dIndex, data]) => {
            console.log(data);
            return (
              <tr key={dIndex}>
                {config.columns.map((column, cIndex) => {
                  return getTD(data, column, cIndex);
                })}
                {isEventsAvailable() && (
                  <td key={dIndex} className="text-end">
                    {getEvents(data)}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal title={modalTitle} uid={uid} />
    </div>
  );
}
