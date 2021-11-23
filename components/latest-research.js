/**
 * Internal dependencies
 */
import ArticleItem from "./article-item";

function LatestResearch({ posts }) {
    return (
        <aside id="latest-research">
            {posts.map((post) => (
                <ArticleItem key={post.id} article={post} />
            ))}
        </aside>
    );
}

export default LatestResearch;
