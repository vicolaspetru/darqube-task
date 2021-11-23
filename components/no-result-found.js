import classNames from "../styles/NoResultFound.module.scss";

export default function NoResultFound() {
    return (
        <div id="no-result-found" className={classNames["no-result-found"]}>
            <span className={classNames.icon}>
                <ion-icon name="search-circle-outline"></ion-icon>
            </span>
            <h2 className={classNames.heading}>Sorry! No result found</h2>
            <p className={classNames.description}>
                We could not find any posts to display.
            </p>
        </div>
    );
}
