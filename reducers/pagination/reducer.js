import { defaultState, SET_POSTS_PER_PAGE, SET_TOTAL_POSTS } from "./constants";

export default function paginationReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TOTAL_POSTS:
            return {
                ...state,
                totalPosts: action.payload,
            };
        case SET_POSTS_PER_PAGE:
            return {
                ...state,
                postsPerPage: action.payload,
            };
        default:
            return state;
    }
}
