export const fetchAPI = (url, route, body) => {
  if(route !== 'GET') {
    return fetch(url, {
      method: route,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then((res) => res.json());
  } else {
    return fetch(url, { method: route }).then((res) => res.json());
  }
};
