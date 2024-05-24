import { useCallback, useState } from 'react';
import { baseUrl } from '../constants';

const usePost = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  const postData = useCallback(
    async (body) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
          method: 'POST',
          ...options,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers,
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          // console.log('response not ok ');
          const errorResponse = await response.json();
          throw new Error(errorResponse.message);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { data, loading, error, postData };
};

export default usePost;

/**
 *
 *   
  const { data, loading, error, postData } = usePost("/submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ input });
  };
 */
