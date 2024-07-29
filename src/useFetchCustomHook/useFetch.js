import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log(url);
    const controller = new AbortController();
    fetch(url, { signal: controller.signal, ...options })
      .then((res) => res.json())
      .then(setApiData)
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);
  console.log(apiData);
  return { data: apiData, isLoading: isLoading, isError: false };
}
