import { useRef, useEffect } from "react";

export function Form() {
  console.log("Form component rendered");

  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  const myInputRef = useRef(null);

  function handleClickWithMyInput() {
    myInputRef.current.focus();
  }

  return (
    <>
      <div className="bg-blue-300 flex flex-col items-start">
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus the input</button>
      </div>

      <MyInput ref={myInputRef} />
      <button onClick={handleClickWithMyInput}>Focus the my input</button>

      <div className="bg-blue-300">
        <p>頁面載入後自動 focus 的輸入框</p>
        <FocusInput />
      </div>
    </>
  );
}

function MyInput({ ref }) {
  console.log("MyInput component rendered");

  return <input ref={ref} />;
}

function FocusInput() {
  console.log("FocusInput component rendered");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); // 頁面載入後自動 focus
  }, []);

  return <input ref={inputRef} placeholder="輸入文字…" />;
}
