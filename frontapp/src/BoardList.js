import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function CusList({ board }) {
  let boardList = board.map((ele) => (
    <tr key={ele.boardid}>
      <td>{ele.boardid}</td>
      <td>
        <Link to={"/info/" + ele.boardid}>{ele.title}</Link>
      </td>
      <td>{ele.wdt}</td>
      <td>{ele.writer}</td>
    </tr>
  ));
  return (
    <>
      <tbody>{boardList}</tbody>
    </>
  );
}

export default function BoardList() {
  let [lastPage, setLastPage] = useState(1);
  let location = useLocation();
  let search = new URLSearchParams(location.search); //?name=aa&age=9
  let p_page = search.get("page");
  let page = p_page === null ? 1 : Number(p_page);

  let [board, setBoard] = useState([]);

  function list() {
    fetch("http://localhost/board?page=" + page)
      .then((response) => response.json())
      .then((json) => {
        setBoard(json.list);
        setLastPage(Math.ceil(json.total / 10)); //125/10 12.5->13
      });
  }
  useEffect(() => {
    list();
  }, [page]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>타이틀</th>
            <th>날짜</th>
            <th>작성자</th>
          </tr>
        </thead>

        <CusList board={board} />
      </table>
      {lastPage}
      {[...Array(lastPage)].map((p, idx) => (
        <Link to={"/list?page=" + idx}>{idx}</Link>
      ))}
    </div>
  );
}
