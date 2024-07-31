import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BoardUpdate() {
  let [form, setForm] = useState({
    title: "",
    content: "",
  });
  let { title, content } = form;

  let { seq } = useParams();
  let navigator = useNavigate();

  const handlerUpdate = async (e) => {
    if (window.confirm("수정할까요?")) {
      await axios.put("http://localhost/board/" + seq, { title, content });
      navigator("/info/" + seq);
    }
  };

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function list() {
    fetch("http://localhost/board/" + seq)
      .then((response) => response.json())
      .then((json) => setForm(json[0]));
  }
  useEffect(() => {
    list();
  }, []);
  return (
    <div>
      <button onClick={handlerUpdate}>수정하기</button>
      <br />
      제목{" "}
      <input name="title" value={form.title} onChange={handlerChange}></input>
      <br />
      내용{" "}
      <input
        name="content"
        value={form.content}
        onChange={handlerChange}
      ></input>
    </div>
  );
}
