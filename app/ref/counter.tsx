import { useRef } from "react";

export function Counter() {
  console.log("Counter component rendered");

  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    // alert("You clicked " + ref.current + " times!");
    console.log(ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me!, {ref.current}</button>;
}
