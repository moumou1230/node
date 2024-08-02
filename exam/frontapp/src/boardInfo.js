import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
function Reply({ reaply }) {
  let replyList = reaply.map((ele) => (
    <div key={ele.no}>
      <span>내용 :{ele.content}</span>
      <br />
      <span>
        작성자 : {ele.bw}, 작성일 :{ele.create_date}
      </span>
      <br />
    </div>
  ));
  return <>{replyList}</>;
}
export default function BoardInfo() {
  let { seq } = useParams();
  let [board, setBoard] = useState([]);
  let [reaply, setReply] = useState([]);

  function list() {
    fetch("/api/board/" + seq)
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0]);
        setBoard(json[0]);
        setReply(json);
      });
  }
  useEffect(() => {
    list();
  }, []);
  return (
    <>
      <div>
        <span>번호 : {board.no}</span>
        <br />
        <span>작성일 : {board.created_date}</span>
        <br />
        <span>작성자 : {board.aw}</span>
        <br />
        <span>제목 : {board.at}</span>
        <br />

        <span>내용 : {board.content}</span>
        <br />
        <Link to={"/update/" + seq}>
          <button>수정</button>
        </Link>
      </div>
      <br />
      <div>
        <span>댓글목록</span>
        <br />
        <Reply reaply={reaply} />
      </div>
    </>
  );
}
