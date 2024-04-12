
export const inventarioSchema = {
  Inventario: {
    type: "object",
    properties: {
      setor: {
        type: "string",
      },
      responsavel: {
        type: "string",
      },
      auditores: {
        type: "array",
        items: {
          type: "string",
        },
      },
      data_inicio: {
        type: "string",
      },
      data_fim: {
        type: "string",
      },
    },
  },
};