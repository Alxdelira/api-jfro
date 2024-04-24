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

// src/docs/schemas/inventarioSchema.ts
var inventarioSchema_exports = {};
__export(inventarioSchema_exports, {
  inventarioSchema: () => inventarioSchema
});
module.exports = __toCommonJS(inventarioSchema_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  inventarioSchema
});
