import Head from "next/head";
import { MainLayout } from "../components/main-layout";
import Posts from "../components/posts";

function Home({ posts }) {
    return (
        <>
            <Head>
                <title>Welcome to Apple latest news</title>
            </Head>
            <MainLayout>
                <div id="research-articles">
                    <div className="inner-wrap">
                        <Posts posts={posts} />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(
        process.env.API_ENDPOINT
    );
    const posts = await res.json();

    if (!posts) {
        return {
            notFound: true,
        };
    }

    // Pass data to the page via props
    return { props: { posts } };
}

export default Home;
