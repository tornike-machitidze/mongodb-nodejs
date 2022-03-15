import mongoose from "mongoose";
import bcrypt from "bcrypt";

mongoose
  .connect("mongodb://127.0.0.1:27017/password")
  .then(() => console.log("Connceted"))
  .catch(() => console.log("Cant conect"));

const User = mongoose.model("User", { name: String, pas: String });

const me = {
  name: "Tornike",
  pas: await bcrypt.hash("test123", 10),
};

const tornike = new User(me);
tornike.save();

const isMath = await bcrypt.compare("test123", me.pas);
console.log(isMath);
