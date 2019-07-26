import axios from 'axios';

const url =
  process.env.NODE_ENV == 'production' ? `/api/` : 'http://localhost:1221/api/';

export const getDataFromServer = async () => {
  let endpoint = `${url}dataNoAuth`;
  try {
    let data = await axios.get(endpoint);
    console.log(data);
  } catch (err) {
    console.log('ERR: ', err);
  }
};

export const sendContactMessage = async data => {
  let endpoint = `${url}contact`;
  try {
    let message = await axios.post(endpoint, data);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
};
