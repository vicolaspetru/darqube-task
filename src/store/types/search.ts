import { SEARCH } from "@Store/actions/search";

export type SetSearchValue = {
  type: typeof SEARCH.SET_SEARCH_VALUE;
  payload: string;
};

export type ClearSearchValue = {
  type: typeof SEARCH.CLEAR_SEARCH_VALUE;
  payload: string;
};

export type SearchActions = SetSearchValue | ClearSearchValue;
