import { combineReducers } from "redux";
import { ApiReducer } from "./ApiReducer";
import { LoginRegisterReducer } from "./LoginRegisterReducer";

export const RootReducer = combineReducers({
    api:ApiReducer,
    login:LoginRegisterReducer
})