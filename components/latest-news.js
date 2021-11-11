import classnames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../reducers/pagination/actions";
import { setLatestPosts } from "../reducers/posts/actions";
import ArticleItem from "./article-item";
import Pagination from "./pagination";

function LatestNews() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const latestPosts = useSelector((state) => state.posts.latestPosts);
    const currentPagePosts = useSelector(
        (state) => state.pagination.currentPagePosts
    );

    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, []);

    useEffect(() => {
        dispatch(setLatestPosts(posts));
    }, [posts]);

    const classes = classnames({
        "has-no-posts-items": currentPagePosts.length === 0,
    });

    return (
        <div id="latest-news" className={classes}>
            {currentPagePosts.map((post) => (
                <ArticleItem key={post.id} article={post} />
            ))}
            <Pagination posts={latestPosts} />
        </div>
    );
}

export default LatestNews;
