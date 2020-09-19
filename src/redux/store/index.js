import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "../reducers/rootReducers";

export const store = createStore(rootReducers, applyMiddleware(thunk));
