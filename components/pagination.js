import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../reducers/pagination/actions";
import {
    setPostsForCurrentPage,
    setTotalPosts,
} from "../reducers/pagination/actions";

const PreviousButton = ({ onClick }) => (
    <button className="pagination__prev-page" onClick={onClick}>
        Previous
    </button>
);

const NextButton = ({ onClick }) => (
    <button className="pagination__next-page" onClick={onClick}>
        Next
    </button>
);

function Pagination({ posts }) {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const totalPosts = useSelector((state) => state.pagination.totalPosts);
    const postsPerPage = useSelector((state) => state.pagination.postsPerPage);
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const postsCount = {
        first: postsPerPage * currentPage - postsPerPage + 1,
        last: postsPerPage * currentPage,
    };

    useEffect(() => {
        dispatch(setPostsForCurrentPage(posts, currentPage, postsPerPage));
    }, [currentPage, posts]);

    useEffect(() => {
        dispatch(setTotalPosts(posts));
    }, [posts]);

    const paginateClickHandler = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };

    return (
        <div id="latest-news-pagination">
            {totalPages > 0 && (
                <span className="pagination__current-page">
                    <strong>{`${postsCount.first}-${postsCount.last}`}</strong>{" "}
                    out of {totalPosts}
                </span>
            )}
            {currentPage > 1 && (
                <PreviousButton
                    onClick={() => paginateClickHandler(currentPage - 1)}
                />
            )}
            {postsCount.last < totalPosts && (
                <NextButton
                    onClick={() => paginateClickHandler(currentPage + 1)}
                />
            )}
        </div>
    );
}

export default Pagination;
