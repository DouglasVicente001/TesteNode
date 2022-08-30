import { Request, Response } from "express";
import { UpdateUsuarios } from "./updateUsuarios";

export class UpdateUsuariosController {
    async handle(req: Request, res: Response) {
        const updatedUsuario = new UpdateUsuarios();

        const result = await updatedUsuario.execute(req);

        return res.status(200).json(result)
    }
}