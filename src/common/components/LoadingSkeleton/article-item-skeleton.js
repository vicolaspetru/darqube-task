/**
 * External dependencies
 */
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function ArticleItemSkeleton({ isLatestResearch }) {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <article className="is-article-skeleton-loading">
                <span className="research__related-label">
                    <Skeleton width={70} height={18} />
                </span>
                {isLatestResearch && (
                    <span className="research__latest-label">
                        <Skeleton width={90} height={18} />
                    </span>
                )}
                <h2 className="article__title">
                    <Skeleton count={3} />
                </h2>
                <p className="article__summary">
                    <Skeleton count={2} />
                </p>
                <footer className="article__footer">
                    {isLatestResearch && (
                        <span className="article__read-more">
                            <Skeleton width={120} height={18} />
                        </span>
                    )}
                    <time dateTime="0000-00-00 00:00">
                        <Skeleton width={26} height={18} />
                    </time>
                </footer>
            </article>
        </SkeletonTheme>
    );
}

export default ArticleItemSkeleton;
