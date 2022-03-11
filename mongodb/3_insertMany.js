import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databaseName = "Test_App_Database";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connect successfully to database");

    //1.
    const db = client.db(databaseName);
    //2.
    const usersCollection = db.collection("Users");
    const users = [
      { name: "Jora", age: 89 },
      { name: "Koba", age: 104 },
      { name: "Jane", age: 34 },
    ];
    //3.
    const addUsers = async (doc) => {
      try {
        const insertedDoc = await usersCollection.insertMany(doc);
        console.log(insertedDoc);
        console.log("Doc is inserted to the database");
      } catch (error) {
        console.log("Can't add users");
      }
    };

    addUsers(users);
  } catch (error) {
    console.log("Can't connect to databse");
  }
};

connectToDatabase();
