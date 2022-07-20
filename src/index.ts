import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routers/router.js";
import { handleError } from "./middlewares/handleErrorMiddleware.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router)
app.use(handleError);


const PORT = + process.env.PORT || 5000;

console.log(process.env.PORT)

app.listen(PORT, () => console.log("Server running on port " + PORT));