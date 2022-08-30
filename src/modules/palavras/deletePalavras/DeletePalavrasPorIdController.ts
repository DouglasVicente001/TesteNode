import { Request, Response } from "express";
import { DeletePalavrasPorId } from "./DeletePalavrasPorId";

export class DeletePalavrasPorIdController{
    async handle(req: Request, res: Response){
        const deletePalavrasPorId = new DeletePalavrasPorId();

        const result = await deletePalavrasPorId.execute(req, res);

        return res.status(200).json(result)
    }
}