import UsuarioModel, { IUsuario } from "../models/UsuarioModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Http from "../services/HttpStatus";
import * as dotenv from 'dotenv';
import jwt from "jsonwebtoken";

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

            return res.status(200).json({token, usuario: { nome: usuario.nome, email: usuario.email, matricula: usuario.matricula}});
        } catch (error) {
            return res.status(500).json(Http[500]);
        }
    }
}
