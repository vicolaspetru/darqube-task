import { combineReducers } from "redux";
import bookmarks from "./bookmarks";
import pagination from "./pagination";
import search from "./search";

const combinedReducers = combineReducers({
  bookmarks,
  pagination,
  search
});

function reducer(state, action) {
  return combinedReducers(state, action);
}

export default reducer;
