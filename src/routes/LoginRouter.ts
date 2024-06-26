import express, { Router } from 'express';
import LoginController from '../controllers/LoginController';

const router: Router = express.Router();

router
.post('/login', LoginController.login)
.post('/resetsenha', LoginController.esqueciSenha)
.post('/alterarsenha', LoginController.alteraSenha);

export default router;


