/**
 * External dependencies
 */
import { useRouter } from "next/router";

/**
 * Internal dependencies
 */
import { Navigation } from "./navigation";
import SearchForm from "./search-form";

function Header() {
    const { pathname } = useRouter();
    return (
        <header id="header">
            <div className="inner-wrap">
                <Navigation />
                {pathname === "/bookmarks" && (
                    <SearchForm placeholder="Search bookmarks" />
                )}
                {pathname === "/posts/source/[slug]" && (
                    <SearchForm placeholder="Search" />
                )}
                {pathname !== "/bookmarks" &&
                    pathname !== "/posts/source/[slug]" && (
                        <SearchForm placeholder="Search" />
                    )}
            </div>
        </header>
    );
}

export default Header;
