# Joey's Classic Italian Dining

A responsive, dependency-free landing page built with plain HTML, CSS, and JavaScript. No install or build step is required.

## Project Structure

- `index.html`: page content and metadata
- `styles.css`: responsive layout and visual design
- `script.js`: progressively enhanced mobile navigation
- `assets/images/`: optimized WebP photography
- `assets/logos/`: supplied logo files and favicon
- `assets/menus/`: supplied lunch and dinner PDFs

The original source package remains in the workspace but is excluded from version control and deployment by `.gitignore`.

## Local Preview

From the repository root, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. The repository root is the complete site output.

## GitHub Pages

1. Push the site to a GitHub repository, normally on `main`.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main`, choose `/(root)`, and save.

The included `.nojekyll` file disables Jekyll processing. No GitHub Actions build workflow is needed.

## Cloudflare Pages

Create a Pages project from the Git repository with these settings:

- Framework preset: `None`
- Production branch: `main`
- Root directory: leave blank
- Build command: leave blank
- Build output directory: `.`

Cloudflare Pages will publish the repository root directly.
