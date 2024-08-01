import { createContext, useContext } from "react";

const themeDefault = { border: "10px solid green" };
const themeContext = createContext(themeDefault);

function Sub1() {
  let theme = useContext(themeContext);

  return (
    <themeContext.Provider value={{ border: "10px solid blue" }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2></Sub2>
      </div>
    </themeContext.Provider>
  );
}
function Sub2() {
  let theme = useContext(themeContext);

  return (
    <themeContext.Provider value={{ border: "10px solid black" }}>
      <div style={theme}>
        <h1>Sub2</h1>
        <Sub3></Sub3>
      </div>
    </themeContext.Provider>
  );
}
function Sub3() {
  let theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

export default function App() {
  let theme = useContext(themeContext);
  return (
    <div className="root" style={theme}>
      <h1>Hello</h1>
      <Sub1></Sub1>
    </div>
  );
}
