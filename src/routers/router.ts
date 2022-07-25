import { Router } from "express";

import userRouter from "./userRouter.js";
import testRouter from "./testRouter.js";
import categoryRouter from "./categoryRouter.js";
import { handleError } from "../middlewares/handleErrorMiddleware.js";

const router = Router();

router.use(userRouter);
router.use(testRouter);
router.use(categoryRouter);
router.use(handleError);


export default router;