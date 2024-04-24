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

// src/models/BemModel.ts
var BemModel_exports = {};
__export(BemModel_exports, {
  default: () => BemModel_default
});
module.exports = __toCommonJS(BemModel_exports);
var import_mongoose = __toESM(require("mongoose"), 1);
var import_mongoose_paginate_v2 = __toESM(require("mongoose-paginate-v2"), 1);
var BemSchema = new import_mongoose.default.Schema(
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
      type: import_mongoose.default.Schema.Types.ObjectId,
      ref: "inventarios",
      required: true
    },
    setor: {
      type: import_mongoose.default.Schema.Types.ObjectId,
      ref: "setores",
      required: true
    },
    auditor: {
      type: import_mongoose.default.Schema.Types.ObjectId,
      ref: "usuarios",
      required: true
    },
    responsavel: {
      type: import_mongoose.default.Schema.Types.ObjectId,
      ref: "usuarios",
      required: true
    },
    imagem: {
      type: import_mongoose.default.Schema.Types.ObjectId,
      ref: "imagens"
      // Incluir regra de negocio 
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);
BemSchema.index({ inventario: 1, tombo: 1 }, { unique: true });
BemSchema.plugin(import_mongoose_paginate_v2.default);
var BemModel = import_mongoose.default.model("bens", BemSchema);
var BemModel_default = BemModel;
