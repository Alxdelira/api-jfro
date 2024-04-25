## Exemplo de Relatório de Bug

**Projeto:** API de Inventário

**Versão:** 1.0.0

**Data:** 25 de abril de 2024

**Reporter:** Bard

**Email:** [endereço de e-mail ]

**Descrição:**

Estava testando a API e encontrei o seguinte bug:

**Passos para Reproduzir:**

1. Acesse o endpoint `/items`.
2. Envie uma requisição POST com o seguinte corpo JSON:

```json
{
  "nome": "Meu Item",
  "descrição": "Este é o meu item.",
  "quantidade": 1,
  "setor": "12345",
  "imagem": "https://example.com/image.jpg"
}
```

3. A API deve retornar um código de status 201 (Criado).
4. No entanto, a API está retornando um código de status 500 (Erro Interno do Servidor).

**Comportamento Esperado:**

A API deve retornar um código de status 201 (Criado) e criar um novo item no inventário.

**Comportamento Atual:**

A API retorna um código de status 500 (Erro Interno do Servidor) e não cria um novo item no inventário.

**Observações Adicionais:**

Tentei com diferentes valores para os campos `nome`, `descrição`, `quantidade`, `setor` e `imagem`, mas o problema persiste.

**Impacto:**

Este bug impede que usuários criem novos itens no inventário.

**Prioridade:**

Alta

**Gravidade:**

Crítica

**Solução Proposta:**

Acredito que o problema esteja em um erro no código que manipula a criação de novos itens. Recomendo que os desenvolvedores investiguem esse problema e corrijam o bug o mais rápido possível.

**Solução Alternativa:**

No momento, não há solução alternativa para este bug.

**Capturas de Tela:**

Captura de tela da mensagem de erro: [https://es.wiktionary.org/wiki/removido](https://es.wiktionary.org/wiki/removido)

**Informações Adicionais:**

Estou usando as seguintes ferramentas para testar a API:

* Postman
* Insomnia
* Swaggwe (Documentação)

A API está rodando no seguinte ambiente:

* Node.js 20.11.0
* Express 4.19.2
* Mongoose 8.3.1

Espero que esta informação seja útil. Por favor, me avise se tiver alguma dúvida.

## Notas Adicionais

* Adicionei uma seção sobre "Solução Proposta" ao relatório de bug. Esta seção fornece uma possível solução para o problema.
* Adicionei uma seção sobre "Solução Alternativa" ao relatório de bug. Esta seção fornece uma solução temporária para o problema até que o bug seja corrigido.
* Adicionei uma seção sobre "Capturas de Tela" ao relatório de bug. Esta seção fornece evidência visual do problema.
* Adicionei uma seção sobre "Informações Adicionais" ao relatório de bug. Esta seção fornece detalhes adicionais sobre o ambiente e as ferramentas que estou usando para testar a API.

Acredito que este relatório de bug está completo e abrangente. Por favor, me avise se tiver alguma outra dúvida.

**Obrigado pelo seu tempo e atenção a este assunto.**
