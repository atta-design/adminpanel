import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "//api-portal.saeedsafaee.ir";

const LogintSlice = createSlice({
  name: "Login",
  initialState: {
    request: null,
  },

  reducers: {
   
    usersReceived(state, action) {
      state.request = action.payload;
    },
  },
});

export const {  usersReceived } = LogintSlice.actions;

// post data to Api

export const fetchUsers = (url, postOjb) => async (dispatch) => {
  const response = await axios.post(baseURL + url, postOjb);
  dispatch(usersReceived(await response.data));
};

export default LogintSlice.reducer;
