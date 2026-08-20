# Omar Shawqi — Portfolio 2.0

A single-page, premium, dark-first portfolio. Everything lives in three files:

- `index.html` — structure and content (sections are anchor-linked: `#home`, `#about`, `#projects`, `#experience`, `#skills`, `#ventures`, `#achievements`, `#certifications`, `#impact`, `#contact`).
- `style.css` — the whole design system (colors, spacing, components, responsive rules) — see the token list at the top (`:root { ... }`) to change the accent color, radii, or spacing in one place.
- `script.js` — all interactivity, plus two editable data arrays at the top of the file:
  - `projectsData` — add/edit/remove a project (card + full case-study modal) by editing one object. No HTML editing required.
  - `certsData` — add/edit a certificate card the same way. Set `link` to your certificate URL once you have one, and set `placeholder: false`.

## Things to finish before publishing

1. **Photo** — replace the monogram placeholders in the hero (`.hero-portrait`) and About section (`.about-portrait`) with a real photo. Add the image to an `images/` folder and swap the placeholder `<div>` for an `<img>`.
2. **EmailJS** — the contact form is wired to EmailJS (`service_omar` / `template_omar` in `script.js`, function `contactForm`). Replace those with your real EmailJS service ID, template ID, and public key (`emailjs.init("YOUR_PUBLIC_KEY")` — add this call once you have a key). Until then, the form automatically falls back to opening the visitor's email client.
3. **Certificates** — `certsData` in `script.js` currently has one real entry (UNICEF Training Programs) and two clearly-marked placeholders. Replace the placeholders as you complete more courses/certifications, and add a `link` once you have the certificate file or URL hosted somewhere (e.g. Google Drive, Credly).
4. **OG image** — `index.html` references `images/og-cover.png` for social share previews. Add a 1200×630 image there (or update the path) so links preview nicely on LinkedIn/X/WhatsApp.
5. **Domain/canonical** — the canonical URL and sitemap currently point to `https://omarshawqi7722.github.io/omar-shawqi-portfolio/`. Update `index.html` (`<link rel="canonical">`, Open Graph tags) and `sitemap.xml` if your repo name or domain changes.

## Notes

- No build step, no frameworks — plain HTML/CSS/JS, deploys as-is to GitHub Pages.
- OMAR.OS (bottom-left terminal widget) is a self-contained visual feature; remove the two HTML blocks (`.omaros-toggle`, `.omaros-window`) and the matching `omarOS()` block in `script.js` if you ever want to drop it.
- Dark/light theme preference and is stored in the browser's `localStorage` under `omar-theme`.
- All animations respect `prefers-reduced-motion`.
