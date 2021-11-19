import { getLatestPosts, getLatestResearch } from "../../utils/posts";
import { SET_LATEST_POSTS, SET_LATEST_RESEARCH } from "./constants";

export function setLatestResearch(posts) {
    return {
        type: SET_LATEST_RESEARCH,
        payload: getLatestResearch(posts),
    };
}

export function setLatestPosts(posts) {
    return {
        type: SET_LATEST_POSTS,
        payload: getLatestPosts(posts),
    };
}
