import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";

const useCounterStore = create(
  devtools(
    combine(
      {
        count: 0,
        count2: 0,
        count3: 0,
      },
      (set) => ({
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
        increase2: () => set((state) => ({ count2: state.count2 + 1 })),
        decrease2: () => set((state) => ({ count2: state.count2 - 1 })),
        increase3: () => set((state) => ({ count3: state.count3 + 1 })),
        decrease3: () => set((state) => ({ count3: state.count3 - 1 })),
      })
    ),
    {
      name: "Counter Store",
    }
  )
);

export default useCounterStore;
