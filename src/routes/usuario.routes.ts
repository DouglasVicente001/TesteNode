import { Router } from "express";
import { routes } from ".";
import { DeleteUsuariosPorIdController } from "../modules/usuarios/deleteUsuarios/DeleteUsuariosPorIdController";
import { GetAllUsuariosController } from "../modules/usuarios/getUsuarios/GetAllUsuariosController";
import { GetUsuariosPorEmailController } from "../modules/usuarios/getUsuarios/GetUsuariosPorEmailController";
import { Login } from "../modules/usuarios/login/login";
import { PostUsuariosController } from "../modules/usuarios/postUsuarios/PostUsuariosController";
import { UpdateUsuariosController } from "../modules/usuarios/updateUsuarios/UpdateUsuariosController";
import { auth } from './../middlewares/auth'


const postUsuariosController = new PostUsuariosController();
const getAllUsuariosController = new GetAllUsuariosController();
const getUsuariosPorEmailController = new GetUsuariosPorEmailController();
const deleteUsuariosPorIdController = new DeleteUsuariosPorIdController();
const updateUsuariosController = new UpdateUsuariosController();
const login = new Login();



const usuarioRoutes = Router();



usuarioRoutes.post('/login', login.handle);
usuarioRoutes.post('/', postUsuariosController.handle);

usuarioRoutes.use(auth)

usuarioRoutes.get('/', getAllUsuariosController.handle);
usuarioRoutes.get('/email', getUsuariosPorEmailController.handle);
usuarioRoutes.delete('/', deleteUsuariosPorIdController.handle);
usuarioRoutes.patch('/', updateUsuariosController.handle);



export { usuarioRoutes }