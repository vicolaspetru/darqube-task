import { ADD_TO_BOOKMARKS, REMOVE_FROM_BOOKMARKS } from "./constants";

export function addToBookmarks(post) {
    return {
        type: ADD_TO_BOOKMARKS,
        payload: post,
    };
}

export function removeFromBookmarks(post) {
    return {
        type: REMOVE_FROM_BOOKMARKS,
        payload: post,
    };
}
