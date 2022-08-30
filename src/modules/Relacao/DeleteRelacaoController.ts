import { Request, Response } from "express";
import { DeleteRelacao } from "./DeleteRelacao";

export class DeleteRelacaoController{
    async handle(req: Request, res: Response){
        const deleteRelacao = new DeleteRelacao();

        const result = await deleteRelacao.execute(req, res);

        return res.status(200).json(result)
    }
}