import Http from "../../services/HttpStatus";

export const loginPaths = {
    "/login": {
        post: {
            tags: ["Login"],
            description: "Esta função é responsável por logar um usuário na API",
            summary: "Login de usuário",
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
                                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU3ODBlMWRmZWZiMWUyN2ViMmQ5MSIsIm5vbWUiOiJEZXYgT2xpdmVpcmEiLCJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJhdGl2byI6dHJ1ZSwiaWF0IjoxNzA5NTk4OTExLCJleHAiOjE3MTA4OTQ5MTF9.KvhEcRDZ37XZsv9J9FcqEGFlDYvC_imuT32PulE3sbA",
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
                                    example: Http[422]
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
                                            example: Http[422]
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
                                        example: Http[500]
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
            description: "Esta função é responsável por enviar um email para o usuário recuperar a senha",
            summary: "Recuperação de senha",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "alx.delira@gmail.com",
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
                    description: "Usuário não encontrado",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: Http[404]
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
                                        example: Http[500]
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
            description: "Esta função é responsável por alterar a senha do usuário",
            summary: "Alteração de senha",
            parameters: [
                {
                    name: "token",
                    in: "query",
                    description: "token de recuperação de senha",
                    required: true,
                    schema: {
                        type: "string"
                    }
                },
                {
                    name: "email",
                    in: "query",
                    description: "email do usuário",
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
                                        example: Http[200]
                                    }
                                }
                            }
                        }
                    }
                },
                404: {
                    description: "Token inválido",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: Http[404]
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
                                        example: Http[500]
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

