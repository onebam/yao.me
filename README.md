# YAO Blog

This is an Astro-powered personal blog for notes, essays, and project records.

## Project Structure

```text
public/               Static assets, fonts, favicon
src/
  assets/             Icons and component images
  components/         Reusable UI components
  content/blog/       Blog posts in Markdown or MDX
  layouts/            Page and post layouts
  pages/              Routes and generated endpoints
  styles/             Global styles and typography
  utils/              Content and rendering helpers
astro.config.mjs      Astro configuration
vercel.json           Vercel deployment configuration
package.json          Scripts and dependencies
```

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build |

## Customize

Start with `src/consts.ts`, `src/constants.ts`, `src/pages/index.astro`, and `src/pages/about.mdx`.
