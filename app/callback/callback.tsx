import { useState, memo, useCallback } from "react";

export function Callback() {
  console.log("Callback component rendered ----");

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked!");
  };

  const handleClickMemoized = useCallback(() => {
    console.log("Clicked memoized!");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)} className="bg-red-300">
        Increment
      </button>
      <div className="mt-4 flex gap-4">
        <Child onClick={handleClick} />
        <ChildCallback onClick={handleClickMemoized} />
      </div>
    </>
  );
}

const Child = memo(({ onClick }) => {
  console.log("Child rendered");

  return (
    <button onClick={onClick} className="bg-blue-300">
      Child Button
    </button>
  );
});

const ChildCallback = memo(({ onClick }) => {
  console.log("ChildCallback rendered");

  return (
    <button onClick={onClick} className="bg-pink-300">
      ChildCallback Button
    </button>
  );
});
