import { FILTER_POSTS_BY_SOURCE } from "./constants";

const initialState = {
    posts: [],
};

export default function postsSourceReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_POSTS_BY_SOURCE:
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
}
