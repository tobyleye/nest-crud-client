export default function Header({ todos }) {
  const completed = todos.filter((todo) => todo.completed === true).length;

  return (
    <header className="border-b border-black mb-5 flex justify-between">
      <h3 className="text-xl font-medium">Todo</h3>
      <div>
        <span>{completed}</span> / <span>{todos.length}</span>
      </div>
    </header>
  );
}
