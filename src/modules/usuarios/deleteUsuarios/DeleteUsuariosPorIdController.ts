import { Request, Response } from "express";
import { DeleteUsuariosPorId } from "./DeleteUsuariosPorId";

export class DeleteUsuariosPorIdController {
    async handle(req: Request, res: Response) {
        const deleteUsuariosPorId = new DeleteUsuariosPorId();

        const result = await deleteUsuariosPorId.execute(req);

        return res.status(200).json(result)
    }
}