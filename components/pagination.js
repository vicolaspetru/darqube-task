import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../reducers/pagination/actions";
import {
    setPostsForCurrentPage,
    setTotalPosts,
} from "../reducers/pagination/actions";
import classNames from "../styles/pagination.module.scss";

const PreviousButton = ({ onClick }) => (
    <button className={classNames.prevButton} onClick={onClick}>
        Previous
    </button>
);

const NextButton = ({ onClick }) => (
    <button className={classNames.nextButton} onClick={onClick}>
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
        <div id="latest-news-pagination" className={classNames.pagination}>
            {totalPages > 0 && (
                <span className={classNames.currentPage}>
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
