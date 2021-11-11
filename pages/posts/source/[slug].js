import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleItem from "../../../components/article-item";
import Pagination from "../../../components/pagination";
import { MainLayoutProvider } from "../../../context/main-layout";
import { setCurrentPage } from "../../../reducers/pagination/actions";
import { filterPostsBySource } from "../../../reducers/posts/source/actions";
import { toPascalCase } from "../../../utils/helpers";

export default function PostsSource() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug } = router.query;
    const posts = useSelector((state) => state.posts.posts);
    const postsSource = useSelector((state) => state.postsSource.posts);
    const currentPagePosts = useSelector(
        (state) => state.pagination.currentPagePosts
    );

    useEffect(() => {
        dispatch(filterPostsBySource(posts, slug));
    }, [posts, slug]);

    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, []);

    return (
        <>
            <MainLayoutProvider>
                <div className="content-wrapper">
                    <h1>Source category: {slug && toPascalCase(slug)}</h1>
                    <div id="latest-news">
                        {currentPagePosts.map((post) => (
                            <ArticleItem key={post.id} article={post} />
                        ))}
                    </div>
                    <Pagination posts={postsSource} />
                </div>
            </MainLayoutProvider>
        </>
    );
}
