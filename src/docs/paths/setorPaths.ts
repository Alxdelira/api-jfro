import Http from "../../services/HttpStatus";

export const setorPaths = {
    "/setor": {
        post: {
            tags: ["Setores"],
            summary: "Cadastrar um novo setor",
            description: "Faça o cadastro de um novo setor.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Setor",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Setor cadastrado com sucesso!",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Setor",
                            },
                        },
                    },
                },
                500: {
                    description: Http[500],
                },
            },
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
                        type: "string",
                    },
                },
                {
                    
                },
                {
                    in: "query",
                    name: "page",
                    description: "Número da página",
                    schema: {
                        type: "string",
                    },
                },
                {
                    in: "query",
                    name: "perPage",
                    description: "Itens por página",
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Retorna os setores cadastrados.",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Setor",
                            },
                        },
                    },
                },
                500: {
                    description: Http[500],
                },
            },
        },
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
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Retorna o setor encontrado.",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Setor",
                            },
                        },
                    },
                },
                404: {
                    description: Http[404],
                },
                500: {
                    description: Http[500],
                },
            },
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
                        type: "string",
                    },
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Setor",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Setor atualizado com sucesso!",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Setor",
                            },
                        },
                    },
                },
                404: {
                    description: Http[404],
                },
                500: {
                    description: Http[500],
                },
            },
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
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: Http[200],
                },
                404: {
                    description: Http[404],
                },
                500: {
                    description: Http[500],
                },
            },
        },
    },
};
