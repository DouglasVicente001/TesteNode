import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class DeleteEtiquetaPorId {
    async execute(req: Request, res: Response) {
        const etiquetaNoExiste = await prisma.etiqueta.findUnique({
            where: {
                //@ts-ignore
                id: req.query.id = parseInt(req.query.id)
            }
        });
        if (!etiquetaNoExiste) {
            throw new AppError(`A etiqueta com o ID '${req.query.id}' não existe.`, 404)
        }

        const etiqueta = await prisma.etiqueta.delete({
            where: {
                 //@ts-ignore
                id: req.query.id,
            }
        });
        const result = (`Etiqueta '${etiqueta.etiqueta}' com ID '${req.query.id}' foi excluida com sucesso`)

        return result
    }
}