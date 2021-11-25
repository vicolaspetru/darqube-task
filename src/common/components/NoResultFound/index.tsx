import styles from './style.module.scss';

const NoResultFound = () => {
    return (
        <div id="no-result-found" className={styles.noResultFound}>
            <span className={styles.icon}>
                <ion-icon name="search-circle-outline"></ion-icon>
            </span>
            <h2 className={styles.heading}>Sorry! No result found</h2>
            <p className={styles.description}>
                We could not find any posts to display.
            </p>
        </div>
    );
}

export default NoResultFound;
