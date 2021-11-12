import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import bookmarksReducer from "./bookmarks/reducer";
import paginationReducer from "./pagination/reducer";
import postsReducer from "./posts/reducer";
import postsSourceReducer from "./posts/source/reducer";
import searchFormReducer from "./searchForm/reducer";

const rootReducer = combineReducers({
    pagination: paginationReducer,
    posts: postsReducer,
    postsSource: postsSourceReducer,
    bookmarks: bookmarksReducer,
    searchForm: searchFormReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
