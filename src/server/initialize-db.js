import { connectDB } from './connect-db';
import { content } from './content';
import { userBehavior } from './userBehavior';

const loadContent = async db => {
  let collection = db.collection('content');
  await collection
    .deleteMany()
    .then(res => console.log('RES: ', res))
    .catch(err => console.log('ERR1: ', err));
  for (let collectionName in content) {
    console.log(collectionName);
    await collection
      .insertMany(content[collectionName])
      .then(res => console.log('RES: ', res))
      .catch(err => console.log('ERR1: ', err));
  }
};

const loadUserBehaviorCollection = async db => {
  let collection = db.collection('userBehavior');
  await collection
    .deleteMany()
    .then(res => console.log('RES: ', res))
    .catch(err => console.log('ERR1: ', err));
  for (let collectionName in userBehavior) {
    console.log(collectionName);
    await collection
      .insertMany(userBehavior[collectionName])
      .then(res => console.log('RES: ', res))
      .catch(err => console.log('ERR1: ', err));
  }
};

const loadAppPerformanceCollection = async db => {
  let collection = db.collection('appPerformance');
  await collection
    .deleteMany()
    .then(res => console.log('RES: ', res))
    .catch(err => console.log('ERR1: ', err));
  for (let collectionName in appPerformance) {
    console.log(collectionName);
    await collection
      .insertMany(appPerformance[collectionName])
      .then(res => console.log('RES: ', res))
      .catch(err => console.log('ERR1: ', err));
  }
};

const initializeDB = async () => {
  let db = await connectDB();

  loadContent(db);
  loadUserBehaviorCollection(db);
  loadAppPerformanceCollection(db);
};

initializeDB();
