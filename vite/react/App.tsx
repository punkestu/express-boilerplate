import { useState } from "react";

export default function () {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Hello world</h1>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </>
  );
}
