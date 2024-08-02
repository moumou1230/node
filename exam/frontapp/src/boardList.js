import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./App.css";

function List({ book }) {
  let bookList = book.map((ele) => (
    <tr key={ele.no}>
      <td>{ele.no}</td>
      <td>
        <Link to={"/info/" + ele.no}>{ele.title}</Link>
      </td>
      <td>{ele.writer}</td>
      <td>{ele.created_date}</td>
      <td>{ele.no}</td>
    </tr>
  ));
  return <>{bookList}</>;
}
export default function BoardList() {
  let [book, setBook] = useState([]);
  function list() {
    fetch("/api/board")
      .then((result) => result.json())
      .then((result) => setBook(result));
  }
  useEffect(() => {
    list();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>NO.</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
            <th>댓글 수</th>
          </tr>
        </thead>
        <tbody>
          <List book={book} />
        </tbody>
      </table>
    </div>
  );
}
