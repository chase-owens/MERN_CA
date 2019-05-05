import axios from 'axios';

const url = (process.env.NODE_ENV = 'production'
  ? ``
  : 'http://localhost:1221/');

export const getDataFromServer = async () => {
  let endpoint = `${url}data`;
  try {
    let data = await axios.get(endpoint);
    console.log(data);
  } catch (err) {
    console.log('ERR: ', err);
  }
};
