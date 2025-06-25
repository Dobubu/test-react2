import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import useBearsStore from "../store/useBearsStore";
import useCounterStore from "../store/useCounterStore";
import useCounterPersistStore from "../store/useCounterPersistStore";
import useCounterSubscribeStore from "../store/useCounterSubscribeStore";

import Todo from "./Todo";

function BearCounter() {
  console.log("BearCounter component");

  const { bears } = useBearsStore();

  return <h1>{bears} bears around here...</h1>;
}

function BearControls() {
  console.log("BearControls component");

  const { increasePopulation } = useBearsStore();

  return <button onClick={increasePopulation}>one up</button>;
}

function DefaultCount() {
  console.log("DefaultCount component");

  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <div className="border border-green-300 p-4 mb-4">
      <h2>Count:</h2>
      <h1>{count}</h1>
      <button onClick={increase} className="bg-red-300">
        增加
      </button>
      <button onClick={decrease} className="bg-blue-300">
        減少
      </button>
    </div>
  );
}

function DefaultCount2() {
  console.log("DefaultCount2 component");

  const { increase2 } = useCounterStore();

  return (
    <button onClick={increase2} className="bg-yellow-500">
      增加2
    </button>
  );
}

function DefaultCount3() {
  console.log("DefaultCount3 component");

  const { increase3 } = useCounterStore(
    useShallow((store) => ({ increase3: store.increase3 }))
  );

  return (
    <button onClick={increase3} className="bg-purple-400">
      增加3
    </button>
  );
}

function PersistCount() {
  console.log("PersistCount component");

  const { increase, count } = useCounterPersistStore(
    useShallow((store) => ({ increase: store.increase, count: store.count }))
  );

  return (
    <button onClick={increase} className="bg-purple-400">
      增加 persist, {count}
    </button>
  );
}

function SubscribeCount() {
  console.log("SubscribeCount component");

  const { increase, count } = useCounterSubscribeStore(
    useShallow((store) => ({ increase: store.increase, count: store.count }))
  );

  // 使用 useEffect 確保訂閱只註冊一次
  useEffect(() => {
    const unsubscribe = useCounterSubscribeStore.subscribe(
      (state) => state.count,
      (count, prevCount) => {
        console.log("SubscribeCount count changed:", prevCount, "->", count);
      }
    );

    // 組件卸載時取消訂閱
    return () => {
      unsubscribe();
    };
  }, []); // 空依賴數組確保只執行一次

  return (
    <button onClick={increase} className="bg-purple-400">
      增加 Subscribe, {count}
    </button>
  );
}

export function Counter() {
  console.log("Counter component rendered ----");

  return (
    <div className="flex flex-col gap-4">
      <div className="border border-red-300 p-4">
        <DefaultCount />
        <DefaultCount2 />
        <DefaultCount3 />
      </div>

      <div className="border border-blue-300 p-4">
        <h2>Bears:</h2>
        <BearCounter />
        <BearControls />
      </div>

      <div className="border border-green-300 p-4">
        <h2>Todo:</h2>
        <Todo />
      </div>

      <div className="border border-yellow-300 p-4">
        <h2>counter persist store:</h2>
        <PersistCount />
      </div>

      <div className="border border-purple-300 p-4">
        <h2>counter subscribe store:</h2>
        <SubscribeCount />
      </div>
    </div>
  );
}
