import { Router } from "express";
import { etiquetaRoutes } from "./etiqueta.routes";
import { palavrasRoutes } from "./palavra.routes";
import { relacaoRoutes } from "./relacao.routes";
import { usuarioRoutes } from "./usuario.routes";

const routes = Router();

routes.use("/palavras", palavrasRoutes)
routes.use("/etiquetas", etiquetaRoutes)
routes.use("/usuarios", usuarioRoutes)
routes.use("/relacao", relacaoRoutes)


export { routes };