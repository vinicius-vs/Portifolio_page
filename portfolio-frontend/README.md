# Portfólio — Vinicius Stumpf

Aplicação frontend de portfólio pessoal, construída com React, TypeScript e Vite. Textos e experiências são mantidos localmente em `src/content/`; o projeto não depende de API ou backend.

## Desenvolvimento

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

## Comandos

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: verifica os tipos e gera os arquivos de produção em `dist/`.
- `npm run preview`: visualiza localmente a versão de produção.
- `npm run lint`: executa o ESLint.

## Conteúdo e idiomas

Edite `src/content/pt-BR.json` e `src/content/en-US.json` para atualizar os textos em português brasileiro e inglês. Os dois arquivos seguem a mesma estrutura, tipada e consumida pelos componentes a partir de `src/content/index.ts`.
