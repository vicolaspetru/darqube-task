import { useReducer } from "react";
import { MainLayoutContext } from "./context";
import { reducer } from "./reducer";
import Header from "../../components/header";

export const MainLayoutProvider = ({ children, posts }) => {
    const [state, dispatch] = useReducer(reducer, {
        posts: posts || [],
    });

    return (
        <MainLayoutContext.Provider value={{posts: state.posts}}>
            <div className="container">
                <Header />
                {children}
            </div>
        </MainLayoutContext.Provider>
    );
};
