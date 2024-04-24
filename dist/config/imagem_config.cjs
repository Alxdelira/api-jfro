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

// src/config/imagem_config.ts
var imagem_config_exports = {};
__export(imagem_config_exports, {
  createStorage: () => createStorage,
  upload: () => upload
});
module.exports = __toCommonJS(imagem_config_exports);
var import_multer = __toESM(require("multer"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_uuid = require("uuid");
var createStorage = (req, res, next) => {
  if (!import_fs.default.existsSync("imagens")) {
    import_fs.default.mkdirSync("imagens");
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createStorage,
  upload
});
