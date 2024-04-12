import InventarioModel from "../models/InventarioModel";
import { Request, Response } from "express";
import Http from "../services/HttpStatus";
import { buildQuery, getPaginationOptions } from "../services/queryOptions";

interface IInventario {
    setor: string;
    responsavel: string;
    auditores: string[];
    data_inicio: Date;
    data_fim: Date;
}

export default class InventarioController {
    static criarInventario = async (req: Request, res: Response) => {
        try {
            const { setor, responsavel, auditores, data_inicio, data_fim }: IInventario = req.body;

            const novoInventario = new InventarioModel({
                setor,
                responsavel,
                auditores,
                data_inicio,
                data_fim
            });

            if (!setor || !responsavel || !auditores || !data_inicio) {
                return res.status(400).json(Http[400]);
            }

            const inventarioSalvo = await novoInventario.save();

            return res.status(201).json({ inventarioSalvo, mensage: Http[201] });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static listarInventarios = async (req: Request, res: Response) => {
        try {
            const { setor, responsavel, auditores, data_inicio, data_fim, page, perPage } = req.query;

            const query = buildQuery({
                setor: setor?.toString(),
                responsavel: responsavel?.toString(),
                auditores: auditores?.toString(),
                data_inicio: data_inicio?.toString(),
                data_fim: data_fim?.toString()
            });
            const options = getPaginationOptions(page?.toString(), perPage?.toString());

            const inventarios = await InventarioModel.paginate(query, options);
            if (inventarios.docs.length === 0) {
                return res.status(404).json({ mensage: 'Nenhum inventário encontrado!'});
            }

            return res.status(200).json(inventarios);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static buscarInventario = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const inventario = await InventarioModel.findById(id);
            if (!inventario) {
                return res.status(404).json({ mensage: 'Inventário não encontrado!'});
            }

            return res.status(200).json(inventario);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static atualizarInventario = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { setor, responsavel, auditores, data_inicio, data_fim }: IInventario = req.body;

            const inventario = await InventarioModel.findById(id);
            if (!inventario) {
                return res.status(404).json({ mensage: 'Inventário não encontrado!'});
            }

            if (!setor || !responsavel || !auditores || !data_inicio) {
                return res.status(400).json(Http[400]);
            }

            let camposAtualizados = { setor, responsavel, auditores, data_inicio, data_fim };

            const inventarioAtualizado = await InventarioModel.findByIdAndUpdate(id,camposAtualizados , { new: true });

            return res.status(200).json({ inventarioAtualizado, mensage: 'Inventário atualizado com sucesso!' });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static deletarInventario = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const inventario = await InventarioModel.findByIdAndDelete(id);
            if (!inventario) {
                return res.status(404).json({ mensage: 'Inventário não encontrado!'});
            }

            return res.status(200).json({ mensage: 'Inventário deletado com sucesso!' });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }
}