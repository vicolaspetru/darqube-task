import Head from "next/head";
import ArticleItemSkeleton from "../misc/article-item-skeleton";
import { MainLayoutProvider } from "../context/main-layout";
import { useSelector } from "react-redux";

export default function SkeletonLoading() {
    const postsPerPage = useSelector((state) => state.pagination.postsPerPage);
    const articlesSkeleton = [];

    for (let i = 1; i <= postsPerPage; i++) {
        articlesSkeleton.push(<ArticleItemSkeleton key={i} />);
    }

    return (
        <>
            <Head>
                <title>Loading posts...</title>
            </Head>
            <MainLayoutProvider>
                <div id="research-articles">
                    <div className="inner-wrap">
                        <aside id="latest-research">
                            <ArticleItemSkeleton isLatestResearch={true} />
                        </aside>
                        <div id="latest-news">{articlesSkeleton}</div>
                    </div>
                </div>
            </MainLayoutProvider>
        </>
    );
}
