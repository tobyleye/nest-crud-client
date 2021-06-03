export default function Todo({ todo, onMarkAsComplete }) {
  return (
    <div>
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
    </div>
  );
}
