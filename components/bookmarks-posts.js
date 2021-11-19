/**
 * External dependencies
 */
import classnames from "classnames";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/**
 * Internal dependencies
 */
import ArticleItem from "./article-item";
import Pagination from "./pagination";
import { getPaginatedPosts } from "../utils/posts";

export default function BookmarksPosts({ posts }) {
    const { query } = useRouter();
    const { page } = query;
    const [paginatedPosts, setPaginatedPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (page) {
            setCurrentPage(parseInt(page));
        }
    }, [page]);

    useEffect(() => {
        setPaginatedPosts(getPaginatedPosts(posts, currentPage));
    }, [posts, currentPage]);

    const classes = classnames({
        "has-no-posts-items": paginatedPosts.length === 0,
    });

    return (
        <>
            <div className="content-wrapper">
                <div id="latest-news" className={classes}>
                    {paginatedPosts.map((post) => (
                        <ArticleItem key={post.id} article={post} />
                    ))}
                    {paginatedPosts.length === 0 && (
                        <p>No posts found to display</p>
                    )}
                </div>
                <Pagination posts={posts} />
            </div>
        </>
    );
}
