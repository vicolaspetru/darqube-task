/**
 * External dependencies
 */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * Internal dependencies
 */
import { setLatestResearch } from "../reducers/posts/actions";
import ArticleItem from "./article-item";

function LatestResearch({ posts }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLatestResearch(posts));
    }, [posts]);

    return (
        <aside id="latest-research">
            {posts.map((post) => (
                <ArticleItem key={post.id} article={post} />
            ))}
        </aside>
    );
}

export default LatestResearch;
