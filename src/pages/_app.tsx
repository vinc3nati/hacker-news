import ProgressBar from "@/components/ProgressBar";
import "@/styles/globals.css";
import { NEXT_SEO_DEFAULT } from "@/utils/next-seo-config";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "nprogress/nprogress.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const updateSeoConfig = {
    ...NEXT_SEO_DEFAULT,
    twitter: {
      handle: "@vinc3nati",
      cardType: "summary_large_image",
    },
  };
  return (
    <>
      <DefaultSeo {...updateSeoConfig} />
      <ProgressBar />
      <section
        className={`flex min-h-screen flex-col items-center gap-4 md:p-24 md:pt-5 p-6 w-full ${inter.className}`}
      >
        <Component {...pageProps} />
      </section>
    </>
  );
}
