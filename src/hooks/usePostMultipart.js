import { useCallback, useState } from 'react';
import { baseUrl } from '../constants';

const usePostMultipart = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  const postData = useCallback(
    async (formData) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
          method: 'POST',
          credentials: 'include',
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) {
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
    [endpoint, options, token]
  );

  return { data, loading, error, postData };
};

export default usePostMultipart;

/**
 *
 *   
  const { data, loading, error, postData } = usePostMultipart("/submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('otherField', 'value');
    postData(formData);
  };
 */
