import { Request, Response } from "express";

import * as categoryService from "../services/categoryServices.js";

export async function getAll(req: Request, res: Response) {
    const categories = await categoryService.getAll();

    res.send({ categories });
}