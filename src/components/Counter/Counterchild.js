import React, { useState } from "react";

const Counterchild = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1 + props.count)}>
        Click me
      </button>
    </div>
  );
};

export default Counterchild;
