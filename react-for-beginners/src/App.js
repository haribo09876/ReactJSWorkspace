import { useState, useEffect } from "react";

// cleanup 코드
// function Hello() {
//   둘 중 택 1
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(")
//   }, []);
//   useEffect(function () {
//     console.log("hi :)");
//     return function(){
//       console.log("bye :(")
//     }
//   }, []);
//   return <h1>Hello</h1>;
// }
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);

  // cleanup 코드
  // const [showing, setShowing] = useState(false);
  // const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <input type="text" onChange={onChange} placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>

      {/* cleanup 코드
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button> */}
    </div>
  );
}

export default App;
