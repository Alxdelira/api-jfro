import BemModel, { IBem } from "../models/BemModel";
import { Request, Response } from "express";
import Http from "../services/HttpStatus";
import { buildQuery, getPaginationOptions } from "../services/queryOptions";


export default class BensController {
    static criarBem = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {
                tombo,
                nome,
                descricao,
                inventario,
                setor,
                auditor,
                responsavel,
                imagem
            }: IBem = req.body;

            const novoBem = new BemModel({
                tombo,
                nome,
                descricao,
                inventario,
                setor,
                auditor,
                responsavel,
                imagem

            });

            if (
                !tombo ||
                !nome ||
                !setor ||
                !responsavel
            ) {
                return res.status(400).json(Http[400]);
            }

            const bemSalvo = await novoBem.save();

            return res.status(201).json({ bemSalvo, mensage: Http[201] });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static listarBens = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {
                tombo,
                nome,
                inventario,
                setor,
                auditor,
                responsavel,
                page, perPage } = req.query;

            const query = buildQuery({
                nome: nome?.toString(),
                tombo: tombo?.toString(),
                inventario: inventario?.toString(),
                setor: setor?.toString(),
                auditor: auditor?.toString(),
                responsavel: responsavel?.toString()
            });
            const options = getPaginationOptions(page?.toString(), perPage?.toString());

            const bens = await BemModel.paginate(query, options);
            if (bens.docs.length === 0) {
                return res.status(404).json({ mensage: Http[404] });
            }

            return res.status(200).json(bens);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static listarBemPorId = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;

            const bem = await BemModel.findById(id);
            if (!bem) {
                return res.status(404).json({ mensage: Http[404] });
            }

            return res.status(200).json(bem);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static atualizarBem = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const { tombo, nome, condicao, ativo, uso, descricao, inventario, setor, auditor, responsavel, imagem }: IBem = req.body;

            const bem = await BemModel.findById(id);
            if (!bem) {
                return res.status(404).json({ mensage: Http[404] });
            }

            let camposAtualizados: Partial<IBem> = {}

            if (tombo) camposAtualizados.tombo = tombo;
            if (nome) camposAtualizados.nome = nome;
            if (condicao) camposAtualizados.condicao = condicao;
            if (ativo !== undefined) camposAtualizados.ativo = ativo;
            if (uso) camposAtualizados.uso = uso;
            if (descricao) camposAtualizados.descricao = descricao;
            if (inventario) camposAtualizados.inventario = inventario;
            if (setor) camposAtualizados.setor = setor;
            if (auditor) camposAtualizados.auditor = auditor;
            if (responsavel) camposAtualizados.responsavel = responsavel;
            if (imagem) camposAtualizados.imagem = imagem;

            const bemAtualizado = await BemModel.findByIdAndUpdate(id, camposAtualizados, { new: true });

            return res.status(200).json(bemAtualizado);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static deletarBem = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;

            const bem = await BemModel.findById(id);
            if (!bem) {
                return res.status(404).json({ mensage: Http[404] });
            }

            await BemModel.findByIdAndDelete(id);

            return res.status(200).json({ mensage: 'Bem deletado com sucesso!' });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }
}
