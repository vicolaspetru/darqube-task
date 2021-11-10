import classNames from "classnames";

function ArticleItem({ article, isLatestResearch }) {
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

    console.log(article.id);

    const isAddedToBookmarks = article.id === 64665122; // TODO: refactor code here

    const bookmarkClasses = classNames("article__add-to-bookmark", {
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
            <span className="research__related-label">{article.source}</span>
            {isLatestResearch && (
                <span className="research__latest-label">Latest research</span>
            )}
            <h2 className="article__title">{article.headline}</h2>
            <p className="article__summary">
                {cutSummaryText(article.summary)}
            </p>
            <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="article__footer"
            >
                {isLatestResearch && (
                    <span className="article__read-more">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                        Read the research
                    </span>
                )}
                <time dateTime={dateToDateTime(article.datetime)}>
                    {dateToHumanFormat(article.datetime)}
                </time>
                <button
                    type="button"
                    className={bookmarkClasses}
                    title={
                        isAddedToBookmarks
                            ? "Remove from Bookmarks"
                            : "Add to Bookmarks"
                    }
                >
                    {isAddedToBookmarks ? (
                        <ion-icon name="bookmark"></ion-icon>
                    ) : (
                        <ion-icon name="bookmark-outline"></ion-icon>
                    )}
                </button>
            </a>
        </article>
    );
}

export default ArticleItem;
