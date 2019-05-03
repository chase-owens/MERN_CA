import {MongoClient} from 'mongodb';
const url = `mongodb://localhost:27017/ca`;
let db = null;

export const connectDB = () => {
    if (db) return db;
    let client = MongoClient.connect(url, {useNewUrlParser: true}).then(client => {
        db = client.db();
        console.info("Got DB", db);
        return db;
    }).catch(err => console.log(err));
}

export const connectDB = () => {
    if (db) return db;
    let client = await MongoClient.connect(url, {useNewUrlParser: true});
    db = client.db();
    console.info("Got DB", db);
    return db;
}

const getDBPromise = () => {
    return MongoClient.connect(url, {useNewUrlParser: true});
}