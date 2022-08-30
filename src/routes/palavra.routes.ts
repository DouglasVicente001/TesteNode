import { Router } from "express";
import { DeletePalavrasPorIdController } from "../modules/palavras/deletePalavras/DeletePalavrasPorIdController";
import { GetAllPalavrasController } from "../modules/palavras/getPalavras/GetAllPalavrasController";
import { GetPalavrasPorNomeController } from "../modules/palavras/getPalavras/GetPalavrasPorNomeController";
import { PostPalavrasController } from "../modules/palavras/postPalavras/PostPalavrasController";
import { UpdatePalavraController } from "../modules/palavras/updatePalavras/UpdatePalavraController";
import { auth } from './../middlewares/auth'

const postPalavrasController = new PostPalavrasController();
const getAllPalavrasController = new GetAllPalavrasController();
const getPalavrasPorNomeController = new GetPalavrasPorNomeController();
const deletePalavrasPorIdController = new DeletePalavrasPorIdController();
const updatePalavraController = new UpdatePalavraController();



const palavrasRoutes = Router();

palavrasRoutes.get('/', getAllPalavrasController.handle);
palavrasRoutes.get('/nome', getPalavrasPorNomeController.handle);

palavrasRoutes.use(auth);

palavrasRoutes.post('/', postPalavrasController.handle);
palavrasRoutes.delete('/', deletePalavrasPorIdController.handle);
palavrasRoutes.patch('/', updatePalavraController.handle);


export { palavrasRoutes }