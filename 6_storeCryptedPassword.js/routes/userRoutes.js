import { authUser, createUser } from "../controllers/userController.js";
import { Router } from "express";
const userRouter = Router();

userRouter.post("/users/register", createUser).post("/users/login", authUser);

export default userRouter;
