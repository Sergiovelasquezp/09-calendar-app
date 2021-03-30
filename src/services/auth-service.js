import { APPLICATION_JSON, GET_METHOD } from '../constants/constants';

const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = (endpoint, data, method = GET_METHOD) => {
  const url = `${BASE_URL}/${endpoint}`;
  if (method === GET_METHOD) return fetch(url);
  return fetch(url, {
    method,
    headers: {
      'Content-Type': APPLICATION_JSON,
    },
    body: JSON.stringify(data),
  });
};

export const fetchWithToken = (endpoint, data, method = GET_METHOD) => {
  const url = `${BASE_URL}/${endpoint}`;
  const token = localStorage.getItem('token') || '';
  return fetch(url, {
    method,
    headers: {
      'Content-Type': APPLICATION_JSON,
      'x-token': token,
    },
    body: JSON.stringify(data),
  });
};
