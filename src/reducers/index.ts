import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./ThemeReducer";

let rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
