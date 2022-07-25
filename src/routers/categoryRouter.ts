import {Router} from "express";

import { validateToken } from "../middlewares/validateTokenMiddleware.js";
import * as categoryController from "../controllers/categoryController.js"

const categoryRouter = Router();

categoryRouter.get("/categories", validateToken, categoryController.getAll);

export default categoryRouter;