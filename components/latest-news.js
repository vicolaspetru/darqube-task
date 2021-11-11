import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setCurrentPage,
    setPostsForCurrentPage,
    setTotalPosts,
} from "../reducers/pagination/actions";
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
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const totalPosts = useSelector((state) => state.pagination.totalPosts);
    const postsPerPage = useSelector((state) => state.pagination.postsPerPage);

    useEffect(() => {
        dispatch(
            setPostsForCurrentPage(latestPosts, currentPage, postsPerPage)
        );
    }, [currentPage, latestPosts]);

    useEffect(() => {
        dispatch(setTotalPosts(latestPosts));
    }, [latestPosts]);

    useEffect(() => {
        dispatch(setLatestPosts(posts));
    }, [posts]);

    const paginateClickHandler = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };

    return (
        <div id="latest-news">
            {currentPagePosts.map((post) => (
                <ArticleItem key={post.id} article={post} />
            ))}
            <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                onClickButton={paginateClickHandler}
            />
        </div>
    );
}

export default LatestNews;
