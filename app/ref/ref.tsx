import { Counter } from "./counter";
import { Form } from "./dom";
import { Timer } from "./timer";

export function Ref() {
  console.log("Ref component rendered");

  return (
    <div className="flex flex-col items-start">
      <Counter></Counter>
      <Form></Form>
      <Timer></Timer>
    </div>
  );
}
