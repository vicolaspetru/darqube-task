import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BookmarksPosts from "../components/bookmarks-posts";
import LatestResearch from "../components/latest-research";
import { MainLayoutProvider } from "../context/main-layout";
import { setPosts } from "../reducers/posts/actions";

function Bookmarks({ posts }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPosts(posts));
    }, [posts]);

    return (
        <>
            <Head>
                <title>Bookmarks</title>
            </Head>
            <MainLayoutProvider>
                <div id="research-articles">
                    <div className="inner-wrap">
                        <LatestResearch />
                        <BookmarksPosts />
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

export default Bookmarks;
