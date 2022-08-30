import { Usuario } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetAllUsuarios {
    async execute(): Promise<Usuario[]> {
        const usuarios = await prisma.usuario.findMany({
            orderBy: {
                criado_em: "asc"
            },
            select: {
                id: true,
                email: true,
                criado_em: true,
            }
        })
        if (usuarios.length == 0) {
            throw new AppError('Nenhum usuário cadastrado.', 404)
        }

        //@ts-ignore
        return usuarios;
    }
}