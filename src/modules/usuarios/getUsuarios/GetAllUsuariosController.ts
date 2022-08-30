import { Request, Response } from "express";
import { GetAllUsuarios } from "./GetAllUsuarios";

export class GetAllUsuariosController {
    async handle(req: Request, res: Response) {
        const getAllUsuarios = new GetAllUsuarios();

        const result = await getAllUsuarios.execute();

        return res.status(200).json(result);
    }
}