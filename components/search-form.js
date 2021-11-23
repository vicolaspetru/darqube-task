/**
 * External dependencies
 */
import classnames from "classnames";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Internal dependencies
 */
import useClickOutside from "../hooks/useClickOutside";
import usePreviousValue from "../hooks/usePreviousValue";
import { clearSearch, setSearch } from "../reducers/search/actions";
import classNames from "../styles/search.module.scss";

export default function SearchForm({ placeholder }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const { query, pathname } = router;
    const { page } = query;
    const clearInputRef = useRef(null);

    const [inputFocus, setInputFocus] = useState(false);
    const [previousCurrentPage, setPreviousCurrentPage] = useState(page);

    const searchValue = useSelector((state) => state.search.value);

    const { ref: inputRef } = useClickOutside(() => setInputFocus(false));
    const previousPage = usePreviousValue(page);

    useEffect(() => {
        const handleRouteChange = () => {
            setPreviousCurrentPage(previousPage);
        };

        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [previousPage]);

    useEffect(() => {
        function replacePageURL(page) {
            router.replace(
                {
                    pathname,
                    query: {
                        ...query,
                        page,
                    },
                },
                undefined,
                { shallow: true }
            );
        }

        // Set current page to '1' when we search
        if (page && page > 1) {
            if (searchValue !== "") {
                replacePageURL(1);
            }
        }

        if (
            searchValue === "" &&
            previousCurrentPage &&
            previousCurrentPage !== page
        ) {
            replacePageURL(previousCurrentPage);
        }
    }, [searchValue]);

    const searchHandler = (event) => {
        dispatch(setSearch(event.target.value));
    };

    const clearInputHandler = useCallback((event) => {
        event.preventDefault();
        if (
            clearInputRef.current &&
            clearInputRef.current.contains(event.target)
        ) {
            dispatch(clearSearch());
            setInputFocus(false);
        }
    }, []);

    const focusInput = useCallback(() => {
        if (inputRef.current && !inputFocus) {
            setInputFocus(true);
            inputRef.current.focus();
        }
    }, [inputRef, inputFocus]);

    const unfocusInput = useCallback(() => {
        if (inputRef.current && inputFocus) {
            setInputFocus(false);
        }
    }, [inputRef, inputFocus]);

    const searchFormClasses = classnames(classNames.searchForm, {
        [classNames.searchFormIsOpened]: inputFocus,
    });

    return (
        <div id="search-form" className={searchFormClasses}>
            <label htmlFor="search-form__input">
                <span className={classNames.inputIcon} onClick={unfocusInput}>
                    <ion-icon name="search"></ion-icon>
                </span>
                <button className={classNames.inputIcon} onClick={focusInput}>
                    <ion-icon name="search"></ion-icon>
                </button>
                {searchValue !== "" && (
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
                    onClick={focusInput}
                    ref={inputRef}
                    value={searchValue}
                />
            </label>
        </div>
    );
}
