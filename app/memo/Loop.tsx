import { useState, useMemo } from "react";

export default function LoopWithMemo() {
  console.log("LoopWithMemo component rendered ---");

  const [num, setNum] = useState(100);
  const [count, setCount] = useState(0);

  const array = useMemo(() => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  }, [num]);

  const sum = useMemo(() => {
    console.log("Recalculating sum...");

    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i] * array[i];
    }
    return total;
  }, [array]);

  return (
    <div>
      <h1>useMemo + for loop 範例</h1>
      <p>陣列長度：{num}</p>
      <p>平方總和：{sum}</p>
      <button onClick={() => setNum(num + 10)} className="bg-red-300">
        增加陣列長度
      </button>
      <button onClick={() => setCount(count + 1)}>其他狀態：{count}</button>
    </div>
  );
}
