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

// src/docs/paths/inventarioPaths.ts
var inventarioPaths_exports = {};
__export(inventarioPaths_exports, {
  inventarioPaths: () => inventarioPaths
});
module.exports = __toCommonJS(inventarioPaths_exports);

// src/services/HttpStatus.ts
var Http = {
  100: "Continuar",
  101: "Mudando Protocolos",
  102: "Processando",
  103: "Indica\xE7\xF5es Iniciais",
  200: "OK",
  201: "Criado",
  202: "Aceito",
  203: "Informa\xE7\xF5es N\xE3o Autoritativas",
  204: "Sem Conte\xFAdo",
  205: "Conte\xFAdo Restaurado",
  206: "Conte\xFAdo Parcial",
  207: "Status Multi-Status",
  208: "J\xE1 Reportado",
  226: "IM Usado",
  300: "M\xFAltipla Escolha",
  301: "Movido Permanentemente",
  302: "Encontrado",
  303: "Consulte Outro",
  304: "N\xE3o Modificado",
  305: "Use Proxy",
  307: "Redirecionamento Tempor\xE1rio",
  308: "Redirecionamento Permanente",
  400: "Pedido Incorreto",
  401: "N\xE3o Autorizado",
  402: "Pagamento Necess\xE1rio",
  403: "Proibido",
  404: "N\xE3o Encontrado",
  405: "M\xE9todo N\xE3o Permitido",
  406: "N\xE3o Aceit\xE1vel",
  407: "Autentica\xE7\xE3o de Proxy Necess\xE1ria",
  408: "Tempo de Pedido Esgotado",
  409: "Conflito",
  410: "Desaparecido",
  411: "Comprimento Necess\xE1rio",
  412: "Pr\xE9-condi\xE7\xE3o Falhou",
  413: "Solicita\xE7\xE3o de Entidade Muito Grande",
  414: "URI Muito Longo",
  415: "Tipo de M\xEDdia N\xE3o Suportado",
  416: "Faixa N\xE3o Satisfat\xF3ria",
  417: "Falha na Expectativa",
  418: "Sou um bule de ch\xE1",
  421: "Solicita\xE7\xE3o Direcionada",
  422: "Entidade N\xE3o Process\xE1vel",
  423: "Bloqueado",
  424: "Falha de Depend\xEAncia",
  425: "Muito Cedo",
  426: "Upgrade Necess\xE1rio",
  428: "Pr\xE9-requisito Necess\xE1rio",
  429: "Muitos Pedidos",
  431: "Campos de Cabe\xE7alho de Solicita\xE7\xE3o Muito Grandes",
  451: "Indispon\xEDvel por Motivos Legais",
  500: "Erro Interno do Servidor",
  501: "N\xE3o Implementado",
  502: "Bad Gateway",
  503: "Servi\xE7o Indispon\xEDvel",
  504: "Gateway Tempor\xE1rio Indispon\xEDvel",
  505: "Vers\xE3o HTTP N\xE3o Suportada",
  506: "Negocia Tamb\xE9m a Variante",
  507: "Armazenamento Insuficiente",
  508: "Loop Detectado",
  510: "N\xE3o Estendido",
  511: "Autentica\xE7\xE3o de Rede Necess\xE1ria"
};
var HttpStatus_default = Http;

// src/docs/paths/inventarioPaths.ts
var inventarioPaths = {
  "/inventario": {
    post: {
      tags: ["Invent\xE1rios"],
      summary: "Cadastrar um novo item no invent\xE1rio",
      description: "Fa\xE7a o cadastro de um novo item no invent\xE1rio.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Inventario"
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
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    get: {
      tags: ["Invent\xE1rios"],
      summary: "Listar todos os itens do invent\xE1rio",
      description: "Retorna uma lista de todos os itens cadastrados no invent\xE1rio.",
      parameters: [
        {
          in: "query",
          name: "nome",
          description: "Nome do item",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "local",
          description: "Local do item",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "page",
          description: "N\xFAmero da p\xE1gina",
          schema: {
            type: "string"
          }
        },
        {
          in: "query",
          name: "perPage",
          description: "Itens por p\xE1gina",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Itens encontrados",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        404: {
          description: "Nenhum item encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  },
  "/inventario/{id}": {
    get: {
      tags: ["Invent\xE1rios"],
      summary: "Buscar um item do invent\xE1rio",
      description: "Retorna um item do invent\xE1rio com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do item",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Item encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        404: {
          description: "Item n\xE3o encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    patch: {
      tags: ["Invent\xE1rios"],
      summary: "Atualizar um item do invent\xE1rio",
      description: "Atualiza um item do invent\xE1rio com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do item",
          schema: {
            type: "string"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Inventario"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Item atualizado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        404: {
          description: "Item n\xE3o encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    delete: {
      tags: ["Invent\xE1rios"],
      summary: "Deletar um item do invent\xE1rio",
      description: "Deleta um item do invent\xE1rio com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do item",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Item deletado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        404: {
          description: "Item n\xE3o encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Inventario"
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  inventarioPaths
});
