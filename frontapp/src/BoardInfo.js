import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BoardInfo() {
  let { seq } = useParams();
  let navigator = useNavigate();
  let [board, setBoard] = useState([]);

  const handlerDelete = async (e) => {
    if (window.confirm("삭제할까요?")) {
      await axios.delete("http://localhost/board/" + seq);
      navigator("/list");
    }
  };

  function list() {
    fetch("http://localhost/board/" + seq)
      .then((response) => response.json())
      .then((json) => setBoard(json[0]));
  }
  useEffect(() => {
    list();
  }, []);
  return (
    <div>
      <Link to={"/update/" + seq}>
        <button>수정</button>
      </Link>
      <button onClick={handlerDelete}>삭제</button>
      <br />
      <span>제목 : {board.title}</span>
      <br />
      <span>작성자 : {board.writer}</span>
      <br />
      <span>내용 : {board.content}</span>
    </div>
  );
}
