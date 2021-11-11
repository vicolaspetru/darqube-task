import { FILTER_POSTS_BY_SOURCE } from "./constants";

export function filterPostsBySource(posts, source) {
    const filteredPostsBySource = posts.filter((post) => {
        return (
            post.source.toLowerCase() === source.replace("-", "").toLowerCase()
        );
    });
    return {
        type: FILTER_POSTS_BY_SOURCE,
        payload: filteredPostsBySource,
    };
}
