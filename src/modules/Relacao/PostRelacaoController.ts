import { Request, Response } from "express";
import { PostRelacao } from "./PostRelacao";

export class PostRelacaoController {
    async handle(req: Request, res: Response) {
        const { palavraId, etiquetaId } = req.body;

        const criarRelacao = new PostRelacao();

        const result = await criarRelacao.execute({ palavraId, etiquetaId });

        return res.status(201).send(result);    
    }
}