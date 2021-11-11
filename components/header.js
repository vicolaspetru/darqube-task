import { Navigation } from "./navigation";
import SearchForm from "./search-form";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Header() {
    const router = useRouter();
    const { asPath, route } = router;
    const latestPosts = useSelector((state) => state.posts.latestPosts);
    const bookmarksPosts = useSelector((state) => state.bookmarks.posts);
    const sourcePosts = useSelector((state) => state.postsSource.posts);

    return (
        <header id="header">
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
