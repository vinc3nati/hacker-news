import NewsCards from "@/components/NewsCards";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="w-full">
      <SearchBar />
      <NewsCards />
    </main>
  );
}
