import LatestResearch from "@Components/LatestResearch";
import styles from "./style.module.scss";

const LeftSidebar = () => {
  return (
    <aside className={styles.leftSidebar}>
      <LatestResearch />
    </aside>
  );
};

export default LeftSidebar;

// function LatestResearch({ posts }) {
//   return (
//       <aside id="latest-research">
//           {posts.map((post) => (
//               <ArticleItem key={post.id} article={post} />
//           ))}
//       </aside>
//   );
// }

// export default LatestResearch;
