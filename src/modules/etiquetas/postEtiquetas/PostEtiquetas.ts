import { Etiqueta } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { IPostEtiquetasDTO } from "../../dtos/postEtiquetasDTO";
import { AppError } from "../../errors/AppError";

export class PostEtiquetas {
    async execute({ etiqueta }: IPostEtiquetasDTO): Promise<Etiqueta> {
        const etiquetaJaExiste = await prisma.etiqueta.findUnique({
            where: {
                etiqueta
            }
        });

        if (etiquetaJaExiste) {
            throw new AppError(`A etiqueta ${etiqueta} já foi criada.`, 409)
        }

        const etiquetaCriada = await prisma.etiqueta.create({
            data: {
                etiqueta,
            }
        });
        return etiquetaCriada
    }
}