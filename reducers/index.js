/**
 * External dependencies
 */
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

/**
 * Internal dependencies
 */
import bookmarksReducer from "./bookmarks/reducer";
import paginationReducer from "./pagination/reducer";
import searchReducer from "./search/reducer";

const rootReducer = combineReducers({
    pagination: paginationReducer,
    bookmarks: bookmarksReducer,
    search: searchReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);
