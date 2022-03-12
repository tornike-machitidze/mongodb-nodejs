import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databaseName = "Test_App_Database";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to database");

    // next steps
    //1. Create db in mongodb
    const db = client.db(databaseName);
    //2. Create collection on this database
    const usersCollection = db.collection("Users");

    //3. Add Document to the Collcetion
    // in this case add an User To the usersCollection
    const user = { name: "Tornike", age: 67, livingAdd: "Svaneti" };
    const addUser = async (doc) => {
      try {
        const insertedDoc = await usersCollection.insertOne(doc);
        console.log("User is added");
        console.log(insertedDoc);
      } catch (error) {
        console.log("User wasn't added");
      }
    };

    addUser(user);
  } catch (error) {
    console.log("Can't connect to the database");
  }
};

connectToDatabase();
