import { useState, useReducer } from "react";

//상태변경하는 과정을 리듀셔함수안에 은닉

function countReducer(count, action) {
  if (action.type === "up") {
    return count + action.number;
  } else if (action.type === "down") {
    return count - action.number;
  } else if (action.type === "reset") {
    return action.number;
  }
}

export default function App() {
  //let [count, setCount] = useState(0);
  let [count, dispatch] = useReducer(countReducer, 0); //0은 초기값
  function down() {
    //setCount(count - 1);
    dispatch({ type: "down", number: 10 });
  }
  function reset() {
    //setCount(0);
    dispatch({ type: "reset", number: 0 });
  }
  function up() {
    // setCount(count + 1);
    dispatch({ type: "up", number: 10 });
  }
  return (
    <div>
      <input type="button" value="-" onClick={down}></input>
      <input type="button" value="0" onClick={reset}></input>
      <input type="button" value="+" onClick={up}></input>
      <span>count : {count}</span>
    </div>
  );
}
