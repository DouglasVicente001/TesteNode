import { Etiqueta } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetAllEtiquetas {
    async execute(): Promise<Etiqueta[]> {
        const etiquetas = await prisma.etiqueta.findMany({
            orderBy: {
                etiqueta: "asc"
            },
            include: {
                relacao: {
                    select: {
                        palavra: {
                            select: {
                                id: true,
                                palavra: true,
                            }
                        }
                    }
                }
            }
        });
        if (etiquetas.length == 0) {
            throw new AppError('Nenhuma etiqueta cadastrada', 404);
        }

        return etiquetas;
    }
}