import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../reducers/pagination/actions";
import ArticleItem from "./article-item";
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

    return (
        <div id="latest-news">
            {currentPagePosts.map(
                (post) =>
                    latestResearch[0].id !== post.id && (
                        <ArticleItem key={post.id} article={post} />
                    )
            )}
            <Pagination posts={bookmarksPosts} />
        </div>
    );
}
