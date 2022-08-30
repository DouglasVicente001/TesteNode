import { Request } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class UpdatePalavras {
    async execute(req: Request) {
        const palavraNaoExiste = await prisma.palavra.findUnique({
            where: {
                //@ts-ignore
                id: req.query.id = parseInt(req.query.id)
            }
        })
        
        if (!palavraNaoExiste) {
            throw new AppError(`A palavra com ID '${req.query.id}' não existe.`, 404)
        }
    
        const palavraJaExiste = await prisma.palavra.findUnique({
            where:{
                palavra: req.body.palavra
            }
        })

        if(palavraJaExiste){
            throw new AppError(`A palavra ${req.body.palavra} já esta cadastrada.`, 409)
        }

        const palavra = await prisma.palavra.update({
            data: {
                palavra: req.body.palavra,
            },
            where: {
                //@ts-ignore
                id: req.query.id
            }
        })

        const result = (`Palavra '${palavra.palavra}' com ID '${req.query.id}' foi alterada com sucesso`)

        return result
    }
}