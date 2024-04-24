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

// src/models/InventarioModel.ts
var InventarioModel_exports = {};
__export(InventarioModel_exports, {
  default: () => InventarioModel_default
});
module.exports = __toCommonJS(InventarioModel_exports);
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
