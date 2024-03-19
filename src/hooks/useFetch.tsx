import { TuseFetchData } from "@/types";
import { useCallback, useState } from "react";

export const useFetchData = <T extends object>(
  url: string
): [VoidFunction, TuseFetchData<T>] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (data != null) return;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setData(result);
    } catch (err: unknown) {
      console.error((err as Error).message);
      setError((err as Error).message);
      throw new Error((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, data]);

  return [fetchData, { data, error, loading }];
};
