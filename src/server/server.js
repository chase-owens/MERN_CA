import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';
import { closeDBConnection } from './close-db-connection';
import './initialize-db';
import path from 'path';
import jwt from 'jsonwebtoken';
import mailer from 'nodemailer';
import dotenv from 'dotenv';

// let googleTranslate = require('google-translate')(process.env.API_KEY);
const { Translate } = require('@google-cloud/translate');
const translate = new Translate(process.env.PROJECTID);

dotenv.config();
console.log(process.env);

// Declare PORT and setup Express server using CORS
let port = process.env.PORT || 27017;
let app = express().use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
);

app.listen(port, console.log('Server listening on port ', port));

if (process.env.NODE_ENV == `production`) {
  app.use(express.static(path.resolve(__dirname, `../../dist`)));
  app.use(cors());
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
  });
}

// RESTful API
app.get('/api', (req, res) => {
  res.send('We in this bitch');
});

// CREATE
// CREATE PERFORMANCE LOG
export const createPerformanceLog = async data => {
  let db = await connectDB();
  let collection = await db.collection('appPerformance');

  await collection
    .insertOne(data)
    .then(res => console.log('RES: ', res))
    .catch(err => console.log('ERR1: ', err));
};

// CREATE USER BEHAVIOR LOG
export const createUserBehaviorLog = async data => {
  let db = await connectDB();
  let collection = await db.collection('userBehavior');

  await collection
    .insertOne(data)
    .then(res => console.log('RES: ', res))
    .catch(err => console.log('ERR1: ', err));
};

// CREATE CONTACT MESSAGE
app.post('/api/contact', verifyToken, async (req, res) => {
  let data = req.body;
  let headers = req.headers;
  console.log('DATA ', data, 'HEADERS: ', headers);

  const transporter = mailer.createTransport({
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: data.email,
    to: [
      'chasejonathanowens@gmail.com'
      // 'seanmichaelwill@gmail.com',
    ],
    subject: 'CA_CONTACT',
    html: `<p>${data.name}</p><p>${data.email}</p><p>${data.message}</p>`
  };

  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if (err) {
      res.json({ err: 'err' });
    } else {
      await transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
        transporter.close();
      });

      res.send('Success');
    }
  });
});

// READ
// GET ALL
export const getDataFromDB = async () => {
  let db = await connectDB();
  let collection = db.collection('content');
  let data = {};
  try {
    data = await collection.find({});
    closeDBConnection();
  } catch {
    console.log('ERR');
  }
  console.log('DATA: ', data);
};

// READ TITLE NO AUTH
app.get('/api/dataNoAuth', async (req, res) => {
  let db = await connectDB();
  let collection = await db.collection('content');
  let content = await collection.findOne({ title: 'Constructional Affection' });
  closeDBConnection();
  res.json(content);
});

// READ TITLE AUTH
app.get('/api/data', verifyToken, async (req, res) => {
  let db = await connectDB();
  let collection = await db.collection('content');
  let content = await collection.findOne({ title: 'Constructional Affection' });
  closeDBConnection();

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.json({ err: 'err' });
    } else {
      // save in local storage
      res.json({ content, authData });
    }
  });
});

// UPDATE

// DELETE

app.post('/api/login', (req, res) => {
  let user = {
    username: 'chasethat',
    password: 'password',
    name: 'Chase Owens',
    id: 1,
    role: 'admin'
  };

  jwt.sign({ user }, 'secretkey', (err, token) => {
    res.json({
      token
    });
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    console.log('Token Checked');
    next();
  } else {
    console.log('Token Missing');
    res.sendStatus(403);
  }
}

// const { TranslationServiceClient } = require('@google-cloud/translate').v3beta1;

// const translationClient = new TranslationServiceClient();
// async function translateText() {
//   const request = {
//     parent: translationClient.locationPath(
//       process.env.PROJECTID,
//       process.env.LOCATION
//     ),
//     contents: process.env.TEXT,
//     mimeType: 'text/plain',
//     sourceLanguageCode: 'en',
//     targetLanguageCode: 'es'
//   };

//   try {
//     const [response] = await translationClient.translateText(request);

//     for (const translation of response.translations) {
//       console.log(`Translation: ${translation.translatedText}`);
//     }
//   } catch (err) {
//     console.log('ERROR1: ', err);
//   }
// }

// translateText().catch(err => console.log('ERROR: ', err));

// app.get('/api/dataTranslated', async (req, res) => {
//   const [translation] = await translate.translate(
//     'Constructional Affection',
//     'es'
//   );
//   res.send({ translation: translation });
// });
