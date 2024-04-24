"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/controllers/InventarioController.ts
var InventarioController_exports = {};
__export(InventarioController_exports, {
  default: () => InventarioController
});
module.exports = __toCommonJS(InventarioController_exports);

// src/models/InventarioModel.ts
var import_mongoose = __toESM(require("mongoose"), 1);
var import_mongoose_paginate_v2 = __toESM(require("mongoose-paginate-v2"), 1);
var InventarioSchema = new import_mongoose.default.Schema(
  {
    setor: {
      type: import_mongoose.default.Schema.Types.ObjectId,
      ref: "setores",
      required: true
    },
    responsavel: {
      type: import_mongoose.default.Schema.Types.ObjectId,
      ref: "usuarios",
      required: true
    },
    auditores: [
      {
        _id: {
          type: import_mongoose.default.Schema.Types.ObjectId,
          ref: "usuarios",
          required: true
        }
      }
    ],
    data_inicio: {
      type: Date,
      require: true
    },
    data_fim: {
      type: Date
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);
InventarioSchema.plugin(import_mongoose_paginate_v2.default);
var InventarioModel = import_mongoose.default.model("inventarios", InventarioSchema);
var InventarioModel_default = InventarioModel;

// src/services/HttpStatus.ts
var Http = {
  100: "Continuar",
  101: "Mudando Protocolos",
  102: "Processando",
  103: "Indica\xE7\xF5es Iniciais",
  200: "OK",
  201: "Criado",
  202: "Aceito",
  203: "Informa\xE7\xF5es N\xE3o Autoritativas",
  204: "Sem Conte\xFAdo",
  205: "Conte\xFAdo Restaurado",
  206: "Conte\xFAdo Parcial",
  207: "Status Multi-Status",
  208: "J\xE1 Reportado",
  226: "IM Usado",
  300: "M\xFAltipla Escolha",
  301: "Movido Permanentemente",
  302: "Encontrado",
  303: "Consulte Outro",
  304: "N\xE3o Modificado",
  305: "Use Proxy",
  307: "Redirecionamento Tempor\xE1rio",
  308: "Redirecionamento Permanente",
  400: "Pedido Incorreto",
  401: "N\xE3o Autorizado",
  402: "Pagamento Necess\xE1rio",
  403: "Proibido",
  404: "N\xE3o Encontrado",
  405: "M\xE9todo N\xE3o Permitido",
  406: "N\xE3o Aceit\xE1vel",
  407: "Autentica\xE7\xE3o de Proxy Necess\xE1ria",
  408: "Tempo de Pedido Esgotado",
  409: "Conflito",
  410: "Desaparecido",
  411: "Comprimento Necess\xE1rio",
  412: "Pr\xE9-condi\xE7\xE3o Falhou",
  413: "Solicita\xE7\xE3o de Entidade Muito Grande",
  414: "URI Muito Longo",
  415: "Tipo de M\xEDdia N\xE3o Suportado",
  416: "Faixa N\xE3o Satisfat\xF3ria",
  417: "Falha na Expectativa",
  418: "Sou um bule de ch\xE1",
  421: "Solicita\xE7\xE3o Direcionada",
  422: "Entidade N\xE3o Process\xE1vel",
  423: "Bloqueado",
  424: "Falha de Depend\xEAncia",
  425: "Muito Cedo",
  426: "Upgrade Necess\xE1rio",
  428: "Pr\xE9-requisito Necess\xE1rio",
  429: "Muitos Pedidos",
  431: "Campos de Cabe\xE7alho de Solicita\xE7\xE3o Muito Grandes",
  451: "Indispon\xEDvel por Motivos Legais",
  500: "Erro Interno do Servidor",
  501: "N\xE3o Implementado",
  502: "Bad Gateway",
  503: "Servi\xE7o Indispon\xEDvel",
  504: "Gateway Tempor\xE1rio Indispon\xEDvel",
  505: "Vers\xE3o HTTP N\xE3o Suportada",
  506: "Negocia Tamb\xE9m a Variante",
  507: "Armazenamento Insuficiente",
  508: "Loop Detectado",
  510: "N\xE3o Estendido",
  511: "Autentica\xE7\xE3o de Rede Necess\xE1ria"
};
var HttpStatus_default = Http;

// src/services/queryOptions.ts
function buildQuery(params) {
  let query = {};
  for (const key in params) {
    if (params[key]) {
      query = __spreadProps(__spreadValues({}, query), { [key]: { $regex: new RegExp(params[key], "i") } });
    }
  }
  return query;
}
function getPaginationOptions(page, perPage) {
  return {
    page: parseInt(page, 10) || 1,
    limit: parseInt(perPage, 10) || 10
  };
}

// src/controllers/InventarioController.ts
var _InventarioController = class _InventarioController {
};
_InventarioController.criarInventario = (req, res) => __async(_InventarioController, null, function* () {
  try {
    const { setor, responsavel, auditores, data_inicio, data_fim } = req.body;
    const novoInventario = new InventarioModel_default({
      setor,
      responsavel,
      auditores,
      data_inicio,
      data_fim
    });
    if (!setor || !responsavel || !auditores || !data_inicio) {
      return res.status(400).json(HttpStatus_default[400]);
    }
    const inventarioSalvo = yield novoInventario.save();
    return res.status(201).json({ inventarioSalvo, mensage: HttpStatus_default[201] });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_InventarioController.listarInventarios = (req, res) => __async(_InventarioController, null, function* () {
  try {
    const { setor, responsavel, auditores, data_inicio, data_fim, page, perPage } = req.query;
    const query = buildQuery({
      setor: setor == null ? void 0 : setor.toString(),
      responsavel: responsavel == null ? void 0 : responsavel.toString(),
      auditores: auditores == null ? void 0 : auditores.toString(),
      data_inicio: data_inicio == null ? void 0 : data_inicio.toString(),
      data_fim: data_fim == null ? void 0 : data_fim.toString()
    });
    const options = getPaginationOptions(page == null ? void 0 : page.toString(), perPage == null ? void 0 : perPage.toString());
    const inventarios = yield InventarioModel_default.paginate(query, options);
    if (inventarios.docs.length === 0) {
      return res.status(404).json({ mensage: "Nenhum invent\xE1rio encontrado!" });
    }
    return res.status(200).json(inventarios);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_InventarioController.buscarInventario = (req, res) => __async(_InventarioController, null, function* () {
  try {
    const { id } = req.params;
    const inventario = yield InventarioModel_default.findById(id);
    if (!inventario) {
      return res.status(404).json({ mensage: "Invent\xE1rio n\xE3o encontrado!" });
    }
    return res.status(200).json(inventario);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_InventarioController.atualizarInventario = (req, res) => __async(_InventarioController, null, function* () {
  try {
    const { id } = req.params;
    const { setor, responsavel, auditores, data_inicio, data_fim } = req.body;
    const inventario = yield InventarioModel_default.findById(id);
    if (!inventario) {
      return res.status(404).json({ mensage: "Invent\xE1rio n\xE3o encontrado!" });
    }
    if (!setor || !responsavel || !auditores || !data_inicio) {
      return res.status(400).json(HttpStatus_default[400]);
    }
    let camposAtualizados = { setor, responsavel, auditores, data_inicio, data_fim };
    const inventarioAtualizado = yield InventarioModel_default.findByIdAndUpdate(id, camposAtualizados, { new: true });
    return res.status(200).json({ inventarioAtualizado, mensage: "Invent\xE1rio atualizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_InventarioController.deletarInventario = (req, res) => __async(_InventarioController, null, function* () {
  try {
    const { id } = req.params;
    const inventario = yield InventarioModel_default.findByIdAndDelete(id);
    if (!inventario) {
      return res.status(404).json({ mensage: "Invent\xE1rio n\xE3o encontrado!" });
    }
    return res.status(200).json({ mensage: "Invent\xE1rio deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
var InventarioController = _InventarioController;
