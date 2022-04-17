import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";

let store = configureStore({
    reducer: rootReducer
});

// The RootState can be used with functional hooks like useSelector and useDispatch!
export type RootState = ReturnType<typeof store.getState>

export default store;