# Provenance of the skills

The three skills referenced by prompts II and III — `brand-landingpage`,
`security-best-practices` and `web-design-guidelines` — are reproduced here in the
exact state in which they were supplied to the models, not in whatever state their
upstream repositories are in today.

They were recovered from the artifact repositories themselves: each of the six
projects generated under conditions 2 and 3 committed its own `.agents/skills/`
folder on 26 May 2026, alongside the generated code. The copies in this folder come
from `LandingPageModelGemini_3`, and were verified to be **byte-identical across all
six repositories**:

| Skill | Files | SHA-256 of the folder manifest (first 16 hex) |
|---|---|---|
| `brand-landingpage` | 4 | `225c13477c9b7ec2` |
| `security-best-practices` | 13 | `ca5aec2e5fb2bf11` |
| `web-design-guidelines` | 1 | `e9596b4d8c877954` |

Repositories checked: `LandingPageModelGemini_2`, `LandingPageModelGemini_3`,
`LandingPageModelGPT_2`, `LandingPageModelGPT_3`, `LandingPageModelClaude_2`,
`LandingPageModelClaude_3`. The three projects generated under condition 1 carry no
`.agents/` folder, which is consistent with prompt I making no use of skills.

## Upstream origin

`skills-lock.json` is the lockfile committed with the artifacts. It records where each
skill was obtained and the content hash that was installed:

| Skill | Upstream source | Path in upstream |
|---|---|---|
| `brand-landingpage` | `wshobson/agents` | `plugins/brand-landingpage/skills/brand-landingpage/SKILL.md` |
| `security-best-practices` | `openai/skills` | `skills/.curated/security-best-practices/SKILL.md` |
| `web-design-guidelines` | `vercel-labs/agent-skills` | `skills/web-design-guidelines/SKILL.md` |

The upstream repositories continue to evolve, so their current contents are not
expected to match the files reproduced here. The hashes in `skills-lock.json` and the
per-folder hashes above are what identify the versions actually used in the study.

## A fourth skill, present in one artifact only

`LandingPageModelGemini_2` also carries a `find-skills` skill, from `vercel-labs/skills`.
It is not one of the three named in prompts II and III and is not reproduced in this
folder; it remains in place inside that artifact, at
`artifacts/gemini-3-flash/condition-2-skills/.agents/skills/find-skills/`, since the
artifacts are preserved as delivered.
