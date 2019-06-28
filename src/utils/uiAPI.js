import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:1221/api/',
  responseType: 'json'
});
