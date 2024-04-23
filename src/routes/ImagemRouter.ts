import express, { Router } from 'express';
import ImagensControllers from '../controllers/ImagemController';
import { createStorage, upload } from '../config/imagem_config';
import AuthMiddleware  from '../middlewares/AuthMiddleware';

const router : Router= express.Router();

router
.post('/imagem', AuthMiddleware, createStorage, upload.single('image'), ImagensControllers.enviarImagem)
.get('/imagem/:id', ImagensControllers.mostrarImagem)
.get('/imagem', ImagensControllers.listarImagens)
.delete('/imagem/:id', ImagensControllers.deletarImagem);


export default router;