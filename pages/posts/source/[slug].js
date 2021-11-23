/**
 * Internal dependencies
 */
import LatestNews from "../../../components/latest-news";
import { MainLayoutProvider } from "../../../context/main-layout";
import { toPascalCase } from "../../../utils/helpers";
import { getLatestResearch } from "../../../utils/posts";

export default function PostsSource({ posts, latestResearch, sourceCategory }) {
    return (
        <>
            <MainLayoutProvider latestResearch={latestResearch}>
                <div className="content-wrapper">
                    <h1>Source category: {sourceCategory}</h1>
                    <LatestNews posts={posts} postsPerPage={9} />
                </div>
            </MainLayoutProvider>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(process.env.API_ENDPOINT);
    const posts = await res.json();
    const { slug } = params;

    // Pass data to the page via props
    return {
        props: {
            posts: posts.filter((post) => {
                return (
                    post.source.toLowerCase() ===
                    slug.replace("-", "").toLowerCase()
                );
            }),
            latestResearch: getLatestResearch(posts),
            sourceCategory: toPascalCase(slug),
        },
    };
}
