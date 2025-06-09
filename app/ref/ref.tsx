import { Counter } from "./counter";
import { Form } from "./dom";

export function Ref() {
  console.log("Ref component rendered");

  return (
    <div className="flex flex-col items-start">
      <Counter></Counter>
      <Form></Form>
    </div>
  );
}
