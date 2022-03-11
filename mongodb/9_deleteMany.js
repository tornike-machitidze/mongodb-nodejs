import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databseName = "Test_App_Database";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Client connect to database successfuly");

    //1. Create or Access exsiting db
    const db = client.db(databseName);
    //2. Create or Access exsitng Collection
    const usersCollection = db.collection("Users");
    //3. delete Docs
    const users = { name: "Jane" };
    const deleteDocs = async (docs) => {
      try {
        const result = await usersCollection.deleteMany(docs);
        console.log(result.deletedCount);
        result.deletedCount && console.log("Deleted");
      } catch (error) {
        console.log("Cant delete users");
      }
    };
    deleteDocs(users);
  } catch (error) {
    console.log("Cant connect to the Database", error);
  }
};

connectToDatabase();
