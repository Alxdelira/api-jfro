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

// src/models/UsuarioModel.ts
var UsuarioModel_exports = {};
__export(UsuarioModel_exports, {
  default: () => UsuarioModel_default
});
module.exports = __toCommonJS(UsuarioModel_exports);
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
