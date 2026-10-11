# Portfólio — Vinicius Stumpf

Portfólio pessoal desenvolvido como uma aplicação **frontend**, com informações sobre minha trajetória, experiência e projetos. O conteúdo é mantido no próprio projeto, sem API ou servidor backend.

## Tecnologias

- React 18
- TypeScript
- Vite
- CSS
- Lucide React

## Executar localmente

Requisitos: Node.js e npm.

```bash
cd portfolio-frontend
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Scripts

Execute os comandos a partir de `portfolio-frontend/`:

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos e gera a versão de produção em `dist/` |
| `npm run preview` | Serve localmente a versão de produção |
| `npm run lint` | Executa o ESLint |

## Estrutura

```text
portfolio-frontend/
├── public/                 # Arquivos públicos e ícones
└── src/
    ├── assets/             # Imagens e outros recursos
    ├── components/         # Componentes de interface e seções
    ├── content/            # Textos e experiências do portfólio
    ├── pages/              # Páginas
    └── styles/             # Estilos CSS
```

Para atualizar os textos e as experiências exibidas, edite `portfolio-frontend/src/content/pt-BR.json` ou `portfolio-frontend/src/content/en-US.json`.
