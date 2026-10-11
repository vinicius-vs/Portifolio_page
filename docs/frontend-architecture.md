# Frontend Architecture

## Stack

* React 18
* TypeScript
* Vite
* CSS
* Lucide React for icons

## Folder Structure

```
portfolio-frontend/
 ├── public/                 # Public assets
 └── src/
      ├── assets/            # Images and imported assets
      ├── components/
      │    ├── sections/     # Portfolio sections
      │    └── ui/           # Reusable interface components
      ├── content/           # pt-BR.json and en-US.json translations
      ├── pages/             # Page composition
      └── styles/            # CSS stylesheets
```

## Principles

* Keep components small and reusable
* Keep presentation components separate from portfolio content
* Store all editable interface copy and portfolio content in `src/content/pt-BR.json` and `src/content/en-US.json`
* Keep both locale files in sync with the structure exposed by `src/content/index.ts`
* Use the shared `Language` type (`pt-BR` or `en-US`) when handling the active locale
* Use TypeScript for type safety
* Keep the application frontend-only; content is bundled with the frontend

## Best Practices

* Avoid large page files
* Use semantic naming
* Reuse components
* Keep code clean and readable
* Do not add API clients or backend configuration for locally maintained content
