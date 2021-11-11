import { MainLayoutContext } from "./context";
import Header from "../../components/header";
import Script from "next/script";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SkeletonLoading from "../../components/skeleton-loading";

export const MainLayoutProvider = ({ children }) => {
    const router = useRouter();
    const posts = useSelector((state) => state.posts.posts);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        router.events.on("routeChangeStart", () => setIsLoading(true));
        router.events.on("routeChangeComplete", () => setIsLoading(false));

        return () => {
            setIsLoading(false);
        };
    }, []); // eslint-disable-line

    return (
        <MainLayoutContext.Provider value={{ posts }}>
            <div className="container">
                <Header />
                <div id="research-articles">
                    <div className="inner-wrap">
                        {isLoading ? <SkeletonLoading /> : children}
                    </div>
                </div>
            </div>
            <Script
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                type="module"
            />
            <Script
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                noModule
            />
        </MainLayoutContext.Provider>
    );
};
