import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const useCounterSubscribeStore = create()(
  subscribeWithSelector((set) => ({
    count: 0,
    list: [],
    increase: () => set((state) => ({ count: state.count + 1 })),
  }))
);

export default useCounterSubscribeStore;
