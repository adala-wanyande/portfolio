# Portfolio (V3)

Personal portfolio of Bernard Adala Wanyande, Software (AI) Engineer at ING.
Live at [adala-wanyande.github.io/portfolio](https://adala-wanyande.github.io/portfolio/).

Plain HTML, CSS and JavaScript: no framework, no build step.

## Structure

| File              | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| `index.html`      | Home: intro, about, recent experience, selected work |
| `about.html`      | Story, toolbox, languages, interests                 |
| `experience.html` | Full work history                                    |
| `projects.html`   | Filterable project archive                           |
| `styles.css`      | All styles, with light/dark theme tokens at the top  |
| `script.js`       | Theme toggle, scroll reveal, project filters         |
| `assets/`         | Images, favicon and resume                           |

## Run locally

```sh
python3 -m http.server
```

Then open http://localhost:8000.

## Updating content

- **New job:** add an `<li class="job">` at the top of `experience.html`, and
  on `index.html` if it should appear on the home page.
- **New project:** add an `<article class="project">` to `projects.html` with
  `data-category` (`data-science`, `web`, `mobile`, `web3`) and `data-year`.
  Add a new year chip if needed.

## Contact

[Email](mailto:awanyande@gmail.com) · [LinkedIn](https://www.linkedin.com/in/adala-wanyande/)
