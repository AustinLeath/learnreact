import React, { useState } from "react";

const Counterchild = (props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1 + props.count)}>
        Click me
      </button>
    </>
  );
};

export default Counterchild;
