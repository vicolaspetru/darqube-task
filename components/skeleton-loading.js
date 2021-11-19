/**
 * External dependencies
 */
import Head from "next/head";
import { useSelector } from "react-redux";

/**
 * Internal dependencies
 */
import ArticleItemSkeleton from "../misc/article-item-skeleton";

export default function SkeletonLoading() {
    const { postsPerPage } = useSelector((state) => state.pagination);
    const articlesSkeleton = [];

    for (let i = 1; i <= postsPerPage; i++) {
        articlesSkeleton.push(<ArticleItemSkeleton key={i} />);
    }

    return (
        <>
            <Head>
                <title>Loading posts...</title>
            </Head>
            <aside id="latest-research">
                <ArticleItemSkeleton isLatestResearch={true} />
            </aside>
            <div id="latest-news">{articlesSkeleton}</div>
        </>
    );
}
