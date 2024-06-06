import { useCallback, useEffect, useState } from 'react';
import { baseUrl } from '../constants';
import { handelLogout } from '../utils/helper/HelperFunctions';

const useFetch = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include', // Include cookies in the request
      });

      if (!response.ok) {
        if (response.status === 401 && token != null) {
          handelLogout();
        }
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    // if (typeof token === String) {
    fetchData();
    // }
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;

/**
 *
 * const { data, loading, error, refetch } = useFetch('/endpoint');
 */
