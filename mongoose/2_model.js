import mongoose from "mongoose";

//Schema is like interface for Document
// is describes how document should look like
// what kind of fileds it should has and their types and are they required or not
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

// Model takes two arguments
// first is Monde Name, second is Model Schema
// the name in plural will be collections name also "users"
//
// _______________________
//| Model === Collection  |
//|-----     ------------ |
//| User --> users        |
//| City --> cities       |
//| Ragion --> ragions    |
//|_______________________|
const User = mongoose.model("User", userSchema);

// instance of that model
const tornike = {
  name: "Tornike",
  surname: "Mache",
  age: 104,
};
const me = new User(tornike);
