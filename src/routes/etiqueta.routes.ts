import { Router } from "express";
import { auth } from "../middlewares/auth";
import { DeleteEtiquetaPorIdController } from "../modules/etiquetas/deleteEtiquetas/DeleteEtiquetaPorIdController";
import { GetAllEtiquetasController } from "../modules/etiquetas/getEtiquetas/GetAllEtiquetasController";
import { GetEtiquetasPorNomeController } from "../modules/etiquetas/getEtiquetas/GetEtiquetasPorNomeController";
import { PostEtiquetasController } from "../modules/etiquetas/postEtiquetas/PostEtiquetasController";
import { UpdateEtiquetaController } from "../modules/etiquetas/updateEtiqueta/UpdateEtiquetaController";

const postEtiquetasController = new PostEtiquetasController();
const getAllEtiquetasController = new GetAllEtiquetasController();
const getEtiquetasPorNome = new GetEtiquetasPorNomeController();
const deleteEtiquetaPorIdController = new DeleteEtiquetaPorIdController();
const updateEtiquetaController = new UpdateEtiquetaController();




const etiquetaRoutes = Router();




etiquetaRoutes.get('/nome', getEtiquetasPorNome.handle);
etiquetaRoutes.get('/', getAllEtiquetasController.handle);

etiquetaRoutes.use(auth);

etiquetaRoutes.post('/', postEtiquetasController.handle);
etiquetaRoutes.delete('/', deleteEtiquetaPorIdController.handle);
etiquetaRoutes.patch('/', updateEtiquetaController.handle);


export { etiquetaRoutes };