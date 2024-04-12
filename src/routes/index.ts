import * as dotenv from 'dotenv'
import { Express, Request, Response } from 'express'
import usuarios from './UsuarioRouter'
import login from './LoginRouter'
import setor from './SetorRouter'
import bens from './BemRouter'
import imagem from './ImagemRouter'

dotenv.config()

const routes = (app: Express) => {
    app.route('/').get((req : Request, res: Response) => {
        res.status(200).redirect("/docs")
    });

    app.use(
        login,
        usuarios,
        setor,
        bens,
        imagem
    );
};


export default routes;
