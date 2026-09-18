# Screenshots

One capture per artifact, of the deployed page listed in `artifacts/PROVENANCE.md`.

| File | Artifact | URL |
|---|---|---|
| `gemini-3-flash_condition-1-simple.jpg` | Gemini 3 Flash, prompt I | https://landingpagemodelgemini-1.vercel.app |
| `gemini-3-flash_condition-2-skills.jpg` | Gemini 3 Flash, prompt II | https://landingpagemodelgemini-2.vercel.app |
| `gemini-3-flash_condition-3-detailed.jpg` | Gemini 3 Flash, prompt III | https://landingpagemodelgemini-3.vercel.app |
| `gpt-oss-120b_condition-1-simple.jpg` | GPT-OSS 120B, prompt I | https://landingpagemodelgpt-1.vercel.app |
| `gpt-oss-120b_condition-2-skills.jpg` | GPT-OSS 120B, prompt II | https://landingpagemodelgpt-2.vercel.app |
| `gpt-oss-120b_condition-3-detailed.jpg` | GPT-OSS 120B, prompt III | https://landingpagemodelgpt-3.vercel.app |
| `claude-opus-4-6_condition-1-simple.jpg` | Claude Opus 4.6, prompt I | https://landingpagemodelclaude-1.vercel.app |
| `claude-opus-4-6_condition-2-skills.jpg` | Claude Opus 4.6, prompt II | https://landingpagemodelclaude-2.vercel.app |
| `claude-opus-4-6_condition-3-detailed.jpg` | Claude Opus 4.6, prompt III | https://landingpagemodelclaude-3.vercel.app |

## Capture conditions

Desktop browser, viewport 1568 × 698 CSS pixels, above the fold, no scrolling, no
interaction, JPEG. Each page was allowed to finish loading before capture. Pages were
captured in the state in which they are served, with no adjustment of any kind.

These images document the deployed artifacts. They were captured after the evaluation
period, so they are a record of the interfaces rather than the exact frames each
evaluator saw; the artifacts themselves are frozen at the commits recorded in
`artifacts/PROVENANCE.md`, so what is served has not changed.

## Three captures worth explaining

They look like capture errors and are not.

**`gemini-3-flash_condition-1-simple`** shows a header and an empty area below it. That
is the artifact: the first Gemini generation produced a central area with no content,
which is the basis of its `no` on criterion 05 (understanding of the landing page) in
Table 3.

**`claude-opus-4-6_condition-2-skills`** shows a header over an empty hero. The hero
section of this artifact renders no content; the sections below it do render normally.
This was verified by scrolling down and back, so it is a property of the page and not
an entrance animation caught mid-flight.

**`gpt-oss-120b_condition-3-detailed`** shows unstyled HTML on a white background with
broken image placeholders. This is the artifact whose stylesheet does not load, the
most severe failure in the corpus. It is the reason several criteria were unobservable
for this page and were left blank by the evaluators, as documented in
`docs/data-dictionary.md`. It has not been corrected, per the integrity rule in the
main README.
