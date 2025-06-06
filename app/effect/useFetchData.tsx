import { useEffect, useState } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export function useFetchData({ apiUrl }: { apiUrl: string }) {
  const [data, setData] = useState<UserData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apiUrl]);

  return { data, loading, error };
}
