import { useDebounce } from "@/hooks/useDebounce";
import { useDataStore } from "@/stores/dataStore";
import { API_URL } from "@/utils/constants";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

export default function Index() {
  const [inputText, setInputText] = useState("");
  const { setSearchResult, setLoading } = useDataStore();

  const router = useRouter();

  const fetchData = async (text: string) => {
    try {
      setLoading(true);
      // In case input string is cleared
      if (!text.length) {
        setSearchResult([]);
        setLoading(false);
        // shallow routing
        router.push(
          {
            pathname: "/",
          },
          undefined,
          { shallow: true }
        );
        return;
      }
      // shallow routing
      router.push(
        {
          pathname: "/",
          query: { search: text },
        },
        undefined,
        { shallow: true }
      );
      const res = await fetch(`${API_URL}/search?query=${text}`);
      const data = await res.json();
      if (data && data.hits) {
        setSearchResult(data.hits);
      }
      setLoading(false);
    } catch (err) {
      console.error("Data Error >>>>>>>>>>>>");
      setLoading(false);
    }
  };

  const debouncedSetSearchQuery = useDebounce(fetchData, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setInputText(value);
    debouncedSetSearchQuery(value);
  };

  useEffect(() => {
    if (router.query.search) setInputText(() => router.query.search as string);
  }, []);

  return (
    <div className="w-full">
      <input
        type="text"
        className="px-3 py-2 focus:outline-none w-full  rounded shadow-sm border border-blue-200"
        placeholder="Search here"
        value={inputText}
        autoFocus
        onChange={handleInputChange}
      />
    </div>
  );
}
