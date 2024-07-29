import { useEffect, useState } from "react";
export default function FetchApi() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <h3>Fetching From the API</h3>
      {JSON.stringify(data)}
    </>
  );
}
