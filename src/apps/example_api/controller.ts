import {Request, Response} from "express";
import {getExamples} from "./repo";

export function getAll(req: Request, res: Response) {
    res.json(getExamples());
}