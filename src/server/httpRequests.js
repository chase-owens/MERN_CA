import axios from "axios";

const url =
  process.env.NODE_ENV == "production" ? `/api/` : "http://localhost:1221/api/";

export const getDataFromServer = async () => {
  let endpoint = `${url}dataNoAuth`;
  try {
    let data = await axios.get(endpoint);
  } catch (err) {
    console.log("ERR: ", err);
  }
};

export const getJWT = async () => {
  let endpoint = `${url}login`;
  try {
    let jwt = await axios.post(endpoint);
    return jwt;
  } catch (err) {
    console.log("ERR: ", err);
  }
};

export const sendContactMessage = async (data) => {
  let jwt = await getJWT();
  let headers = { headers: { Authorization: `Bearer ${jwt.data.token}` } };

  let endpoint = `${url}contact`;
  try {
    let message = await axios.post(endpoint, data, headers);
  } catch (err) {
    console.log(err);
  }
};
