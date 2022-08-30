import { Request } from "express";
import { prisma } from "../../prisma/client";
import { AppError } from "../errors/AppError";

export class UpdateRelacao {
    async execute(req: Request) {
        const antigaEtiqueta = await prisma.etiqueta.findUnique({
            where: {
                id: req.body.antigaEtiquetaId,
            },
        });

        if (!antigaEtiqueta) {
            throw new AppError(`Antiga etiqueta não está cadastrada.`,404)
        }

        const antigaPalavra = await prisma.palavra.findUnique({
            where: {
                id: req.body.antigaPalavraId,
            }
        });

        if (!antigaPalavra) {
            throw new AppError('Antiga palavra não está cadastrada.',404)
        }

        const novaEtiqueta = await prisma.etiqueta.findUnique({
            where:{
                id: req.body.novaEtiquetaId
            }
        });

        if(!novaEtiqueta){
            throw new AppError('Nova etiqueta não está cadastrada', 404)
        }

        const novaPalavra = await prisma.palavra.findUnique({
            where:{
                id: req.body.novaPalavraId
            }
        });

        if(!novaPalavra){
            throw new AppError('Nova palavra não está cadastrada', 404)
        }

         await prisma.relacao.update({
          data:{
            etiquetaId: req.body.novaEtiquetaId,
            palavraId: req.body.novaPalavraId,
          },
          where:{
            palavraId_etiquetaId:{
                etiquetaId: req.body.antigaEtiquetaId,
                palavraId: req.body.antigaPalavraId,
            }
          }
        });

        const result = 'Relacao alterada'
        return result


    }
}