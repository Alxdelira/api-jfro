import express, { Router } from 'express';
import BensController from '../controllers/BensControllers';

const router: Router = express.Router();

router
.post('/bens', BensController.criarBem)
.get('/bens', BensController.listarBens)
.get('/bens/:id', BensController.listarBemPorId)
.patch('/bens/:id', BensController.atualizarBem)
.delete('/bens/:id', BensController.deletarBem);

export default router;

