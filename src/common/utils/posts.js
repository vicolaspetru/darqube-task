import { defaultState } from "../reducers/pagination/constants";

export function getLatestPosts(posts) {
    return posts.filter((_, index) => index > 0);
}

export function getLatestResearch(posts) {
    return posts.filter((_, index) => index === 0);
}

export function getPaginatedPosts(
    posts,
    currentPage = 1,
    postsPerPage = defaultState.postsPerPage
) {
    const lastPageIndex = parseInt(currentPage) * parseInt(postsPerPage);
    const firstPageIndex = lastPageIndex - parseInt(postsPerPage);

    return posts.slice(firstPageIndex, lastPageIndex);
}
