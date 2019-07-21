import { connectDB } from './connect-db';
import { content } from './content';

const initializeDB = async () => {
  let db = await connectDB();
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

initializeDB();
