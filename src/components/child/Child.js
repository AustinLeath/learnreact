import { Fragment } from "react";
import Subchild from "./Subchild.js";

const thirst = 0;
const health = "test";
const player = {
  uuid: "23kjh5bekjbv23jl4h6vb2l3j4ehb6",
  username: "timmy",
  values: { value1: "yh24rg245u24rg", value2: false },
};

const Child = () => {
  return (
    <>
      <h1>test</h1>
      <Subchild thirstProp={thirst} healthProp={health} player={player} />
    </>
  );
};

export default Child;
