export const fetchAPI = (url, route, body) => {
  if(route === 'POST' || route === 'PUT' || route === 'DELETE') {
    return fetch(url, {
      route, headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then((res) => res.json());
  } else {
    return fetch(url)
      .then((res) => res.json());
  }
};
