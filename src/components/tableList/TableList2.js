import {useContext } from 'react';
// import { PostApi, GetDataApi } from '../../managers/HttpManager';

// layouts
import Loading from '../../layouts/common/Spinner';

// utils
// import { useToast } from '../../utils/toast/useToast';
// import getStatusMessage from '../../utils/statusHandler';

import './style.css';
// const Swal = require('sweetalert2');


export default function TableList2(props) {

    const config = props.config;
    // const Modal = props.modal.obj;
    // const modalTitle = props.modal.title;
    const DataContext = props.dataContext;
    
    // const { showMessage } = useToast();

    const {
        dataListView,
       
        isLoading,
        // uid,
    } = useContext(DataContext);


    

    const getTemplate = (data, column, cIndex) => {
        if (typeof column.template === 'function') {
            return(
                column.template(getValue(column, data))
            )
        } else {
            return(
                <a key={cIndex} className={getClassName(column, cIndex)}>
                    {getValue(column, data)}
                </a>
            )
        }
    };

    const getTD = (data, column, cIndex) => {
        if (cIndex === 0) {
            return(
                <td key={cIndex}>
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-50px me-5">
                            <img
                                alt={column.alt || 'image' + cIndex}
                                src={getValue(column, data) || '/assets/media/avatars/150-4.jpg'}
                                className={getClassName(column, cIndex)}
                            />
                        </div>
                    </div>
                </td>
            )
        } else {
            if (column.dataType === 'img') {
                <td key={cIndex}>
                    <img
                        alt={column.alt || 'image' + cIndex}
                        src={getValue(column, data)}
                        className={getClassName(column, cIndex)}
                    />
                </td>
            } else {
                return(
                    <td key={cIndex}>
                        {getTemplate(data, column, cIndex)}
                    </td>
                )
            }
        }
    };

    const getHeaderClassName = (item, index) => {
        if (typeof item.classNameHeader === 'string') {
            return(item.classNameHeader)
        } else {
            if (index === 0) {
                return("ps-4 min-w-45px rounded-start")
            }
            return("min-w-100px")
        } 
    };

    const getClassName = (item, index) => {
        if (typeof item.className === 'string') {
            return(item.className)
        } else {
            if (index === 0) {
                return("text-dark fw-bolder mb-1 fs-6")
            }
            return("text-dark fw-bolder text-hover-primary d-block mb-1 fs-8")
        } 
    };

    const getValue = (column, data) => {
        if (typeof column.calculateCellValue === 'function') {
            return column.calculateCellValue(data[column.dataField])
        }
        if (typeof column.lookup === 'object') {
            try {
                return (column.lookup.dataSource.filter((i, index) => {
                    return i[column.lookup.valueExpr] === data[column.dataField]
                })[0][column.lookup.displayExpr])
            } catch {
                return ''
            }
        }
        return data[column.dataField]
    };

    


    
    return (
       
        <div className="table-responsive">
            <table className="table align-middle gs-0 gy-4">
                <thead>
                    <tr className="fw-bolder text-muted bg-light">
                        {
                            config.columns.map((column, cIndex) => {
                                return(
                                    <th key={cIndex}  className={getHeaderClassName(column, cIndex)}>{column.caption}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        [...dataListView.entries()].map(([dIndex, data]) => {
                            return(
                                <tr key={dIndex}>
                                    {
                                        config.columns.map((column, cIndex) => {
                                            return(getTD(data, column, cIndex))
                                        })
                                    }
                                   
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* <Modal title={modalTitle} uid={uid}/> */}
        </div>
    )
}