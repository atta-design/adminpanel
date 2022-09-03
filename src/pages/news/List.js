import React, { useEffect, useState } from "react";
import { fetchNewsdata } from "../../redux/reducers/getDataReducer";
import { useDispatch, useSelector } from "react-redux";

// components
import Grid from "../../components/dataGrid/Grid";

//utiles
import { useToast } from "../../utils/toast/useToast";
import getStatusMessage from "../../utils/statusHandler";
import { GridConfig as NewsListConfig } from "./config";


export default function News() {
 
 const reduxdata = useSelector((state) => state.getData.newsRequest);
  const dispatch = useDispatch();
  const { showMessage } = useToast();
const [news, setNews] = useState([]);
  

  async function getLoadData() {
    // putting received datas in states and show error messages If it exists


    try {
      dispatch(fetchNewsdata("/news/list"));

      if (reduxdata.length !== 0) {
        if (reduxdata.status === 1) {
          setNews(reduxdata.content);
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

  return (
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div id="kt_content_container" className="container">
        <Grid dataSource={news} config={NewsListConfig} />
      </div>
    </div>
  );
}
