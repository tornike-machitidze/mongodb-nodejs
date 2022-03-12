import mongoose from "mongoose";
// For data validations I use npm package 'validator'
import validator from "validator";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/Test_App_Mongoose_Database"
    );
  } catch (error) {
    console.log("Cant connect to database");
  }
};

connectToDatabase();

/////////////////////////////////////////////////////////////////////

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        /////////////////////////
        throw new Error("Is not valid email");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error("Sorry only for big boies");
      }
    },
  },
});

const User = mongoose.model("User", userSchema);

const jora = {
  name: "jora",
  email: "myemail@gmail.com",
  age: 20,
};

const user1 = new User(jora);

const saveDoc = async (doc) => {
  try {
    await doc.save();
    console.log("Saved!");
  } catch (error) {
    console.log("Cant save doc");
  }
};

saveDoc(user1);
