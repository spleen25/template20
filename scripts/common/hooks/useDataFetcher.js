import { useState, useCallback, useEffect } from 'react';

const useDataFetcher = (isMount = true, getMethod, ...params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getResource() {
    try {
      setLoading(true);
      const result = await getMethod(...params);
      setData(result.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
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
