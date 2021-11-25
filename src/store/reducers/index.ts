import { combineReducers } from "redux";

const combinedReducers = combineReducers({});

function reducer(state, action) {
  return combinedReducers(state, action);
}

export default reducer;
