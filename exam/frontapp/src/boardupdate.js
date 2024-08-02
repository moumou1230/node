import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BoardUpdate() {
  let [form, setForm] = useState({});
  let { no, title, writer, created_date, content } = form;

  let { seq } = useParams();
  let navigator = useNavigate();

  const handlerUpdate = async () => {
    await axios.put("/api/board/" + seq, {
      no,
      title,
      writer,
      created_date,
      content,
    });
    navigator("/info/" + seq);
  };

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function list() {
    fetch("/api/board/" + seq)
      .then((response) => response.json())
      .then((json) => setForm(json[0]));
  }
  useEffect(() => {
    list();
  }, []);
  return (
    <div>
      No
      <input
        name="no"
        value={form.no}
        onChange={handlerChange}
        readOnly
      ></input>
      <br />
      제목
      <input name="title" value={form.title} onChange={handlerChange}></input>
      <br />
      작성자
      <input name="writer" value={form.aw} onChange={handlerChange}></input>
      <br />
      내용
      <textarea
        name="content"
        value={form.content}
        onChange={handlerChange}
      ></textarea>
      <br />
      작성자
      <input
        name="created_date"
        value={form.created_date}
        onChange={handlerChange}
      ></input>
      <button onClick={handlerUpdate}>수정하기</button>
    </div>
  );
}
