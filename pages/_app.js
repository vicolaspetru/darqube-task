import "reset-css/reset.css";
import "normalize.css/normalize.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/index.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SkeletonLoading from "../components/skeleton-loading";

export default function DarqubeTaskApp({ Component, pageProps }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        router.events.on("routeChangeStart", () => setIsLoading(true));
        router.events.on("routeChangeComplete", () => setIsLoading(false));
    }, []); // eslint-disable-line

    return (
        <>
            {isLoading && <SkeletonLoading />}
            <Component {...pageProps} />
        </>
    );
}