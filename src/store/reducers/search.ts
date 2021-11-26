import { ISearch } from "@Models/Store";
import { SEARCH } from "@Store/actions/search";
import { SearchActions } from "@Store/types/search";

const initialState: ISearch = {
  value: ""
};

export default function reducer(state = initialState, action: SearchActions): ISearch {
  switch (action.type) {
    case SEARCH.SET_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload
      };
    case SEARCH.CLEAR_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
