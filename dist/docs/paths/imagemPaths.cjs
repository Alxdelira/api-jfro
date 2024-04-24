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

// src/docs/paths/imagemPaths.ts
var imagemPaths_exports = {};
__export(imagemPaths_exports, {
  imagePaths: () => imagePaths
});
module.exports = __toCommonJS(imagemPaths_exports);

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

// src/docs/paths/imagemPaths.ts
var imagePaths = {
  "/imagem": {
    get: {
      tags: ["Imagens"],
      summary: "Lista todas as imagens",
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Imagem"
              }
            }
          }
        },
        401: {
          description: HttpStatus_default[401]
        },
        403: {
          description: HttpStatus_default[403]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    post: {
      tags: ["Imagens"],
      summary: "Envia uma imagem",
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                image: {
                  type: "string",
                  format: "binary"
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: HttpStatus_default[201],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Imagem"
              }
            }
          }
        },
        400: {
          description: HttpStatus_default[400]
        },
        401: {
          description: HttpStatus_default[401]
        },
        403: {
          description: HttpStatus_default[403]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    }
  },
  "/imagem/{id}": {
    delete: {
      tags: ["Imagens"],
      summary: "Deleta uma imagem",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Id da imagem que vai ser deletada",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200]
        },
        401: {
          description: HttpStatus_default[401]
        },
        403: {
          description: HttpStatus_default[403]
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    get: {
      tags: ["Imagens"],
      summary: "Recupera uma imagem pelo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Id da imagem que vai ser exibida",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            image: {
              schema: {
                type: "string",
                format: "binary"
              }
            }
          }
        },
        401: {
          description: HttpStatus_default[401]
        },
        403: {
          description: HttpStatus_default[403]
        },
        404: {
          description: HttpStatus_default[404]
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
  imagePaths
});
