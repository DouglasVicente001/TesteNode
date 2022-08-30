import { prisma } from "../../prisma/client";
import { IPostRelacaoDTO } from "../dtos/postRelacaoDTO";
import { AppError } from "../errors/AppError";

export class PostRelacao {
    async execute({ palavraId, etiquetaId }: IPostRelacaoDTO): Promise<void> {
        const etiquetaExistente = await prisma.etiqueta.findUnique({
            where: {
                id: etiquetaId,
            },
        });

        if (!etiquetaExistente) {
            throw new AppError(`Essa etiqueta não está cadastrada.`, 404)
        }

        const palavraExistente = await prisma.palavra.findUnique({
            where: {
                id: palavraId,
            }
        });

        if (!palavraExistente) {
            throw new AppError('Essa palavra não está cadastrada.', 404)
        }
        
        await prisma.relacao.createMany({
            data: {
                etiquetaId,
                palavraId,
                
            }
        });


    }
}