import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";
function BookList({ book }) {
  let bookList = book.map((ele) => (
    <tr key={ele.no}>
      <td>{ele.no}</td>
      <td>{ele.name}</td>
      <td>{ele.writer}</td>
      <td>{ele.publisher}</td>
      <td>{ele.publication_date}</td>
    </tr>
  ));
  return <>{bookList}</>;
}
export default function BookLinst() {
  let [book, setBook] = useState([]);
  function list() {
    fetch("/api/book")
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
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>출반사</th>
            <th>출판일</th>
          </tr>
        </thead>
        <tbody>
          <BookList book={book} />
        </tbody>
      </table>
    </div>
  );
}
