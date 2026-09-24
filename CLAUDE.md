# CLAUDE.md

Website of the Intelligent Systems Lab at the University of Pittsburgh (Pitt ISL), served at
https://pittisl.github.io/. It is a Hugo site built on the Wowchemy v5 (Bootstrap) "Research Group"
starter and deployed to GitHub Pages by GitHub Actions.

## Toolchain constraints (read first)

- **Hugo extended 0.145.0** is what CI uses (`.github/workflows/hugo.yaml`, with a pinned sha256).
  Hugo 0.146 rewrote template lookup. A trial with 0.166 built once the theme's `table` shortcode
  was dropped (`getCSV` is gone), but `/publication/` fell back to a plain paginated list
  without the type/year filter. Treat going past 0.145 as a project of its own; don't bump
  Hugo as a side effect of another change.
- **The theme is vendored.** `_vendor/` is an unmodified `hugo mod vendor` copy of Wowchemy v5
  (`wowchemy/v5 v5.7.1-0.20230418194707-ca2775cd57a2`, `wowchemy-core`, `wowchemy-seo`). Upstream
  is gone for our purposes: `wowchemy/wowchemy-hugo-themes` now redirects to `HugoBlox/kit`, a
  Tailwind rewrite, and the Bootstrap line is archived as `HugoBlox/wowchemy-bootstrap-legacy`.
  - Never edit files in `_vendor/`, and don't run `hugo mod vendor`, `hugo mod get` or
    `hugo mod tidy` unless the task is to change the vendored theme; they rewrite `_vendor/`.
  - To change a theme template, copy it to the same relative path under `layouts/` and put a
    `{{- /* Copied from <module>@<version>/<path>  Local change: ... */ -}}` header on top
    (see `layouts/_default/baseof.html`). Use template comments, not HTML comments: the theme
    minifies with `keepComments: true`, so HTML comments can end up in the published pages.
- **Builds need neither Go nor network access.** Hugo reads modules from `_vendor/`. No Node.js,
  npm or Dart Sass is needed either; the theme compiles SCSS with Hugo extended's built-in LibSass.
- **Front-end libraries are self-hosted.** `data/assets.toml` overrides the theme's copy and
  points MathJax, Leaflet, academicons, Fuse.js, mark.js, isotope and imagesLoaded at
  `static/vendor/<package>@<version>/`. Those files come from
  `scripts/fetch-vendor-assets.py` (pinned npm tarballs, sha512-checked). To change a version,
  edit the script, re-run it, and copy the printed SRI into `data/assets.toml`. The URLs are
  root-relative (`/vendor/...`) and assume the site lives at the domain root. Entries in
  `data/assets.toml` that still point at jsDelivr belong to theme features the site doesn't use;
  vendor them the same way before enabling such a feature.
- Remaining third-party requests from visitors' browsers are intentional: OpenStreetMap tiles for
  the contact page map, the mapmyvisitors.com counter, and YouTube embeds.
- The online Wowchemy docs (wowchemy.com, linked from front matter comments) now redirect to
  hugoblox.com and describe other versions. The reference for block and front matter options is
  the theme source in `_vendor/github.com/wowchemy/wowchemy-hugo-themes/modules/wowchemy/v5/`
  (`layouts/partials/blocks/`, `data/`).

## Build and preview

```sh
# Hugo 0.145.0 extended, same as CI (keep the binary outside the repo)
curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.145.0/hugo_extended_0.145.0_linux-amd64.tar.gz \
  | tar xz -C ~/.local/bin hugo

hugo server                      # live preview at http://localhost:1313/

# Production build, same flags as CI; writes public/
HUGO_ENV=production HUGO_ENVIRONMENT=production \
  hugo --gc --minify --baseURL https://pittisl.github.io/
```

- `public/` and `resources/` are build output and gitignored. When comparing two builds, use a
  fresh resource dir (`HUGO_RESOURCEDIR=...` or delete `resources/`); a stale `resources/_gen`
  cache can change processed-image file names. Every page also embeds a "Last Published" date
  comment, which differs between days.
- There are no tests. "Works" means the production build finishes without `ERROR`/`WARN` lines
  and the changed pages render correctly in `hugo server` (check math, search, the publication
  filter and images if templates or `data/assets.toml` changed).

## Deployment

