import { configureStore } from "@reduxjs/toolkit";
import LogintSlice from "./reducers/loginReducer";
import getDataSlice from './reducers/getdataReducer'

export const store = configureStore({
    reducer: {
        requests: LogintSlice,
        getData:getDataSlice
    },
  });
  