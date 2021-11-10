import ArticleItem from "./article-item";

function LatestResearch({ latestPost }) {
    return (
        <aside id="latest-research">
            {latestPost.map((post) => (
                <ArticleItem
                    key={post.id}
                    article={post}
                    isLatestResearch={true}
                />
            ))}
        </aside>
    );
}

export default LatestResearch;
