import { applyMiddleware, createStore } from "redux";
import { RootReducer } from "../reducer/RootReducer";
import { thunk } from "redux-thunk";

export const store = createStore(RootReducer,applyMiddleware(thunk))