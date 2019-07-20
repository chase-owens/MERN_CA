import { connectDB } from './connect-db';
import content from './content';

const initializeDB = async () => {
  let db = await connectDB();
  for (let collectionName in content) {
    let collection = db.collection('content');
    await collection
      .insertMany(content[collectionName])
      .then(res => console.log(res))
      .catch(err => console.log('ERR1: ', err));
  }
};

initializeDB();
