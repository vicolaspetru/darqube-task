// /**
//  * External dependencies
//  */
// import Head from "next/head";

// /**
//  * Internal dependencies
//  */
// import LatestResearch from "../components/latest-research";
// import LatestNews from "../components/latest-news";
// import { MainLayoutProvider } from "../context/main-layout";
// import { getLatestPosts, getLatestResearch } from "../utils/posts";

// function Home({ posts }) {
//     const latestResearch = getLatestResearch(posts);
//     const latestPosts = getLatestPosts(posts);

//     return (
//         <>
//             <Head>
//                 <title>Welcome to Apple latest news</title>
//             </Head>
//             <MainLayoutProvider latestResearch={latestResearch}>
//                 <LatestResearch posts={latestResearch} />
//                 <div className="content-wrapper">
//                     <LatestNews posts={latestPosts} />
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

// export default Home;
