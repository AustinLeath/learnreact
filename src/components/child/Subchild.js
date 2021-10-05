const Subchild = ({ thirstProp, healthProp, player }) => {
  const { uuid, username, values } = player;

  const { value1, value2 } = values;

  const boolHelper = () => {
    if (value2) {
      return <p>Success</p>;
    }
    return <p>Failure</p>;
  };

  const boolHelper2 = value2 ? "Success" : "Failure";

  return (
    <>
      <h1>Subchild</h1>
      <p>{thirstProp}</p>
      <p>{healthProp}</p>
      <p>{uuid}</p>
      <p>{username}</p>
      <p>{value1}</p>
      <p>{value2 === true ? "Success" : "Failure"}</p>
      <p>{boolHelper()}</p>
      <p>{boolHelper2}</p>
    </>
  );
};

export default Subchild;
