// /**
//  * External dependencies
//  */
// import Head from "next/head";
// import { useSelector } from "react-redux";

// /**
//  * Internal dependencies
//  */
// import LatestNews from "../components/latest-news";
// import LatestResearch from "../components/latest-research";
// import { MainLayoutProvider } from "../context/main-layout";
// import { getLatestResearch } from "../utils/posts";

// function Bookmarks({ posts }) {
//     const latestResearch = getLatestResearch(posts);
//     const { posts: bookmarksPosts } = useSelector((state) => state.bookmarks);

//     return (
//         <>
//             <Head>
//                 <title>Bookmarks</title>
//             </Head>
//             <MainLayoutProvider latestResearch={latestResearch}>
//                 <LatestResearch posts={latestResearch} />
//                 <div className="content-wrapper">
//                     <LatestNews posts={bookmarksPosts} />
//                 </div>
//             </MainLayoutProvider>
//         </>
//     );
// }

// export async function getServerSideProps() {
//     const res = await fetch(process.env.API_ENDPOINT);
//     const posts = await res.json();

//     // Pass data to the page via props
//     return { props: { posts } };
// }

// export default Bookmarks;
