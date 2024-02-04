import { useEffect, useState } from "react";

interface IFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string): IFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: T = await response.json();

        //Set the result to the state
        setData(data);

        //You can do further processing with the data here
      } catch (error) {
        // Handle errors

        //console.error("Error during fetch:", error.message);

        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
