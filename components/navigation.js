import { useRouter } from "next/router";
import classnames from "classnames";

export function ActiveLink({ children, href }) {
    const router = useRouter();
    const classes = classnames({
        active: router.asPath === href,
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
    return (
        <nav>
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
