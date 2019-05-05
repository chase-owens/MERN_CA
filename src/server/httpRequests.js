import axios from 'axios';

const url = 'http://localhost:1221/';

export const getDataFromServer = async () => {
  let endpoint = `${url}data`;
  let jsonPlaceholder = 'https://jsonplaceholder.typicode.com/todos';
  try {
    let data = await axios.get(endpoint);
    console.log(data);
  } catch (err) {
    console.log('ERR: ', err);
  }
};
