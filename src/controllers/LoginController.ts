import UsuarioModel, { IUsuario } from "../models/UsuarioModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Http from "../services/HttpStatus";
import * as dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import crypto from 'crypto';
import sendMail from "../config/mailer_config";
import { templateMail } from "../services/templateMail";

interface LoginProps {
    email: string;
    matricula: string;
    senha: string;
}

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export default class LoginController {
    static login = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email, matricula, senha }: LoginProps = req.body;

            const usuario: IUsuario = await UsuarioModel.findOne({ $or: [{ email }, { matricula }] }).select("+senha");

            if (!usuario) {
                return res.status(404).json(Http[404]);
            }

            const senhaCorreta: boolean = await bcrypt.compare(senha as string, usuario.senha);

            if (!senhaCorreta) {
                return res.status(401).json(Http[401]);
            }

            const token: string = jwt.sign({ id: usuario._id, email: usuario.email, matricula: usuario.matricula }, secret, {
                expiresIn: "1h"
            });

            return res.status(200).json({ token, usuario: { nome: usuario.nome, email: usuario.email, matricula: usuario.matricula } });
        } catch (error) {
            return res.status(500).json(Http[500]);
        }
    }

    static esqueciSenha = async (req: Request, res: Response) => {
        try {

            const { email } = req.body;

            const findUser = await UsuarioModel.findOne({ email: email });

            if (!findUser) {
                return res.status(404).json(Http[404]);
            }

            const secret: string  = process.env.JWT_SECRET || " ";
            
            const token = jwt.sign({ id: findUser?._id, email: findUser?.email, nome: findUser?.nome }, secret, {
                expiresIn: process.env.EXPIREINRECUPERASENHA
            });

            if (!token) {
                return res.status(500).json(Http[500]);
            }

            await UsuarioModel.findByIdAndUpdate(findUser?._id, {
                $set: { tokenRecuperaSenha: token }
            });

            let info = ({
                from: "\"Levantamento Patrimonial: Alteração de Senha \"" + ' <' + (process.env.USER_EMAIL) + '>',
                to: findUser?.email,
                subject: "Solicitação de recuperação de senha - Solicitação #" + crypto.randomBytes(6).toString("hex"),
                html: templateMail(token, findUser?.email, findUser?.nome)
            });

            await sendMail(info, res).then(() => {
                return res.status(200).json({ message: "Email enviado com sucesso!", token: token });
            });

        } catch (err) {
            console.log(err)
            return res.status(500).json(Http[500]);
        }
    }

    static async alteraSenha(req: Request, res: Response) {
        try {
            const { email } = req.query;
            const { senha } = req.body;

            await UsuarioModel.findOneAndUpdate({ email: email as string }, {
                senha: bcrypt.hashSync(senha, 10),
                tokenRecuperaSenha: null
            });

            res.status(200).json(Http[200]);

        } catch (err) {
            return res.status(500).json(Http[500]);
        }
    }


}
