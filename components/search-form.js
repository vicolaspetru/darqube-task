import { useEffect, useRef, useState } from "react";
import { useMainLayout } from "../context/main-layout/context";

function SearchForm({ placeholder }) {
    const inputRef = useRef(null);
    const clearInputRef = useRef(null);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [enteredValue, setEnteredValue] = useState("");
    const { posts } = useMainLayout();

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                clearInputRef.current &&
                clearInputRef.current.contains(event.target)
            ) {
                setEnteredValue("");
            }
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setFilteredPosts([]);
            } else {
                searchHandler(event);
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
            setFilteredPosts([]);
        } else {
            setFilteredPosts(postsFilter);
        }
        setEnteredValue(searchValue);
    };

    return (
        <div id="search-form">
            <label htmlFor="search-form__input">
                <span className="search-form__input-icon">
                    <ion-icon name="search"></ion-icon>
                </span>
                {enteredValue !== "" && (
                    <span
                        className="search-form__input-clear"
                        ref={clearInputRef}
                        title="Clear input"
                    >
                        <ion-icon name="close"></ion-icon>
                    </span>
                )}
                <input
                    type="text"
                    placeholder={placeholder}
                    id="search-form__input"
                    className="search-form__input"
                    onChange={searchHandler}
                    ref={inputRef}
                    value={enteredValue}
                />
            </label>
            {filteredPosts.length !== 0 && (
                <div className="search-form__results">
                    {filteredPosts.slice(0, 15).map((post, key) => {
                        return (
                            <a
                                className="search-form__result-item"
                                key={key}
                                href={post.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span
                                    className="post-thumbnail"
                                    style={{
                                        backgroundImage: `url(${post.image})`,
                                    }}
                                ></span>
                                <h3 className="post-title">
                                    {post.headline}
                                    <ion-icon name="open-outline"></ion-icon>
                                </h3>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchForm;
