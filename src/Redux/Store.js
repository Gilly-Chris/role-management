

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import rootReducer from "./Reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));