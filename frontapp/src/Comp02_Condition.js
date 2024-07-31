import Replys from "./Replys";

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name}
      {isPacked && "✔"}
    </li>
  );
}

function Items({ todos }) {
  const item = todos.map((todo, idx) => (
    //<Item name={todo.name} isPacked={todo.isPacked} />
    <Item key={idx} {...todo} />
  ));
  return <> {item} </>;
}

export default function PackingList() {
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
      <ul>
        <Items todos={todos} />
      </ul>
      <h2>댓글리스트</h2>
      <Replys datas={replyList} />
    </section>
  );
}
