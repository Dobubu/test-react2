import Index from "./Todo/index";
import LoopWithMemo from "./Loop";

export function Memo() {
  console.log("Memo component rendered ---");

  return (
    <>
      <Index />
      <br />
      <LoopWithMemo />
    </>
  );
}
