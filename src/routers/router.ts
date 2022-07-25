import { Router } from "express";
import userRouter from "./userRouter.js";
import { handleError } from "../middlewares/handleErrorMiddleware.js";

const router = Router();

router.use(userRouter)
    .use(handleError);

export default router;