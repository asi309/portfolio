import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-asi309-server.herokuapp.com/',
});

export default api;
