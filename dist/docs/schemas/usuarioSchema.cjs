"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/docs/schemas/usuarioSchema.ts
var usuarioSchema_exports = {};
__export(usuarioSchema_exports, {
  usuarioSchema: () => usuarioSchema
});
module.exports = __toCommonJS(usuarioSchema_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  usuarioSchema
});
