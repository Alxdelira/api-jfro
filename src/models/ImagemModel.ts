import mongoose, { Schema } from "mongoose";

interface IImagem extends mongoose.Document {
  tipo_arquivo: string;
  enviado_por: mongoose.Types.ObjectId;
  caminho: string;
  id_imagem: string;
}

const imagemSchema: Schema = new mongoose.Schema(
  {
    tipo_arquivo: {
      type: String,
    },
    enviado_por: {
      type: mongoose.Types.ObjectId,
      ref: "usuarios",
    },
    caminho: {
      type: String,
    },
    id_imagem: {
      type: String
    }
  },
  {
    timestamps: { createdAt: "criado_em", updatedAt: "atualizado_em" },
    versionKey: "_version"
  }
);

const ImagemModel = mongoose.model<IImagem>("imagens", imagemSchema) as mongoose.PaginateModel<IImagem>;

export default ImagemModel;
