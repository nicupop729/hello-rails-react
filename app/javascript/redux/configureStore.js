import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import greetingsReducer from "./greeting";

const rootReducer = combineReducers({ greetingsReducer });

const configureStore = createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;
