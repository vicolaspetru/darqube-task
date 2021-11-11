import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLatestResearch } from "../reducers/posts/actions";
import ArticleItem from "./article-item";

function LatestResearch() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const latestResearch = useSelector((state) => state.posts.latestResearch);

    useEffect(() => {
        dispatch(setLatestResearch(posts));
    }, [posts]);

    return (
        <aside id="latest-research">
            {latestResearch.map((post) => (
                <ArticleItem
                    key={post.id}
                    article={post}
                    isLatestResearch={true}
                />
            ))}
        </aside>
    );
}

export default LatestResearch;
