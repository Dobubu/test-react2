import { useMemo } from "react";
import { filterTodos } from "./utils.js";

export default function TodoList({ todos, theme, tab }) {
  console.log("TodoList component rendered");

  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>List</code> is artificially slowed down!
        </b>
      </p>
      <p className="bg-blue-300">total: {visibleTodos.length}</p>
      <ul className="max-h-[500px] overflow-scroll">
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
