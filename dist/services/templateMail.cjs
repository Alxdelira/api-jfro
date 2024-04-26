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

// src/services/templateMail.ts
var templateMail_exports = {};
__export(templateMail_exports, {
  templateMail: () => templateMail
});
module.exports = __toCommonJS(templateMail_exports);
var dotenv = __toESM(require("dotenv"), 1);
dotenv.config();
var templateMail = (token, email, nome) => {
  const Logo = "https://github.com/Alxdelira/Alxdelira/blob/main/.github/assets/logo.png?raw=true";
  return `
    <html>
        <head>
            <style>
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f5f5f5;
                }
                .content {
                    width: 50%;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .content h1 {
                    text-align: center;
                    color: #333;
                }
                .content p {
                    text-align: center;
                    color: #333;
                }
                .content a {
                    display: block;
                    text-align: center;
                    color: #fff;
                    background-color: #007bff;
                    padding: 10px;
                    border-radius: 5px;
                    text-decoration: none;
                }
                .logo {
                    display: block;
                    margin: 0 auto;
                    width: 300px;
                }
                .footer {
                    display: block;
                    margin: 0 auto;
                    width: 100%;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="content">
                    <img class="logo" src="${Logo}" alt="Logo" />
                    <h1>Recupera\xE7\xE3o de senha</h1>
                    <p>Ol\xE1 ${nome}, voc\xEA solicitou a recupera\xE7\xE3o de senha!</p>
                    <p>Clique no bot\xE3o abaixo para alterar sua senha</p>
                    <a href="${process.env.FRONT_URL}alterarsenha?token=${token}&email=${email}">Recuperar senha</a>
                    <img class="footer" src="https://raw.githubusercontent.com/Alxdelira/api-jfro/main/src/assets/footer.png" alt="Footer" />
                </div>
            </div>
        </body>
    </html>
    `;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  templateMail
});
