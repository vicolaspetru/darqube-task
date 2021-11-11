import Head from "next/head";
import { MainLayoutProvider } from "../context/main-layout";
import Posts from "../components/posts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPosts } from "../reducers/posts/actions";

function Home({ posts }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPosts(posts));
    }, [posts]);

    return (
        <>
            <Head>
                <title>Welcome to Apple latest news</title>
            </Head>
            <MainLayoutProvider posts={posts}>
                <div id="research-articles">
                    <div className="inner-wrap">
                        <Posts />
                    </div>
                </div>
            </MainLayoutProvider>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(process.env.API_ENDPOINT);
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
