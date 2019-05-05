import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';
import './initialize-db';
import path from 'path';

let port = process.env.PORT || 1221;
let app = express();

//API

app.listen(port, console.log('Server listening on port ', port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

if (process.env.NODE_ENV == `production`) {
  app.use(express.static(path.resolve(__dirname, `../../dist`)));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve('index.html'));
  });
}

app.get('/data', async (req, res) => {
  let db = await connectDB();
  let collection = await db.collection('content');
  let content = await collection.findOne({ title: 'Constructional Affection' });
  res.send(content);
});

export const getDataFromDB = async () => {
  let db = await connectDB();
  let collection = db.collection('content');
  let data = {};
  try {
    data = await collection.find({});
  } catch {
    console.log('ERR');
  }
  console.log('DATA: ', data);
};

export const changeLanguageNode = async (currentLanguage, newLanguage) => {
  let db = await connectDB();
  let collection = db.collection('language');
  try {
    await collection.updateOne(
      { language: currentLanguage },
      { $set: { language: newLanguage } }
    );
  } catch {
    console.log('Err');
  }
};

export const toggleNavigationOptions = async isOpen => {
  let db = await connectDB();
  let collection = db.collection('open');
  try {
    await collection.updateOne({ open: isOpen }, { $set: { open: !isOpen } });
  } catch {
    console.log('Err');
  }
};
