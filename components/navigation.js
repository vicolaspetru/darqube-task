import { useRouter } from "next/router";
import classnames from "classnames";
import classNames from "../styles/navigation.module.scss";
import { useState } from "react";

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
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const navmenu = (
        <nav className={classNames.navMenu}>
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

    const hamburgerButtonClasses = classnames(classNames.hamburgerButton, {
        [classNames.openNavMenu]: hamburgerOpen,
    });

    return (
        <>
            <div className={classNames.mobileNav}>
                <button
                    className={hamburgerButtonClasses}
                    onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {hamburgerOpen && navmenu}
            </div>
            <div className={classNames.mainNav}>{navmenu}</div>
        </>
    );
}
