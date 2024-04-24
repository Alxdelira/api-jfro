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

// src/routes/SetorRouter.ts
var SetorRouter_exports = {};
__export(SetorRouter_exports, {
  default: () => SetorRouter_default
});
module.exports = __toCommonJS(SetorRouter_exports);

// src/models/SetorModel.ts
var import_mongoose = __toESM(require("mongoose"), 1);
var import_mongoose_paginate_v2 = __toESM(require("mongoose-paginate-v2"), 1);
var SetorSchema = new import_mongoose.default.Schema(
  {
    local: {
      type: String,
      unique: true,
      required: true,
      index: true
    },
    itens: [
      {
        type: import_mongoose.default.Schema.Types.ObjectId,
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
SetorSchema.plugin(import_mongoose_paginate_v2.default);
var SetorModel = import_mongoose.default.model("setores", SetorSchema);
var SetorModel_default = SetorModel;

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

// src/controllers/SetorController.ts
var _SetorController = class _SetorController {
};
_SetorController.criarSetor = (req, res) => __async(_SetorController, null, function* () {
  try {
    const { local, itens, status } = req.body;
    const novoSetor = new SetorModel_default({
      local,
      itens,
      status
    });
    if (!local || !itens || !status) {
      return res.status(400).json(HttpStatus_default[400]);
    }
    const setor = yield SetorModel_default.findOne({ local });
    if (novoSetor.local == (setor == null ? void 0 : setor.local)) {
      return res.status(400).json({ mensage: "Local j\xE1 cadastrado!" });
    }
    const setorSalvo = yield novoSetor.save();
    return res.status(201).json({ setorSalvo, mensage: HttpStatus_default[201] });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_SetorController.listarSetores = (req, res) => __async(_SetorController, null, function* () {
  try {
    const { local, itens, page, perPage } = req.query;
    const query = buildQuery({
      local: local == null ? void 0 : local.toString(),
      itens: itens == null ? void 0 : itens.toString()
    });
    const options = getPaginationOptions(page == null ? void 0 : page.toString(), perPage == null ? void 0 : perPage.toString());
    const setores = yield SetorModel_default.paginate(query, options);
    if (setores.docs.length === 0) {
      return res.status(404).json({ mensage: "Nenhum setor encontrado!" });
    }
    return res.status(200).json(setores);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_SetorController.buscarSetor = (req, res) => __async(_SetorController, null, function* () {
  try {
    const { id } = req.params;
    const setor = yield SetorModel_default.findById(id);
    if (!setor) {
      return res.status(404).json({ mensage: "Setor n\xE3o encontrado!" });
    }
    return res.status(200).json(setor);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_SetorController.atualizarSetor = (req, res) => __async(_SetorController, null, function* () {
  try {
    const { id } = req.params;
    const { local, itens, status } = req.body;
    const setor = yield SetorModel_default.findById(id);
    if (!setor) {
      return res.status(404).json({ mensage: "Setor n\xE3o encontrado!" });
    }
    let camposAtualizados = { local, itens, status };
    if (local)
      camposAtualizados.local = local;
    if (itens)
      camposAtualizados.itens = itens;
    if (status)
      camposAtualizados.status = status;
    const setorAtualizado = yield SetorModel_default.findByIdAndUpdate(id, { local, itens, status }, { new: true });
    return res.status(200).json({ setorAtualizado, mensage: HttpStatus_default[200] });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_SetorController.deletarSetor = (req, res) => __async(_SetorController, null, function* () {
  try {
    const { id } = req.params;
    const setor = yield SetorModel_default.findById(id);
    if (!setor) {
      return res.status(404).json({ mensage: "Setor n\xE3o encontrado!" });
    }
    yield SetorModel_default.findByIdAndDelete(id);
    return res.status(200).json(HttpStatus_default[200]);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
var SetorController = _SetorController;

// src/routes/SetorRouter.ts
var import_express = __toESM(require("express"), 1);
var router = import_express.default.Router();
router.post("/setor", SetorController.criarSetor).get("/setor", SetorController.listarSetores).get("/setor/:id", SetorController.buscarSetor).patch("/setor/:id", SetorController.atualizarSetor).delete("/setor/:id", SetorController.deletarSetor);
var SetorRouter_default = router;
