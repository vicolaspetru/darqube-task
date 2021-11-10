import Head from "next/head";
import { MainLayout } from "../components/main-layout";
import Posts from "../components/posts";

function Bookmarks() {
    return (
        <>
            <Head>
                <title>Bookmarks</title>
            </Head>
            <MainLayout>
                <div id="research-articles">
                    <div className="inner-wrap">Here</div>
                </div>
            </MainLayout>
        </>
    );
}

export default Bookmarks;
