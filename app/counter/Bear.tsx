/* 1. Store creator with createStore */
import { createStore } from "zustand";

interface BearProps {
  bears: number;
}

interface BearState extends BearProps {
  addBear: () => void;
}

type BearStore = ReturnType<typeof createBearStore>;

const createBearStore = (initProps?: Partial<BearProps>) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  };
  return createStore<BearState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addBear: () => set((state) => ({ bears: ++state.bears })),
  }));
};

/* 2. Creating a context with createContext */
import { createContext } from "react";

export const BearContext = createContext<BearStore | null>(null);

/* 3. Basic component usage */

// Provider implementation
import { useRef } from "react";

function App() {
  const store = useRef(createBearStore()).current;
  return (
    <BearContext.Provider value={store}>
      <BasicConsumer />
    </BearContext.Provider>
  );
}

// Consumer component
import { useContext } from "react";
import { useStore } from "zustand";

function BasicConsumer() {
  const store = useContext(BearContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  const bears = useStore(store, (s) => s.bears);
  const addBear = useStore(store, (s) => s.addBear);
  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  );
}

export default App;
