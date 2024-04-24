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

// src/docs/paths/bemPaths.ts
var bemPaths_exports = {};
__export(bemPaths_exports, {
  bensPaths: () => bensPaths
});
module.exports = __toCommonJS(bemPaths_exports);
var bensPaths = {
  "/bens": {
    post: {
      tags: ["Bens"],
      summary: "Cadastra um item no Invent\xE1rio",
      description: "Fa\xE7a o cadastro de um item no invent\xE1rio.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Bens"
            }
          }
        }
      },
      responses: {
        201: {
          description: "Item cadastrado com sucesso!",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bens"
              }
            }
          }
        },
        500: {
          description: "Erro interno no servidor"
        }
      }
    },
    get: {
      tags: ["Bens"],
      summary: "Lista todos os bens",
      description: "Retorna uma lista de todos os bens cadastrados no invent\xE1rio.",
      parameters: [
        {
          in: "query",
          name: "tombo",
          required: false,
          description: "N\xFAmero do tombo do bem",
          schema: {
            type: "number"
          }
        },
        {
          in: "query",
          name: "nome",
          required: false,
          description: "Nome do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "condicao",
          required: false,
          description: "Condi\xE7\xE3o do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "ativo",
          required: false,
          description: "Ativo ou inativo",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "inventario",
          required: false,
          description: "Invent\xE1rio do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "setor",
          required: false,
          description: "Setor do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "auditor",
          required: false,
          description: "Auditor do bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "responsavel",
          required: false,
          description: "Respons\xE1vel pelo bem",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "page",
          required: false,
          description: "N\xFAmero da p\xE1gina",
          schema: {
            type: "number"
          }
        },
        {
          in: "query",
          name: "perPage",
          required: false,
          description: "Itens por p\xE1gina",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: "Retorna os bens cadastrados no invent\xE1rio.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bens"
              }
            }
          }
        },
        404: {
          description: "Nenhum bem cadastrado."
        },
        500: {
          description: "Erro interno no servidor."
        }
      }
    }
  },
  "/bens/{id}": {
    get: {
      tags: ["Bens"],
      summary: "Busca um bem pelo tombo",
      description: "Retorna um bem espec\xEDfico pelo n\xFAmero do tombo.",
      parameters: [
        {
          in: "path",
          name: "tombo",
          required: true,
          description: "N\xFAmero do tombo do bem",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: "Retorna o bem solicitado.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bens"
              }
            }
          }
        },
        404: {
          description: "Bem n\xE3o encontrado."
        },
        500: {
          description: "Erro interno no servidor."
        }
      }
    },
    patch: {
      tags: ["Bens"],
      summary: "Atualiza um bem",
      description: "Atualiza um bem espec\xEDfico pelo n\xFAmero do tombo.",
      parameters: [
        {
          in: "path",
          name: "tombo",
          required: true,
          description: "N\xFAmero do tombo do bem",
          schema: {
            type: "number"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Bens"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Bem atualizado com sucesso.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bens"
              }
            }
          }
        },
        404: {
          description: "Bem n\xE3o encontrado."
        },
        500: {
          description: "Erro interno no servidor."
        }
      }
    },
    delete: {
      tags: ["Bens"],
      summary: "Deleta um bem",
      description: "Deleta um bem espec\xEDfico pelo n\xFAmero do tombo.",
      parameters: [
        {
          in: "path",
          name: "tombo",
          required: true,
          description: "N\xFAmero do tombo do bem",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: "Bem deletado com sucesso."
        },
        404: {
          description: "Bem n\xE3o encontrado."
        },
        500: {
          description: "Erro interno no servidor."
        }
      }
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bensPaths
});
