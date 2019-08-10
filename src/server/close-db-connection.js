import { MongoClient } from 'mongodb';
let db = null;

export const closeDBConnection = () => {
  let client = MongoClient;
  if (db) {
    db = client.db();
    db.close();
  }
};
