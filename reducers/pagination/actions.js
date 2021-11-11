import {
    defaultState,
    SET_CURRENT_PAGE,
    SET_CURRENT_PAGE_POSTS,
    SET_TOTAL_POSTS,
} from "./constants";

export function setCurrentPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    };
}

export function setTotalPosts(posts) {
    return {
        type: SET_TOTAL_POSTS,
        payload: posts.length,
    };
}

export function setPostsForCurrentPage(
    posts,
    currentPage = 1,
    postsPerPage = defaultState.postsPerPage
) {
    const lastPageIndex = currentPage * postsPerPage;
    const firstPageIndex = lastPageIndex - postsPerPage;

    return {
        type: SET_CURRENT_PAGE_POSTS,
        payload: posts.slice(firstPageIndex, lastPageIndex),
    };
}
