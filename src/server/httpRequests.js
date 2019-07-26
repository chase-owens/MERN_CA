import axios from 'axios';

const url =
  process.env.NODE_ENV == 'production' ? `` : 'http://localhost:27017/api/';

export const getDataFromServer = async () => {
  let endpoint = `${url}dataNoAuth`;
  try {
    let data = await axios.get(endpoint);
    console.log(data);
  } catch (err) {
    console.log('ERR: ', err);
  }
};
