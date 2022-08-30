import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetEtiquetasPorNome {
    async execute(req: Request, res: Response) {
        const etiqueta = await prisma.etiqueta.findUnique({
            where: {
                //@ts-ignore
                etiqueta: req.query.etiqueta
            },
            include: {
                relacao: {
                    select: {
                        palavra: {
                            select: {
                                id: true,
                                palavra: true
                            }
                        }
                    }
                }
            }
        })
        if (etiqueta == null) {
            throw new AppError(`A etiqueta '${req.query.etiqueta}' não foi encontrada.`, 404)
        }
        return etiqueta;
    }
}