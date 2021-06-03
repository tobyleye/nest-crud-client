import Head from "next/head";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";

const baseURL = "https://three-little-birds.herokuapp.com/todos/";

export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      const todos = await fetch(baseURL).then((res) => res.json());
      setTodos(todos);
    }
    fetchTodos();
  }, []);

  const makeAsComplete = async (id) => {
    await fetch(baseURL + `${id}/complete`, {
      method: "POST",
    }).then((res) => res.json());

    // update state;
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    });
  };

  const completed = todos.filter((todo) => todo.completed === true).length;

  return (
    <main className="h-screen  w-screen grid place-items-center">
      <Head>
        <title>Todo</title>
      </Head>
      <div className="container bg-yellow-100 mx-auto p-5">
        <header className="border-b border-black mb-5 flex justify-between">
          <h3 className="text-xl font-medium">Welcome to Todo</h3>
          <div>
            <span>{completed}</span> / <span>{todos.length}</span>
          </div>
        </header>
        <div>
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id} className="list-none mb-4">
                  <Todo todo={todo} onMarkAsComplete={makeAsComplete} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style>{`
            .container {
              max-width: 500px;
              width: 100%
            }
    `}</style>
    </main>
  );
}
