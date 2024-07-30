import { useState } from "react";

function Header(props) {
  //function handlerClick() {}
  const handlerClick = (e) => {
    e.preventDefault();
    props.onChangeMode();
  };
  return (
    <header>
      <h1>
        <a href="/" onClick={handlerClick}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  let lis = props.topics.map((result) => (
    <li key={result.id}>
      <a
        id={result.id}
        href={"/read/" + result.id}
        onClick={(e) => {
          e.preventDefault();
          props.onChangeMode(Number(e.target.id));
        }}
      >
        {result.title}
      </a>
    </li>
  ));
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  return (
    <article>
      <h2>Udpate</h2>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={props.title}
          ></input>
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={props.body}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}

export default function Book() {
  let [topics, setTopic] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);
  let [lastId, setLastId] = useState(4);
  let [mode, setMode] = useState("WELCOME");
  let [id, setId] = useState(2);

  let content;
  if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          setLastId(lastId + 1);
          setTopic([...topics, { id: lastId, title: title, body: body }]);
        }}
      />
    );
  } else if (mode === "UPDATE") {
    content = <Update title="test" body="test.js.." />;
  } else if (mode === "WELCOME") {
    content = (
      <>
        <Article title="Welcome" body="Hello,Web" />
        <button
          onClick={() => {
            setMode("CREATE");
          }}
        >
          create
        </button>
      </>
    );
  } else if (mode === "READ") {
    let { title, body } = topics.find((ele) => id === ele.id);
    content = (
      <>
        <Article title={title} body={body} />
        <button
          onClick={() => {
            setMode("UPDATE");
          }}
        >
          update
        </button>
      </>
    );
  }

  return (
    <>
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      />
      {content}
    </>
  );
}
