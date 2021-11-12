import { useRouter } from "next/router";
import classnames from "classnames";
import classNames from "../styles/navigation.module.scss";
import { useSelector } from "react-redux";

export function ActiveLink({ children, href }) {
    const router = useRouter();
    const classes = classnames({
        [classNames.active]: router.asPath === href,
    });

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick} className={classes}>
            {children}
        </a>
    );
}

export function Navigation() {
    const searchInputIsFocus = useSelector((state) => state.searchForm.focus);
    const mainNavClasses = classnames(classNames.mainNav, {
        [classNames.searchFormIsOpened]: searchInputIsFocus,
    });
    return (
        <nav className={mainNavClasses}>
            <ul>
                <li>
                    <ActiveLink href={"/"}>News</ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/bookmarks"}>Bookmarks</ActiveLink>
                </li>
            </ul>
        </nav>
    );
}
