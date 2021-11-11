import {
    defaultState,
    SET_LATEST_POSTS,
    SET_LATEST_RESEARCH,
    SET_POSTS,
} from "./constants";

export default function postsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case SET_LATEST_RESEARCH:
            return {
                ...state,
                latestResearch: action.payload,
            };
        case SET_LATEST_POSTS:
            return {
                ...state,
                latestPosts: action.payload,
            };
        default:
            return state;
    }
}
