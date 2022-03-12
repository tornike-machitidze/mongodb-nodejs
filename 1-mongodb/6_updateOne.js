import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databaseName = "Test_App_Database";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected successfuly to the Database");

    //1. create or access database
    const db = client.db(databaseName);

    //2. Create or Access Collection in this database
    const usersCollection = db.collection("Users");

    //3. Update Doc in this collection
    const user = { name: "Kobiko" };
    const updateUser = {
      $set: {
        livingAddres: "Racha",
      },
    };
    const updateDoc = async (currentDoc, updatedOneDOc) => {
      try {
        const updatedDoc = await usersCollection.updateOne(
          currentDoc,
          updatedOneDOc
        );
        console.log(updatedDoc);
        console.log("User updated succesfuly");
      } catch (error) {
        console.log("Cant update doc");
      }
    };

    updateDoc(user, updateUser);
  } catch (error) {
    console.log("Cant connect to the database", error);
  }
};

connectToDatabase();
