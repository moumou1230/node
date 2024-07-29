function Reply(props) {
  return (
    <>
      <span>{props.id} </span>
      <span>{props.title} </span>
      <span>{props.writer}</span>
    </>
  );
}
export default function Replys({ datas }) {
  //key 값 넣어둠

  let data = datas.map((ele) => (
    <div key={ele.id}>
      <Reply {...ele} />
    </div>
  ));
  return data;
}
