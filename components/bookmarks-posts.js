import { useDispatch, useSelector } from "react-redux";
import ArticleItem from "./article-item";

export default function BookmarksPosts() {
    const dispatch = useDispatch();
    const bookmarksPosts = useSelector((state) => state.bookmarks.posts);

    return (
        <div id="latest-news">
            {bookmarksPosts.map((post) => {
                <ArticleItem key={post.id} article={post} />;
            })}
        </div>
    );
}
