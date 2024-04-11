import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

interface ISetor extends mongoose.Document {
    local: string;
    itens: mongoose.Types.ObjectId[];
    status: boolean;
}



const SetorSchema: Schema = new mongoose.Schema({
   
    local: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    itens:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "bens",
            required: true
        }
    ],
    status: {
        type: Boolean,
        default: true
    }
},
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

// Configurações do modelo para que seja usada para buscar dados de usuário de forma paginada em nossa aplicação
SetorSchema.plugin(paginate);

const SetorModel = mongoose.model<ISetor>("setores", SetorSchema) as mongoose.PaginateModel<ISetor>;

export default SetorModel;
