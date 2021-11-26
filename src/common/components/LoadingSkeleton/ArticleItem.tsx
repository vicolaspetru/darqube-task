import classes from "classnames";
import styles from "./style.module.scss";

const ArticleItemSkeleton = () => {
  return (
    <article className={classes("research__related-label", styles.articleItemSkeleton)}>
      <span className={classes("research__related-label", styles.relatedLabel)}></span>
      <h2 className={classes("article__title", styles.title)}></h2>
      <p className={classes("article__summary", styles.summary)}></p>
      <footer className="article__footer">
        <time dateTime="0000-00-00 00:00" className={styles.date}></time>
      </footer>
    </article>
  );
};

export default ArticleItemSkeleton;
