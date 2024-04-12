import Http from "../../services/HttpStatus";

export const usuarioPath = {
  "/usuarios": {
    get: {
      tags: ["Usuários"],
      summary: "Listar Usuários",
      description: "Lista todos os usuários cadastrados no sistema",
      parameters: [
        {
          name: "nome",
          in: "query",
          description: "Nome do usuário",
          schema: {
            type: "string"
          }
        },
        {
          name: "email",
          in: "query",
          description: "Email do usuário",
          schema: {
            type: "string"
          }
        },
        {
          name: "matricula",
          in: "query",
          description: "Matrícula do usuário",
          schema: {
            type: "string"
          }
        },
        {
          name: "page",
          in: "query",
          description: "Número da página",
          schema: {
            type: "number"
          }
        },
        {
          name: "perPage",
          in: "query",
          description: "Itens por página",
          schema: {
            type: "number"
          }
        }
      ],
      responses: {
        200: {
          description: Http[200],
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
          description: Http[500],
        }
      }
    },
    post: {
      tags: ["Usuários"],
      summary: "Criar Usuário",
      description: "Cria um novo usuário",
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
          description: Http[201],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario"
              }
            }
          }
        },
        500: {
          description: Http[500],
        }
      }
    },
  },
  "/usuarios/{id}": {
    get: {
      tags: ["Usuários"],
      summary: "Obter Usuário por ID",
      description: "Retorna um usuário por ID",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usuário",
          required: true,
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: Http[200],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario"
              }
            }
          }
        },
        500: {
          description: Http[500],
        }
      }
    },
    patch: {
      tags: ["Usuários"],
      summary: "Atualizar Usuário",
      description: "Atualiza um usuário",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usuário",
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
          description: Http[200],
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario"
              }
            }
          }
        },
        500: {
          description: Http[500],
        }
      }
    },
    delete: {
      tags: ["Usuários"],
      summary: "Deletar Usuário",
      description: "Deleta um usuário por ID",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usuário",
          required: true,
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        204: {
          description: Http[204]
        },
        404: {
          description: Http[404]
        },
        500: {
          description: Http[500],
        }
      }
    }
  }
};
