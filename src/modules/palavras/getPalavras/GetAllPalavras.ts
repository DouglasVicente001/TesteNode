import { Palavra } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetAllPalavras {
    async execute(): Promise<Palavra[]> {
        const palavras = await prisma.palavra.findMany({
            orderBy: {
                palavra: "asc"
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
        if (palavras.length == 0) {
            throw new AppError('Nenhuma palavra cadastrada', 404)
        }


        return palavras;
    }
}