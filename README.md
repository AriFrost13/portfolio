# Ari Frost Website

Static multilingual portfolio website (RU/EN) ready for GitHub Pages.

## Pages structure

- `index.html` - Main page
- `cases.html` - Case cards
- `tasks.html` - Detailed tasks by direction
- `assets/` - Images and media
- `styles.css`, `script.js` - Styles and logic

## Deploy to GitHub Pages

### 1. Create repository on GitHub
Create an empty repository, for example: `ari-frost-site`.

### 2. Push this project
Run in this folder:

```bash
git init
git branch -M main
git add .
git commit -m "Initial website for GitHub Pages"
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

### 3. Enable Pages in GitHub
1. Open repository -> `Settings` -> `Pages`
2. In `Build and deployment`, set `Source` to `GitHub Actions`

The workflow in `.github/workflows/pages.yml` will publish automatically.

## URL after deploy

Default URL:

`https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`

If repository name is `<YOUR_USERNAME>.github.io`, URL is:

`https://<YOUR_USERNAME>.github.io/`
