import React, { useContext, useState } from 'react';
import CustomStore from 'devextreme/data/custom_store';


function Pagination(props) {

    const DataContext = props.dataContext;
    const maxSizePage = Math.ceil(props.dataCount / props.pageList);
    
    const {
        setDataListView,
        currentPage,
        setCurrentPage,
        searchValue,
        filterStatusValue,
        sortValue,
        isLoading,
        setIsLoading
    } = useContext(DataContext);
    
    
    const range = n => [...Array(n + 1).keys()].slice(1);
    const pages = range(maxSizePage);

    const data = new CustomStore({
        key: "roleUID",
        loadMode: 'processed',
        load: (loadOptions) => {
            let from = loadOptions.skip;
            let count = loadOptions.take;
            let url = `http://api-portal.saeedsafaee.ir/${props.pageURL}?From=${from}&Count=${count}&Search=${searchValue}`
            if (filterStatusValue) {
                url += `&Status=${filterStatusValue}`
            }
            if (sortValue) {
                url += `&Sort=${sortValue}`
            }
            return fetch(url)
                .then("error")
                .then(response => response.json())
                .then(result => {
                    setDataListView(result.content.items)
                    setIsLoading(false)
                })
                .catch(() => { 'pass' });
        }
    });

    const loadData = (page) => {
        !isLoading && pages.forEach(numPage => {
            if (numPage !== page) {
                document.getElementById(`page${numPage}`).classList.remove('active')
            }
            document.getElementById(`page${page}`).classList.add('active')
        })
        setCurrentPage(page)
        setIsLoading(true)
        data.load({skip: (page - 1) * props.pageList, take: props.pageList})
    }


    return (
        <div className="row">
            <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                <div className="dataTables_paginate paging_simple_numbers" id="kt_customers_table_paginate">
                    <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="kt_customers_table_previous">
                            {!isLoading && <a href="windows.location" className='page-link'> <span>Count: {props.dataCount}</span></a>}
                        </li>
                        
                        {
                            !isLoading &&
                            pages.map((page, index) => {
                                if (page === currentPage) {
                                    return(
                                        <li key={index} id={'page' + page} className="paginate_button page-item active">
                                            <a type='button' onClick={() => loadData(page)} aria-controls="kt_customers_table" data-dt-idx={page} className="page-link">{page}</a>
                                        </li>
                                    )
                                } else {
                                    return(
                                        <li key={index} id={'page' + page} className="paginate_button page-item">
                                            <a type='button' onClick={() => loadData(page)} aria-controls="kt_customers_table" data-dt-idx={page} className="page-link">{page}</a>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pagination;