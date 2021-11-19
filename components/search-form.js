/**
 * External dependencies
 */
import classnames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

/**
 * Internal dependencies
 */
import classNames from "../styles/search.module.scss";

export default function SearchForm({ placeholder }) {
    const router = useRouter();
    const { pathname, query } = router;
    const inputRef = useRef(null);
    const clearInputRef = useRef(null);
    const [enteredValue, setEnteredValue] = useState("");
    const [inputFocus, setInputFocus] = useState(false);
    const [currentPage, setCurrentPge] = useState(1);

    useEffect(() => {
        const { page, search } = query;
        if (page > 1 && !search) {
            setCurrentPge(parseInt(page));
        }
    }, [query]);

    useEffect(() => {
        if (enteredValue !== "") {
            router.push(
                {
                    pathname,
                    query: {
                        ...query,
                        page: 1,
                        s: encodeURIComponent(enteredValue),
                    },
                },
                undefined,
                { shallow: true }
            );
        } else {
            delete query["s"];

            if (currentPage > 1) {
                query.page = currentPage;
            }

            router.replace({ pathname, query }, undefined, { shallow: true });
        }
    }, [enteredValue]);

    useEffect(() => {
        function handleEventsSearchForm(event) {
            if (
                clearInputRef.current &&
                clearInputRef.current.contains(event.target)
            ) {
                event.preventDefault();
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
        document.addEventListener("mousedown", handleEventsSearchForm);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleEventsSearchForm);
        };
    }, [enteredValue]);

    const searchHandler = (event) => {
        const searchValue = event.target.value;
        setEnteredValue(searchValue);
    };

    const clearInputHandler = (event) => {
        if (
            clearInputRef.current &&
            clearInputRef.current.contains(event.target)
        ) {
            setEnteredValue("");
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
