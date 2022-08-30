import { Request } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class UpdateEtiqueta {
    async execute(req: Request) {
        const etiquetaNaoExiste = await prisma.etiqueta.findUnique({
            where: {
                //@ts-ignore
                id: req.query.id = parseInt(req.query.id)
            }
        })
        if (!etiquetaNaoExiste) {
            throw new AppError(`A etiqueta com ID '${req.query.id}' não existe`, 404)
        }

        const etiquetaJaExiste = await prisma.etiqueta.findUnique({
            where: {
                etiqueta: req.body.etiqueta
            }
        })

        if (etiquetaJaExiste) {
            throw new AppError(`A etiqueta ${req.body.etiqueta} já esta cadastrada`, 409)
        }

        const etiqueta = await prisma.etiqueta.update({
            data: {
                etiqueta: req.body.etiqueta,
            },
            where: {
                //@ts-ignore
                id: req.query.id
            }
        })
        const result = (`Etiqueta ${etiqueta.etiqueta} com ID ${req.query.id} foi alterada com sucesso`)

        return result
    }
}