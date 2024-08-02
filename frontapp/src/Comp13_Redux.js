import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
//1.reduce 선언
function reducer(currentState, action) {
  const newState = { ...currentState }; //state 불변의 원칙 = > 복제해서 변경=>스테이트 교체
  if (currentState == undefined) {
    return { number: 1 };
  }
  if (action.type === "up") {
    newState.number = newState.number + 1;
  } else if (action.type === "down") {
    newState.number = newState.number - 1;
  }
  return newState;
}
//2.reduce 스토어에 저장
const store = createStore(reducer, { number: 1 }); //초기값

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  const number = useSelector((state) => state.number); //스토어 담긴 값 가져오기
  return (
    <div>
      <h1>Left3 {number}</h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right2</h1>
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: "down" }); //type은 reducer안에 action에 담긴다.(값변경)
        }}
      ></input>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch(); //스토어에 들어간 값 조작(useDispatch)
  return (
    <div>
      <h1>Right3</h1>

      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "up" }); //type은 reducer안에 action에 담긴다.
        }}
      ></input>
    </div>
  );
}
export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
