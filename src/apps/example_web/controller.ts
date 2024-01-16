import {Request, Response} from "express";
export function hello(req: Request, res: Response) {
    const data: string = req.params.name as string;
    res.render("example", {title: "Example", name: data});
}

export function header(req: Request, res: Response) {
    res.render("header");
}