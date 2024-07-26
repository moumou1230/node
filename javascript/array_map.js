const customerData = [
  {
    id: 2,
    name: "rr",
    email: "",
    phone: "",
    address: "",
  },
  {
    id: 13,
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  {
    id: 26,
    name: "양씨",
    email: "asd@ddd.dd",
    phone: "111-111-111",
    address: "대전",
  },
  {
    id: 37,
    name: "asdf",
    email: "asdf",
    phone: "asdf",
    address: "asdf",
  },
  {
    id: 38,
    name: "asdf",
    email: "asdfas",
    phone: "asdf",
    address: "dasdfasdf",
  },
  {
    id: 39,
    name: "asdf",
    email: "asdf",
    phone: "asdf",
    address: "asdf",
  },
  {
    id: 40,
    name: "rr",
    email: "rr",
    phone: "rr",
    address: "rr",
  },
  {
    id: 41,
    name: "asdf",
    email: "asdf",
    phone: "asdf",
    address: "asdf",
  },
  {
    id: 42,
    name: "허씨",
    email: "111",
    phone: "111",
    address: "111",
  },
  {
    id: 43,
    name: "11",
    email: "11",
    phone: "11",
    address: "11",
  },
  {
    id: 45,
    name: "w",
    email: "w",
    phone: "w",
    address: "w",
  },
  {
    id: 46,
    name: "w",
    email: "w",
    phone: "w",
    address: "w",
  },
];

//반복: 함수의 리턴값을 모아서 새로운 배열을 만듦
let ids = customerData.map((ele) => "<td>" + ele.name + "</td>"); //map은 그냥 새로운 배열 만들어준다.
console.log(ids);
