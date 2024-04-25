import UsuarioModel, { IUsuario } from "../models/UsuarioModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Http from "../services/HttpStatus";
import * as dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import crypto from 'crypto';
import mailer from "../config/mailer";

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

    static esqueciSenha = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email }: LoginProps = req.body;

            const usuario: IUsuario | null = await UsuarioModel.findOne({ email });

            if (!usuario) {
                return res.status(404).json(Http[404]);
            }

            const token = crypto.randomBytes(20).toString('hex');
            const now = new Date();
            now.setHours(now.getHours() + 1);

            await UsuarioModel.findByIdAndUpdate(usuario._id, {
                $set: {
                    tokenRecuperaSenha: token,
                    senhaExpireReset: now
                }
            });

            console.log(token, now);

            mailer.sendMail({
                to: email,
                from: "alx.delira@gmail.com",
                template: "auth/esqueciAsenha",
                context: { token },
            }, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json(Http[400]);
                }

                return res.status(200).json(Http[200]);
            });

            // https://www.youtube.com/watch?v=Zwdv9RllPqU&ab_channel=Rocketseat    <----- 22:00 min contiuar daqui
            //https://mailtrap.io/inboxes/2825135/messages/4179150893  <----- link do email fake do mailTrap
        } catch (error) {
            return res.status(500).json(Http[500]);
        }

    }

}
