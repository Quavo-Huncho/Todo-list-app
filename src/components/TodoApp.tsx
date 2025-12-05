import { useState } from "react";
import TodoList from "./TodoList";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function TodoApp() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="bg-green-800 min-h-screen flex justify-center items-center">
      <div className="max-w-[1000px] w-[1000px] bg-white p-4 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center">My Todo App</h2>

        <div className="flex gap-2 items-center justify-center mt-5">
          <input
            type="text"
            placeholder="Add a task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-3 w-full p-3 rounded-md border-2 border-emerald-500"
          />

          <button
            onClick={handleAddTodo}
            className="flex-1 bg-green-800 text-white p-3 rounded-md hover:bg-green-900 transition"
          >
            Add Task
          </button>
        </div>

        <h1 className="text-center text-xl font-bold mt-4">Todos</h1>

        {todos.map(todo => (
          <TodoList
            key={todo.id}
            todo={todo}
            toggleComplete={() => toggleComplete(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
