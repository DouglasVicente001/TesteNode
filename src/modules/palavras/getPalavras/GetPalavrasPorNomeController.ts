import { Request, Response } from "express";
import { GetPalavrasPorNome } from "./GetPalavrasPorNome";

export class GetPalavrasPorNomeController{
    async handle(req: Request, res:Response){
        const getPalavrasPorNome = new GetPalavrasPorNome();

        const result = await getPalavrasPorNome.execute(req, res);

        return res.status(200).json(result)
    }
}