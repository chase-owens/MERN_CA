import { MongoClient } from 'mongodb';
const url =
  process.env.MONGODB_URI ||
  `mongodb://localhost:27017/constructionalaffection`;
let db = null;

export const connectDB = async () => {
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  console.info('Got DB', db);
  return db;
};

// Uncomment below to test connection
// connectDB();
