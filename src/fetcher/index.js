const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const fetcher = async (endpoint, method, body = {}, credentials = true) => {
  const url = process.env.REACT_APP_API_URL + `/${endpoint}`;

  let headers = {
    'Content-Type': 'application/json',
  };

  if (credentials) {
    headers = {
      ...headers,
      authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
    };
  }

  const data = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  return await data.json();
};

export { fetcher, METHOD };
