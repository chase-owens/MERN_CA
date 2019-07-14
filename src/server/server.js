import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';
import './initialize-db';
import path from 'path';
import jwt from 'jsonwebtoken';
import mailer from 'nodemailer';
import dotenv from 'dotenv';
import AWS from 'aws-sdk';

dotenv.config();
console.log(process.env);

// Declare PORT and setup Express server using CORS
let port = process.env.PORT || 1221;
let app = express().use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
);

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION
});
let s3 = new AWS.S3();
let globalBucket = 'constructionalaffection';

app.listen(port, console.log('Server listening on port ', port));

if (process.env.NODE_ENV == `production`) {
  app.use(express.static(path.resolve(__dirname, `../../dist`)));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve('index.html'));
  });
}

app.get('/api', (req, res) => {
  res.send('We in this bitch');
});

app.get('/api/movie', (req, res) => {
  let params = {
    Bucket: globalBucket,
    Key: 'intro.mp4',
    Range: 'bytes=0-9'
  };
  // s3.getObject(params, (err, data) => {
  //   if (err) {
  //     console.log(err, err.stack);
  //   } else {
  //     let cloudfile = data.Body.toString('base64');
  //     res.send(cloudfile);
  //   }
  // });
  let src = s3stream.ReadStream(s3, params);
  src.pipe(res);
});

app.get('/api/data', verifyToken, async (req, res) => {
  let db = await connectDB();
  let collection = await db.collection('content');
  let content = await collection.findOne({ title: 'Constructional Affection' });

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.json({ err: 'err' });
    } else {
      // save in local storage
      res.json({ content, authData });
    }
  });
});

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
    next();
  } else {
    res.sendStatus(403);
  }
}

app.post('/api/contact', async (req, res) => {
  let data = req.body;

  const transporter = mailer.createTransport({
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'constructionalaffection@gmail.com',
      pass: 'Layng1234'
    }
  });

  const mailOptions = {
    from: data.email,
    to: [
      'chasejonathanowens@gmail.com'
      // 'seanmichaelwill@gmail.com',
      // 'chase.owens@bankofamerica.com'
    ],
    subject: 'CA_CONTACT',
    html: `<p>${data.name}</p><p>${data.email}</p><p>${data.message}</p>`
  };

  await transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
    transporter.close();
  });

  res.send('Success');
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
