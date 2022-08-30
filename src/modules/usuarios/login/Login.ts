import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { AppError } from "../../errors/AppError";

export class Login {
    async handle(request: Request, response: Response) {

        const { email, senha } = request.body

        const usuario = await prisma.usuario.findUnique({
            where: {
                email
            }
        })

        if(!usuario){
            throw new AppError('Email ou senha incorretos')
        }

        //@ts-ignore
        if (await bcrypt.compare(senha, usuario?.senha)) {
            //@ts-ignore
            const token = jwt.sign({ id: usuario?.id }, process.env.APP_SECRET, {
                expiresIn: '1d'
            })

            const data = {
                id: usuario?.id,
                email: usuario?.email,
                token
            }

            return response.json(data)

        } else {
            throw new AppError('Email ou senha incorretos')
        }
    }
}