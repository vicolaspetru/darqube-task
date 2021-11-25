/**
 * External dependencies
 */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

/**
 * Internal dependencies
 */
import appReducers from "./reducers";

const middleware = /^true$/i.test(process.env.REDUX_DEV_TOOL!)
  ? composeWithDevTools(applyMiddleware(logger))
  : applyMiddleware(logger);

const store = createStore(appReducers, middleware);

export default store;
