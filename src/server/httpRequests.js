import axios from 'axios';

const url =
  process.env.NODE_ENV == 'production'
    ? `http://constructionalaffection.herokuapp.com:1221/api/`
    : 'http://localhost:1221/api/';

export const getDataFromServer = async () => {
  let endpoint = `${url}dataNoAuth`;
  try {
    let data = await axios.get(endpoint);
    console.log(data);
  } catch (err) {
    console.log('ERR: ', err);
  }
};
