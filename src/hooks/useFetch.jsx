import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
};

export default useFetch;
