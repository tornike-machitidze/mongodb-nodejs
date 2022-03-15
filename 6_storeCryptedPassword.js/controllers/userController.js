import User from "../models/user.js";

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const authUser = async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });

  if (user && (await user.matchPassword(password))) {
    res.send({
      _id: user._id,
      name: user.name,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};
