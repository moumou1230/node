//urlTest.js
const myUrl = new URL("http://example.org:8080/foo?username=choi#bar");

console.log(myUrl.protocol);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.port);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams.get("username"));
console.log(myUrl.hash);
