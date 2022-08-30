
import { Palavra } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { IPostPalavrasDTO } from "../../dtos/postPalavrasDTO";
import { AppError } from "../../errors/AppError";

export class PostPalavras {
    async execute({ palavra }: IPostPalavrasDTO): Promise<Palavra> {
        const palavraJaExiste = await prisma.palavra.findUnique({
            where: {
                palavra
            }
        });

        if (palavraJaExiste) {
            throw new AppError(`A palavra ${palavra} já foi criada.`, 409)
        }

        const palavraCriada = await prisma.palavra.create({
            data: {
                palavra
            }
        });

        return palavraCriada
    }
}