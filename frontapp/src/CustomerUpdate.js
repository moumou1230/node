import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomerUpdate(props) {
  let [customer, setCustomer] = useState([]);
  function list() {
    if (!props.id) {
      return;
    }
    fetch("http://localhost/customer/" + props.id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0]);
        setCustomer(json[0]);
      });
  }
  useEffect(() => {
    list();
  }, [props]);

  return (
    <>
      <form>
        <Button type="reset">초기화</Button>
        <button type="submit" className="btn btn-success">
          저장
        </button>
        <Button type="button" variant="danger">
          삭제
        </Button>
        <br />
        이름 <input type="text" name="name" value={customer.name}></input>
        <br />
        이메일 <input
          type="text"
          name="email"
          value={customer.email}
        ></input>{" "}
        <br />
        전화번호 <input
          type="text"
          name="phone"
          value={customer.phone}
        ></input>{" "}
        <br />
        주소 <input type="text" name="address" value={customer.address}></input>
      </form>
    </>
  );
}
