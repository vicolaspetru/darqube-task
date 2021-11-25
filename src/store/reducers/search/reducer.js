import { CLEAR_SEARCH_VALUE, SET_SEARCH_VALUE } from "./constants";

const initialState = {
    value: "",
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                value: action.payload,
            };
        case CLEAR_SEARCH_VALUE:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
}
