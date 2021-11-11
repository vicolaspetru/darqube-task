import Head from "next/head";
import BookmarksPosts from "../components/bookmarks-posts";
import LatestResearch from "../components/latest-research";
import { MainLayoutProvider } from "../context/main-layout";

function Bookmarks() {
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

export default Bookmarks;
