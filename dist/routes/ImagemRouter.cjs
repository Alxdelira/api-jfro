"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/routes/ImagemRouter.ts
var ImagemRouter_exports = {};
__export(ImagemRouter_exports, {
  default: () => ImagemRouter_default
});
module.exports = __toCommonJS(ImagemRouter_exports);
var import_express = __toESM(require("express"), 1);

// src/controllers/ImagemController.ts
var import_fs = __toESM(require("fs"), 1);

// src/models/ImagemModel.ts
var import_mongoose = __toESM(require("mongoose"), 1);
var imagemSchema = new import_mongoose.default.Schema(
  {
    tipo_arquivo: {
      type: String
    },
    enviado_por: {
      type: import_mongoose.default.Types.ObjectId,
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
var ImagemModel = import_mongoose.default.model("imagens", imagemSchema);
var ImagemModel_default = ImagemModel;

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
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
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
  import_jsonwebtoken.default.verify(token, SECRET, (err, decoded) => {
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
var router = import_express.default.Router();
router.post("/imagem", AuthMiddleware_default, createStorage, upload.single("image"), ImagemController_default.enviarImagem).get("/imagem/:id", ImagemController_default.mostrarImagem).get("/imagem", ImagemController_default.listarImagens).delete("/imagem/:id", ImagemController_default.deletarImagem);
var ImagemRouter_default = router;
