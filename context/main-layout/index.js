import { useReducer } from "react";
import { MainLayoutContext } from "./context";
import { reducer } from "./reducer";
import Header from "../../components/header";
import Script from "next/script";

export const MainLayoutProvider = ({ children, posts }) => {
    const [state, dispatch] = useReducer(reducer, {
        posts: posts || [],
    });

    return (
        <MainLayoutContext.Provider value={{ posts: state.posts }}>
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
