/**
 * External dependencies
 */
import Link from "next/link";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

/**
 * Internal dependencies
 */
import {
    addToBookmarks,
    removeFromBookmarks,
} from "../reducers/bookmarks/actions";
import { toKebabCase } from "../utils/helpers";

function ArticleItem({ article }) {
    const dispatch = useDispatch();
    const bookmarksPosts = useSelector((state) => state.bookmarks.posts);
    const latestResearch = useSelector((state) => state.posts.latestResearch);

    const filteredLatestResearch = latestResearch.filter((post) => {
        return post.id === article.id;
    });
    const filteredBookmarks = bookmarksPosts.filter((post) => {
        return post.id === article.id;
    });

    const isLatestResearch = filteredLatestResearch.length > 0;
    const isAddedToBookmarks = filteredBookmarks.length > 0;

    const cutSummaryText = (text, indexEnd = 69, ellipsis = "...") => {
        // 69 is just a number :)
        return `${text.substring(0, indexEnd)}${ellipsis}`;
    };

    const dateToHumanFormat = (timestamp) => {
        const options = { day: "numeric", month: "short" };
        return new Date(timestamp * 1000).toLocaleDateString(
            undefined,
            options
        );
    };

    const dateToDateTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const year = date.getFullYear();
        const month = date.toLocaleDateString(undefined, { month: "2-digit" });
        const day = date.toLocaleDateString(undefined, { day: "numeric" });
        const hour = date.getHours();
        const minute = date.getMinutes();
        return `${year}-${month}-${day} ${hour}:${minute}`;
    };

    const clickBookmarksHandler = (event) => {
        if (event.target.classList.contains("is-added-to-bookmarks")) {
            dispatch(removeFromBookmarks(article));
        } else {
            dispatch(addToBookmarks(article));
        }
    };

    const bookmarkClasses = classnames("article__add-to-bookmark", {
        "is-added-to-bookmarks": isAddedToBookmarks,
    });

    return (
        <article style={{ backgroundImage: `url(${article.image})` }}>
            <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="article__overlay-link"
            >
                &nbsp;
            </a>
            <Link
                href={"/posts/source/[slug]"}
                as={`/posts/source/${toKebabCase(article.source)}`}
            >
                <a className="research__related-label">{article.source}</a>
            </Link>
            {isLatestResearch && (
                <span className="research__latest-label">Latest research</span>
            )}
            <h2 className="article__title">{article.headline}</h2>
            <p className="article__summary">
                {cutSummaryText(article.summary)}
            </p>
            <footer className="article__footer">
                {isLatestResearch && (
                    <span className="article__read-more">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                        Read the research
                    </span>
                )}
                <time dateTime={dateToDateTime(article.datetime)}>
                    {dateToHumanFormat(article.datetime)}
                </time>
            </footer>
            <button
                type="button"
                className={bookmarkClasses}
                title={
                    isAddedToBookmarks
                        ? "Remove from Bookmarks"
                        : "Add to Bookmarks"
                }
                onClick={clickBookmarksHandler}
            >
                {isAddedToBookmarks ? (
                    <ion-icon name="bookmark"></ion-icon>
                ) : (
                    <ion-icon name="bookmark-outline"></ion-icon>
                )}
            </button>
        </article>
    );
}

export default ArticleItem;
