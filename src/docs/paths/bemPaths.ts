export const bensPaths = {
    "/bens": {
        post: {
            tags: ["Bens"],
            summary: "Cadastra um item no Inventário",
            description: "Faça o cadastro de um item no inventário.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Bens",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Item cadastrado com sucesso!",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Bens",
                            },
                        },
                    },
                },
                500: {
                    description: "Erro interno no servidor",
                },
            },
        },
        get: {
            tags: ["Bens"],
            summary: "Lista todos os bens",
            description:
                "Retorna uma lista de todos os bens cadastrados no inventário.",
                parameters: [
                    {
                        in: "query",
                        name: "tombo",
                        required: false,
                        description: "Número do tombo do bem",
                        schema: {
                            type: "number",
                        },
                    },
                    {
                        in: "query",
                        name: "nome",
                        required: false,
                        description: "Nome do bem",
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        in: "query",
                        name: "condicao",
                        required: false,
                        description: "Condição do bem",
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        in: "query",
                        name: "ativo",
                        required: false,
                        description: "Ativo ou inativo",
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        in: "query",
                        name: "inventario",
                        required: false,
                        description: "Inventário do bem",
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        in: "query",
                        name: "setor",
                        required: false,
                        description: "Setor do bem",
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        in: "query",
                        name: "auditor",
                        required: false,
                        description: "Auditor do bem",
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        in: "query",
                        name: "responsavel",
                        required: false,
                        description: "Responsável pelo bem",
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        in: "query",
                        name: "page",
                        required: false,
                        description: "Número da página",
                        schema: {
                            type: "number",
                        },
                    },
                    {
                        in: "query",
                        name: "perPage",
                        required: false,
                        description: "Itens por página",
                        schema: {
                            type: "number",
                        },
                    },
                ],
            responses: {
                200: {
                    description: "Retorna os bens cadastrados no inventário.",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Bens",
                            },
                        },
                    },
                },
                404: {
                    description: "Nenhum bem cadastrado.",
                },
                500: {
                    description: "Erro interno no servidor.",
                },
            },
        },
    },
    "/bens/{id}": {
        get: {
            tags: ["Bens"],
            summary: "Busca um bem pelo tombo",
            description: "Retorna um bem específico pelo número do tombo.",
            parameters: [
                {
                    in: "path",
                    name: "tombo",
                    required: true,
                    description: "Número do tombo do bem",
                    schema: {
                        type: "number",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Retorna o bem solicitado.",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Bens",
                            },
                        },
                    },
                },
                404: {
                    description: "Bem não encontrado.",
                },
                500: {
                    description: "Erro interno no servidor.",
                },
            },
        },
        patch: {
            tags: ["Bens"],
            summary: "Atualiza um bem",
            description: "Atualiza um bem específico pelo número do tombo.",
            parameters: [
                {
                    in: "path",
                    name: "tombo",
                    required: true,
                    description: "Número do tombo do bem",
                    schema: {
                        type: "number",
                    },
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Bens",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Bem atualizado com sucesso.",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Bens",
                            },
                        },
                    },
                },
                404: {
                    description: "Bem não encontrado.",
                },
                500: {
                    description: "Erro interno no servidor.",
                },
            },
        },
        delete: {
            tags: ["Bens"],
            summary: "Deleta um bem",
            description: "Deleta um bem específico pelo número do tombo.",
            parameters: [
                {
                    in: "path",
                    name: "tombo",
                    required: true,
                    description: "Número do tombo do bem",
                    schema: {
                        type: "number",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Bem deletado com sucesso.",
                },
                404: {
                    description: "Bem não encontrado.",
                },
                500: {
                    description: "Erro interno no servidor.",
                },
            },
        },
    },
};