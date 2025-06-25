import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterPersistStore = create()(
  persist(
    (set) => ({
      count: 0,
      list: [],
      increase: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "counter-storage",
      partialize: (state) => ({
        list: state.list,
      }),
    }
  )
);

export default useCounterPersistStore;
