import {
    SET_CURRENT_PAGE,
    SET_TOTAL_POSTS,
    SET_POSTS_PER_PAGE,
} from "./constants";

export function setCurrentPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        payload: parseInt(page) || 1,
    };
}

export function setTotalPosts(posts) {
    return {
        type: SET_TOTAL_POSTS,
        payload: posts.length,
    };
}

export function setPostsPerPage(perPage) {
    return {
        type: SET_POSTS_PER_PAGE,
        payload: parseInt(perPage),
    };
}
