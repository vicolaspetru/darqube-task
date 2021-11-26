import { SearchActions } from "@Store/types/search";
import createNamespace from "@Utils/createNamespace";

export const SEARCH = createNamespace("SEARCH", [
  "SET_SEARCH_VALUE",
  "CLEAR_SEARCH_VALUE"
] as const);

export const setSearch = (payload: string): SearchActions => ({
  type: SEARCH.SET_SEARCH_VALUE,
  payload
});

export const clearSearch = (): SearchActions => ({
  type: SEARCH.CLEAR_SEARCH_VALUE,
  payload: ""
});

// export function setSearch(value) {
//   return {
//       type: SET_SEARCH_VALUE,
//       payload: value,
//   };
// }

// export function clearSearch() {
//   return {
//       type: CLEAR_SEARCH_VALUE,
//       payload: "",
//   };
// }
