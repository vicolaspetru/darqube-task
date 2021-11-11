export const SET_CURRENT_PAGE = "pagination/set-current-page";
export const SET_CURRENT_PAGE_POSTS = "pagination/set-posts-for-current-page";
export const SET_TOTAL_POSTS = "pagination/set-total-posts";

export const defaultState = {
    currentPagePosts: [],
    currentPage: 1,
    postsPerPage: 6,
    totalPosts: 0,
};
