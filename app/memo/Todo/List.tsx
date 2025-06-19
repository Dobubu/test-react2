import { memo } from "react";

/* 有使用 memo */
const List = memo(function List({ items }) {
  console.log("List component rendered（use memo）", items.length);

  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return (
    <ul className="max-h-[500px] overflow-scroll">
      {items.map((item) => (
        <li key={item.id}>{item.completed ? <s>{item.text}</s> : item.text}</li>
      ))}
    </ul>
  );
});

export default List;

/* 一般 function component */
// export default function List({ items }) {
//   console.log("List component rendered（function component）", items.length);

//   let startTime = performance.now();
//   while (performance.now() - startTime < 500) {
//     // Do nothing for 500 ms to emulate extremely slow code
//   }

//   return (
//     <ul className="max-h-[500px] overflow-scroll">
//       {items.map((item) => (
//         <li key={item.id}>{item.completed ? <s>{item.text}</s> : item.text}</li>
//       ))}
//     </ul>
//   );
// }
