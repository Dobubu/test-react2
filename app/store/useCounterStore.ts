import { create } from "zustand";
import { combine } from "zustand/middleware";

import { myMiddlewares } from "./myMiddlewares";

const useCounterStore = create(
  myMiddlewares(
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
    "Counter Store"
  )
);

export default useCounterStore;
