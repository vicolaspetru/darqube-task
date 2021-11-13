import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setPostsForCurrentPage,
    setTotalPosts,
} from "../reducers/pagination/actions";
import classnames from "classnames";
import classNames from "../styles/search.module.scss";

export default function SearchForm({ placeholder, searchFrom }) {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const clearInputRef = useRef(null);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [enteredValue, setEnteredValue] = useState("");
    const [inputFocus, setInputFocus] = useState(false);
    const posts = searchFrom;

    useEffect(() => {
        dispatch(setPostsForCurrentPage(filteredPosts));
        dispatch(setTotalPosts(filteredPosts));
    }, [filteredPosts]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                clearInputRef.current &&
                clearInputRef.current.contains(event.target)
            ) {
                setEnteredValue("");
            }
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target) &&
                enteredValue === ""
            ) {
                setInputFocus(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputRef]);

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
            setInputFocus(false);
        }
    };

    const focusInput = () => {
        if (inputRef.current) {
            setInputFocus(true);
            inputRef.current.focus();
        }
    };

    const unfocusInput = () => {
        if (inputRef.current) {
            setInputFocus(false);
        }
    };

    const searchFormClasses = classnames(classNames.searchForm, {
        [classNames.searchFormIsOpened]: inputFocus,
    });

    return (
        <div id="search-form" className={searchFormClasses}>
            <label htmlFor="search-form__input">
                <span
                    className={classNames.inputIcon}
                    onClick={() => unfocusInput()}
                >
                    <ion-icon name="search"></ion-icon>
                </span>
                <button
                    className={classNames.inputIcon}
                    onClick={() => focusInput()}
                >
                    <ion-icon name="search"></ion-icon>
                </button>
                {enteredValue !== "" && (
                    <span
                        className={classNames.inputClear}
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
                    id="search-form__input"
                    className={classNames.inputField}
                    onChange={searchHandler}
                    onClick={() => focusInput()}
                    ref={inputRef}
                    value={enteredValue}
                />
            </label>
        </div>
    );
}
