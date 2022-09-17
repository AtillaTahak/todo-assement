import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [fetchNumber, setFetchNumber] = useState(0);

  const refetch = () => {
    setFetchNumber(fetchNumber + 1);
    setLoading(true);
  };

  useEffect(() => {
    setLoading(true);
    console.log(fetchNumber);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url, fetchNumber]);

  return {
    data, error, loading, refetch,
  };
};

export default useFetch;
