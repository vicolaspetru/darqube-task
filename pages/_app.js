import "reset-css/reset.css";
import "normalize.css/normalize.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../reducers";

function DarqubeTaskApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default DarqubeTaskApp;
