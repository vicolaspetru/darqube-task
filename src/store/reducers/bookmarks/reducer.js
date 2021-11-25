import { ADD_TO_BOOKMARKS, REMOVE_FROM_BOOKMARKS } from "./constants";

const initialState = {
    posts: [],
};

export default function bookmarksReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BOOKMARKS:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case REMOVE_FROM_BOOKMARKS:
            return {
                ...state,
                posts: state.posts.filter(
                    (post) => post.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
}
