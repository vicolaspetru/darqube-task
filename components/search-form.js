function SearchForm() {
    return (
        <div id="search-form">
            <label htmlFor="search-form__input">
                <span className="search-form__input-icon"></span>
                <input
                    type="text"
                    placeholder="Search"
                    id="search-form__input"
                    className="search-form__input"
                />
            </label>
        </div>
    );
}

export default SearchForm;
