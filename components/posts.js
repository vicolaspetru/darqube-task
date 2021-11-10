import { useState, useEffect } from "react";
import LatestResearch from "./latest-research";
import LatestNews from "./latest-news";

export default function Posts({ posts }) {
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [latestPost, setLatestPost] = useState([]);

    useEffect(() => {
        setFilteredPosts(posts.filter((_, index) => index !== 0));
        setLatestPost([posts[0]]);
    }, []); // eslint-disable-line

    return (
        <>
            <LatestResearch latestPost={latestPost} />
            <LatestNews posts={filteredPosts} />
        </>
    );
}
