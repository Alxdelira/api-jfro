"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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

// src/docs/head.ts
var head_exports = {};
__export(head_exports, {
  default: () => head_default
});
module.exports = __toCommonJS(head_exports);

// src/docs/schemas/imagemSchema.ts
var imageSchemas = {
  Imagem: {
    type: "array",
    items: {
      type: "object",
      properties: {
        tipo_arquivo: {
          type: "string"
        },
        enviado_por: {
          type: "string"
        },
        caminho: {
          type: "string"
        },
        id_imagem: {
          type: "string"
        },
        criado_em: {
          type: "string",
          format: "date-time"
        },
        atualizado_em: {
          type: "string",
          format: "date-time"
        },
        _id: {
          type: "string"
        }
      }
    }
  }
};

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

// src/docs/paths/loginPaths.ts
var loginPaths = {
  "/login": {
    post: {
      tags: ["Login"],
      description: "Esta fun\xE7\xE3o \xE9 respons\xE1vel por logar um usu\xE1rio na API",
      summary: "Login de usu\xE1rio",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "alx.delira@gmail.com"
                },
                senha: {
                  type: "string",
                  example: "12345678"
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: "Login efetuado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU3ODBlMWRmZWZiMWUyN2ViMmQ5MSIsIm5vbWUiOiJEZXYgT2xpdmVpcmEiLCJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJhdGl2byI6dHJ1ZSwiaWF0IjoxNzA5NTk4OTExLCJleHAiOjE3MTA4OTQ5MTF9.KvhEcRDZ37XZsv9J9FcqEGFlDYvC_imuT32PulE3sbA"
                  },
                  usuario: {
                    type: "object",
                    properties: {
                      nome: {
                        type: "string",
                        example: "John Doe"
                      },
                      email: {
                        type: "string",
                        example: "dev@gmail.com"
                      },
                      matricula: {
                        type: "string",
                        example: "RO007"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Erro ao validar o login",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  type: "string",
                  example: HttpStatus_default[422]
                }
              }
            }
          }
        },
        422: {
          description: "Erro ao validar o email",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    message: {
                      type: "string",
                      example: HttpStatus_default[422]
                    }
                  }
                }
              }
            }
          }
        },
        500: {
          description: "Erro interno",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: HttpStatus_default[500]
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/resetsenha": {
    post: {
      tags: ["Recuperar Senha"],
      description: "Esta fun\xE7\xE3o \xE9 respons\xE1vel por enviar um email para o usu\xE1rio recuperar a senha",
      summary: "Recupera\xE7\xE3o de senha",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "alx.delira@gmail.com"
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: "Email enviado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Email enviado com sucesso!"
                  }
                }
              }
            }
          }
        },
        404: {
          description: "Usu\xE1rio n\xE3o encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: HttpStatus_default[404]
                  }
                }
              }
            }
          }
        },
        500: {
          description: "Erro interno",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: HttpStatus_default[500]
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/alterarsenha": {
    post: {
      tags: ["Recuperar Senha"],
      description: "Esta fun\xE7\xE3o \xE9 respons\xE1vel por alterar a senha do usu\xE1rio",
      summary: "Altera\xE7\xE3o de senha",
      parameters: [
        {
          name: "token",
          in: "query",
          description: "token de recupera\xE7\xE3o de senha",
          required: true,
          schema: {
            type: "string"
          }
        },
        {
          name: "email",
          in: "query",
          description: "email do usu\xE1rio",
          required: true,
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
              type: "object",
              properties: {
                senha: {
                  type: "string",
                  example: "Dev@1234"
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: "Senha alterada com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: HttpStatus_default[200]
                  }
                }
              }
            }
          }
        },
        404: {
          description: "Token inv\xE1lido",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: HttpStatus_default[404]
                  }
                }
              }
            }
          }
        },
        500: {
          description: "Erro interno",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: HttpStatus_default[500]
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

// src/docs/paths/usuarioPaths.ts
var usuarioPath = {
  "/usuarios": {
    get: {
      tags: ["Usu\xE1rios"],
      summary: "Listar Usu\xE1rios",
      description: "Lista todos os usu\xE1rios cadastrados no sistema",
      parameters: [
        {
          name: "nome",
          in: "query",
          description: "Nome do usu\xE1rio",
          schema: {
            type: "string"
          }
        },
        {
          name: "email",
          in: "query",
          description: "Email do usu\xE1rio",
          schema: {
            type: "string"
          }
        },
        {
          name: "matricula",
          in: "query",
          description: "Matr\xEDcula do usu\xE1rio",
          schema: {
            type: "string"
          }
        },
        {
          name: "page",
          in: "query",
          description: "N\xFAmero da p\xE1gina",
          schema: {
            type: "number"
          }
        },
        {
          name: "perPage",
          in: "query",
          description: "Itens por p\xE1gina",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Usuario"
                }
              }
            }
          }
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    post: {
      tags: ["Usu\xE1rios"],
      summary: "Criar Usu\xE1rio",
      description: "Cria um novo usu\xE1rio",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Usuario"
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
                $ref: "#/components/schemas/Usuario"
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
  "/usuarios/{id}": {
    get: {
      tags: ["Usu\xE1rios"],
      summary: "Obter Usu\xE1rio por ID",
      description: "Retorna um usu\xE1rio por ID",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usu\xE1rio",
          required: true,
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario"
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
      tags: ["Usu\xE1rios"],
      summary: "Atualizar Usu\xE1rio",
      description: "Atualiza um usu\xE1rio",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usu\xE1rio",
          required: true,
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
              $ref: "#/components/schemas/Usuario"
            }
          }
        }
      },
      responses: {
        200: {
          description: HttpStatus_default[200],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario"
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
      tags: ["Usu\xE1rios"],
      summary: "Deletar Usu\xE1rio",
      description: "Deleta um usu\xE1rio por ID",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usu\xE1rio",
          required: true,
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        204: {
          description: HttpStatus_default[204]
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

// src/docs/schemas/usuarioSchema.ts
var usuarioSchema = {
  Usuario: {
    type: "object",
    properties: {
      nome: {
        type: "string",
        description: "Nome do usu\xE1rio",
        example: "Jo\xE3o da Silva"
      },
      matricula: {
        type: "string",
        description: "Matricula do usuario",
        example: "ro780ps"
      },
      email: {
        type: "string",
        description: "E-mail do usu\xE1rio",
        example: "joao@example.com"
      },
      senha: {
        type: "string",
        description: "Senha do usu\xE1rio",
        example: "senha123"
      },
      ativo: {
        type: "boolean",
        description: "Se o usu\xE1rio est\xE1 ativo",
        example: true
      }
    }
  }
};

// src/docs/schemas/bemSchema.ts
var bemSchema = {
  Bens: {
    type: "object",
    properties: {
      tombo: {
        type: "number"
      },
      indentificado: {
        type: "boolean"
      },
      localizado: {
        type: "boolean"
      },
      nome: {
        type: "string"
      },
      condicao: {
        type: "string"
      },
      ativo: {
        type: "string"
      },
      uso: {
        type: "boolean"
      },
      descricao: {
        type: "string"
      },
      inventario: {
        type: "string"
      },
      setor: {
        type: "string"
      },
      auditor: {
        type: "string"
      },
      responsavel: {
        type: "string"
      },
      imagem: {
        type: "string"
      }
    }
  }
};

// src/docs/paths/bemPaths.ts
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

// src/docs/paths/setorPaths.ts
var setorPaths = {
  "/setor": {
    post: {
      tags: ["Setores"],
      summary: "Cadastrar um novo setor",
      description: "Fa\xE7a o cadastro de um novo setor.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Setor"
            }
          }
        }
      },
      responses: {
        201: {
          description: "Setor cadastrado com sucesso!",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Setor"
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
      tags: ["Setores"],
      summary: "Listar todos os setores",
      description: "Retorna uma lista de todos os setores cadastrados.",
      parameters: [
        {
          in: "query",
          name: "local",
          description: "Local do setor",
          schema: {
            type: "string"
          }
        },
        {},
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
          description: "Retorna os setores cadastrados.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Setor"
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
  "/setor/{id}": {
    get: {
      tags: ["Setores"],
      summary: "Buscar setor por ID",
      description: "Retorna um setor com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do setor",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Retorna o setor encontrado.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Setor"
              }
            }
          }
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    patch: {
      tags: ["Setores"],
      summary: "Atualizar um setor",
      description: "Atualiza um setor existente com novos dados.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do setor",
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
              $ref: "#/components/schemas/Setor"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Setor atualizado com sucesso!",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Setor"
              }
            }
          }
        },
        404: {
          description: HttpStatus_default[404]
        },
        500: {
          description: HttpStatus_default[500]
        }
      }
    },
    delete: {
      tags: ["Setores"],
      summary: "Excluir um setor",
      description: "Remove um setor com base no ID fornecido.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "ID do setor",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: HttpStatus_default[200]
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

// src/docs/schemas/setor.schema.ts
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

// src/docs/schemas/inventarioSchema.ts
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

// src/docs/head.ts
var swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API-JFRO ( Controle de invent\xE1rio )",
      description: "Esta API foi desenvolvida com o prop\xF3sito espec\xEDfico de integrar-se perfeitamente a um aplicativo m\xF3vel dedicado ao controle de invent\xE1rio.\n\nEla oferece uma gama abrangente de rotas e funcionalidades essenciais para o gerenciamento eficaz de usu\xE1rios, imagens, ativos, setores e invent\xE1rios. Ao adotar esta API, os desenvolvedores t\xEAm \xE0 disposi\xE7\xE3o todas as ferramentas necess\xE1rias para criar uma experi\xEAncia de usu\xE1rio fluida e completa.\n\nDesde a autentica\xE7\xE3o e gerenciamento de usu\xE1rios at\xE9 o armazenamento e manipula\xE7\xE3o de imagens de ativos, passando pela organiza\xE7\xE3o estruturada de setores e invent\xE1rios, cada aspecto do aplicativo \xE9 cuidadosamente atendido.\n\nAtrav\xE9s da utiliza\xE7\xE3o das diversas rotas dispon\xEDveis, \xE9 poss\xEDvel realizar opera\xE7\xF5es como adicionar, atualizar, visualizar e excluir dados, garantindo assim um controle total sobre o sistema de invent\xE1rio.\n\nEm resumo, esta API representa n\xE3o apenas uma solu\xE7\xE3o t\xE9cnica robusta, mas tamb\xE9m uma base s\xF3lida para o desenvolvimento de um aplicativo m\xF3vel de controle de invent\xE1rio eficiente e intuitivo.",
      version: "0.1.0",
      license: {
        name: "LICENSE-MIT",
        url: "https://github.com/Alxdelira/api-jfro/blob/main/LICENSE"
      }
    },
    externalDocs: {
      description: "Documenta\xE7\xE3o detalhada",
      url: "https://github.com/Alxdelira/api-jfro"
    },
    servers: [
      {
        url: "https://api-jfro.vercel.app",
        description: "API em produ\xE7\xE3o"
      },
      {
        url: `http://localhost:${process.env.PORT}`,
        description: "API em desenvolvimento"
      }
    ],
    components: {
      securitySchemes: {
        jwtAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },
      schemas: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, imageSchemas), usuarioSchema), bemSchema), setorSchema), inventarioSchema)
    },
    security: [
      {
        jwtAuth: []
      }
    ],
    tags: [
      { name: "Login", description: "Login do usu\xE1rio" },
      { name: "Recuperar Senha", description: "Recupera\xE7\xE3o de senha" },
      { name: "Usu\xE1rios", description: "Opera\xE7\xF5es relacionadas aos usu\xE1rios" },
      { name: "Imagens", description: "Opera\xE7\xF5es relacionadas a imagens" },
      // { name: "Relatórios", description: "Relatórios do sistema" },
      { name: "Bens", description: "Itens do invent\xE1rio" },
      { name: "Invent\xE1rios", description: "Opera\xE7\xF5es relacionadas a invent\xE1rios" },
      { name: "Setores", description: "Setores do invent\xE1rio" }
    ],
    paths: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, imagePaths), loginPaths), usuarioPath), bensPaths), setorPaths), inventarioPaths)
  },
  apis: ["./src/routes/*.ts"]
};
var head_default = swaggerOptions;
