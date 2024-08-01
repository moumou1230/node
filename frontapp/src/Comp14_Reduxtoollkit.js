import { legacy_createStore as createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { counterSlice, store, loginSlice } from "./store";

//redux 이용
// function reducer(state, action) {
//   if (action.type === "up") {
//     return { ...state, count: state.count + action.inc };
//   }
//   return state;
// }
// const initialState = { count: 0 };
// let store = createStore(reducer, initialState);
// function Counter() {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           dispatch({ type: "up", inc: 1 });
//         }}
//       >
//         +
//       </button>
//       {count}
//     </div>
//   );
// }

//redux tool 사용

// function Counter() {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           //dispatch({ type: "counterSlice/up", inc: 1 });
//           dispatch(counterSlice.actions.up(2));
//         }}
//       >
//         +
//       </button>
//       {count}
//     </div>
//   );
// }

function Mypage() {
  const name = useSelector((state) => state.login.username);
  const email = useSelector((state) => state.login.email);

  const dispatch = useDispatch();
  return (
    <>
      <input
        onChange={(e) => {
          //   console.log(e.target.value);
          //   dispatch({
          //     type: "loginSlice/setUserName",
          //     username: e.target.value,
          //   });
          //   dispatch(loginSlice.actions.setUserName(e.target.value));
        }}
      ></input>
      <button
        onClick={(e) => {
          dispatch({
            type: "loginSlice/setUserName",
            username: e.target.parentElement.firstElementChild.value,
          });
        }}
      >
        저장
      </button>

      <h1>username {name}</h1>
      <h1>email {email}</h1>
    </>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      {/* <Counter></Counter> */}
      <Mypage></Mypage>
    </Provider>
  );
}
