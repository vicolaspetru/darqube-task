import { useRouter } from "next/router";
import classnames from "classnames";
import classNames from "../styles/navigation.module.scss";
import { useState } from "react";
import Link from "next/link";

export function ActiveLink({ children, href }) {
    const router = useRouter();
    const classes = classnames({
        [classNames.active]: router.asPath === href,
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
