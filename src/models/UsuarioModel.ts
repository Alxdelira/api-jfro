import mongoose, { Document, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

export interface IUsuario extends Document {
    nome: string;
    matricula: string;
    email: string;
    senha: string;
    ativo: boolean;
    tokenRecuperaSenha?: string;
}

const UsuarioSchema: Schema = new mongoose.Schema({
    nome: {
        type: String,
        minlength: 3,
        maxlength: 200,
        required: true,
        index: true
    },
    matricula: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    senha: {
        type: String,
        required: true,
        select: false,
        minlength: 8
    },
    tokenRecuperaSenha: {
        type: String,
        trim: true,
        index: true,
        select: false
    },
    senhaExpireReset: {
        type: Date,
        select: false
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    }
},
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
        versionKey: "_version"
    }
);

UsuarioSchema.plugin(paginate);

const UsuarioModel = mongoose.model<IUsuario>("usuarios", UsuarioSchema) as mongoose.PaginateModel<IUsuario>;

export default UsuarioModel;