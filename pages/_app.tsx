import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

import store from "@Store";

function DarqubeTaskApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Darqube Task</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default DarqubeTaskApp;
