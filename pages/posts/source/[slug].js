/**
 * External dependencies
 */
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

/**
 * Internal dependencies
 */
import ArticleItem from "../../../components/article-item";
import Pagination from "../../../components/pagination";
import { MainLayoutProvider } from "../../../context/main-layout";
import { toPascalCase } from "../../../utils/helpers";
import { getPaginatedPosts } from "../../../utils/posts";

export default function PostsSource({ posts, sourceCategory, paginated }) {
    const { query } = useRouter();
    const { page } = query;
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedPosts, setPaginatedPosts] = useState([]);

    useEffect(() => {
        setCurrentPage(parseInt(page));
    }, [page]);

    useEffect(() => {
        setPaginatedPosts(getPaginatedPosts(posts, currentPage));
    }, [posts, currentPage]);

    return (
        <>
            <MainLayoutProvider>
                <div className="content-wrapper">
                    <h1>Source category: {sourceCategory}</h1>
                    <div id="latest-news">
                        {paginatedPosts.length === 0 &&
                            paginated.map((post) => (
                                <ArticleItem key={post.id} article={post} />
                            ))}
                        {paginatedPosts.length > 0 &&
                            paginatedPosts.map((post) => (
                                <ArticleItem key={post.id} article={post} />
                            ))}
                    </div>
                    <Pagination posts={posts} />
                </div>
            </MainLayoutProvider>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(process.env.API_ENDPOINT);
    const posts = await res.json();
    const { slug, page = 1 } = params;
    const paginatedPosts = getPaginatedPosts(posts, page);

    // Pass data to the page via props
    return {
        props: {
            posts: posts.filter((post) => {
                return (
                    post.source.toLowerCase() ===
                    slug.replace("-", "").toLowerCase()
                );
            }),
            paginated: paginatedPosts,
            sourceCategory: toPascalCase(slug),
        },
    };
}
