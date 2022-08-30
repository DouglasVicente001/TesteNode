import { Relacao } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { AppError } from "../errors/AppError";

export class GetAllRelacoes {
    async execute(): Promise<Relacao[]> {
        const relacoes = await prisma.relacao.findMany({
            include:{
                palavra: {
                    select:{
                        palavra: true,
                        criado_em: true,
                        modificado_em: true,
        
                    },
                },
                etiqueta:{
                    select:{
                        etiqueta: true,
                        criado_em: true,
                        modificado_em: true
                        
                    }
                }
            },
        })

        if (relacoes.length == 0) {
            throw new AppError('Nenhuma relação encontrada', 404)
        }
        return relacoes;
    }
}