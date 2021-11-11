import {
    defaultState,
    SET_CURRENT_PAGE,
    SET_CURRENT_PAGE_POSTS,
    SET_TOTAL_POSTS,
} from "./constants";

export default function paginationReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_CURRENT_PAGE_POSTS:
            return {
                ...state,
                currentPagePosts: action.payload,
            };
        case SET_TOTAL_POSTS:
            return {
                ...state,
                totalPosts: action.payload,
            };
        default:
            return state;
    }
}
