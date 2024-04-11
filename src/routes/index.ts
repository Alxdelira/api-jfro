import * as dotenv from 'dotenv'
import { Express, Request, Response } from 'express'
import usuarios from './UsuarioRouter'
import login from './LoginRouter'
import setor from './SetorRouter'

dotenv.config()

const routes = (app: Express) => {
    app.route('/').get((req : Request, res: Response) => {
        res.status(200).json({ message: `Servidor rodando na porta: ${process.env.PORT}` })
    });

    app.use(
        login,
        usuarios,
        setor
    );
};


export default routes;
