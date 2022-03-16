import { Router } from "express";
import {
  addContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from "../controllers/crmConntroler.js";

const crmRoute = Router();

crmRoute.route("/contact").post(addContact).get(getContacts);
crmRoute
  .route("/contact/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

export default crmRoute;
