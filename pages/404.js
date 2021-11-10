import Link from "next/link";
import { MainLayout } from "../components/main-layout";
import classNames from "../styles/error.module.scss";

export default function Error() {
    return (
        <MainLayout>
            <div id="page-404">
                <div className={`inner-wrap ${classNames["inner-wrap"]}`}>
                    <h1 className={classNames["page-title"]}>404</h1>
                    <p className={classNames["page-description"]}>
                        Page not found!
                    </p>
                    <Link href={"/"}>
                        <a className={classNames["page-button"]}>
                            Go to home page
                        </a>
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
}