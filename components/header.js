import { Navigation } from "./navigation";
import SearchForm from "./search-form";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import classnames from "classnames";
import classNames from "../styles/search.module.scss";

function Header() {
    const router = useRouter();
    const { asPath, route } = router;
    const latestPosts = useSelector((state) => state.posts.latestPosts);
    const bookmarksPosts = useSelector((state) => state.bookmarks.posts);
    const sourcePosts = useSelector((state) => state.postsSource.posts);
    const searchInputIsFocus = useSelector((state) => state.searchForm.focus);

    const headerClasses = classnames({
        [classNames.searchFormIsOpened]: searchInputIsFocus,
    });

    return (
        <header id="header" className={headerClasses}>
            <div className="inner-wrap">
                <Navigation />
                {asPath === "/bookmarks" && (
                    <SearchForm
                        placeholder="Search bookmarks"
                        searchFrom={bookmarksPosts}
                    />
                )}
                {route === "/posts/source/[slug]" && (
                    <SearchForm placeholder="Search" searchFrom={sourcePosts} />
                )}
                {asPath !== "/bookmarks" &&
                    route !== "/posts/source/[slug]" && (
                        <SearchForm
                            placeholder="Search"
                            searchFrom={latestPosts}
                        />
                    )}
            </div>
        </header>
    );
}

export default Header;
