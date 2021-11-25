import { CLEAR_SEARCH_VALUE, SET_SEARCH_VALUE } from "./constants";

export function setSearch(value) {
    return {
        type: SET_SEARCH_VALUE,
        payload: value,
    };
}

export function clearSearch() {
    return {
        type: CLEAR_SEARCH_VALUE,
        payload: "",
    };
}
