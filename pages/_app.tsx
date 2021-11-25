import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

import store from "@Store";

function DarqubeTaskApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head></Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default DarqubeTaskApp;
