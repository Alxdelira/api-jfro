import express, { Router } from 'express';
import LoginController from '../controllers/LoginController';

const router: Router = express.Router();

router
.post('/login', LoginController.login)
.post('/resetsenha', LoginController.esqueciSenha);

export default router;


