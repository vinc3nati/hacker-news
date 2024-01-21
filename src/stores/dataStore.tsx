import { create } from "zustand";

type TData = {
  searchResult: any;
  loading: boolean;
  setSearchResult: (arg: any) => void;
  setLoading: (val: boolean) => void;
};

export const useDataStore = create<TData>((set) => ({
  searchResult: [],
  setSearchResult: (val: any) => set(() => ({ searchResult: val })),
  loading: false,
  setLoading: (val: boolean) =>
    set(() => ({
      loading: val,
    })),
}));
