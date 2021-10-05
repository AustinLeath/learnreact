import React, { useState } from "react";
import Counterchild from "./Counterchild";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Counterchild count={count} />
    </>
  );
};

export default Counter;
