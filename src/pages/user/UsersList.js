import {useContext } from 'react';


export default function Rolelist(props) {

    const config = props.config
    
    const DataContext = props.dataContext

    const {dataListView} = useContext(DataContext);


    const getTemplate = (data, column, cIndex) => {
        if (typeof column.template === 'function') {
            return(
                column.template(getValue(column, data))
            )
        } else {
            return(
                <a  className={getClassName(column, cIndex)}>
                    {getValue(column, data)}
                </a>
            )
        }
    }

    const getTD = (data, column, cIndex) => {
        if (cIndex === 0) {
            return(
                <td key={cIndex}>
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-50px me-5">
                            <span className="bullet bullet-vertical h-40px bg-success"></span>
                        </div>
                        <div className="d-flex justify-content-start flex-column">
                            {getTemplate(data, column, cIndex)}
                        </div>
                        
                    </div>
                </td>
            )
        } else {
            return(
                <td key={cIndex}>
                    {getTemplate(data, column, cIndex)}
                </td>
            )
        }
    }

    const getHeaderClassName = (item, index) => {
        if (typeof item.className === 'string') {
            return(item.className)
        } else {
            if (index === 0) {
                return("ps-4 w-100-px rounded-start")
            }
            return("w-200px")
        } 
    }

    const getClassName = (item, index) => {
        if (typeof item.classNameHeader === 'string') {
            return(item.classNameHeader)
        } else {
            if (index === 0) {
                return("text-dark fw-bolder mb-1 fs-6")
            }
            return("text-dark fw-bolder text-hover-primary d-block mb-1 fs-8")
        } 
    }
    const isEventsAvailable = () => {
        if (config.events) {
            return true
        }
        return false
    }
    
    const getValue = (column, data) => {
        if (typeof column.calculateCellValue === 'function') {
            return column.calculateCellValue(data[column.dataField])
        }
        if (typeof column.lookup === 'object') {
            try {
                return data.firstname
               
            } catch {
                return ''
            }
        }
        return data[column.dataField]
    }

   
    

    
    return (
      
        <div className="w-100 table-responsive">
            <table className="w-100 table align-middle gs-0 gy-4">
                <thead>
                    <tr className="w-100 fw-bolder text-muted  bg-light">
                    {
                            config.columns.map((column, cIndex) => {
                                return(
                                    <th key={cIndex} className={getHeaderClassName(column, cIndex)}>{column.caption}</th>
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
                                    {
                                        isEventsAvailable() && <td key={dIndex} className="w-100 text-end">

                                         
                                           

                                            
                                        </td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}