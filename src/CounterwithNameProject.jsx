import { useState } from "react";

export default function CounterwithNameProject() {
  // its important to set the name as empty string, otherwise will result in error
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  function increment(){
    setCount(currentCount => currentCount+1)
  }
  function decrement(){
    setCount(currentCount => currentCount-1)
  }
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <b>My name is {name} and I am {count} years old.</b>
    </>
  );
}
