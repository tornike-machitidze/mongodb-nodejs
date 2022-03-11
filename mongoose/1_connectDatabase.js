import mongoose from "mongoose";

// 1.So we dont need MongoClient to create mongo client

//2. Big differece
// we dont need to get db from client
// db = client.db(dbName)
// it connects in mongodb, database ------------
//                                            ||
//                                            \/
//                                     __________________________
const url = "mongodb://127.0.0.1:27017/Test_App_Mongoose_Database";

const connectToDatabase = async () => {
  try {
    // it uses mongoose.connect
    await mongoose.connect(url);
    console.log("mongoose is connected to database");
  } catch (error) {
    console.log("cant connect to database", error);
  }
};

connectToDatabase();
