import { combineReducers, createStore } from "redux";
import adminReducer from "./reducers/adminReducer";

export const reducers = combineReducers({
    admin: adminReducer
})

