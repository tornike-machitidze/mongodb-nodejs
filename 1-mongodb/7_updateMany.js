import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databseName = "Test_App_Database";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected successfuly to the database");
    //1. Create db or Access exsiting
    const db = client.db(databseName);

    //2. Create Collection or Access exsiting one
    const usersCollection = db.collection("Users");

    //3. UpdateMany
    const user = { name: "Jora" };
    const updatedUser = {
      $set: {
        age: 102,
      },
    };
    const updatedDocs = async (docs, updateDoc) => {
      try {
        const result = await usersCollection.updateMany(docs, updateDoc);

        console.log(result.modifiedCount);
        console.log(
          "Users is updated or user, all user name: 'Jora' now has age 102"
        );
      } catch (error) {
        console.log("Cant update users", error);
      }
    };
    updatedDocs(user, updatedUser);
  } catch (error) {
    console.log("Cant connect to database");
  }
};

connectToDatabase();
