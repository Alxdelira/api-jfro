import Http from "../../services/HttpStatus";

export const inventarioPaths = {
    "/inventario": {
        post: {
            tags: ["Inventários"],
            summary: "Cadastrar um novo item no inventário",
            description: "Faça o cadastro de um novo item no inventário.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Inventario",
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
                                $ref: "#/components/schemas/Inventario",
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
            tags: ["Inventários"],
            summary: "Listar todos os itens do inventário",
            description: "Retorna uma lista de todos os itens cadastrados no inventário.",
            parameters: [
                {
                    in: "query",
                    name: "nome",
                    description: "Nome do item",
                    schema: {
                        type: "string",
                    },
                },
                {
                    in: "query",
                    name: "local",
                    description: "Local do item",
                    schema: {
                        type: "string",
                    },
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
                    description: "Itens encontrados",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Inventario",
                            },
                        },
                    },
                },
                404: {
                    description: "Nenhum item encontrado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Inventario",
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
    "/inventario/{id}": {
        get: {
            tags: ["Inventários"],
            summary: "Buscar um item do inventário",
            description: "Retorna um item do inventário com base no ID fornecido.",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    description: "ID do item",
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Item encontrado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Inventario",
                            },
                        },
                    },
                },
                404: {
                    description: "Item não encontrado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Inventario",
                            },
                        },
                    },
                },
                500: {
                    description: Http[500],
                },
            },
        },
        patch: {
            tags: ["Inventários"],
            summary: "Atualizar um item do inventário",
            description: "Atualiza um item do inventário com base no ID fornecido.",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    description: "ID do item",
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
                            $ref: "#/components/schemas/Inventario",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Item atualizado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Inventario",
                            },
                        },
                    },
                },
                404: {
                    description: "Item não encontrado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Inventario",
                            },
                        },
                    },
                },
                500: {
                    description: Http[500],
                },
            },
        },
        delete: {
            tags: ["Inventários"],
            summary: "Deletar um item do inventário",
            description: "Deleta um item do inventário com base no ID fornecido.",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    description: "ID do item",
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Item deletado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Inventario",
                            },
                        },
                    },
                },
                404: {
                    description: "Item não encontrado",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Inventario",
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
};