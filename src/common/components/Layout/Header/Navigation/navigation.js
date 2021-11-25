/**
 * External dependencies
 */
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

/**
 * Internal dependencies
 */
import classNames from "../styles/navigation.module.scss";

export function ActiveLink({ children, href }) {
    const { pathname } = useRouter();
    const classes = classnames({
        [classNames.active]: pathname === href,
    });

    return (
        <Link href={href}>
            <a className={classes}>{children}</a>
        </Link>
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
