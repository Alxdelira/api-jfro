import fs from "fs";
import { Request, Response, NextFunction } from "express";
import ImagemModel from "../models/ImagemModel";
import Http from "../services/HttpStatus";

interface IImagem {
    tipo_arquivo: string;
    enviado_por: string;
    caminho: string;
    id_imagem: string;
}

class ImagensControllers {

    static async enviarImagem(req: Request, res: Response): Promise<Response> {
        if (!req.file) {
            return res.status(400).json({
                codigo: 400,
                mensagem: "Arquivo inválido",
            });
        }

        const arquivo = req.file;
        const usuarioId = (req as any).usuario?._id?.id;

        if (!usuarioId) {
            return res.status(401).json({
                codigo: 401,
                mensagem: "Usuário não autenticado",
            });
        }

        const imagemData: IImagem = {
            id_imagem: arquivo.filename.split(".")[0],
            tipo_arquivo: arquivo.filename.split(".")[1],
            enviado_por: usuarioId,
            caminho: "/imagens/" + arquivo.filename,
        };

        try {
            const imagem = new ImagemModel(imagemData);
            await imagem.save();

            return res.status(201).json({
                codigo: 201,
                mensagem: "Imagem enviada com sucesso",
                dados: imagem,
            });
        } catch (error) {
            console.error("Erro ao enviar imagem:", error);
            return res.status(500).json({ error, mensagem: Http[500] });
        }
    }

    static async mostrarImagem(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const imagem = await ImagemModel.findOne({ id_imagem: id });

            if (!imagem) {
                res.status(404).send("Imagem não encontrada");
                return;
            }

            res.sendFile(imagem.caminho, { root: "." });
        } catch (error) {
            console.error("Erro ao buscar imagem:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    static async deletarImagem(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const imagem = await ImagemModel.findOne({ id_imagem: id });

            if (!imagem) {
                res.status(404).send("Imagem não encontrada");
                return;
            }

            fs.unlink(`imagens/${imagem.id_imagem}.${imagem.tipo_arquivo}`, async (err) => {
                if (err) {
                    console.error("Erro ao deletar imagem:", err);
                    res.status(500).send("Erro interno do servidor");
                    return;
                }

                await imagem.deleteOne();
                res.send("Imagem deletada com sucesso");
            });
        } catch (error) {
            console.error("Erro ao deletar imagem:", error);
            res.status(500).send("Erro interno do servidor");
        }
    }

    static async listarImagens(req: Request, res: Response): Promise<void> {
        try {
            const imagens = await ImagemModel.find();
            res.status(200).json(imagens);
        } catch (error) {
            console.error("Erro ao listar imagens:", error);
            res.status(500).json({ error: 500, message: 'Erro Interno no Servidor!' });
        }
    }
}

export default ImagensControllers;
