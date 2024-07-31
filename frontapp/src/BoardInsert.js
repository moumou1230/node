import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function BoardInsert() {
  const navigator = useNavigate(); //이동?
  let [form, setForm] = useState({
    title: "",
    writer: "되니",
    content: "",
  });
  // let { title, content } = form;

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSave = () => {
    //ajax등록처리
    axios.post("http://localhost/board", form);
    //목록으로 이동
    navigator("/list");
  };

  return (
    <form>
      제목
      <input name="title" value={form.title} onChange={handlerChange}></input>
      <br />
      내용
      <input
        name="content"
        value={form.content}
        onChange={handlerChange}
      ></input>
      <br />
      <button type="button" onClick={handlerSave}>
        저장
      </button>
    </form>
  );
}
