import { useState } from "react";
import { useMainLayout } from "../context/main-layout/context";

function SearchForm({ placeholder }) {
    const [filteredPosts, setFilteredPosts] = useState([]);
    const { posts } = useMainLayout();

    const searchHandler = (event) => {
        const searchKeyword = event.target.value;
        const postsFilter = posts.filter((post) => {
            if (
                post.headline
                    .toLowerCase()
                    .includes(searchKeyword.toLowerCase()) ||
                post.summary.toLowerCase().includes(searchKeyword.toLowerCase())
            ) {
                return post;
            }
        });
        if (searchKeyword === "") {
            setFilteredPosts([]);
        } else {
            setFilteredPosts(postsFilter);
        }
    };
    return (
        <div id="search-form">
            <label htmlFor="search-form__input">
                <span className="search-form__input-icon"></span>
                <input
                    type="text"
                    placeholder={placeholder}
                    id="search-form__input"
                    className="search-form__input"
                    onChange={searchHandler}
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
                                <span className="post-thumbnail" style={{backgroundImage: `url(${post.image})`}}></span>
                                <h3 className="post-title">{post.headline}</h3>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchForm;
