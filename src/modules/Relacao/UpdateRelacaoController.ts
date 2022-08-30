import { Request, Response } from "express";
import { UpdateRelacao } from "./UpdateRelacao";

export class UpdateRelacaoController {
    async handle(req: Request, res: Response) {
        const updatedRelacao = new UpdateRelacao();

        const result = await updatedRelacao.execute(req);

        return res.status(200).json(result)
    }
}