import mongoose from "mongoose";

// Connect To Databse
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/Test_App_Mongoose_Database"
    );
    console.log(
      "Node is connected to the mongodb and the database Test_App_Mongoose_Database"
    );
  } catch (error) {
    console.log("Cant conncet to the database");
  }
};

connectToDatabase();
//
//
//
//
//
//
// This Function takes Document and adds it to the Collectin
//

const saveDoc = async (doc) => {
  try {
    const result = await doc.save();
    console.log(result);
    console.log("Saved!");
  } catch (error) {
    console.log("cant save doc", error);
  }
};
//
//
//
//
// The document shloud be instance of an Model
// so lets create model first and than insatnece
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 110,
  },
  phone: {
    type: String,
    validate(value) {
      return /\d{3}-\d{2}-\d{2}-\d{2}/.test(value);
    },
  },
});

const User = mongoose.model("User", userSchema); // Mongoose creates 'users' collection from User
//
//
//
//
//
// Create instance Document
const user = {
  name: "Koba",
  age: 40,
  phone: "599-23-23-23",
};

const tornike = new User(user);

saveDoc(tornike);

// 1. Connect Node and Mongodb database (specific)
// 2. Create Mongoose Model ( + mongoose Schema)
// 3. Create instace of Model
// 4. Save it to the Collcetion (that collection is in its Model name)
