import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

function Index() {
  NProgress.configure({ showSpinner: false });
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);
  return <></>;
}

export default Index;
