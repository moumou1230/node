import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function BoardInsert() {
  const navigator = useNavigate();
  let [form, setForm] = useState({});

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSave = async () => {
    await axios.post("/api/board", form);

    navigator("/list");
  };

  return (
    <form>
      No
      <input name="No" value={form.no} onChange={handlerChange}></input>
      <br />
      제목
      <input name="title" value={form.title} onChange={handlerChange}></input>
      <br />
      작성자
      <input name="writer" value={form.writer} onChange={handlerChange}></input>
      <br />
      내용
      <textarea
        name="content"
        value={form.content}
        onChange={handlerChange}
      ></textarea>
      <br />
      <button type="button" onClick={handlerSave}>
        저장
      </button>
    </form>
  );
}
