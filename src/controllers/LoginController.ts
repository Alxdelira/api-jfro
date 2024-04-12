import UsuarioModel from "../models/UsuarioModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Http from "../services/HttpStatus";
import * as dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export default class LoginController {
    static login = async (req: Request, res: Response) => {
        try {
            const { email, matricula, senha } = req.body;

            const usuario = await UsuarioModel.findOne({ $or: [{ email }, { matricula }] }).select("+senha");

            if (!usuario) {
                return res.status(404).json(Http[404]);
            }

            const senhaCorreta = await bcrypt.compare(senha as string, usuario.senha);

            if (!senhaCorreta) {
                return res.status(401).json(Http[401]);
            }

            const token = jwt.sign({ id: usuario._id, email: usuario.email, matricula: usuario.matricula }, secret, {
                expiresIn: "1h"
            });

            return res.status(200).json({token, usuario: { nome: usuario.nome, email: usuario.email, matricula: usuario.matricula}});
        } catch (error) {
            return res.status(500).json(Http[500]);
        }
    }
}
