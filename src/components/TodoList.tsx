import { FaCircleCheck, FaTrash } from "react-icons/fa6";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todo: Todo;
  toggleComplete: () => void;
  deleteTodo: () => void;
};

function TodoList({ todo, toggleComplete, deleteTodo }: TodoListProps) {
  return (
    <div className="bg-green-800 p-2 rounded-md text-white flex justify-between items-center my-4">
      <p className={todo.completed ? "line-through text-green-300" : ""}>
        {todo.text}
      </p>


      <div className="flex items-center gap-4">
        <FaCircleCheck
          onClick={toggleComplete}
          className="cursor-pointer hover:text-green-300"
        />
        <FaTrash
          onClick={deleteTodo}
          className="cursor-pointer hover:text-red-600"
        />
      </div>
    </div>
  );
}

export default TodoList;
