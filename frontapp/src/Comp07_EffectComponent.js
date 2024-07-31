import { useEffect, useState } from "react";

function Todo({ todos }) {
  let todoList = todos.map((todo) => <div key={todo.id}>{todo.title}</div>);
  return <>{todoList}</>;
}

export default function EffectComponent() {
  let [count, setCount] = useState(1);
  let [todos, setTodos] = useState([]); //1건 받아올거라서 빈객체 넣어주면 됨.
  function callApi() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json); //state를 변경하면 리랜더링이 되기때문에 useEffect가 없으면 무한반복
      });
  }

  useEffect(() => {
    //랜더링 끝나고 나서 한번만 실행하기 위해서 . useEffect가 없으면 callApi가 계속 실행된다.
    console.log("effect");
    //callApi();

    return () => {
      console.log("clean up");
    };
  }, [count]); //뒤에 비어있으면 반복안된다. [] 업데이트  되고 나서 한번만 실행된다.

  return (
    <>
      <h1>side effet(부수효과)</h1>
      <div>{count}</div>
      <div>
        <Todo todos={todos} />
      </div>
    </>
  );
}
