import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';

let port = 1221;
let app = express();

app.listen(port, console.log('Server listening on port ', port));

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

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

export const getAllData = async () => {
  let db = await connectDB();
  try {
    let data = await db.getCollection('content').find({});
    console.log('content: ', data);
  } catch {
    console.log('ERR');
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

app.post('language', async (req, res) => {
  await changeLanguageNode(language);
  res.status(200).send();
});
