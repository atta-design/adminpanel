import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "//api-portal.saeedsafaee.ir";

const LogintSlice = createSlice({
  name: "Login",
  initialState: {
    loading: "idle",
    request: null,
  },

  reducers: {
    usersLoading(state) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    usersReceived(state, action) {
      state.request = action.payload;
    },
  },
});

export const { usersLoading, usersReceived } = LogintSlice.actions;

export const fetchUsers = (url, postOjb) => async (dispatch) => {
  dispatch(usersLoading(null));
  const response = await axios.post(baseURL + url, postOjb);
  dispatch(usersReceived(await response.data));
};

export default LogintSlice.reducer;
