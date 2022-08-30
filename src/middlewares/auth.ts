import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import { AppError } from '../modules/errors/AppError'

export const auth = async (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError('Token de autorização necessário', 401)
    }

    const [, token] = authHeader.split(' ')

    try {
         //@ts-ignore
        await jwt.verify(token, process.env.APP_SECRET)
        next()

    } catch (error) {
        throw new AppError('Token inválido', 401)
    }

} 