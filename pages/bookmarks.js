import Head from "next/head";
import Posts from "../components/posts";
import { MainLayoutProvider } from '../context/main-layout';

function Bookmarks() {
    return (
        <>
            <Head>
                <title>Bookmarks</title>
            </Head>
            <MainLayoutProvider>
                <div id="research-articles">
                    <div className="inner-wrap">Here</div>
                </div>
            </MainLayoutProvider>
        </>
    );
}

export default Bookmarks;
