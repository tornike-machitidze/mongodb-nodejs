import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databaseName = "Test_App_Database";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected successfuly to databes");

    //1. Create or Access db
    // most of the time db is created only one time
    // collections are created in one db
    const db = client.db(databaseName);

    //2. connect to Collectin or Create new One
    const usersCollection = db.collection("Users");

    const userId = "622a6c8bad095c5c9f190a14";

    //3. Get one doc

    const getDoc = async (id) => {
      try {
        const foundDoc = await usersCollection.findOne({
          _id: new ObjectId(id),
        });
        console.log(foundDoc);
        console.log(
          "User was found or there is such a user if null was returned"
        );
      } catch (error) {
        console.log("Something went wrong");
      }
    };

    getDoc(userId);
  } catch (error) {
    console.log("Can't connect to database");
  }
};

connectToDatabase();
