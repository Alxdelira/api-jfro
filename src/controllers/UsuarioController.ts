import UsuarioModel from "../models/UsuarioModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Http from "../services/HttpStatus";
import { buildQuery, getPaginationOptions } from "../services/queryOptions";


interface IUsuario {
    nome: string;
    email: string;
    matricula: string;
    senha: string;
    ativo: boolean;
}

export default class UsuarioController {
    static criarUsuario = async (req: Request, res: Response) => {
        try {
            const { nome, email, matricula, senha }: IUsuario = req.body;

            const novoUsuario = new UsuarioModel({
                nome,
                email,
                matricula,
                senha
            });

            if (!nome || !email || !matricula || !senha) {
                return res.status(400).json(Http[400]);
            }

            if (senha.length < 8) {
                return res.status(400).json({ mensage: 'A senha deve conter no mínimo 6 caracteres!' });
            }

            const usuario = await UsuarioModel.findOne({ email } || { matricula });
            if (novoUsuario.matricula == usuario?.matricula) {
                return res.status(400).json({ mensage: 'Matrícula já cadastrada!' });
            }
            if (novoUsuario.email == usuario?.email) {
                return res.status(400).json({ mensage: 'Email já cadastrado!' });
            }

            let senhaCriptografada = await bcrypt.hash(senha, 10);
            novoUsuario.senha = senhaCriptografada;

            const usuarioSalvo = await novoUsuario.save();

            return res.status(201).json({ usuarioSalvo, mensage: Http[201] });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static listarUsuarios = async (req: Request, res: Response) => {
        try {
            const { nome, email, matricula, page, perPage } = req.query;

            const query = buildQuery({
                nome: nome?.toString(),
                email: email?.toString(),
                matricula: matricula?.toString()
            });
            const options = getPaginationOptions(page?.toString(), perPage?.toString());

            const usuarios = await UsuarioModel.paginate(query, options);
            if (usuarios.docs.length === 0) {
                return res.status(404).json(Http[404]);
            }

            return res.status(200).json({ dados: usuarios.docs });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static buscarUsuario = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const usuario = await UsuarioModel.findById(id);

            if (!usuario) {
                return res.status(404).json(Http[404]);
            }

            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static alterarUsuario = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, email, matricula, senha, ativo } = req.body;

            const usuario = await UsuarioModel.findById(id);

            if (!usuario) {
                return res.status(404).json(Http[404]);
            }

            let camposAtualizados: Partial<IUsuario> = {};

            if (nome) camposAtualizados.nome = nome;
            if (email) camposAtualizados.email = email;
            if (matricula) camposAtualizados.matricula = matricula;
            if (ativo !== undefined) camposAtualizados.ativo = ativo;
            if (senha) camposAtualizados.senha = await bcrypt.hash(senha, 10);

            const usuarioAtualizado = await UsuarioModel.findByIdAndUpdate(id, camposAtualizados, { new: true });

            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static deletarUsuario = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const usuario = await UsuarioModel.findById(id);

            if (!usuario) {
                return res.status(404).json(Http[404]);
            }

            await UsuarioModel.findByIdAndDelete(id);

            return res.status(200).json({ mensage: `Usuário deletado com sucesso! ${Http[200]}` });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }


}

