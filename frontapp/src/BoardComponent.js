import { Routes, Route, NavLink } from "react-router-dom";
import BoardList from "./BoardList";
import BoardInfo from "./BoardInfo";
import BoardInsert from "./BoardInsert";
import BoardUpdate from "./BoardUpdate";

export default function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/list">게시판</NavLink>
        </li>
        <li>
          <NavLink to="/insert">게시판 등록</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/list" element={<BoardList />}></Route>
        <Route path="/info/:seq" element={<BoardInfo />}></Route>
        <Route path="/insert" element={<BoardInsert />}></Route>
        <Route path="/update/:seq" element={<BoardUpdate />}></Route>
      </Routes>
    </>
  );
}
