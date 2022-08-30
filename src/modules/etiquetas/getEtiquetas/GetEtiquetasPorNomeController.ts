import { Request, Response } from "express";
import { GetEtiquetasPorNome } from "./GetEtiquetasPorNome";

export class GetEtiquetasPorNomeController {
    async handle(req: Request, res: Response) {
        const getEtiquetaPorNome = new GetEtiquetasPorNome();

        const result = await getEtiquetaPorNome.execute(req, res);

        return res.status(200).json(result)
    }
}