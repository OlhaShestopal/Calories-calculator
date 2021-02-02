async function request({ url, method, query, ...config }) {
  const uri = `${process.env.REACT_APP_FOOD_CAlORIES}${url}?query=${query.query}`
  const headers = config.headers || {};
  const body = config.body ? JSON.stringify(config.body) : undefined;

  const response = await fetch(uri, {
    method,
    body,
    headers: {
      'Content-Type':  'application/json; charset=UTF-8',
      'X-Api-Key': process.env.REACT_APP_API_KEY,
      ...headers,
    }
  });
  const data = await response.json();

  return data;
}

export {
  request
}