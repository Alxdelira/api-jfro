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

// src/middlewares/AuthMiddleware.ts
var AuthMiddleware_exports = {};
__export(AuthMiddleware_exports, {
  default: () => AuthMiddleware_default
});
module.exports = __toCommonJS(AuthMiddleware_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var SECRET = process.env.JWT_SECRET || "";
var AuthMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Token de autentica\xE7\xE3o n\xE3o fornecido" });
    return;
  }
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    res.status(401).json({ message: "Formato de token inv\xE1lido" });
    return;
  }
  const token = parts[1];
  import_jsonwebtoken.default.verify(token, SECRET, (err, decoded) => {
    if (err) {
      console.error("Erro durante a verifica\xE7\xE3o do token:", err.message);
      return res.status(401).json({ message: "Token inv\xE1lido" });
    }
    if (decoded) {
      req.usuario = { _id: decoded };
    }
    next();
  });
};
var AuthMiddleware_default = AuthMiddleware;
