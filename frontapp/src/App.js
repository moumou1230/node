import "./App.css";
import "./event";
import Toolbar from "./event";

function Header(props) {
  //{title ,color}도 가능
  const clickHandler = (event) => {
    event.preventDefault();
    alert("클릭됨");
    props.onChangeMode("핸들러");
  };
  return (
    <header>
      <h2 style={{ color: props.color }}>
        <a href="/" onClick={clickHandler}>
          {props.title}
        </a>
      </h2>
    </header>
  );
}
function Nav() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  // const lis = [];
  // for (let i = 0; i < topics.length; i++) {
  //   lis.push(<li>{topics[i].title}</li>);
  // }
  const lis = topics.map((result) => <li>{result.title}</li>);
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article({ content }) {
  return (
    <article>
      <h2>{content.title}</h2>
      {content.body} {content.name}
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header
        title="JAVA"
        onChangeMode={(arg) => {
          alert(arg);
        }}
      />
      <Nav />
      <Toolbar />
      <Article content={{ title: "Welcome", body: "Hello", name: "Tom" }} />
    </div>
  );
}

export default App;
