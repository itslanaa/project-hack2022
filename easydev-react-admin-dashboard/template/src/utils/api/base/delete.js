import axios, { defaultParams } from './axios';

export default async (url, params) => {
  try {
    return await axios.delete(url, { ...defaultParams(), ...params });
  } catch (e) {
    if (!e || !e.response || e.response.status !== 401) throw e;
    localStorage.setItem('url', `${window.location.pathname}${window.location.search}`);
    try {
      return axios.delete(url, { ...defaultParams(), ...params });
    } catch (err) {
      return null;
    }
  }
};
