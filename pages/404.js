import Link from "next/link";
import { MainLayoutProvider } from "../context/main-layout";
import classNames from "../styles/error.module.scss";

export default function Error() {
    return (
        <MainLayoutProvider>
            <div id="page-404" className={classNames["page-404"]}>
                <h1 className={classNames["page-title"]}>404</h1>
                <p className={classNames["page-description"]}>
                    Page not found!
                </p>
                <Link href={"/"}>
                    <a className={classNames["page-button"]}>Go to home page</a>
                </Link>
            </div>
        </MainLayoutProvider>
    );
}
