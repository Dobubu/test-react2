import { useState } from "react";

export function State() {
  console.log("State component rendered");

  const [count, setCount] = useState(0);

  function handleClickCorrect() {
    setCount(count + 1);
  }

  const [incrementCount, setIncrementCount] = useState(0);

  function incrementCorrect() {
    setIncrementCount((prev) => prev + 1);
    setIncrementCount((prev) => prev + 1); // 會累加兩次，最終 +2
  }

  const [text, setText] = useState("");

  function handleInputCorrect(e) {
    const newValue = e.target.value;
    setText(newValue);
    console.log(newValue, text); // 直接印出新的值就好
  }

  const [user, setUser] = useState({ name: "Eugene", age: 25 });

  function updateCorrect() {
    setUser({ ...user, age: 26 });
  }

  return (
    <main className="flex items-center justify-center flex-col pt-16 pb-4 bg-blue-300">
      <button onClick={handleClickCorrect}>You pressed me {count} times</button>
      <button onClick={() => setCount(count + 1)}>
        You pressed me {count} times
      </button>
      <br />
      <button onClick={incrementCorrect}>
        You pressed me {incrementCount} times（increment）
      </button>
      <br />
      <div className="flex">
        {/* <input
          className="border rounded mr-1"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <p>input value：{text}</p> */}
        <input
          className="border rounded mr-1"
          value={text}
          onChange={(e) => {
            handleInputCorrect(e);
          }}
        />
      </div>
      <br />
      <button onClick={updateCorrect}>
        user: {user.name}, age: {user.age}
      </button>
    </main>
  );
}
