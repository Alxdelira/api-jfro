import SetorModel from "../models/SetorModel";
import { Request, Response } from "express";
import Http from "../services/HttpStatus";
import { buildQuery, getPaginationOptions } from "../services/queryOptions";

interface ISetor {
    local: string;
    itens: string[];
    status: boolean;
}

export default class SetorController {
    static criarSetor = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { local, itens, status }: ISetor = req.body;

            const novoSetor = new SetorModel({
                local,
                itens,
                status
            });

            if (!local || !itens || !status) {
                return res.status(400).json(Http[400]);
            }

            const setor = await SetorModel.findOne({ local });
            if (novoSetor.local == setor?.local) {
                return res.status(400).json({ mensage: 'Local já cadastrado!' });
            }

            const setorSalvo = await novoSetor.save();

            return res.status(201).json({ setorSalvo, mensage: Http[201] });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static listarSetores = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { local, itens, page, perPage } = req.query;

            const query = buildQuery({
                local: local?.toString(),
                itens: itens?.toString()

            });
            const options = getPaginationOptions(page?.toString(), perPage?.toString());

            const setores = await SetorModel.paginate(query, options);
            if (setores.docs.length === 0) {
                return res.status(404).json({ mensage: 'Nenhum setor encontrado!'});
            }

            return res.status(200).json(setores);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static buscarSetor = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;

            const setor = await SetorModel.findById(id);
            if (!setor) {
                return res.status(404).json({ mensage: 'Setor não encontrado!' });
            }

            return res.status(200).json(setor);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static atualizarSetor = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const { local, itens, status }: ISetor = req.body;

            const setor = await SetorModel.findById(id);
            if (!setor) {
                return res.status(404).json({ mensage: 'Setor não encontrado!' });
            }

            let camposAtualizados = { local, itens, status };
            
            if(local) camposAtualizados.local = local;
            if(itens) camposAtualizados.itens = itens;
            if(status) camposAtualizados.status = status;
            
            const setorAtualizado = await SetorModel.findByIdAndUpdate(id, { local, itens, status }, { new: true });

            return res.status(200).json({ setorAtualizado, mensage: Http[200] });
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

    static deletarSetor = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;

            const setor = await SetorModel.findById(id);
            if (!setor) {
                return res.status(404).json({ mensage: 'Setor não encontrado!' });
            }

            await SetorModel.findByIdAndDelete(id);

            return res.status(200).json(Http[200]);
        } catch (error) {
            return res.status(500).json({ error, mensage: Http[500] });
        }
    }

}