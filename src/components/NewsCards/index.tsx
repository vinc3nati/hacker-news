import { useDataStore } from "@/stores/dataStore";
import { useRouter } from "next/router";
import Card from "./Card";
import CardLoader from "./CardLoader";

export default function Index() {
  const { searchResult, loading } = useDataStore();
  const isResultEmpty = !loading && !searchResult.length;
  const router = useRouter();

  const navigateToDetails = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <div
      className={`w-full gap-4 mt-4  ${
        isResultEmpty
          ? "flex justify-center"
          : "grid md:grid-cols-3 grid-cols-2"
      } `}
    >
      {isResultEmpty && (
        <h1 className="w-full text-center text-xl">Try typing something 🔎</h1>
      )}
      {loading ? (
        <CardLoader numberOfCards={6} />
      ) : (
        searchResult.length > 0 &&
        searchResult.map((item: any) => (
          <Card
            key={item.objectID}
            id={item.objectID}
            title={item.title}
            created_at={item.created_at}
            author={item.author}
            onClick={navigateToDetails}
          />
        ))
      )}
    </div>
  );
}
