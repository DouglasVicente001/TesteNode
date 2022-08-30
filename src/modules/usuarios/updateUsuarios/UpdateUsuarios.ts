import { Request } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";
import * as bcrypt from 'bcrypt'

export class UpdateUsuarios{
    async execute(req: Request){
        const usuarioNaoExiste = await prisma.usuario.findUnique({
            where:{
                //@ts-ignore
                id: req.query.id
            }

        })
        if(!usuarioNaoExiste) {
            throw new AppError(`Usuário com ID '${req.query.id}' não existe.`, 404)
        }

        const emailJaCadastrado = await prisma.usuario.findUnique({
            where:{
                email: req.body.email
            }
        })

        if(emailJaCadastrado){
            throw new AppError(`E-mail ${req.body.email} já esta cadastrado.`, 409)
        }

        const usuario = await prisma.usuario.update({
            data:{
                email: req.body.email,
                senha: req.body.senha = await bcrypt.hash(req.body.senha, 10)
            },
            where:{
                //@ts-ignore
                id: req.query.id
            }
        })

        const result = (`O usuário '${usuario.email}' com ID '${req.query.id}' foi alterado com sucesso`);

        return result

    }
}