`.github/workflows/hugo.yaml` builds and deploys on every push to `main` (plus manual dispatch).
There are no PR previews; anything merged to `main` goes live in about two minutes. Check with
`gh run list`. The workflow downloads the Hugo `.deb` from the gohugoio release and verifies
`HUGO_DEB_SHA256` (from the release's `hugo_<version>_checksums.txt`); update both together.
Actions are pinned to commit SHAs with the tag in a trailing comment.

## Repository map

| Path | Purpose |
|---|---|
| `config/_default/config.yaml` | Hugo config, module imports, permalinks, taxonomies |
| `config/_default/params.yaml` | Theme params (appearance, SEO, search, map, citation style) |
| `config/_default/menus.yaml` | Navbar, including the Projects and Publication & Dataset dropdowns |
| `content/_index.md` | Homepage: hero text (with project list) and the hand-written **News** list |
| `content/publication/<YYYY>-<slug>/` | One page bundle per paper: `index.md`, `cite.bib`, optional `featured.png/jpg` |
| `content/projects/<name>.md` | Project pages; each lists papers whose `tags` match its filter |
| `content/authors/<id>/` | People profiles: `_index.md` + `avatar.jpg/png` |
| `content/people/index.md` | People page; lists which `user_groups` are shown and in what order |
| `content/dataset/`, `content/video-and-demos/`, `content/contact/` | Single landing pages built from `markdown`/`contact` blocks |
| `assets/media/` | Images used by content; per-paper figures live in `assets/media/<pub-dir>/` |
| `static/uploads/` | PDFs (posters etc.) served at `/uploads/...` |
| `static/vendor/` | Self-hosted front-end libraries (generated, see above) |
| `data/assets.toml` | URLs, versions and SRI of the theme's JS/CSS libraries |
| `assets/scss/custom.scss` | All site CSS overrides (font sizes, widths, list separators, hides "powered by") |
| `layouts/` | Local theme template overrides and extra shortcodes (see below) |
| `_vendor/` | Vendored theme, do not edit |
| `scripts/fetch-vendor-assets.py` | Regenerates `static/vendor/` |
| `static/aihcs/` | Built website of the Center for AI in Healthcare Computing and Systems, served at `/aihcs/` (generated, do not edit) |
| `scripts/sync-aihcs.sh` | Rebuilds `static/aihcs/` from the Center site's private source repository |

## The /aihcs/ site

`/aihcs/` is a separate website, for the Center for Artificial Intelligence in Healthcare
Computing and Systems, published through this repository. Its source is the private repository
`pittisl/pitt-ece-health-website` (a Python/Jinja generator with its own README); it stays private
because its data files hold material that is deliberately not rendered. Only the built pages are
committed here, in `static/aihcs/`, which Hugo copies verbatim.

- Change the Center site in its source repository, commit there, then run
  `scripts/sync-aihcs.sh <path to that checkout>` and commit `static/aihcs/` here, naming the
  source commit the script prints. Never edit files under `static/aihcs/` directly.
- The Center site uses only relative links, so it works under any path; nothing in this Hugo
  site should link into it or be created under `/aihcs/`.
- A missing page under `/aihcs/` shows this site's 404 page.

## Content conventions

- **Adding a paper:** copy an existing `content/publication/<YYYY>-<slug>/` bundle. Keep
  `publication_types` as a quoted code (`'1'` conference, `'2'` journal, `'3'` preprint).
  `authors` entries are either an author folder id (`wei`, `keshav`), which links to the profile,
  or a plain quoted name for external co-authors. Set `tags` to the project tag(s) (see below).
- **Images in bundles must be regular files, not symlinks.** Hugo 0.145 silently ignores
  symlinked files in content (0.115 followed them), so a symlinked `featured.png` or
  `avatar.png` just disappears from the site.
- **Figures in paper pages:** Markdown images use paths relative to `assets/media/`, e.g.
  `![caption](2023-elastictrainer/elastictrainer-fig2.png)`. Math uses `{{< math >}}$...${{< /math >}}`.
- **Project pages:** each `content/projects/<name>.md` has a `portfolio` block with
  `filters.tags: ['<tag>']`. A paper shows up on a project page only if its `tags` contains that
  exact string (e.g. `on-device-ai`, `spatial-intelligence`, `human-robot-interaction`). Adding a
  new project means adding the page, a `menus.yaml` entry under `Projects`, and a link in the hero
  text of `content/_index.md`.
- **News:** the homepage news is a Markdown bullet list typed by hand into the `text` of the
  `news` collection block in `content/_index.md`, newest first, format
  `* **Mon YYYY:** ... [Title](/publication/<pub-dir>/) ...`. The link must match the bundle
  directory name. (`content/post/` holds a few old 2022–2023 news posts; the News menu entry is
  commented out and it is no longer updated.)
- **People:** `title` is the display name, `role` the position line, `order_id` the sort key
  (ascending), `user_groups` the section. Only groups listed in `content/people/index.md` are
  rendered. Graduated students are moved to `Past Students`, which is intentionally not in that
  list: they disappear from the People page but keep their profile pages (linked from papers).
- Directories and files starting with `.` (e.g. `content/publication/.preprint/`) are ignored by
  Hugo and serve as templates.
- `content/{authors,tags,categories,publication_types,projects}/_index.md` only set a title.
  `config.yaml` has `capitalizeListTitles: false` so tag chips keep their written case, which
  would otherwise leave these auto-generated list pages titled in lowercase.

## Local template overrides (`layouts/`)

- `partials/views/compact.html` overrides the theme's `compact` list view site-wide (full metadata,
  500px thumbnails, CSS class `view-compact-pittisl-academy`). Every block using `view: compact`
  gets this variant.
- `partials/views/compact-orig.html` is close to the upstream compact view and is used only by
  the homepage news block (`view: compact-orig`).
- `_default/baseof.html`, `partials/analytics/google_analytics.html`,
  `partials/components/feedback.html`: copies of theme templates with the minimal fixes needed
  for Hugo 0.145 (described in each file's header).
- `partials/hooks/body-end/custom.html` injects the mapmyvisitors.com visitor map on every page.
- Shortcodes: `columns` (split with `<--->`, optional `ratio="2:1"`), `hr`, `hr-pittisl`
  (thin separator used on project pages), `rawhtml`.

## Upstream leftovers

These come from the starter template and are not part of the lab site: `README_template.md`,
`theme.toml`, `preview.png`, `images/`, `.github/FUNDING_backup.yml`, `content/tour/`,
`content/event/`, `content/publication/cite_example.bib`, `content/publication/hidden-with-dotfile`.
`.hugo_build.lock` is tracked but should be ignored.

## Style

Follow `.editorconfig`: UTF-8, LF, 2-space indentation, final newline. Front matter is YAML.
Commit messages are short English imperative sentences (e.g. "update people information"); keep
unrelated changes in separate commits.
