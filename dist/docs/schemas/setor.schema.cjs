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

// src/docs/schemas/setor.schema.ts
var setor_schema_exports = {};
__export(setor_schema_exports, {
  setorSchema: () => setorSchema
});
module.exports = __toCommonJS(setor_schema_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setorSchema
});
