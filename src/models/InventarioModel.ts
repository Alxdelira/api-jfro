import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

interface IInventario extends mongoose.Document {
    setor: mongoose.Types.ObjectId;
    responsavel: mongoose.Types.ObjectId;
    auditores: mongoose.Types.ObjectId[];
    data_inicio: Date;
    data_fim: Date;
}

const InventarioSchema: Schema = new mongoose.Schema({
   setor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "setores",
        required: true
    },
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios",
        required: true
    },
    auditores: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "usuarios",
                required: true
            }
        }
    ],
    data_inicio: {
        type: Date,
        require: true,
    },
    data_fim: {
        type: Date
    }
},
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

// Configurações do modelo para que seja usada para buscar dados de usuário de forma paginada em nossa aplicação
InventarioSchema.plugin(paginate);

const inventario = mongoose.model<IInventario>("inventarios", InventarioSchema) as mongoose.PaginateModel<IInventario>;

export default inventario;
