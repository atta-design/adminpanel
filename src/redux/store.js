import { configureStore } from "@reduxjs/toolkit";
import LogintSlice from "./reducers/postDataReducer";
import getDataSlice from './reducers/getDataReducer'

export const store = configureStore({
    reducer: {
        requests: LogintSlice,
        getData:getDataSlice
    },
  });
  