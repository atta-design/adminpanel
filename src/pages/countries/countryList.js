import { GetDataApi } from '../../managers/HttpManager';
import Pagination from '../../components/paging/Pagination';
import React, { useEffect, useState, createContext } from 'react';
import { useTranslation } from 'react-i18next';
// components
import TableList2 from '../../components/tableList/TableList2';
import {default as SelectBox} from '../../components/selectBox/SelectBox';
import Loading from '../../layouts/common/Loading';
// configs
import { TableListConfig } from './configs/List';
import { SelectBoxConfig as Event } from './configs/event';

//utiles
import { useToast } from '../../utils/toast/useToast';
import getStatusMessage from '../../utils/statusHandler';
import CountryEditModal from '../../components/modal/CountryEditModal';
import CountryCreateModal from '../../components/modal/CountryCreateModal';


export const DataContext = createContext({
    dataListView: [],
    setDataListView: () => {},
    setDataCount: () => {},
    currentPage: [],
    setCurrentPage: () => {},
    searchValue: '',
    setSearchValue: () => {},
    filterStatusValue: '',
    setFilterStatusValue: () => {},
    sortValue: '',
    setSortValue: () => {},
    isLoading: false,
    setIsLoading: () => {},
    uid: false,
    setUid: () => {}
});


export default function Countries() {
const{t}=useTranslation()
    const pageList = 6;
    const { showMessage } = useToast();
    const [uid, setUid] = useState('');
    const [dataCount, setDataCount] = useState(0);
    const [sortValue, setSortValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [dataListView, setDataListView] = useState([]);
    const [filterStatusValue, setFilterStatusValue] = useState('');

    const value = {
        dataListView,
        setDataListView,
        setDataCount,
        currentPage,
        setCurrentPage,
        searchValue,
        setSearchValue,
        filterStatusValue,
        setFilterStatusValue,
        sortValue,
        setSortValue,
        isLoading,
        setIsLoading,
        uid,
        setUid
    };



    const handleFilterStatusValue = (value) => {
        setCurrentPage(1);
        setIsLoading(true);
        setFilterStatusValue(value);
        getLoadData(searchValue, value);
    }


    const handleSearch = (value) => {
        setCurrentPage(1);
        setIsLoading(true);
        setSearchValue(value);
        getLoadData(value, filterStatusValue);
    }

    async function getLoadData(search, filter) {
        try {
            let url = `/country/list?From=${0}&Count=${pageList}&Search=${search}`
            if (filter) {
                url += `&Status=${filter}`
            }
            const data = await GetDataApi(url);

            setIsLoading(false);
            
            if (data.status === 1) {
                setDataCount(data.content.count);
                setDataListView(data.content.items);
            } else {
                showMessage(true, getStatusMessage(data.status), 'error');
            }
        }
        catch (e) {
            showMessage(true, t('FetchingError'), 'error');
        }
    };

    useEffect(() => {
        getLoadData('', '');
    }, []);
    var selectValue = localStorage.getItem('lng');
    if(null === selectValue)
{
    selectValue = 'fa';
}
 let dir
selectValue==='en'?dir="ltr":dir="rtl"

    return (
        <DataContext.Provider value={value}>
            <div dir={dir} className="post d-flex flex-column-fluid" id="kt_post">
                <div id="kt_content_container" className="container ">
                    <div className="border border-2 border border-secondary card mb-5 mb-xl-8 w-100">
                        <div className="card mb-5 mb-xl-8">
                            <div className="card-header border-0 pt-5">
                                <div className="card-title">
                                    <h3 className="align-items-start">
                                        <span className="card-label fw-bolder fs-3 mb-1">{t('CountryList')}</span>
                                    </h3>
                                    <div  className="d-flex align-items-center position-relative my-1 mx-5">
                                       
                                        <input
                                       
                                            type="text"
                                            className="form-control form-control-solid w-250px ps-15"
                                            placeholder={t('search')}
                                            onChange={(e) => handleSearch(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="card-toolbar">
                                    <button type="button" className="btn btn-light-primary mx-4" data-bs-toggle="modal" data-bs-target="#kt_modal_create_country">
                                        <span className="svg-icon svg-icon-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.25" fillRule="evenodd" clipRule="evenodd" d="M6.54184 2.36899C4.34504 2.65912 2.65912 4.34504 2.36899 6.54184C2.16953 8.05208 2 9.94127 2 12C2 14.0587 2.16953 15.9479 2.36899 17.4582C2.65912 19.655 4.34504 21.3409 6.54184 21.631C8.05208 21.8305 9.94127 22 12 22C14.0587 22 15.9479 21.8305 17.4582 21.631C19.655 21.3409 21.3409 19.655 21.631 17.4582C21.8305 15.9479 22 14.0587 22 12C22 9.94127 21.8305 8.05208 21.631 6.54184C21.3409 4.34504 19.655 2.65912 17.4582 2.36899C15.9479 2.16953 14.0587 2 12 2C9.94127 2 8.05208 2.16953 6.54184 2.36899Z" fill="#12131A" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H11V16C11 16.5523 11.4477 17 12 17Z" fill="#12131A" />
                                            </svg>
                                        </span>
                                        {t('CountryAdd')}
                                    </button>
                                    <SelectBox
                                        config={Event}
                                        onValueChanged={(data) => handleFilterStatusValue(data.value)}
                                    />
                                </div>
                            </div>

                            <div dir='rtl' className="card-body py-3 w-100">
                                {isLoading?<Loading/>:(<div> <TableList2 config={TableListConfig} pageURL={'country/list'} dataContext={DataContext} modal={{obj:CountryEditModal, title:t('countryEdit')}} />
                                <Pagination dataCount={dataCount} pageList={pageList} pageURL={'country/list'} dataContext={DataContext}/></div>)}
                               
                            </div>
                            <CountryCreateModal title={t('CountryAdd')}/>
                        </div>
                    </div>
                </div>
            </div>
        </DataContext.Provider>
    );
}
