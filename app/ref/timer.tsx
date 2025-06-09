import { useRef, useEffect } from "react";

export function Timer() {
  console.log("Timer component rendered");

  const countRef = useRef(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      countRef.current += 1;
      console.log("目前秒數:", countRef.current);
    }, 2000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  return <div>請打開 console 看秒數</div>;
}
