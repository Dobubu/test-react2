import useUserStore from "../store/useUserStore";

export default function Todo() {
  const todos = useUserStore((state) => state.user.todos);
  const addTodo = useUserStore((state) => state.addTodo);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => useUserStore.getState().toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const text = prompt("Enter new todo:");
          if (text) {
            addTodo(text);
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
