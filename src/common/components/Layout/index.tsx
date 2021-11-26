import Script from "next/script";
import Header from "./Header";
import { LayoutWrap } from "@Models/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout = ({ children }: LayoutWrap) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <div className="container">
        <Header />
        <div id="research-articles">
          {/* <div className="inner-wrap">{isLoading ? <SkeletonLoading /> : children}</div> */}
          {children}
        </div>
      </div>
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" type="module" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" noModule />
    </>
  );
};

export default Layout;
