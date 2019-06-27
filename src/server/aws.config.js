import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  AWS: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'ca-central-1'
  }
};
