import { Request, Response } from "express";
import * as testService from "../services/testServices.js";

export async function createTest(req: Request, res: Response) {
    const body = req.body;

    await testService.createTest(body);

    res.sendStatus(201);
}

export async function getTests(req: Request, res: Response) {
    const groupBy = `${req.query.groupBy}`;
    
    const tests = await testService.getTestsGroupBy(groupBy);

    res.send({tests});
}