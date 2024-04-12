export const setorSchema = {
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
      },
    },
  };
