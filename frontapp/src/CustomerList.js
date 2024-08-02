import { useState, useEffect } from "react";

function CusList({ customer, onChange }) {
  let customerList = customer.map((ele) => (
    <div key={ele.id}>
      <span>{ele.id + " "}</span>
      <span>
        <a
          id={ele.id}
          onClick={(e) => {
            e.preventDefault();
            onChange(e.target.id);
          }}
        >
          {ele.name + " "}
        </a>
      </span>
      <span>{ele.email + " "}</span>
      <span>{ele.phone + " "}</span>
      <span>{ele.address}</span>
    </div>
  ));
  return <>{customerList}</>;
}

export default function CustomerList(props) {
  let [customer, setCustomer] = useState([]);
  let [id, setId] = useState(1);
  function list() {
    fetch("http://localhost/customer")
      .then((response) => response.json())
      .then((json) => setCustomer(json));
  }
  useEffect(() => {
    list();
  });

  return (
    <>
      <div>
        <CusList customer={customer} onChange={props.onClick} />
      </div>
    </>
  );
}
