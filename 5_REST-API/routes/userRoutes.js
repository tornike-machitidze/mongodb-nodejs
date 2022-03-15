import { Router } from "express";
import User from "../models/userModel.js";

const userRouter = Router();

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Cant find");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age"];

  const isAllowed = updates.every((update) => allowedUpdates.includes(update));

  if (!isAllowed) {
    return res.status(400).send("Is not allowed update");
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send("No such an user");
    }

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

userRouter
  .post("/users", createUser)
  .get("/users", getUsers)
  .get("/users/:id", getUser)
  .patch("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);

export default userRouter;
