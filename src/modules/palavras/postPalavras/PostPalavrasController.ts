import { Request, Response } from "express";
import { PostPalavras } from "./PostPalavras";

export class PostPalavrasController {
    async handle(req: Request, res: Response) {
        const { palavra } = req.body;

        const postPalavras = new PostPalavras();

        const result = await postPalavras.execute({ palavra })

        return res.status(201).json(result);
    }
}