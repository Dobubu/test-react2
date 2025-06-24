import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useUserStore = create(
  immer((set) => ({
    user: {
      name: "Mike",
      todos: [
        { id: 1, text: "Buy milk", done: false },
        { id: 2, text: "Read book", done: false },
      ],
    },
    toggleTodo: (id) =>
      set((state) => {
        const todo = state.user.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.done = !todo.done;
        }
      }),
    addTodo: (text) =>
      set((state) => {
        state.user.todos.push({
          id: Date.now(),
          text,
          done: false,
        });
      }),
  }))
);

export default useUserStore;
