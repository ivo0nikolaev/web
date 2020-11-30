import React from "react";

function First() {

  const [name, setName] = React.useState("Joe")  

  return (
    <div>
      <div>My frist React component</div>
      <p>{name}</p>
        <input type="text" onChange={ (e) => setName(e.target.value) }></input> <br />
        <button onClick={ () => setName("Gorrila Glass") }>
        Click Me</button>
    </div>
  );
}

export default First;
