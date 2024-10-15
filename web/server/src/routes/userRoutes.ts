import { Router } from "express";
import { UserController } from "../controllers";

const userRouter = Router();

userRouter.route("/").post(UserController.create);

userRouter.route("/").get(UserController.list);

userRouter.route("/:userId").get(UserController.read);

userRouter.route("/:userId").patch(UserController.update);

userRouter.route("/:userId").delete(UserController.delete);

export default userRouter;
