import { Request, Response } from "express";
import { GetAllPalavras } from "./getAllPalavras";

export class GetAllPalavrasController {
    async handle(req: Request, res: Response) {
        const getAllPalavras = new GetAllPalavras();

        const result = await getAllPalavras.execute();

        return res.status(200).json(result);
    }
}