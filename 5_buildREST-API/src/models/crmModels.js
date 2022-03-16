import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  company: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
