import { MainLayoutContext } from "./context";
import Header from "../../components/header";
import Script from "next/script";
import { useSelector } from "react-redux";

export const MainLayoutProvider = ({ children }) => {
    const posts = useSelector((state) => state.posts.posts);

    return (
        <MainLayoutContext.Provider value={{ posts }}>
            <div className="container">
                <Header />
                {children}
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
