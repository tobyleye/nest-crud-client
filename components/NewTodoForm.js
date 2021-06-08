import { useState } from "react";

function NewTodoForm({ onSubmit }) {
  const [todo, setTodo] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit(todo).then(() => {
      // clear
      setTodo("");
    });
  };

  return (
    <form
      onSubmit={submit}
      className="mt-auto py-4   px-5 right-0 mx-2 bg-white  rounded-t-md"
    >
      <div className="flex items-end  w-full">
        <div className="flex-1 mr-2 relative ">
          <input
            id="todo"
            type="text"
            value={todo}
            className="border-b border-gray-200 w-full focus:outline-none focus:border-yellow-300"
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Todo..."
          />
          {/* <div className="input-border" /> */}
          {/* <label
            htmlFor="todo"
            className="absolute bottom-0 left-0 text-lg  font-normal text-gray-400"
          >
            Todo
          </label> */}
        </div>
        <button className="bg-yellow-300  flex-shrink-0 text-gray-700 px-4 py-2 rounded-sm ">
          Submit
        </button>
      </div>
      <style>{`
      label {
        transition: .25s ease;
      }
        input:focus ~ label {
            bottom: 100%;
            font-size: 14px;
        }
      `}</style>
    </form>
  );
}

export default NewTodoForm;
