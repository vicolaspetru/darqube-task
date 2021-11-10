import { forwardRef } from "react";
import Link from "next/link";

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const PreviousButton = forwardRef(({ onClick, href }, ref) => (
    <a
        className="pagination__prev-page"
        href={href}
        onClick={onClick}
        ref={ref}
    >
        Previous
    </a>
));
PreviousButton.displayName = "PreviousButton";

const NextButton = forwardRef(({ onClick, href }, ref) => (
    <a
        className="pagination__next-page"
        href={href}
        onClick={onClick}
        ref={ref}
    >
        Next
    </a>
));
NextButton.displayName = "NextButton";

function Pagination({ currentPage, postsPerPage, totalPosts, paginate }) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const postsCount = {
        first: postsPerPage * currentPage - postsPerPage + 1,
        last: postsPerPage * currentPage,
    };

    return (
        <div id="latest-news-pagination">
            <span className="pagination__current-page">
                <strong>{`${postsCount.first}-${postsCount.last}`}</strong> out
                of {totalPages}
            </span>
            {currentPage > 1 && (
                <Link href={"/"} passHref>
                    <PreviousButton onClick={() => paginate(currentPage - 1)} />
                </Link>
            )}
            {postsCount.last < totalPosts && (
                <Link href={"/"} passHref>
                    <NextButton onClick={() => paginate(currentPage + 1)} />
                </Link>
            )}
        </div>
    );
}

export default Pagination;
