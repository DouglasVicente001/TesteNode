import { Usuario } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { IPostUsuariosDTO } from "../../dtos/postUsuariosDTO";
import { AppError } from "../../errors/AppError";
import * as bcrypt from 'bcrypt'

export class PostUsuarios {
    async execute({ email, senha }: IPostUsuariosDTO): Promise<Usuario> {
        const usuarioJaExiste = await prisma.usuario.findUnique({
            where: {
                email
            }
        });

        if (usuarioJaExiste) {
            throw new AppError('Email já cadastrado.', 409)
        }

        const passwordHash = await bcrypt.hash(senha, 10)

        const usuarioCriado = await prisma.usuario.create({
            data: {
                email,
                senha: passwordHash
            }
        });

        return usuarioCriado

    }
}