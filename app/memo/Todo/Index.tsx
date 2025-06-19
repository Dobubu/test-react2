import { useState } from "react";

import { createTodos } from "./utils.js";
import TodoList from "./TodoList";

const todos = createTodos();

export default function Index() {
  console.log("Index component rendered ---");

  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className="flex gap-4">
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("active")}>Active</button>
        <button onClick={() => setTab("completed")}>Completed</button>
      </div>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
    </>
  );
}
