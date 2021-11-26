import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

import store from "@Store";
import Layout from "@Components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Post } from "@Models/Post";

function DarqubeTaskApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // useEffect(() => {
  //   if (router.route === "/") {
  //     router.push("news", undefined, { shallow: true });
  //   }
  // }, [router]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(process.env.API_ENDPOINT);
  //       const data: Post[] = await res.json();

  //       if (data) {
  //         setPosts(data);
  //       } else {
  //         setPosts([]);
  //       }
  //     } catch (error) {
  //       router.push("/404");
  //     }
  //   };

  //   fetchData();
  // }, []);

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default DarqubeTaskApp;
