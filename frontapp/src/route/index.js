import Book from "../Comp05_Book";
import Event from "../Comp03_Event";
import Effect from "../Comp07_EffectComponent";
import Condition from "../Comp02_Condition";
import Board from "../BoardComponent";
import Customer from "../CustomerComponent";
import BoardList from "../BoardList";
import BoardInsert from "../BoardInsert";
import BoardInfo from "../BoardInfo";
import BoardUpdate from "../BoardUpdate";

let route = [
  {
    path: "/",
    element: <Condition />,
  },
  {
    path: "/board",
    element: <Board />,
  },
  {
    path: "/list",
    element: <BoardList />,
  },
  {
    path: "/insert",
    element: <BoardInsert />,
  },
  {
    path: "/info/:seq",
    element: <BoardInfo />,
  },
  {
    path: "/update/:seq",
    element: <BoardUpdate />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/effect",
    element: <Effect />,
  },
];

export default route;
