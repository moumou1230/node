import { useState, useEffect } from "react";
import CustomerList from "./CustomerList";
import CustomerUpdate from "./CustomerUpdate";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomerComponent() {
  let [id, setId] = useState(0);
  return (
    <Container>
      <Row>
        <Col>
          <CustomerList
            onClick={(_id) => {
              setId(_id);
            }}
          />
        </Col>
        <Col>
          <CustomerUpdate id={id} />
        </Col>
      </Row>
    </Container>
  );
}
