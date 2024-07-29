{
  /* useState example */
}
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [name, setName] = useState("Arwa");

  function handleCounter() {
    // Do this if theres a dependency on the previous value
    // setCounter((currentCount) => currentCount + 1);
    setCounter(counter + 1);
  }

  return (
    <>
      <h3>Use state Hook</h3>
      <b onClick={handleCounter}>{counter} --click here</b>
      <br />
      {/* Instead of directly changing the current value, do it through a function */}
      <b onClick={() => setCounter2((currentCount) => currentCount + 1)}>
        {counter2} --click here
      </b>
      <h3>Input Eevnt Listeners Example</h3>
      <span>Controlled</span>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <span>Uncontrolled</span>
      <input type="text" defaultValue={name} />
    </>
  );
}
