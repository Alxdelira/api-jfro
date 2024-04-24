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

// src/app.ts
var import_express7 = __toESM(require("express"), 1);
var import_cors = __toESM(require("cors"), 1);

// src/config/db_config.ts
var import_mongoose = __toESM(require("mongoose"), 1);
var dotenv = __toESM(require("dotenv"), 1);
dotenv.config();
var dbUrl = process.env.DB_URL || "";
var dbOptions = {};
(() => __async(void 0, null, function* () {
  try {
    yield import_mongoose.default.connect(dbUrl, dbOptions);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}))();
var db = import_mongoose.default.connection;
var db_config_default = db;

// src/routes/index.ts
var dotenv4 = __toESM(require("dotenv"), 1);

// src/routes/UsuarioRouter.ts
var import_express = __toESM(require("express"), 1);

// src/models/UsuarioModel.ts
var import_mongoose2 = __toESM(require("mongoose"), 1);
var import_mongoose_paginate_v2 = __toESM(require("mongoose-paginate-v2"), 1);
var UsuarioSchema = new import_mongoose2.default.Schema(
  {
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
UsuarioSchema.plugin(import_mongoose_paginate_v2.default);
var UsuarioModel = import_mongoose2.default.model("usuarios", UsuarioSchema);
var UsuarioModel_default = UsuarioModel;

// src/controllers/UsuarioController.ts
var import_bcrypt = __toESM(require("bcrypt"), 1);

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

// src/controllers/UsuarioController.ts
var _UsuarioController = class _UsuarioController {
};
_UsuarioController.criarUsuario = (req, res) => __async(_UsuarioController, null, function* () {
  try {
    const { nome, email, matricula, senha } = req.body;
    const novoUsuario = new UsuarioModel_default({
      nome,
      email,
      matricula,
      senha
    });
    if (!nome || !email || !matricula || !senha) {
      return res.status(400).json(HttpStatus_default[400]);
    }
    if (senha.length < 8) {
      return res.status(400).json({ mensage: "A senha deve conter no m\xEDnimo 6 caracteres!" });
    }
    const usuario = yield UsuarioModel_default.findOne({ email });
    if (novoUsuario.matricula == (usuario == null ? void 0 : usuario.matricula)) {
      return res.status(400).json({ mensage: "Matr\xEDcula j\xE1 cadastrada!" });
    }
    if (novoUsuario.email == (usuario == null ? void 0 : usuario.email)) {
      return res.status(400).json({ mensage: "Email j\xE1 cadastrado!" });
    }
    let senhaCriptografada = yield import_bcrypt.default.hash(senha, 10);
    novoUsuario.senha = senhaCriptografada;
    const usuarioSalvo = yield novoUsuario.save();
    return res.status(201).json({ usuarioSalvo, mensage: HttpStatus_default[201] });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_UsuarioController.listarUsuarios = (req, res) => __async(_UsuarioController, null, function* () {
  try {
    const { nome, email, matricula, page, perPage } = req.query;
    const query = buildQuery({
      nome: nome == null ? void 0 : nome.toString(),
      email: email == null ? void 0 : email.toString(),
      matricula: matricula == null ? void 0 : matricula.toString()
    });
    const options = getPaginationOptions(page == null ? void 0 : page.toString(), perPage == null ? void 0 : perPage.toString());
    const usuarios = yield UsuarioModel_default.paginate(query, options);
    if (usuarios.docs.length === 0) {
      return res.status(404).json(HttpStatus_default[404]);
    }
    return res.status(200).json({ dados: usuarios.docs });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_UsuarioController.buscarUsuario = (req, res) => __async(_UsuarioController, null, function* () {
  try {
    const { id } = req.params;
    const usuario = yield UsuarioModel_default.findById(id);
    if (!usuario) {
      return res.status(404).json(HttpStatus_default[404]);
    }
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_UsuarioController.alterarUsuario = (req, res) => __async(_UsuarioController, null, function* () {
  try {
    const { id } = req.params;
    const { nome, email, matricula, senha, ativo } = req.body;
    const usuario = yield UsuarioModel_default.findById(id);
    if (!usuario) {
      return res.status(404).json(HttpStatus_default[404]);
    }
    let camposAtualizados = {};
    if (nome)
      camposAtualizados.nome = nome;
    if (email)
      camposAtualizados.email = email;
    if (matricula)
      camposAtualizados.matricula = matricula;
    if (ativo !== void 0)
      camposAtualizados.ativo = ativo;
    if (senha)
      camposAtualizados.senha = yield import_bcrypt.default.hash(senha, 10);
    const usuarioAtualizado = yield UsuarioModel_default.findByIdAndUpdate(id, camposAtualizados, { new: true });
    return res.status(200).json(usuarioAtualizado);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_UsuarioController.deletarUsuario = (req, res) => __async(_UsuarioController, null, function* () {
  try {
    const { id } = req.params;
    const usuario = yield UsuarioModel_default.findById(id);
    if (!usuario) {
      return res.status(404).json(HttpStatus_default[404]);
    }
    yield UsuarioModel_default.findByIdAndDelete(id);
    return res.status(200).json({ mensage: `Usu\xE1rio deletado com sucesso! ${HttpStatus_default[200]}` });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
var UsuarioController = _UsuarioController;

// src/routes/UsuarioRouter.ts
var router = import_express.default.Router();
router.post("/usuarios", UsuarioController.criarUsuario).get("/usuarios", UsuarioController.listarUsuarios).get("/usuarios/:id", UsuarioController.buscarUsuario).patch("/usuarios/:id", UsuarioController.alterarUsuario).delete("/usuarios/:id", UsuarioController.deletarUsuario);
var UsuarioRouter_default = router;

// src/routes/LoginRouter.ts
var import_express2 = __toESM(require("express"), 1);

// src/controllers/LoginController.ts
var import_bcrypt2 = __toESM(require("bcrypt"), 1);
var dotenv2 = __toESM(require("dotenv"), 1);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
dotenv2.config();
var secret = process.env.JWT_SECRET;
var _LoginController = class _LoginController {
};
_LoginController.login = (req, res) => __async(_LoginController, null, function* () {
  try {
    const { email, matricula, senha } = req.body;
    const usuario = yield UsuarioModel_default.findOne({ $or: [{ email }, { matricula }] }).select("+senha");
    if (!usuario) {
      return res.status(404).json(HttpStatus_default[404]);
    }
    const senhaCorreta = yield import_bcrypt2.default.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json(HttpStatus_default[401]);
    }
    const token = import_jsonwebtoken.default.sign({ id: usuario._id, email: usuario.email, matricula: usuario.matricula }, secret, {
      expiresIn: "1h"
    });
    return res.status(200).json({ token, usuario: { nome: usuario.nome, email: usuario.email, matricula: usuario.matricula } });
  } catch (error) {
    return res.status(500).json(HttpStatus_default[500]);
  }
});
var LoginController = _LoginController;

// src/routes/LoginRouter.ts
var router2 = import_express2.default.Router();
router2.post("/login", LoginController.login);
var LoginRouter_default = router2;

// src/models/SetorModel.ts
var import_mongoose3 = __toESM(require("mongoose"), 1);
var import_mongoose_paginate_v22 = __toESM(require("mongoose-paginate-v2"), 1);
var SetorSchema = new import_mongoose3.default.Schema(
  {
    local: {
      type: String,
      unique: true,
      required: true,
      index: true
    },
    itens: [
      {
        type: import_mongoose3.default.Schema.Types.ObjectId,
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
SetorSchema.plugin(import_mongoose_paginate_v22.default);
var SetorModel = import_mongoose3.default.model("setores", SetorSchema);
var SetorModel_default = SetorModel;

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
var import_express3 = __toESM(require("express"), 1);
var router3 = import_express3.default.Router();
router3.post("/setor", SetorController.criarSetor).get("/setor", SetorController.listarSetores).get("/setor/:id", SetorController.buscarSetor).patch("/setor/:id", SetorController.atualizarSetor).delete("/setor/:id", SetorController.deletarSetor);
var SetorRouter_default = router3;

// src/routes/BemRouter.ts
var import_express4 = __toESM(require("express"), 1);

// src/models/BemModel.ts
var import_mongoose4 = __toESM(require("mongoose"), 1);
var import_mongoose_paginate_v23 = __toESM(require("mongoose-paginate-v2"), 1);
var BemSchema = new import_mongoose4.default.Schema(
  {
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
      type: String,
      // Bem danificado, Bem em condições de uso, Bem inservivel
      default: "Bem em condi\xE7\xF5es de uso"
    },
    ativo: {
      type: String,
      default: "Ativo"
      // Ativo, Inativo, Pendente
    },
    uso: {
      type: Boolean,
      // Não está sendo usado
      default: false
    },
    descricao: {
      type: String,
      // Alterar para ter um maximo de texto
      maxlength: 256
    },
    inventario: {
      type: import_mongoose4.default.Schema.Types.ObjectId,
      ref: "inventarios",
      required: true
    },
    setor: {
      type: import_mongoose4.default.Schema.Types.ObjectId,
      ref: "setores",
      required: true
    },
    auditor: {
      type: import_mongoose4.default.Schema.Types.ObjectId,
      ref: "usuarios",
      required: true
    },
    responsavel: {
      type: import_mongoose4.default.Schema.Types.ObjectId,
      ref: "usuarios",
      required: true
    },
    imagem: {
      type: import_mongoose4.default.Schema.Types.ObjectId,
      ref: "imagens"
      // Incluir regra de negocio 
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);
BemSchema.index({ inventario: 1, tombo: 1 }, { unique: true });
BemSchema.plugin(import_mongoose_paginate_v23.default);
var BemModel = import_mongoose4.default.model("bens", BemSchema);
var BemModel_default = BemModel;

// src/controllers/BensControllers.ts
var _BensController = class _BensController {
};
_BensController.criarBem = (req, res) => __async(_BensController, null, function* () {
  try {
    const {
      tombo,
      nome,
      descricao,
      inventario,
      setor,
      auditor,
      responsavel,
      imagem
    } = req.body;
    const novoBem = new BemModel_default({
      tombo,
      nome,
      descricao,
      inventario,
      setor,
      auditor,
      responsavel,
      imagem
    });
    if (!tombo || !nome || !setor || !responsavel) {
      return res.status(400).json(HttpStatus_default[400]);
    }
    const bemSalvo = yield novoBem.save();
    return res.status(201).json({ bemSalvo, mensage: HttpStatus_default[201] });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_BensController.listarBens = (req, res) => __async(_BensController, null, function* () {
  try {
    const {
      tombo,
      nome,
      inventario,
      setor,
      auditor,
      responsavel,
      page,
      perPage
    } = req.query;
    const query = buildQuery({
      nome: nome == null ? void 0 : nome.toString(),
      tombo: tombo == null ? void 0 : tombo.toString(),
      inventario: inventario == null ? void 0 : inventario.toString(),
      setor: setor == null ? void 0 : setor.toString(),
      auditor: auditor == null ? void 0 : auditor.toString(),
      responsavel: responsavel == null ? void 0 : responsavel.toString()
    });
    const options = getPaginationOptions(page == null ? void 0 : page.toString(), perPage == null ? void 0 : perPage.toString());
    const bens = yield BemModel_default.paginate(query, options);
    if (bens.docs.length === 0) {
      return res.status(404).json({ mensage: HttpStatus_default[404] });
    }
    return res.status(200).json(bens);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_BensController.listarBemPorId = (req, res) => __async(_BensController, null, function* () {
  try {
    const { id } = req.params;
    const bem = yield BemModel_default.findById(id);
    if (!bem) {
      return res.status(404).json({ mensage: HttpStatus_default[404] });
    }
    return res.status(200).json(bem);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_BensController.atualizarBem = (req, res) => __async(_BensController, null, function* () {
  try {
    const { id } = req.params;
    const { tombo, nome, condicao, ativo, uso, descricao, inventario, setor, auditor, responsavel, imagem } = req.body;
    const bem = yield BemModel_default.findById(id);
    if (!bem) {
      return res.status(404).json({ mensage: HttpStatus_default[404] });
    }
    let camposAtualizados = {};
    if (tombo)
      camposAtualizados.tombo = tombo;
    if (nome)
      camposAtualizados.nome = nome;
    if (condicao)
      camposAtualizados.condicao = condicao;
    if (ativo !== void 0)
      camposAtualizados.ativo = ativo;
    if (uso)
      camposAtualizados.uso = uso;
    if (descricao)
      camposAtualizados.descricao = descricao;
    if (inventario)
      camposAtualizados.inventario = inventario;
    if (setor)
      camposAtualizados.setor = setor;
    if (auditor)
      camposAtualizados.auditor = auditor;
    if (responsavel)
      camposAtualizados.responsavel = responsavel;
    if (imagem)
      camposAtualizados.imagem = imagem;
    const bemAtualizado = yield BemModel_default.findByIdAndUpdate(id, camposAtualizados, { new: true });
    return res.status(200).json(bemAtualizado);
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
_BensController.deletarBem = (req, res) => __async(_BensController, null, function* () {
  try {
    const { id } = req.params;
    const bem = yield BemModel_default.findById(id);
    if (!bem) {
      return res.status(404).json({ mensage: HttpStatus_default[404] });
    }
    yield BemModel_default.findByIdAndDelete(id);
    return res.status(200).json({ mensage: "Bem deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error, mensage: HttpStatus_default[500] });
  }
});
var BensController = _BensController;

// src/routes/BemRouter.ts
var router4 = import_express4.default.Router();
router4.post("/bens", BensController.criarBem).get("/bens", BensController.listarBens).get("/bens/:id", BensController.listarBemPorId).patch("/bens/:id", BensController.atualizarBem).delete("/bens/:id", BensController.deletarBem);
var BemRouter_default = router4;

// src/routes/ImagemRouter.ts
var import_express5 = __toESM(require("express"), 1);

// src/controllers/ImagemController.ts
var import_fs = __toESM(require("fs"), 1);

// src/models/ImagemModel.ts
var import_mongoose5 = __toESM(require("mongoose"), 1);
var imagemSchema = new import_mongoose5.default.Schema(
  {
    tipo_arquivo: {
      type: String
    },
    enviado_por: {
      type: import_mongoose5.default.Types.ObjectId,
      ref: "usuarios"
    },
    caminho: {
      type: String
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
var ImagemModel = import_mongoose5.default.model("imagens", imagemSchema);
var ImagemModel_default = ImagemModel;

// src/controllers/ImagemController.ts
var ImagensControllers = class {
  static enviarImagem(req, res) {
    return __async(this, null, function* () {
      var _a, _b;
      if (!req.file) {
        return res.status(400).json({
          codigo: 400,
          mensagem: "Arquivo inv\xE1lido"
        });
      }
      const arquivo = req.file;
      const usuarioId = (_b = (_a = req.usuario) == null ? void 0 : _a._id) == null ? void 0 : _b.id;
      if (!usuarioId) {
        return res.status(401).json({
          codigo: 401,
          mensagem: "Usu\xE1rio n\xE3o autenticado"
        });
      }
      const imagemData = {
        id_imagem: arquivo.filename.split(".")[0],
        tipo_arquivo: arquivo.filename.split(".")[1],
        enviado_por: usuarioId,
        caminho: "/imagens/" + arquivo.filename
      };
      try {
        const imagem = new ImagemModel_default(imagemData);
        yield imagem.save();
        return res.status(201).json({
          codigo: 201,
          mensagem: "Imagem enviada com sucesso",
          dados: imagem
        });
      } catch (error) {
        console.error("Erro ao enviar imagem:", error);
        return res.status(500).json({ error, mensagem: HttpStatus_default[500] });
      }
    });
  }
  static mostrarImagem(req, res) {
    return __async(this, null, function* () {
      const { id } = req.params;
      try {
        const imagem = yield ImagemModel_default.findOne({ id_imagem: id });
        if (!imagem) {
          res.status(404).send("Imagem n\xE3o encontrada");
          return;
        }
        res.sendFile(imagem.caminho, { root: "." });
      } catch (error) {
        console.error("Erro ao buscar imagem:", error);
        res.status(500).send("Erro interno do servidor");
      }
    });
  }
  static deletarImagem(req, res) {
    return __async(this, null, function* () {
      const { id } = req.params;
      try {
        const imagem = yield ImagemModel_default.findOne({ id_imagem: id });
        if (!imagem) {
          res.status(404).send("Imagem n\xE3o encontrada");
          return;
        }
        import_fs.default.unlink(`imagens/${imagem.id_imagem}.${imagem.tipo_arquivo}`, (err) => __async(this, null, function* () {
          if (err) {
            console.error("Erro ao deletar imagem:", err);
            res.status(500).send("Erro interno do servidor");
            return;
          }
          yield imagem.deleteOne();
          res.send("Imagem deletada com sucesso");
        }));
      } catch (error) {
        console.error("Erro ao deletar imagem:", error);
        res.status(500).send("Erro interno do servidor");
      }
    });
  }
  static listarImagens(req, res) {
    return __async(this, null, function* () {
      try {
        const imagens = yield ImagemModel_default.find();
        res.status(200).json(imagens);
      } catch (error) {
        console.error("Erro ao listar imagens:", error);
        res.status(500).json({ error: 500, message: "Erro Interno no Servidor!" });
      }
    });
  }
};
var ImagemController_default = ImagensControllers;

// src/config/imagem_config.ts
var import_multer = __toESM(require("multer"), 1);
var import_fs2 = __toESM(require("fs"), 1);
var import_uuid = require("uuid");
var createStorage = (req, res, next) => {
  if (!import_fs2.default.existsSync("imagens")) {
    import_fs2.default.mkdirSync("imagens");
  }
  next();
};
var storage = import_multer.default.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "imagens");
  },
  filename: (req, file, cb) => {
    cb(null, (0, import_uuid.v4)() + "." + file.mimetype.split("/")[1]);
  }
});
var fileFilter = (req, file, cb) => {
  const errors = [];
  if (!/^image/.test(file.mimetype))
    errors.push("Tipo de arquivo inv\xE1lido, envie somente imagens");
  if (errors.length > 0)
    return cb(null, false);
  cb(null, true);
};
var upload = (0, import_multer.default)({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10
  }
});

// src/middlewares/AuthMiddleware.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var SECRET = process.env.JWT_SECRET || "";
var AuthMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Token de autentica\xE7\xE3o n\xE3o fornecido" });
    return;
  }
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    res.status(401).json({ message: "Formato de token inv\xE1lido" });
    return;
  }
  const token = parts[1];
  import_jsonwebtoken2.default.verify(token, SECRET, (err, decoded) => {
    if (err) {
      console.error("Erro durante a verifica\xE7\xE3o do token:", err.message);
      return res.status(401).json({ message: "Token inv\xE1lido" });
    }
    if (decoded) {
      req.usuario = { _id: decoded };
    }
    next();
  });
};
var AuthMiddleware_default = AuthMiddleware;

// src/routes/ImagemRouter.ts
var router5 = import_express5.default.Router();
router5.post("/imagem", AuthMiddleware_default, createStorage, upload.single("image"), ImagemController_default.enviarImagem).get("/imagem/:id", ImagemController_default.mostrarImagem).get("/imagem", ImagemController_default.listarImagens).delete("/imagem/:id", ImagemController_default.deletarImagem);
var ImagemRouter_default = router5;

// src/routes/InventarioRouter.ts
var import_express6 = __toESM(require("express"), 1);

// src/models/InventarioModel.ts
var import_mongoose6 = __toESM(require("mongoose"), 1);
var import_mongoose_paginate_v24 = __toESM(require("mongoose-paginate-v2"), 1);
var InventarioSchema = new import_mongoose6.default.Schema(
  {
    setor: {
      type: import_mongoose6.default.Schema.Types.ObjectId,
      ref: "setores",
      required: true
    },
    responsavel: {
      type: import_mongoose6.default.Schema.Types.ObjectId,
      ref: "usuarios",
      required: true
    },
    auditores: [
      {
        _id: {
          type: import_mongoose6.default.Schema.Types.ObjectId,
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
InventarioSchema.plugin(import_mongoose_paginate_v24.default);
var InventarioModel = import_mongoose6.default.model("inventarios", InventarioSchema);
var InventarioModel_default = InventarioModel;

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

// src/routes/InventarioRouter.ts
var router6 = import_express6.default.Router();
router6.post("/inventario", InventarioController.criarInventario).get("/inventario", InventarioController.listarInventarios).get("/inventario/:id", InventarioController.buscarInventario).patch("/inventario/:id", InventarioController.atualizarInventario).delete("/inventario/:id", InventarioController.deletarInventario);
var InventarioRouter_default = router6;

// src/routes/index.ts
dotenv4.config();
var routes = (app2) => {
  app2.route("/").get((req, res) => {
    res.status(200).redirect("/docs");
  });
  app2.use(
    LoginRouter_default,
    UsuarioRouter_default,
    SetorRouter_default,
    BemRouter_default,
    ImagemRouter_default,
    InventarioRouter_default
  );
};
var routes_default = routes;

// src/app.ts
function connect_db() {
  db_config_default.on("error", (error) => console.log(error));
  db_config_default.once("open", () => {
    console.log("Connected to database OK!");
  });
}
connect_db();
var app = (0, import_express7.default)();
app.use((0, import_cors.default)());
app.use(import_express7.default.json());
routes_default(app);
var app_default = app;

// src/server.ts
var dotenv5 = __toESM(require("dotenv"), 1);
var import_swagger_ui_express = __toESM(require("swagger-ui-express"), 1);
var import_swagger_jsdoc = __toESM(require("swagger-jsdoc"), 1);

// src/docs/schemas/imagemSchema.ts
var imageSchemas = {
  Imagem: {
    type: "array",
    items: {
      type: "object",
      properties: {
        tipo_arquivo: {
          type: "string"
        },
        enviado_por: {
          type: "string"
        },
        caminho: {
          type: "string"
        },
        id_imagem: {
          type: "string"
        },
        criado_em: {
          type: "string",
          format: "date-time"
        },
        atualizado_em: {
          type: "string",
          format: "date-time"
        },
        _id: {
          type: "string"
        }
      }
    }
  }
};

// src/docs/paths/imagemPaths.ts
var imagePaths = {
  "/imagem": {
    get: {
      tags: ["Imagens"],
      summary: "Lista todas as imagens",
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Imagem"
              }
            }
          }
        },
        401: {
          description: HttpStatus_default[401]
        },
        403: {
          description: HttpStatus_default[403]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    post: {
      tags: ["Imagens"],
      summary: "Envia uma imagem",
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                image: {
                  type: "string",
                  format: "binary"
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: HttpStatus_default[201],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Imagem"
              }
            }
          }
        },
        400: {
          description: HttpStatus_default[400]
        },
        401: {
          description: HttpStatus_default[401]
        },
        403: {
          description: HttpStatus_default[403]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  },
  "/imagem/{id}": {
    delete: {
      tags: ["Imagens"],
      summary: "Deleta uma imagem",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Id da imagem que vai ser deletada",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200]
        },
        401: {
          description: HttpStatus_default[401]
        },
        403: {
          description: HttpStatus_default[403]
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    get: {
      tags: ["Imagens"],
      summary: "Recupera uma imagem pelo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Id da imagem que vai ser exibida",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            image: {
              schema: {
                type: "string",
                format: "binary"
              }
            }
          }
        },
        401: {
          description: HttpStatus_default[401]
        },
        403: {
          description: HttpStatus_default[403]
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  }
};

// src/docs/paths/loginPaths.ts
var loginPaths = {
  "/login": {
    post: {
      tags: ["Login"],
      description: "Esta fun\xE7\xE3o \xE9 respons\xE1vel por logar um usu\xE1rio na API",
      summary: "Login de usu\xE1rio",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "alx.delira@gmail.com"
                },
                senha: {
                  type: "string",
                  example: "12345678"
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: "Login efetuado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU3ODBlMWRmZWZiMWUyN2ViMmQ5MSIsIm5vbWUiOiJEZXYgT2xpdmVpcmEiLCJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJhdGl2byI6dHJ1ZSwiaWF0IjoxNzA5NTk4OTExLCJleHAiOjE3MTA4OTQ5MTF9.KvhEcRDZ37XZsv9J9FcqEGFlDYvC_imuT32PulE3sbA"
                  },
                  usuario: {
                    type: "object",
                    properties: {
                      nome: {
                        type: "string",
                        example: "John Doe"
                      },
                      email: {
                        type: "string",
                        example: "dev@gmail.com"
                      },
                      matricula: {
                        type: "string",
                        example: "RO007"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Erro ao validar o login",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    example: "[]"
                  },
                  error: {
                    type: "boolean",
                    example: "true"
                  },
                  code: {
                    type: "integer",
                    example: "422"
                  },
                  message: {
                    type: "string",
                    example: HttpStatus_default[422]
                  },
                  errors: {
                    type: "array",
                    example: ["Usu\xE1rio ou senha incorretos!"]
                  }
                }
              }
            }
          }
        },
        422: {
          description: "Erro ao validar o email",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    example: "[]"
                  },
                  error: {
                    type: "bollean",
                    example: "true"
                  },
                  code: {
                    type: "integer",
                    example: "422"
                  },
                  message: {
                    type: "string",
                    example: HttpStatus_default[422]
                  },
                  errors: {
                    type: "array",
                    example: ["Email no formato inv\xE1lido!"]
                  }
                }
              }
            }
          }
        },
        500: {
          description: "Erro interno",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    example: "[]"
                  },
                  error: {
                    type: "bollean",
                    example: "false"
                  },
                  code: {
                    type: "integer",
                    example: "500"
                  },
                  message: {
                    type: "string",
                    example: HttpStatus_default[500]
                  },
                  errors: {
                    type: "array",
                    example: ["Vari\xE1vel Teste n\xE3o declarada!"]
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

// src/docs/paths/usuarioPaths.ts
var usuarioPath = {
  "/usuarios": {
    get: {
      tags: ["Usu\xE1rios"],
      summary: "Listar Usu\xE1rios",
      description: "Lista todos os usu\xE1rios cadastrados no sistema",
      parameters: [
        {
          name: "nome",
          in: "query",
          description: "Nome do usu\xE1rio",
          schema: {
            type: "string"
          }
        },
        {
          name: "email",
          in: "query",
          description: "Email do usu\xE1rio",
          schema: {
            type: "string"
          }
        },
        {
          name: "matricula",
          in: "query",
          description: "Matr\xEDcula do usu\xE1rio",
          schema: {
            type: "string"
          }
        },
        {
          name: "page",
          in: "query",
          description: "N\xFAmero da p\xE1gina",
          schema: {
            type: "number"
          }
        },
        {
          name: "perPage",
          in: "query",
          description: "Itens por p\xE1gina",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Usuario"
                }
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    post: {
      tags: ["Usu\xE1rios"],
      summary: "Criar Usu\xE1rio",
      description: "Cria um novo usu\xE1rio",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Usuario"
            }
          }
        }
      },
      responses: {
        201: {
          description: HttpStatus_default[201],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  },
  "/usuarios/{id}": {
    get: {
      tags: ["Usu\xE1rios"],
      summary: "Obter Usu\xE1rio por ID",
      description: "Retorna um usu\xE1rio por ID",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usu\xE1rio",
          required: true,
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    patch: {
      tags: ["Usu\xE1rios"],
      summary: "Atualizar Usu\xE1rio",
      description: "Atualiza um usu\xE1rio",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usu\xE1rio",
          required: true,
          schema: {
            type: "string"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Usuario"
            }
          }
        }
      },
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    delete: {
      tags: ["Usu\xE1rios"],
      summary: "Deletar Usu\xE1rio",
      description: "Deleta um usu\xE1rio por ID",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usu\xE1rio",
          required: true,
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        204: {
          description: HttpStatus_default[204]
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  }
};

// src/docs/schemas/usuarioSchema.ts
var usuarioSchema = {
  Usuario: {
    type: "object",
    properties: {
      nome: {
        type: "string",
        description: "Nome do usu\xE1rio",
        example: "Jo\xE3o da Silva"
      },
      matricula: {
        type: "string",
        description: "Matricula do usuario",
        example: "ro780ps"
      },
      email: {
        type: "string",
        description: "E-mail do usu\xE1rio",
        example: "joao@example.com"
      },
      senha: {
        type: "string",
        description: "Senha do usu\xE1rio",
        example: "senha123"
      },
      ativo: {
        type: "boolean",
        description: "Se o usu\xE1rio est\xE1 ativo",
        example: true
      }
    }
  }
};

// src/docs/schemas/bemSchema.ts
var bemSchema = {
  Bens: {
    type: "object",
    properties: {
      tombo: {
        type: "number"
      },
      indentificado: {
        type: "boolean"
      },
      localizado: {
        type: "boolean"
      },
      nome: {
        type: "string"
      },
      condicao: {
        type: "string"
      },
      ativo: {
        type: "string"
      },
      uso: {
        type: "boolean"
      },
      descricao: {
        type: "string"
      },
      inventario: {
        type: "string"
      },
      setor: {
        type: "string"
      },
      auditor: {
        type: "string"
      },
      responsavel: {
        type: "string"
      },
      imagem: {
        type: "string"
      }
    }
  }
};

// src/docs/paths/bemPaths.ts
var bensPaths = {
  "/bens": {
    post: {
      tags: ["Bens"],
      summary: "Cadastra um item no Invent\xE1rio",
      description: "Fa\xE7a o cadastro de um item no invent\xE1rio.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Bens"
            }
          }
        }
      },
      responses: {
        201: {
          description: "Item cadastrado com sucesso!",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bens"
              }
            }
          }
        },
        500: {
          description: "Erro interno no servidor"
        }
      }
    },
    get: {
      tags: ["Bens"],
      summary: "Lista todos os bens",
      description: "Retorna uma lista de todos os bens cadastrados no invent\xE1rio.",
      parameters: [
        {
          in: "query",
          name: "tombo",
          required: false,
          description: "N\xFAmero do tombo do bem",
          schema: {
            type: "number"
          }
        },
        {
          in: "query",
          name: "nome",
          required: false,
          description: "Nome do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "condicao",
          required: false,
          description: "Condi\xE7\xE3o do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "ativo",
          required: false,
          description: "Ativo ou inativo",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "inventario",
          required: false,
          description: "Invent\xE1rio do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "setor",
          required: false,
          description: "Setor do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "auditor",
          required: false,
          description: "Auditor do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "responsavel",
          required: false,
          description: "Respons\xE1vel pelo bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "page",
          required: false,
          description: "N\xFAmero da p\xE1gina",
          schema: {
            type: "number"
          }
        },
        {
          in: "query",
          name: "perPage",
          required: false,
          description: "Itens por p\xE1gina",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: "Retorna os bens cadastrados no invent\xE1rio.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bens"
              }
            }
          }
        },
        404: {
          description: "Nenhum bem cadastrado."
        },
        500: {
          description: "Erro interno no servidor."
        }
      }
    }
  },
  "/bens/{id}": {
    get: {
      tags: ["Bens"],
      summary: "Busca um bem pelo tombo",
      description: "Retorna um bem espec\xEDfico pelo n\xFAmero do tombo.",
      parameters: [
        {
          in: "path",
          name: "tombo",
          required: true,
          description: "N\xFAmero do tombo do bem",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: "Retorna o bem solicitado.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bens"
              }
            }
          }
        },
        404: {
          description: "Bem n\xE3o encontrado."
        },
        500: {
          description: "Erro interno no servidor."
        }
      }
    },
    patch: {
      tags: ["Bens"],
      summary: "Atualiza um bem",
      description: "Atualiza um bem espec\xEDfico pelo n\xFAmero do tombo.",
      parameters: [
        {
          in: "path",
          name: "tombo",
          required: true,
          description: "N\xFAmero do tombo do bem",
          schema: {
            type: "number"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Bens"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Bem atualizado com sucesso.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bens"
              }
            }
          }
        },
        404: {
          description: "Bem n\xE3o encontrado."
        },
        500: {
          description: "Erro interno no servidor."
        }
      }
    },
    delete: {
      tags: ["Bens"],
      summary: "Deleta um bem",
      description: "Deleta um bem espec\xEDfico pelo n\xFAmero do tombo.",
      parameters: [
        {
          in: "path",
          name: "tombo",
          required: true,
          description: "N\xFAmero do tombo do bem",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: "Bem deletado com sucesso."
        },
        404: {
          description: "Bem n\xE3o encontrado."
        },
        500: {
          description: "Erro interno no servidor."
        }
      }
    }
  }
};

// src/docs/paths/setorPaths.ts
var setorPaths = {
  "/setor": {
    post: {
      tags: ["Setores"],
      summary: "Cadastrar um novo setor",
      description: "Fa\xE7a o cadastro de um novo setor.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Setor"
            }
          }
        }
      },
      responses: {
        201: {
          description: "Setor cadastrado com sucesso!",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Setor"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    get: {
      tags: ["Setores"],
      summary: "Listar todos os setores",
      description: "Retorna uma lista de todos os setores cadastrados.",
      parameters: [
        {
          in: "query",
          name: "local",
          description: "Local do setor",
          schema: {
            type: "string"
          }
        },
        {},
        {
          in: "query",
          name: "page",
          description: "N\xFAmero da p\xE1gina",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "perPage",
          description: "Itens por p\xE1gina",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Retorna os setores cadastrados.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Setor"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  },
  "/setor/{id}": {
    get: {
      tags: ["Setores"],
      summary: "Buscar setor por ID",
      description: "Retorna um setor com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do setor",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Retorna o setor encontrado.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Setor"
              }
            }
          }
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    patch: {
      tags: ["Setores"],
      summary: "Atualizar um setor",
      description: "Atualiza um setor existente com novos dados.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do setor",
          schema: {
            type: "string"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Setor"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Setor atualizado com sucesso!",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Setor"
              }
            }
          }
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    delete: {
      tags: ["Setores"],
      summary: "Excluir um setor",
      description: "Remove um setor com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do setor",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200]
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  }
};

// src/docs/schemas/setor.schema.ts
var setorSchema = {
  Setor: {
    type: "object",
    properties: {
      local: {
        type: "string",
        description: "Local do setor",
        example: "Sala 101"
      },
      itens: {
        type: "array",
        description: "Itens do setor",
        items: {
          type: "string"
        }
      },
      status: {
        type: "string",
        description: "Status do setor",
        example: "Ativo"
      }
    }
  }
};

// src/docs/schemas/inventarioSchema.ts
var inventarioSchema = {
  Inventario: {
    type: "object",
    properties: {
      setor: {
        type: "string"
      },
      responsavel: {
        type: "string"
      },
      auditores: {
        type: "array",
        items: {
          type: "string"
        }
      },
      data_inicio: {
        type: "string"
      },
      data_fim: {
        type: "string"
      }
    }
  }
};

// src/docs/paths/inventarioPaths.ts
var inventarioPaths = {
  "/inventario": {
    post: {
      tags: ["Invent\xE1rios"],
      summary: "Cadastrar um novo item no invent\xE1rio",
      description: "Fa\xE7a o cadastro de um novo item no invent\xE1rio.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Inventario"
            }
          }
        }
      },
      responses: {
        201: {
          description: "Item cadastrado com sucesso!",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    get: {
      tags: ["Invent\xE1rios"],
      summary: "Listar todos os itens do invent\xE1rio",
      description: "Retorna uma lista de todos os itens cadastrados no invent\xE1rio.",
      parameters: [
        {
          in: "query",
          name: "nome",
          description: "Nome do item",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "local",
          description: "Local do item",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "page",
          description: "N\xFAmero da p\xE1gina",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "perPage",
          description: "Itens por p\xE1gina",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Itens encontrados",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        404: {
          description: "Nenhum item encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  },
  "/inventario/{id}": {
    get: {
      tags: ["Invent\xE1rios"],
      summary: "Buscar um item do invent\xE1rio",
      description: "Retorna um item do invent\xE1rio com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do item",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Item encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        404: {
          description: "Item n\xE3o encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    patch: {
      tags: ["Invent\xE1rios"],
      summary: "Atualizar um item do invent\xE1rio",
      description: "Atualiza um item do invent\xE1rio com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do item",
          schema: {
            type: "string"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Inventario"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Item atualizado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        404: {
          description: "Item n\xE3o encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    delete: {
      tags: ["Invent\xE1rios"],
      summary: "Deletar um item do invent\xE1rio",
      description: "Deleta um item do invent\xE1rio com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do item",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Item deletado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        404: {
          description: "Item n\xE3o encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  }
};

// src/docs/head.ts
var swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API-JFRO ( Controle de invent\xE1rio )",
      description: "Esta API foi desenvolvida com o prop\xF3sito espec\xEDfico de integrar-se perfeitamente a um aplicativo m\xF3vel dedicado ao controle de invent\xE1rio.\n\nEla oferece uma gama abrangente de rotas e funcionalidades essenciais para o gerenciamento eficaz de usu\xE1rios, imagens, ativos, setores e invent\xE1rios. Ao adotar esta API, os desenvolvedores t\xEAm \xE0 disposi\xE7\xE3o todas as ferramentas necess\xE1rias para criar uma experi\xEAncia de usu\xE1rio fluida e completa.\n\nDesde a autentica\xE7\xE3o e gerenciamento de usu\xE1rios at\xE9 o armazenamento e manipula\xE7\xE3o de imagens de ativos, passando pela organiza\xE7\xE3o estruturada de setores e invent\xE1rios, cada aspecto do aplicativo \xE9 cuidadosamente atendido.\n\nAtrav\xE9s da utiliza\xE7\xE3o das diversas rotas dispon\xEDveis, \xE9 poss\xEDvel realizar opera\xE7\xF5es como adicionar, atualizar, visualizar e excluir dados, garantindo assim um controle total sobre o sistema de invent\xE1rio.\n\nEm resumo, esta API representa n\xE3o apenas uma solu\xE7\xE3o t\xE9cnica robusta, mas tamb\xE9m uma base s\xF3lida para o desenvolvimento de um aplicativo m\xF3vel de controle de invent\xE1rio eficiente e intuitivo.",
      version: "0.1.0",
      license: {
        name: "LICENSE-MIT",
        url: "https://github.com/Alxdelira/api-jfro/blob/main/LICENSE"
      }
    },
    externalDocs: {
      description: "Documenta\xE7\xE3o detalhada",
      url: "https://github.com/Alxdelira/api-jfro"
    },
    servers: [
      {
        url: "https://api-jfro.vercel.app",
        description: "API em produ\xE7\xE3o"
      },
      {
        url: `http://localhost:${process.env.PORT}`,
        description: "API em desenvolvimento"
      }
    ],
    components: {
      securitySchemes: {
        jwtAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },
      schemas: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, imageSchemas), usuarioSchema), bemSchema), setorSchema), inventarioSchema)
    },
    security: [
      {
        jwtAuth: []
      }
    ],
    tags: [
      { name: "Login", description: "Login do usu\xE1rio" },
      { name: "Usu\xE1rios", description: "Opera\xE7\xF5es relacionadas aos usu\xE1rios" },
      //{ name: "Recuperar senha", description: "Recuperação de senha" },
      { name: "Imagens", description: "Opera\xE7\xF5es relacionadas a imagens" },
      // { name: "Relatórios", description: "Relatórios do sistema" },
      { name: "Bens", description: "Itens do invent\xE1rio" },
      { name: "Invent\xE1rios", description: "Opera\xE7\xF5es relacionadas a invent\xE1rios" },
      { name: "Setores", description: "Setores do invent\xE1rio" }
    ],
    paths: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, imagePaths), loginPaths), usuarioPath), bensPaths), setorPaths), inventarioPaths)
  },
  apis: ["./src/routes/*.ts"]
};
var head_default = swaggerOptions;

// src/server.ts
dotenv5.config();
var port = process.env.PORT || 3010;
var CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.7/swagger-ui.min.css";
var swaggerDocs = (0, import_swagger_jsdoc.default)(head_default);
app_default.use("/docs", import_swagger_ui_express.default.serve, import_swagger_ui_express.default.setup(swaggerDocs, { customCssUrl: CSS_URL }));
app_default.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
