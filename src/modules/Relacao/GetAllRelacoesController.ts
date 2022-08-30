import { Request, Response } from "express";
import { GetAllRelacoes } from "./GetAllRelacao";

export class GetAllRelacoesController {
    async handle(req: Request, res: Response){
        const relacoes = new GetAllRelacoes();

        const result = await relacoes.execute();

        return res.status(201).send(result)
    }
}