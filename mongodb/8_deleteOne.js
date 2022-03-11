import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databseName = "Test_App_Database";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Client Connecte To Database Successfully");

    //1. Create or Access exsiting db
    const db = client.db(databseName);

    //2. Create or Access exsing Collection
    const usersCollection = db.collection("Users");

    //3. delete Doc
    const user = { _id: new ObjectId("622a6f0d4e35367fd35bc306") };
    const deleteDoc = async (doc) => {
      try {
        const result = await usersCollection.deleteOne(doc);
        if (result.deletedCount === 1) {
          console.log("user deleted successfully");
        } else {
          console.log("Such a user doesnot exist");
        }
      } catch (error) {
        console.log("Cant delete user");
      }
    };
    deleteDoc(user);
  } catch (error) {
    console.log("Cant connect to the database");
  }
};

connectToDatabase();
