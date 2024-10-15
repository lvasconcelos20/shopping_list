import { Router } from "express";
import userRouter from "./userRoutes";

const router = Router();

router.use("/users", userRouter);
router.get("/", (_, res) => {
  res.status(200).send("made by ausikek :>");
});

export default router;
