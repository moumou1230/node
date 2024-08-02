import { Routes, Route, NavLink, Link } from "react-router-dom";
import BoardList from "./boardList";
import BoardInfo from "./boardInfo.js";
import BoardInsert from "./boardinsert.js";
import BoardUpdate from "./boardupdate.js";

function Header() {
  return (
    <header>
      <button>
        <Link to="/list">전체조회</Link>
      </button>
      <button>
        <Link to="/insert">글등록</Link>
      </button>
    </header>
  );
}
function Section() {
  return (
    <section>
      <p>커뮤니티 게시판입니다</p>
      <p>
        본 게시판은 따뜻한 소통과 자유롭게 정보 공유를 위해 운영되는
        페이지입니다
      </p>
      <p>
        욕설,비방, 광고 등 타인에게 불쾌감을 줄 수 있는 내용은 삼가주시기
        바랍니다
      </p>
    </section>
  );
}
function Footer() {
  <footer>
    <p>asdfasdf</p>
  </footer>;
}
export default function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />
      <Routes>
        <Route path="/list" element={<BoardList />}></Route>
        <Route path="/info/:seq" element={<BoardInfo />}></Route>
        <Route path="/insert" element={<BoardInsert />}></Route>
        <Route path="/update/:seq" element={<BoardUpdate />}></Route>
      </Routes>
    </>
  );
}
