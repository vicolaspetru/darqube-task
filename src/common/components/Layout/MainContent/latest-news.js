/**
 * External dependencies
 */
import classnames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Internal dependencies
 */
import ArticleItem from "./article-item";
import Pagination from "./pagination";
import NoResultFound from "./no-result-found";
import { getPaginatedPosts } from "../utils/posts";
import { defaultState } from "../reducers/pagination/constants";
import { setPostsPerPage } from "../reducers/pagination/actions";
import { setSearch } from "../reducers/search/actions";

function LatestNews({ posts, postsPerPage = defaultState.postsPerPage }) {
    const dispatch = useDispatch();
    const { query } = useRouter();
    const { s } = query;
    const [paginatedPosts, setPaginatedPosts] = useState([]);
    const [latestPosts, setLatestPosts] = useState(posts);
    const { currentPage } = useSelector((state) => state.pagination);
    const search = useSelector((state) => state.search.value);
    const initialPostsDisplay = getPaginatedPosts(
        posts,
        currentPage,
        postsPerPage
    );

    useEffect(() => {
        // Check if we have 's' attribute in query args
        if (s) {
            dispatch(setSearch(decodeURIComponent(s)));
        }
    }, [s]);

    useEffect(() => {
        dispatch(setPostsPerPage(postsPerPage));
    }, [postsPerPage]);

    useEffect(() => {
        const searchValuesArray = search.split(" ");
        const postsFilter = posts.filter((post) => {
            if (
                searchValuesArray.every((keyword) =>
                    post.headline.toLowerCase().includes(keyword.toLowerCase())
                ) ||
                searchValuesArray.every((keyword) =>
                    post.summary.toLowerCase().includes(keyword.toLowerCase())
                )
            ) {
                return post;
            }
        });
        setLatestPosts(postsFilter);
        setPaginatedPosts(
            getPaginatedPosts(postsFilter, currentPage, postsPerPage)
        );
    }, [posts, search, currentPage, postsPerPage]);

    const classes = classnames({
        "has-no-posts-items": paginatedPosts.length === 0,
    });

    return (
        <>
            <div id="latest-news" className={classes}>
                {paginatedPosts.length === 0 && search === ""
                    ? initialPostsDisplay.map((post) => (
                          <ArticleItem key={post.id} article={post} />
                      ))
                    : paginatedPosts.map((post) => (
                          <ArticleItem key={post.id} article={post} />
                      ))}
                {latestPosts.length === 0 && <NoResultFound />}
            </div>
            <Pagination posts={latestPosts} />
        </>
    );
}

export default LatestNews;
