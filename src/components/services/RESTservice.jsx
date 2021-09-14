import request from 'superagent';

export const APIRouter = async (url, route, json) => {
  if(route === 'GET') {
    const data = await request.get(url);
    return data.body;
  } else if(route === 'PUT') {
    const data = await request.put(url).send(json);
    return data.body;
  } else if(route === 'POST') {
    const data = await request.post(url).send(json);
    return data.body;
  } else if(route === 'DELETE') {
    const data = await request.delete(url);
    return data.body;
  }
};
