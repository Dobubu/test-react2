import { useEffect, useState } from "react";

export function ClearEffect() {
  console.log("ClearEffect component rendered");

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect: 開始一個計時器");

    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 2000);

    return () => {
      console.log("Cleanup: 清除計時器");
      clearInterval(timer);
    };
  }, []);

  return <div>計時中：{count}</div>;
}
