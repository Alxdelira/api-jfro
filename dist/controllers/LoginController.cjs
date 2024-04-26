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

// src/controllers/LoginController.ts
var LoginController_exports = {};
__export(LoginController_exports, {
  default: () => LoginController
});
module.exports = __toCommonJS(LoginController_exports);

// src/models/UsuarioModel.ts
var import_mongoose = __toESM(require("mongoose"), 1);
var import_mongoose_paginate_v2 = __toESM(require("mongoose-paginate-v2"), 1);
var UsuarioSchema = new import_mongoose.default.Schema(
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
UsuarioSchema.plugin(import_mongoose_paginate_v2.default);
var UsuarioModel = import_mongoose.default.model("usuarios", UsuarioSchema);
var UsuarioModel_default = UsuarioModel;

// src/controllers/LoginController.ts
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

// src/controllers/LoginController.ts
var dotenv3 = __toESM(require("dotenv"), 1);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var import_crypto = __toESM(require("crypto"), 1);

// src/config/mailer_config.ts
var import_nodemailer = __toESM(require("nodemailer"), 1);
var dotenv = __toESM(require("dotenv"), 1);
dotenv.config();
function sendMail(infoEmail, res) {
  return __async(this, null, function* () {
    try {
      function main() {
        return __async(this, null, function* () {
          let transporter = import_nodemailer.default.createTransport({
            host: process.env.HOST_EMAIL,
            port: process.env.PORT_EMAIL,
            secure: false,
            auth: {
              user: process.env.USER_EMAIL,
              pass: process.env.PASS_EMAIL
            }
          });
          yield transporter.sendMail(infoEmail);
        });
      }
      main().catch(console.error);
    } catch (error) {
      return res.status(500).json(HttpStatus_default[500]);
    }
  });
}
var mailer_config_default = sendMail;

// src/services/templateMail.ts
var dotenv2 = __toESM(require("dotenv"), 1);
dotenv2.config();
var templateMail = (token, email, nome) => {
  const Logo = "https://github.com/Alxdelira/Alxdelira/blob/main/.github/assets/logo.png?raw=true";
  return `
    <html>
        <head>
            <style>
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f5f5f5;
                }
                .content {
                    width: 50%;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .content h1 {
                    text-align: center;
                    color: #333;
                }
                .content p {
                    text-align: center;
                    color: #333;
                }
                .content a {
                    display: block;
                    text-align: center;
                    color: #fff;
                    background-color: #007bff;
                    padding: 10px;
                    border-radius: 5px;
                    text-decoration: none;
                }
                .logo {
                    display: block;
                    margin: 0 auto;
                    width: 300px;
                }
                .footer {
                    display: block;
                    margin: 0 auto;
                    width: 100%;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="content">
                    <img class="logo" src="${Logo}" alt="Logo" />
                    <h1>Recupera\xE7\xE3o de senha</h1>
                    <p>Ol\xE1 ${nome}, voc\xEA solicitou a recupera\xE7\xE3o de senha!</p>
                    <p>Clique no bot\xE3o abaixo para alterar sua senha</p>
                    <a href="${process.env.FRONT_URL}alterarsenha?token=${token}&email=${email}">Recuperar senha</a>
                    <img class="footer" src="https://raw.githubusercontent.com/Alxdelira/api-jfro/main/src/assets/footer.png" alt="Footer" />
                </div>
            </div>
        </body>
    </html>
    `;
};

// src/controllers/LoginController.ts
dotenv3.config();
var secret = process.env.JWT_SECRET;
var _LoginController = class _LoginController {
  static alteraSenha(req, res) {
    return __async(this, null, function* () {
      try {
        const { email } = req.query;
        const { senha } = req.body;
        yield UsuarioModel_default.findOneAndUpdate({ email }, {
          senha: import_bcrypt.default.hashSync(senha, 10),
          tokenRecuperaSenha: null
        });
        res.status(200).json(HttpStatus_default[200]);
      } catch (err) {
        return res.status(500).json(HttpStatus_default[500]);
      }
    });
  }
};
_LoginController.login = (req, res) => __async(_LoginController, null, function* () {
  try {
    const { email, matricula, senha } = req.body;
    const usuario = yield UsuarioModel_default.findOne({ $or: [{ email }, { matricula }] }).select("+senha");
    if (!usuario) {
      return res.status(404).json(HttpStatus_default[404]);
    }
    const senhaCorreta = yield import_bcrypt.default.compare(senha, usuario.senha);
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
_LoginController.esqueciSenha = (req, res) => __async(_LoginController, null, function* () {
  try {
    const { email } = req.body;
    const findUser = yield UsuarioModel_default.findOne({ email });
    if (!findUser) {
      return res.status(404).json(HttpStatus_default[404]);
    }
    const secret2 = process.env.JWT_SECRET || " ";
    const token = import_jsonwebtoken.default.sign({ id: findUser == null ? void 0 : findUser._id, email: findUser == null ? void 0 : findUser.email, nome: findUser == null ? void 0 : findUser.nome }, secret2, {
      expiresIn: process.env.EXPIREINRECUPERASENHA
    });
    if (!token) {
      return res.status(500).json(HttpStatus_default[500]);
    }
    yield UsuarioModel_default.findByIdAndUpdate(findUser == null ? void 0 : findUser._id, {
      $set: { tokenRecuperaSenha: token }
    });
    let info = {
      from: '"Levantamento Patrimonial: Altera\xE7\xE3o de Senha " <' + process.env.USER_EMAIL + ">",
      to: findUser == null ? void 0 : findUser.email,
      subject: "Solicita\xE7\xE3o de recupera\xE7\xE3o de senha - Solicita\xE7\xE3o #" + import_crypto.default.randomBytes(6).toString("hex"),
      html: templateMail(token, findUser == null ? void 0 : findUser.email, findUser == null ? void 0 : findUser.nome)
    };
    yield mailer_config_default(info, res).then(() => {
      return res.status(200).json({ message: "Email enviado com sucesso!", token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(HttpStatus_default[500]);
  }
});
var LoginController = _LoginController;
