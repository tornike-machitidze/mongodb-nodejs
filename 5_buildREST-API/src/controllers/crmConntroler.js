import Contact from "../models/crmModels.js";

export const addContact = async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    await newContact.save();
    res.status(201).send(newContact);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.send(contacts);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404).send();
    }

    res.send(contact);
  } catch (error) {
    res.status(404).send();
  }
};

export const updateContact = async (req, res) => {
  // new means to return updated resouce
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, useFindAndModify: false }
    );

    res.send(updatedContact);
  } catch (error) {
    res.status(400).send();
  }
};

export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      res.status(404).send();
    }
    res.send(deletedContact);
  } catch (error) {
    res.status(500).send(error);
  }
};
