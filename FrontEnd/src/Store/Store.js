import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/Userslice/Userslice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
