# Saint Charles Borromeo — Catechism Teachers Day (Nov 4)

A small, static, responsive website to honor Saint Charles Borromeo and celebrate Catechism Teachers Day on November 4.

## Quick start

- Open `index.html` directly in your browser, or
- Use a local server for best results (required if you add local images or fonts).

### Run a simple server (PowerShell)

```powershell
# From the project directory
python -m http.server 8080
# then open http://localhost:8080
```

If you do not have Python, you can also use:

```powershell
npx serve . -p 8080 --single
```

## Customize

- Replace the hero image by saving your file to `assets/borromeo.jpg` and updating the `img` `src` in `index.html`.
- Update colors in `styles.css` under the `:root` variables.
- Edit text in the sections (`About`, `Legacy`, `Timeline`, `Quotes`, `Prayer`, `Resources`).

## Deploy

Any static host will work (GitHub Pages, Netlify, Vercel). For GitHub Pages:

1. Commit these files to a new repository.
2. Push to GitHub.
3. In repository settings → Pages, choose `main` branch and `/ (root)`.
4. Wait 1–2 minutes; your site will be live.

## License

This project is provided as-is for parish and educational use.


