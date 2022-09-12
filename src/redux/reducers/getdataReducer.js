import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "//api-portal.saeedsafaee.ir";

const getDataSlice = createSlice({
  name: "getData",
  initialState: {
    roleRequest: [],
   userRequest: [],
    MaindataRequest:[]
  },

  reducers: {
   
    rolesReceived(state, action) {
      state.roleRequest = action.payload;
    },
    usersReceived(state, action) {
      state.userRequest = action.payload;
    },
   MainReceived(state, action) {
      state.MaindataRequest = action.payload;
    },
  },
});

export const {  rolesReceived, usersReceived,MainReceived } =
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

// fetching data from Api

export const fetchRoledata = (url) => async (dispatch) => {
  const response = await axios.get(baseURL + url, await getRequestOptions());

  dispatch(rolesReceived(await response.data));
};


export const fetchusersdata = (url) => async (dispatch) => {
  const response = await axios.get(baseURL + url, await getRequestOptions());

  dispatch(usersReceived(await response.data));
};


export const fetchMaindata = (url) => async (dispatch) => {
  const response = await axios.get(baseURL + url, await getRequestOptions());

  dispatch(MainReceived(await response.data));
};

export default getDataSlice.reducer;
