/**
 * External dependencies
 */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Internal dependencies
 */
import { setTotalPosts } from "../reducers/pagination/actions";
import classNames from "../styles/pagination.module.scss";

const PreviousButton = ({ currentPage, disabled }) => {
    const { pathname, query } = useRouter();
    return (
        <Link
            href={{ pathname, query: { ...query, page: currentPage - 1 } }}
            shallow
        >
            <a className={classNames.prevButton} disabled={disabled}>
                Previous
            </a>
        </Link>
    );
};

const NextButton = ({ currentPage, disabled }) => {
    const { pathname, query } = useRouter();
    return (
        <Link
            href={{ pathname, query: { ...query, page: currentPage + 1 } }}
            shallow
        >
            <a className={classNames.nextButton} disabled={disabled}>
                Next
            </a>
        </Link>
    );
};

function Pagination({ posts }) {
    const dispatch = useDispatch();
    const { query } = useRouter();
    const { page } = query;
    const { totalPosts, postsPerPage } = useSelector(
        (state) => state.pagination
    );
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (page) {
            setCurrentPage(parseInt(page));
        }
    }, [page]);

    useEffect(() => {
        dispatch(setTotalPosts(posts));
    }, [posts]);

    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const postsCount = {
        first: postsPerPage * currentPage - postsPerPage + 1,
        last:
            postsPerPage * currentPage < totalPosts
                ? postsPerPage * currentPage
                : totalPosts,
    };

    return (
        <div id="latest-news-pagination" className={classNames.pagination}>
            {totalPages > 0 && (
                <span className={classNames.currentPage}>
                    <strong>{`${postsCount.first}-${postsCount.last}`}</strong>{" "}
                    out of {totalPosts}
                </span>
            )}
            {posts.length > 0 && (
                <>
                    <PreviousButton
                        currentPage={currentPage}
                        disabled={currentPage <= 1}
                    />
                    <NextButton
                        currentPage={currentPage}
                        disabled={postsCount.last >= totalPosts}
                    />
                </>
            )}
        </div>
    );
}

export default Pagination;
