import { Request, Response } from "express";
import { PostEtiquetas } from "./postEtiquetas";

export class PostEtiquetasController {
    async handle(req: Request, res: Response){
        const {etiqueta} = req.body;

        const postEtiquetas = new PostEtiquetas();

        const result = await postEtiquetas.execute({etiqueta});

        return res.status(201).json(result)
    }
}