import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "//api-portal.saeedsafaee.ir";

const getDataSlice = createSlice({
  name: "request",
  initialState: {
    loading: "idle",
    roleRequest: [],
    newsRequest: [],
    MaindataRequest:[]
  },

  reducers: {
    usersLoading(state) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    rolesReceived(state, action) {
      state.roleRequest = action.payload;
    },
    newsReceived(state, action) {
      state.newsRequest = action.payload;
    },
   MainReceived(state, action) {
      state.MaindataRequest = action.payload;
    },
  },
});

export const { usersLoading, rolesReceived, newsReceived,MainReceived } =
  getDataSlice.actions;
async function getCookie() {
  let retVal = Cookies.get("authtoken");
  if (retVal === null || retVal === undefined) {
    retVal = "authtoken";
  }
  return retVal;
}
async function getRequestOptions() {
  const GetRequestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: await getCookie(),
    },
  };
  return GetRequestOptions;
}
export const fetchRoledata = (url) => async (dispatch) => {
  const response = await axios.get(baseURL + url, await getRequestOptions());

  dispatch(rolesReceived(await response.data));
};
export const fetchNewsdata = (url) => async (dispatch) => {
  const response = await axios.get(baseURL + url, await getRequestOptions());

  dispatch(newsReceived(await response.data));
};
export const fetchMaindata = (url) => async (dispatch) => {
  const response = await axios.get(baseURL + url, await getRequestOptions());

  dispatch(MainReceived(await response.data));
};

export default getDataSlice.reducer;
