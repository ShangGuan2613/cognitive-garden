# FORK.md — learn-ai → 认知园

## Goal
Keep ~80% of [itshen/learn-ai](https://github.com/itshen/learn-ai) **architecture & shell code**,
strip Cut features, remodel aesthetics per `decisions.json`, seed personal Domain→Point content,
publish on GitHub Pages.

## Layout
| Path | Role |
|------|------|
| `docs/` | GitHub Pages site root (flattened from upstream `slides/`) |
| `docs/course-data.js` | **Single content source** (COURSE + SITE) |
| `docs/points/*.html` | Point pages loaded in learn iframe |
| `docs/learn.html` | Map shell (nav tree + iframe) — Cut chrome removed |
| `docs/home.html` / `now.html` / `log.html` / `about.html` | Essay-garden IA |
| `docs/lesson.css` + `garden-theme.css` | Upstream lesson system + aesthetic overrides |
| `LICENSE` + `NOTICE` | AGPL-3.0 + provenance |

## Cut (removed from UI & tree)
Alice/助教 · 证书 · 学会了/进度 · 挑战赛 · 题库 · 登录/付费墙 · 捐赠/伙伴/评价墙 ·
PWA splash · 水印追踪 · 五语言 · 原版 AI 课 HTML 语料 · 营销首页漏斗

## Aesthetic (from decisions.json)
- Product: essay-garden / 认知园
- Taste: magazine · high-duotone `#FFF7ED / #000 / #DC2626` · mono accent
- Nav: minimal top — 地图 / 此刻 / 日志 (+首页/关于)
- Claim emphasis: left bar · example badge on points & footer

## How to update content
1. Edit `docs/course-data.js` (`window.SITE.points` / `domains` / `log` / `nowIds`).
2. Add or edit matching `docs/points/<id>.html` (or regenerate from Desktop seed).
3. Commit & push — Pages rebuilds automatically.

## Local preview
```bash
cd docs && python3 -m http.server 8788
# open http://127.0.0.1:8788/
```

## Upstream
Shallow clone kept at `../learn-ai-src` for diff reference (not published).
