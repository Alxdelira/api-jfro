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

// src/docs/schemas/bemSchema.ts
var bemSchema_exports = {};
__export(bemSchema_exports, {
  bemSchema: () => bemSchema
});
module.exports = __toCommonJS(bemSchema_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bemSchema
});
