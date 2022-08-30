import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
import { AppError } from "../errors/AppError";

export class DeleteRelacao {
    async execute(req: Request, res: Response) {
        const etiqueta = await prisma.etiqueta.findUnique({
            where: {
                id: req.body.etiquetaId
            },
        });

        if (!etiqueta) {
            throw new AppError(`Etiqueta não está cadastrada.`, 404)
        }

        const palavra = await prisma.palavra.findUnique({
            where: {
                id: req.body.palavraId,
            }
        });

        if (!palavra) {
            throw new AppError('Palavra não está cadastrada.', 404)
        }

        await prisma.relacao.delete({
            where: {
                palavraId_etiquetaId: {
                    etiquetaId: req.body.etiquetaId,
                    palavraId: req.body.palavraId,
                }
            }
        });

        const result = 'Relacao deletada'
        return result
    }
}