import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setPostsForCurrentPage,
    setTotalPosts,
} from "../reducers/pagination/actions";

export default function BookmarksSearchForm({ placeholder }) {
    const inputRef = useRef(null);
    const clearInputRef = useRef(null);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [enteredValue, setEnteredValue] = useState("");
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.bookmarks.posts);

    useEffect(() => {
        dispatch(setPostsForCurrentPage(filteredPosts));
        dispatch(setTotalPosts(filteredPosts));
    }, [filteredPosts]);

    const searchHandler = (event) => {
        const searchValue = event.target.value;
        const searchValuesArray = searchValue.split(" ");
        const postsFilter = posts.filter((post) => {
            if (
                searchValuesArray.every((keyword) =>
                    post.headline.toLowerCase().includes(keyword.toLowerCase())
                ) ||
                searchValuesArray.every((keyword) =>
                    post.summary.toLowerCase().includes(keyword.toLowerCase())
                )
            ) {
                return post;
            }
        });
        if (searchValue === "") {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(postsFilter);
        }
        setEnteredValue(searchValue);
    };

    const clearInputHandler = (event) => {
        if (
            clearInputRef.current &&
            clearInputRef.current.contains(event.target)
        ) {
            setEnteredValue("");
            setFilteredPosts(posts);
        }
    };

    return (
        <div id="bookmarks-search-form">
            <label htmlFor="bookmarks-search-form__input">
                <span className="bookmarks-search-form__input-icon">
                    <ion-icon name="search"></ion-icon>
                </span>
                {enteredValue !== "" && (
                    <span
                        className="bookmarks-search-form__input-clear"
                        ref={clearInputRef}
                        title="Clear input"
                        onClick={clearInputHandler}
                    >
                        <ion-icon name="close"></ion-icon>
                    </span>
                )}
                <input
                    type="text"
                    placeholder={placeholder}
                    id="bookmarks-search-form__input"
                    className="bookmarks-search-form__input"
                    onChange={searchHandler}
                    ref={inputRef}
                    value={enteredValue}
                />
            </label>
        </div>
    );
}
