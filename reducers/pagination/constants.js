export const SET_CURRENT_PAGE = "pagination/set-current-page";
export const SET_TOTAL_POSTS = "pagination/set-total-posts";
export const SET_POSTS_PER_PAGE = "pagination/set-posts-per-page";

export const defaultState = {
    currentPage: 1,
    postsPerPage: 6,
    totalPosts: 0,
};
