import {Request, Response} from "express";
import * as userServices from "../services/userServices.js";

export async function signUp(req: Request, res: Response) {
    const {email, password} = req.body;

    await userServices.signup({email, password});

    res.sendStatus(200);
}

export async function signIn(req: Request, res: Response) {
    const {email, password} = req.body;

    const token = await userServices.signin({email, password});

    res.send({token}).status(201);
}