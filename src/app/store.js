import { configureStore } from "@reduxjs/toolkit";
import usesrReducer from "../slices/user";

export default configureStore({
  reducer: {
    user: usesrReducer,
  },
});
