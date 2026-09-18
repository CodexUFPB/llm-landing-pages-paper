# Provenance of the nine artifacts

Each subfolder is the source code of one generated landing page, copied verbatim from
the repository in which it was first committed, at the commit recorded below. Git
metadata (`.git/`) was removed so the artifacts can live inside this repository;
nothing else was added, removed or changed.

| Folder | Source repository | Commit | Date | Stack | Deployed at |
|---|---|---|---|---|---|
| `gemini-3-flash/condition-1-simple` | `FelipeMeloF/LandingPageModelGemini_1` | `f7ddff3b92e95b318510d77763e286ddd25df9eb` | 2026-05-26 | Vite | https://landingpagemodelgemini-1.vercel.app |
| `gemini-3-flash/condition-2-skills` | `FelipeMeloF/LandingPageModelGemini_2` | `a67763b7b0104d3d5a9313403b3c9b35e65df06c` | 2026-05-26 | Vite | https://landingpagemodelgemini-2.vercel.app |
| `gemini-3-flash/condition-3-detailed` | `FelipeMeloF/LandingPageModelGemini_3` | `f298b9a6f702f4dfef176ea703763331382d954a` | 2026-05-26 | HTML/JS + Tailwind | https://landingpagemodelgemini-3.vercel.app |
| `gpt-oss-120b/condition-1-simple` | `FelipeMeloF/LandingPageModelGPT_1` | `324e43f1f8745551d582ed330f0d325a103777fa` | 2026-05-26 | Vite | https://landingpagemodelgpt-1.vercel.app |
| `gpt-oss-120b/condition-2-skills` | `FelipeMeloF/LandingPageModelGPT_2` | `b879eeb9379b6a38d46984dacea622cd91d6144f` | 2026-05-26 | Plain HTML/JS | https://landingpagemodelgpt-2.vercel.app |
| `gpt-oss-120b/condition-3-detailed` | `FelipeMeloF/LandingPageModelGPT_3` | `e8348fd235c29f492a9cde8054cdb4ad8b60d330` | 2026-05-26 | Next.js | https://landingpagemodelgpt-3.vercel.app |
| `claude-opus-4-6/condition-1-simple` | `FelipeMeloF/LandingPageModelClaude_1` | `980b55cd4151f63cd9298efdae72788dae824c7e` | 2026-05-26 | Vite | https://landingpagemodelclaude-1.vercel.app |
| `claude-opus-4-6/condition-2-skills` | `FelipeMeloF/LandingPageModelClaude_2` | `b6bd86c1aa0fd1d878e18869ce55cc5b774c2364` | 2026-05-26 | Vite | https://landingpagemodelclaude-2.vercel.app |
| `claude-opus-4-6/condition-3-detailed` | `FelipeMeloF/LandingPageModelClaude_3` | `d7ac829d703738d4258a1a5d8416f278e02266c0` | 2026-05-26 | Vite + React + Tailwind | https://landingpagemodelclaude-3.vercel.app |

This distribution — six Vite projects, two in plain HTML/JS and one in Next.js —
is the technological heterogeneity described in section 3.4 of the article, and is
the reason all nine were deployed to a single hosting platform before evaluation.

## Integrity

The code is preserved **exactly as delivered by each model**. Configuration failures,
missing dependencies and incomplete files were deliberately not corrected: they are
themselves objects of analysis under criteria 14 (CSS failures) and 15 (severity of
failures). The third generation of GPT-OSS 120B, in particular, is the artifact whose
stylesheet does not load, which is what makes several criteria unobservable for it and
explains the omitted cells documented in `docs/data-dictionary.md`.

No dependency was installed and no build was run. `node_modules/` and build output are
absent from every artifact, as they were from the source repositories.

## Bundled skills

The artifacts generated under conditions 2 and 3 carry the skill files that were
supplied to the model, in their own `.agents/skills/` folder. They are left in place
because they are part of the project as delivered. The same files are also collected,
once, in `skills/` at the root of this repository; see `skills/PROVENANCE.md`.
