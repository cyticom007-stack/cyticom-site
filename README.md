# Cyticom Landing Page (Deploy Ready)

## Local preview (PowerShell)
```powershell
cd C:\Users\Administrator\.openclaw\workspace\cyticom\site
python -m http.server 8080
```
Open: http://127.0.0.1:8080

## Deploy on Netlify (fastest)
1. Create a GitHub repo and upload this `site` folder.
2. In Netlify: **Add new project** → import repo.
3. Build command: *(leave empty)*
4. Publish directory: `.`
5. Deploy.

## Deploy on GitHub Pages
1. Put these files in repo root.
2. Settings → Pages → Deploy from branch (`main` / root).
3. Save and wait for URL.

## Next upgrade
- Connect form to webhook (Formspree / Netlify Forms / Google Apps Script).
- Add real Calendly/WhatsApp CTA.
- Add case studies and pricing blocks.
