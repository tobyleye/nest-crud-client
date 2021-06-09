import Trash from "./Trash";

export default function Todo({ todo, onMarkAsComplete, onDelete }) {
  return (
    <div className="todo-item flex items-start w-full">
      <label className="flex items-center">
        <input
          disabled={todo.completed}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onMarkAsComplete(todo.id)}
        />
        <p className={"ml-2 " + (todo.completed ? "line-through" : "")}>
          {todo.todo}
        </p>
      </label>

      {todo.completed && (
        <button
          onClick={() => onDelete(todo.id)}
          className="trash cursor-pointer  hidden ml-2"
        >
          <Trash />
        </button>
      )}

      <style>{`
        .todo-item:hover .trash {
            display: block;
        }
      `}</style>
    </div>
  );
}
