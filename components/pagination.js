function Pagination({ currentPage, postsPerPage, totalPosts, onClickButton }) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const postsCount = {
        first: postsPerPage * currentPage - postsPerPage + 1,
        last: postsPerPage * currentPage,
    };

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

    return (
        <div id="latest-news-pagination">
            <span className="pagination__current-page">
                <strong>{`${postsCount.first}-${postsCount.last}`}</strong> out
                of {totalPages}
            </span>
            {currentPage > 1 && (
                <PreviousButton
                    onClick={() => onClickButton(currentPage - 1)}
                />
            )}
            {postsCount.last < totalPosts && (
                <NextButton onClick={() => onClickButton(currentPage + 1)} />
            )}
        </div>
    );
}

export default Pagination;
