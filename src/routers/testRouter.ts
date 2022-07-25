import { Router } from "express";

import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";
import * as testController from "../controllers/testController.js"
import { validateToken } from "../middlewares/validateTokenMiddleware.js";

const testRouter = Router();

testRouter.post("/test", validateSchema(testSchema), validateToken, testController.createTest)
testRouter.get("/tests", validateToken, testController.getTests)

export default testRouter;