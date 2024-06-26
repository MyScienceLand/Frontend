import { useCallback, useState } from 'react';
import { baseUrl } from '../constants';
import { handelLogout } from '../utils/helper/HelperFunctions';

const useDelete = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  const deleteData = useCallback(
    async (id) => {
      if (!token) return;

      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(`${baseUrl}${endpoint}/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (!response.ok) {
          if (response.status === 401) {
            handelLogout(); // Log out the user if unauthorized
          }
          const errorResponse = await response.json();
          throw new Error(errorResponse.message);
        }

        const result = await response.json();
        setData(result); // Set the response data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [endpoint, token]
  );

  return { data, loading, error, deleteData };
};

export default useDelete;
