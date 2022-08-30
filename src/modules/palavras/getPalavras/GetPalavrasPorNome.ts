import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetPalavrasPorNome {
    async execute(req: Request, res: Response) {
        const palavra = await prisma.palavra.findUnique({
            where: {
               //@ts-ignore
                 palavra: req.query.palavra
            },
            include: {
                relacao: {
                    select: {
                        etiqueta: {
                            select: {
                                id: true,
                                etiqueta: true,
                            }
                        }
                    }
                }
            }
        })
        if (palavra == null) {
            throw new AppError(`A palavra '${req.query.palavra}' não foi encontrada.`, 404)
        }

        return palavra;
    }
}
