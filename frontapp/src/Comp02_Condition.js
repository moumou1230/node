import { useContext } from "react";
import { LoginContext } from "./context"; //default 없이 내보내서 중괄호 안에 넣어서 불러야된다.

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name}
      {isPacked && "✔"}
    </li>
  );
}

function Items({ todos }) {
  let login = useContext(LoginContext);
  const item = todos.map((todo, idx) => (
    //<Item name={todo.name} isPacked={todo.isPacked} />
    <Item key={idx} {...todo} />
  ));
  return (
    <>
      {" "}
      {login.userid}
      {item}{" "}
    </>
  );
}

export default function PackingList() {
  let login = useContext(LoginContext);
  let todos = [
    { name: "Space suit", isPacked: true },
    { name: "Helmet with a golden leaf", isPacked: true },
    { name: "Photo of Tam", isPacked: false },
  ];
  let replyList = [
    { id: 1, title: "첫번째 글", writer: "홍길동" },
    { id: 2, title: "두번째 글", writer: "동길홍" },
    { id: 3, title: "세번째 글", writer: "길동" },
  ];
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <h1>로그인 : {login.userid}</h1>
      <LoginContext.Provider value={{ userid: "김유신" }}>
        <ul>
          <Items todos={todos} />
        </ul>
      </LoginContext.Provider>
      <h2>댓글리스트</h2>
    </section>
  );
}
