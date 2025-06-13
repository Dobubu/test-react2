import { RefStateEffect } from "./RefStateEffect";

export function CompareHook() {
  console.log("compare hook component rendered");

  return (
    <div className="flex flex-col items-start">
      <RefStateEffect></RefStateEffect>
    </div>
  );
}
