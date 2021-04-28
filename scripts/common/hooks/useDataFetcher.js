import { useCallback, useEffect, useState } from 'react';

const useDataFetcher = (isMount = true, getMethod, ...params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getResource() {
    try {
      const result = await getMethod(...params);
      setData(result.data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
    }
  }

  const execute = useCallback(() => {
    return getResource();
  }, [getResource]);

  useEffect(() => {
    if (isMount) {
      execute();
    }
  }, [execute, isMount]);

  return { execute, data, loading, error };
};

export default useDataFetcher;
