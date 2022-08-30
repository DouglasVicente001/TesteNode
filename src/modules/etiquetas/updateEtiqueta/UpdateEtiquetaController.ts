import { Request, Response } from "express";
import { UpdateEtiqueta } from "./UpdateEtiqueta";

export class UpdateEtiquetaController {
    async handle(req: Request, res: Response) {
        const updateEtiqueta = new UpdateEtiqueta();

        const result = await updateEtiqueta.execute(req);

        return res.status(200).json(result)
    }
}