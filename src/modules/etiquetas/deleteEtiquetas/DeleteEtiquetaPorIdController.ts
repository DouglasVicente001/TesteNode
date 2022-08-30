import { Request, Response } from "express";
import { DeleteEtiquetaPorId } from "./DeleteEtiquetaPorId";

export class DeleteEtiquetaPorIdController {
    async handle(req: Request, res: Response) {
        const deleteEtiquetaPorId = new DeleteEtiquetaPorId();

        const result = await deleteEtiquetaPorId.execute(req, res);

        return res.status(200).json(result)
    }
}