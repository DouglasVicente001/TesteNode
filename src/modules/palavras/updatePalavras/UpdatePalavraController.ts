import { Request, Response } from "express";
import { UpdatePalavras } from "./UpdatePalavras";

export class UpdatePalavraController {
    async handle(req: Request, res: Response) {
        const updatePalavra = new UpdatePalavras();

        const result = await updatePalavra.execute(req);

        return res.status(200).json(result)
    }
}