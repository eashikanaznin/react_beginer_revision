import { useEffect, useState } from "react";
import ListComp from "./ListComp";

export default function UserList() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(setApiData)
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  console.log(apiData);
  return (
    <>
      <h1>User Data</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {/* {apiData.map((user) => {
          return <ListComp key={user.id} username={user.name} />;
        })} */}
          {apiData.map((user) => {
            // console.log(user.name)
            //return <li>{user.name}</li>
            // return <ListComp key={user.id} username={user.name} />;
            // for multiple props
            return <ListComp key={user.id} {...user} />;
          })}
        </ul>
      )}
    </>
  );
}
