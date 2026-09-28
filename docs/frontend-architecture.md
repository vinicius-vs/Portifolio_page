# Frontend Architecture

## Stack

* React 18
* TypeScript
* Vite
* CSS
* Lucide React for icons

## Folder Structure

```
my-portifolio-front/
 ├── public/                 # Public assets
 └── src/
      ├── assets/            # Images and imported assets
      ├── components/
      │    ├── sections/     # Portfolio sections
      │    └── ui/           # Reusable interface components
      ├── content/           # Localized portfolio content
      ├── pages/             # Page composition
      └── styles/            # CSS stylesheets
```

## Principles

* Keep components small and reusable
* Keep presentation components separate from portfolio content
* Store editable copy and experience data in `src/content/`
* Use TypeScript for type safety
* Keep the application frontend-only; content is bundled with the frontend

## Best Practices

* Avoid large page files
* Use semantic naming
* Reuse components
* Keep code clean and readable
* Do not add API clients or backend configuration for locally maintained content
