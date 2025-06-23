import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCounterStore = create(
  devtools(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      count2: 0,
      increase2: () => set((state) => ({ count2: state.count2 + 1 })),
      decrease2: () => set((state) => ({ count2: state.count2 - 1 })),
      count3: 0,
      increase3: () => set((state) => ({ count3: state.count3 + 1 })),
      decrease3: () => set((state) => ({ count3: state.count3 - 1 })),
    }),
    {
      name: "Counter Store",
    }
  )
);

export default useCounterStore;
