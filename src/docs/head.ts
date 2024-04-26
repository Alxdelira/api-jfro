import { imageSchemas } from "./schemas/imagemSchema";
import { imagePaths } from "./paths/imagemPaths";
import { loginPaths } from "./paths/loginPaths";
import { usuarioPath } from "./paths/usuarioPaths";
import { usuarioSchema } from "./schemas/usuarioSchema";
import { bemSchema } from "./schemas/bemSchema";
import { bensPaths } from "./paths/bemPaths";
import { setorPaths } from "./paths/setorPaths";
import { setorSchema } from "./schemas/setor.schema";
import { inventarioSchema } from "./schemas/inventarioSchema";
import { inventarioPaths } from "./paths/inventarioPaths";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API-JFRO ( Controle de inventário )",
      description:
        "Esta API foi desenvolvida com o propósito específico de integrar-se perfeitamente a um aplicativo móvel dedicado ao controle de inventário.\n\n" +
        "Ela oferece uma gama abrangente de rotas e funcionalidades essenciais para o gerenciamento eficaz de usuários, imagens, ativos, setores e inventários. Ao adotar esta API, os desenvolvedores têm à disposição todas as ferramentas necessárias para criar uma experiência de usuário fluida e completa.\n\n"+
        "Desde a autenticação e gerenciamento de usuários até o armazenamento e manipulação de imagens de ativos, passando pela organização estruturada de setores e inventários, cada aspecto do aplicativo é cuidadosamente atendido.\n\n"+
        "Através da utilização das diversas rotas disponíveis, é possível realizar operações como adicionar, atualizar, visualizar e excluir dados, garantindo assim um controle total sobre o sistema de inventário.\n\n"+
        "Em resumo, esta API representa não apenas uma solução técnica robusta, mas também uma base sólida para o desenvolvimento de um aplicativo móvel de controle de inventário eficiente e intuitivo.",
      version: "0.1.0",
      license: {
        name: "LICENSE-MIT",
        url: "https://github.com/Alxdelira/api-jfro/blob/main/LICENSE",
      },
    },
    externalDocs: {
      description: "Documentação detalhada",
      url: "https://github.com/Alxdelira/api-jfro",
    },
    servers: [
      {
        url: "https://api-jfro.vercel.app",
        description: "API em produção",
      },
      {
        url: `http://localhost:${process.env.PORT}`,
        description: "API em desenvolvimento",
      },
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
        ...setorSchema,
        ...inventarioSchema
      },
    },
    security: [
      {
        jwtAuth: [],
      },
    ],
    tags: [
      { name: "Login", description: "Login do usuário" },
      { name: "Recuperar Senha", description: "Recuperação de senha" },
      { name: "Usuários", description: "Operações relacionadas aos usuários" },   
      { name: "Imagens", description: "Operações relacionadas a imagens" },
      // { name: "Relatórios", description: "Relatórios do sistema" },
      { name: "Bens", description: "Itens do inventário" },
      { name: "Inventários", description: "Operações relacionadas a inventários" },
      { name: "Setores", description: "Setores do inventário" },
    ],
    paths: {
      ...imagePaths,
      ...loginPaths,
      ...usuarioPath,
      ...bensPaths,
      ...setorPaths,
      ...inventarioPaths
    },
  },
  apis: ["./src/routes/*.ts"],
};

export default swaggerOptions;
