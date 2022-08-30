import { Request, Response } from "express";
import { PostUsuarios } from "./PostUsuarios";  

export class PostUsuariosController{
    async handle(req: Request, res: Response){
        const { email, senha } = req.body;

        const postUsuario = new PostUsuarios();

        const result = await postUsuario.execute({email, senha})

        return res.status(201).json(`Usuário ${result.email} cadastrado com sucesso`);
    }
}