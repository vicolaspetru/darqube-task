import { SET_LATEST_POSTS, SET_LATEST_RESEARCH, SET_POSTS } from "./constants";

export function setPosts(posts) {
    return {
        type: SET_POSTS,
        payload: posts,
    };
}

export function setLatestResearch(posts) {
    return {
        type: SET_LATEST_RESEARCH,
        payload: posts.filter((_, index) => index === 0),
    };
}

export function setLatestPosts(posts) {
    return {
        type: SET_LATEST_POSTS,
        payload: posts.filter((_, index) => index !== 0),
    };
}
