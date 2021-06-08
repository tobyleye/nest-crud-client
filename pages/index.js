import Head from "next/head";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import NewTodoForm from "../components/NewTodoForm";
import client from "../client";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loadingTodos, setLoadingTodos] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      setLoadingTodos(true);
      const { data: todos } = await client.get("/todos");
      setLoadingTodos(false);
      setTodos(todos);
    }
    fetchTodos();
  }, []);

  const makeAsComplete = async (id) => {
    const todosCopy = [...todos];

    // update ui immediately
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

    try {
      await client.post(`todos/${id}/complete`);
    } catch (err) {
      // revert back to the prev state
      setTodos(todosCopy);
    }
  };

  async function addNewTodo(todo) {
    try {
      const { data: newtodo } = await client.post("/todos", { todo });
      setTodos((todos) => todos.concat(newtodo));
    } catch (err) {
      // do some error handling here
      throw err;
    }
  }

  return (
    <main className="h-screen  w-screen grid place-items-center">
      <Head>
        <title>Todo</title>
      </Head>
      <div className="container flex flex-col shadow-sm  relative bg-yellow-100 mx-auto p-5 pb-0">
        <Header todos={todos} />
        {loadingTodos ? (
          <Spinner />
        ) : (
          <div className="overflow-auto">
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
        )}

        <NewTodoForm onSubmit={addNewTodo} />
      </div>

      <style>{`
            .container {
              max-width: 500px;
              width: 100%;
              min-height: 400px;
            }
    `}</style>
    </main>
  );
}
