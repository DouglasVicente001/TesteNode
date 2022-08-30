import { Request, Response } from "express";
import { GetAllEtiquetas } from "./GetAllEtiquetas";

export class GetAllEtiquetasController {
    async handle(req: Request, res: Response) {
        const getAllEtiquetas = new GetAllEtiquetas();

        const result = await getAllEtiquetas.execute();

        return res.status(200).json(result);
    }
}