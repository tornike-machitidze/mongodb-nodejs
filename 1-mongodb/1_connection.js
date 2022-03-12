import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to database");
  } catch (error) {
    console.log("Can't connect to the database");
  }
};

connectToDatabase();
