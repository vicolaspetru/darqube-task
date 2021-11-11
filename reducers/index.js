import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import bookmarksReducer from "./bookmarks/reducer";
import paginationReducer from "./pagination/reducer";
import postsReducer from "./posts/reducer";

const rootReducer = combineReducers({
    pagination: paginationReducer,
    posts: postsReducer,
    bookmarks: bookmarksReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
