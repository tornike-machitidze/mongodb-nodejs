import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databaseName = "Test_App_Database";

const connectToDatabase = async () => {
  try {
    //0.connection
    await client.connect();
    console.log("Connected successfuly to the database");

    //1.Create or Connect to the database
    const db = client.db(databaseName);

    //2. Connect or Create collection in this db
    const usersCollection = db.collection("Users");

    //3. Get users
    const usersName = { name: "Koba" };

    const getDocs = async (par) => {
      try {
        const foundDocs = await usersCollection.find(par).toArray();
        console.log(foundDocs);
        console.log("These Users are found or no one was match");
      } catch (error) {
        console.log("Something went wrong");
      }
    };

    getDocs(usersName);
  } catch (error) {
    console.log("Was not connected to database");
  }
};

connectToDatabase();
