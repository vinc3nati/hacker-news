import { RenderComment } from "@/components/Comments/RenderComments";
import { API_URL } from "@/utils/constants";
import { NEXT_SEO_DEFAULT } from "@/utils/next-seo-config";
import { THNData } from "@/utils/types";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`${API_URL}/items/${query.id}`);
  const data: THNData = await res.json();

  return {
    props: {
      data,
      id: query.id,
    },
  };
};

export default function Index({ data, id }: { data: THNData; id: string }) {
  const updateSeoConfig = {
    ...NEXT_SEO_DEFAULT,
    title: `${data.title}`,
    description: `${data.author}'s article`,
    canonical: `https://hackernews.vercel.app/${id}`,
    openGraph: {
      type: "article",
      article: {
        publishedTime: `${data.created_at}`,
        authors: [data.author],
      },
      url: `${data.url}`,
      images: {
        url: `${data.url}`,
        width: 850,
        height: 650,
        alt: "Photo of Author",
      },
      site_name: "Hacker News Article",
    },
  };
  return (
    <>
      {/* @ts-ignore */}
      <NextSeo {...updateSeoConfig} />

      <main className="mx-auto w-full">
        <header className="flex flex-col gap-1">
          <h1 className="font-bold text-xl overflow-hidden">{data.title}</h1>
          <h2 className="text-md italic flex gap-1">
            {data.author}
            <span>({data.points} points)</span>
          </h2>
        </header>
        <div className="pb-4 mt-4 border-t border-t-gray-400">
          <h3 className="font-semibold text-lg pt-2">Comments</h3>
          <div>
            {data.children.map((comment) => (
              <RenderComment key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
