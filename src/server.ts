import "express-async-errors"
import './config/env'
import express, { NextFunction, Request, Response } from 'express';
import logger from 'morgan';
import { AppError } from './modules/errors/AppError';
import { routes } from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json'

const app = express();

app.use(express.json())

app.use(logger('dev'))
app.use(routes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "Error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error -  ${err.message}`
    })
})

app.listen(3333, () => console.log('Servidor rodando na porta 3333...'))