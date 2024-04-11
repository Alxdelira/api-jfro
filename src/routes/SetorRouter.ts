import SetorController from "../controllers/SetorController";
import { Router } from "express";

const router = Router();

router
.post('/setor', SetorController.criarSetor)
.get('/setor', SetorController.listarSetores)
.get('/setor/:id', SetorController.buscarSetor)
.patch('/setor/:id', SetorController.atualizarSetor)
.delete('/setor/:id', SetorController.deletarSetor);

export default router;
