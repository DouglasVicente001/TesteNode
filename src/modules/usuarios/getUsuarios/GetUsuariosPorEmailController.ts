import { Request, Response } from "express";
import { GetUsuariosPorEmail } from "./GetUsuariosPorEmail";

export class GetUsuariosPorEmailController {
    async handle(req: Request, res: Response) {
        const getUsuariosPorEmail = new GetUsuariosPorEmail();

        const result = await getUsuariosPorEmail.execute(req);

        return res.status(200).json(result);
    }
}