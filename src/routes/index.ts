import * as dotenv from 'dotenv'
import { Express, Request, Response } from 'express'
import usuarios from './UsuarioRouter'
import login from './LoginRouter'
import setor from './SetorRouter'
import bens from './BemRouter'
import imagem from './ImagemRouter'
import inventarios from './InventarioRouter'

dotenv.config()

const routes = (app: Express): void => {
    app.route('/').get((req : Request, res: Response): void => {
        res.status(200).redirect("/docs")
    });

    app.use(
        login,
        usuarios,
        setor,
        bens,
        imagem,
        inventarios
    );
};


export default routes;
