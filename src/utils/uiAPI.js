import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:27017/api/',
  responseType: 'json'
});
