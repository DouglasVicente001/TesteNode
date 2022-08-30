import { Router } from "express";
import { auth } from "../middlewares/auth";
import { DeleteRelacaoController } from "../modules/Relacao/DeleteRelacaoController";
import { GetAllRelacoesController } from "../modules/Relacao/GetAllRelacoesController";
import { PostRelacaoController } from "../modules/Relacao/PostRelacaoController";
import { UpdateRelacaoController } from "../modules/Relacao/UpdateRelacaoController";

const postRelacaoController = new PostRelacaoController();
const updateRelacaoController = new UpdateRelacaoController();
const deleteRelacaoController = new DeleteRelacaoController();
const getAllRelacoesController = new GetAllRelacoesController();

const relacaoRoutes = Router();

relacaoRoutes.get('/', getAllRelacoesController.handle);

relacaoRoutes.use(auth);

relacaoRoutes.patch('/', updateRelacaoController.handle);
relacaoRoutes.post('/', postRelacaoController.handle);
relacaoRoutes.delete('/', deleteRelacaoController.handle);


export { relacaoRoutes };