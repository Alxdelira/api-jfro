import { imageSchemas } from "./schemas/imagemSchema";
import { imagePaths } from "./paths/imagemPaths";
import { loginPaths } from "./paths/loginPaths";
import { usuarioPath } from "./paths/usuarioPaths";
import { usuarioSchema } from "./schemas/usuarioSchema";
import { bemSchema } from "./schemas/bemSchema";
import { bensPaths } from "./paths/bemPaths";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API-JFRO",
      description:
        "Esta API foi desenvolvida para ser usada em conjunto com um aplicativo móvel.",
      version: "0.1.0",
      license: {
        name: "MIT",
        url: "https://github.com/Alxdelira/api-jfro/blob/main/LICENSE",
      },
    },
    externalDocs: {
      description: "Documentação detalhada",
      url: "https://github.com/Alxdelira/api-jfro",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: "API em desenvolvimento",
      },
      {
        url: "https://api-jfro.com",
        description: "API em produção",
      }
    ],
    components: {
      securitySchemes: {
        jwtAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        ...imageSchemas,
        ...usuarioSchema,
        ...bemSchema,
      },
    },
    security: [
      {
        jwtAuth: [],
      },
    ],
    tags: [
      { name: "Login", description: "Login do usuário" },
      { name: "Usuários", description: "Operações relacionadas aos usuários" },
      { name: "Recuperar senha", description: "Recuperação de senha" },
      { name: "Imagens", description: "Operações relacionadas a imagens" },
      { name: "Relatórios", description: "Relatórios do sistema" },
      { name: "Bens", description: "Itens do inventário" },
      { name: "Inventários", description: "Operações relacionadas a inventários" },
      { name: "Setores", description: "Setores do inventário" },
    ],
    paths: {
       ...imagePaths,
       ...loginPaths,
       ...usuarioPath,
       ...bensPaths,
    },
  },
  apis: ["./src/routes/*.ts"],
};

export default swaggerOptions;
