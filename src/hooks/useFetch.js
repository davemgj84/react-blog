import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // *** Using a setTimeout to simulate loading time - will remove once connected to backend
    setTimeout(() => {
      // GET request to local server
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Sorry, we could not fetch any data...");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
