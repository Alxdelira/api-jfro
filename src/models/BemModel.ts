import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

export interface IBem extends mongoose.Document {
    tombo: number;
    indentificado: boolean;
    localizado: boolean;
    nome: string;
    condicao: string;
    ativo: string;
    uso: boolean;
    descricao: string;
    inventario: mongoose.Types.ObjectId;
    setor: mongoose.Types.ObjectId;
    auditor: mongoose.Types.ObjectId;
    responsavel: mongoose.Types.ObjectId;
    imagem: mongoose.Types.ObjectId;
}

const BemSchema: Schema = new mongoose.Schema({
    tombo: {
        type: Number,
        required: false
    },
    indentificado: {
        type: Boolean,
        default: false
    },
    localizado: {
        type: Boolean,
        default: true
    },
    nome: {
        type: String,
        minlength: 4,
        maxlength: 200,
        index: true
    },
    condicao: {
        type: String, // Bem danificado, Bem em condições de uso, Bem inservivel
        default: "Bem em condições de uso"
    },
    ativo: {
        type: String,
        default: "Ativo"  // Ativo, Inativo, Pendente
    },
    uso: {
        type: Boolean, // Não está sendo usado
        default: false
    },
    descricao: {
        type: String, // Alterar para ter um maximo de texto
        maxlength: 256,
    },
    inventario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "inventarios", 
        required: true
    },
    setor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "setores",
        required: true
    },
    auditor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios",
        required: true
    }, 
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios",
        required: true
    },
    imagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "imagens" // Incluir regra de negocio 
    }
},
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

// O BemModel pode ser criado apenas uma uma vez em cada inventario
BemSchema.index({ inventario: 1, tombo: 1 }, { unique: true });

// Configurações do modelo para que seja usada para buscar dados de usuário de forma paginada em nossa aplicação
BemSchema.plugin(paginate);

const BemModel = mongoose.model<IBem>("bens", BemSchema) as mongoose.PaginateModel<IBem>;

export default BemModel;
