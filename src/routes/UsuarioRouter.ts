import express, { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const router: Router = express.Router();

router
    .post("/usuarios", UsuarioController.criarUsuario)
    .get("/usuarios", UsuarioController.listarUsuarios)
    .get("/usuarios/:id", UsuarioController.buscarUsuario)
    .patch("/usuarios/:id", UsuarioController.alterarUsuario)
    .delete("/usuarios/:id", UsuarioController.deletarUsuario);

export default router;