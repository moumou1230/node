//state , ref, event => form field제어
import { useState, useRef } from "react";

export default function App() {
  //   let [massage, setMassage] = useState("");
  //     let [email, setEamil] = useState("");

  let [form, setForm] = useState({ massage: "", email: "" });
  let inputMessage = useRef(); //document.getElementById("xxxxx");

  function handlerChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form>
        {form.massage}
        {form.email}
        <input
          name="massage"
          value={form.massage}
          onChange={handlerChange}
          ref={inputMessage}
        ></input>
        <input name="email" value={form.email} onChange={handlerChange}></input>

        <button
          //type="button"
          onClick={(e) => {
            e.preventDefault();
            setForm({ massage: "", email: "" });
            console.log(inputMessage);
            inputMessage.current.focus(); //current는 inputMessage를 참조하고 있는
          }}
        >
          확인
        </button>
      </form>
    </>
  );
}
