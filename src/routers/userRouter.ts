import { Router } from "express";
import { validateSchema } from "./../middlewares/validateSchemaMiddleware.js";
import * as userSchema from "./../schemas/userSchema.js";
import * as userController from "./../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(userSchema.signUpSchema), userController.signUp);
userRouter.post("/signin", validateSchema(userSchema.signInSchema), userController.signIn);

export default userRouter;