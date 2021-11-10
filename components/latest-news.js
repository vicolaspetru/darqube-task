import { useState } from "react";
import ArticleItem from "./article-item";
import Pagination from "./pagination";

export const postsPerPage = 6;

function LatestNews({ posts, error, isLoaded }) {
    const [currentPage, setCurrentPage] = useState(1);

    const lastPageIndex = currentPage * postsPerPage;
    const firstPageIndex = lastPageIndex - postsPerPage;
    const currentPosts = posts.slice(firstPageIndex, lastPageIndex);
    const totalPosts = posts.length;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div id="latest-news">
            {currentPosts.map((post) => (
                <ArticleItem key={post.id} article={post} />
            ))}
            <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                paginate={paginate}
            />
        </div>
    );
}

export default LatestNews;
