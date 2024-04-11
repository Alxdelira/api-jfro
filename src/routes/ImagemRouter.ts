import express from 'express';
import ImagensControllers from '../controllers/ImagemController';
import { upload } from '../config/imagem_config';
import AuthMiddleware  from '../middlewares/AuthMiddleware';

const router = express.Router();

router
.post('/imagem', AuthMiddleware, upload.single('imagem'), ImagensControllers.enviarImagem)
.get('/imagem/:id', ImagensControllers.mostrarImagem)
.get('/imagem', ImagensControllers.listarImagens)
.delete('/imagem/:id', ImagensControllers.deletarImagem);


export default router;