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

// src/models/ImagemModel.ts
var ImagemModel_exports = {};
__export(ImagemModel_exports, {
  default: () => ImagemModel_default
});
module.exports = __toCommonJS(ImagemModel_exports);
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
