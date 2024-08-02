import { useEffect, useState } from "react";

export default function Page() {
  const [todo, setTodo] = useState([]);
  console.log(process.env.NEXT_PUBLIC_TODO_URL);
  function callApi() {
    fetch(process.env.NEXT_PUBLIC_TODO_URL)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        setTodo(result);
      });
  }
  useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      {todo.map((ele) => (
        <div key={ele.id}>{ele.title}</div>
      ))}

      <div>fetch</div>
    </>
  );
}
