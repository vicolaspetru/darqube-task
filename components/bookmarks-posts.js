import classnames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../reducers/pagination/actions";
import ArticleItem from "./article-item";
import BookmarksSearchForm from "./bookmarks-search-form";
import Pagination from "./pagination";

export default function BookmarksPosts() {
    const dispatch = useDispatch();
    const bookmarksPosts = useSelector((state) => state.bookmarks.posts);
    const latestResearch = useSelector((state) => state.posts.latestResearch);
    const currentPagePosts = useSelector(
        (state) => state.pagination.currentPagePosts
    );

    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, []);

    const classes = classnames({
        "has-no-posts-items": currentPagePosts.length === 0,
    });

    return (
        <>
            <div className="content-wrapper">
                <BookmarksSearchForm placeholder="Search through bookmarks" />
                <div id="latest-news" className={classes}>
                    {currentPagePosts.map(
                        (post) =>
                            latestResearch[0].id !== post.id && (
                                <ArticleItem key={post.id} article={post} />
                            )
                    )}
                    {currentPagePosts.length === 0 && (
                        <p className="">
                            There are no one result by your search input.
                        </p>
                    )}
                    <Pagination posts={bookmarksPosts} />
                </div>
            </div>
        </>
    );
}
