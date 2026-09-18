# Data dictionary

Field-by-field description of every data file in this repository.

---

## 1. Evaluator mapping

| File ID | Evaluator | Source record |
|---|---|---|
| `evaluator-01` | P.H.S.M.S. | `formulario_avaliacao_landing_pages-Paulo-finalv2.xlsx` |
| `evaluator-02` | V.B. | `formulario_avaliacao_landing_pageS-valdecir.xlsx` |
| `evaluator-03` | C.E.P. | `formulario_avaliacao_landing_pages-Respostas_Clarissa.numbers` |
| `evaluator-04` | F.M.F.S. | `formulario_avaliacao_landing_page-felipe.xlsx` |

The four evaluators are the four authors of the article; their full names and ORCID identifiers are in `CITATION.cff`.

Evaluators are identified by initials. The numeric IDs are what appear in every data file, so the analysis can be audited and replicated without reference to this table.

The source records listed above are the original submissions by each evaluator. They were read programmatically and left unmodified; the CSV files in `evaluations/raw/` are derived copies in long format, with scale values translated into English according to the instrument in section 4.

---

## 1.1 Omitted and out-of-scale responses

No missing value was imputed. Fifteen of the 207 non-descriptive cells (24 criteria × 9 artifacts, minus the descriptive criterion 07) lack a valid response from at least one evaluator, leaving **192 valid records** for the agreement analysis. Every one of them is recorded in the `notes` column of the corresponding raw file, with the original response transcribed verbatim.

| Criterion | Artifact | Evaluator | Original response | Treatment |
|---|---|---|---|---|
| 09 | gpt-oss-120b, condition 3 | `evaluator-03` | *(blank)* | omitted |
| 14 | gemini-3-flash, condition 1 | `evaluator-03` | *(blank)* | omitted |
| 14 | gpt-oss-120b, condition 2 | `evaluator-03` | *(blank)* | omitted |
| 14 | gpt-oss-120b, condition 3 | `evaluator-02` | `todos` | not a count, discarded |
| 14 | gpt-oss-120b, condition 3 | `evaluator-03` | `1, mas com o grande impacto de não carregar o css` | leading numeric value `1` used, original kept in `notes` |
| 14 | claude-opus-4-6, condition 1 | `evaluator-03` | *(blank)* | omitted |
| 15 | gpt-oss-120b, condition 2 | `evaluator-03` | *(blank)* | omitted |
| 16 | gpt-oss-120b, condition 3 | `evaluator-02` | `não` | outside the scale, discarded |
| 16 | gpt-oss-120b, condition 3 | `evaluator-03` | *(blank)* | omitted |
| 17 | gpt-oss-120b, condition 3 | `evaluator-02` | `não` | outside the scale, discarded |
| 17 | gpt-oss-120b, condition 3 | `evaluator-03` | *(blank)* | omitted |
| 18 | gemini-3-flash, condition 1 | `evaluator-03` | *(blank)* | omitted |
| 18 | gpt-oss-120b, condition 3 | `evaluator-02` | `não` | outside the scale, discarded |
| 18 | gpt-oss-120b, condition 3 | `evaluator-03` | *(blank)* | omitted |
| 19 | gpt-oss-120b, condition 3 | `evaluator-03` | *(blank)* | omitted |
| 20 | gpt-oss-120b, condition 3 | `evaluator-03` | *(blank)* | omitted |
| 21 | gpt-oss-120b, condition 3 | `evaluator-03` | *(blank)* | omitted |
| 22 | gpt-oss-120b, condition 3 | `evaluator-03` | *(blank)* | omitted |
| 23 | gpt-oss-120b, condition 3 | `evaluator-02` | `não` | outside the scale, discarded |

Thirteen of these nineteen entries fall on the third generation of GPT-OSS 120B, the artifact whose stylesheet did not load, which is what leaves several criteria unobservable there rather than simply unanswered. Consolidation of an affected cell used whatever valid responses remained.

---

## 1.2 Scale normalization

Responses were recorded in Portuguese and normalized to the English scales of Table 2. The complete mapping applied:

| Portuguese | English | Criteria |
|---|---|---|
| `sim` / `não` | `yes` / `no` | 01, 02, 05, 08, 12, 13, 19, 20, 21, 22 |
| `ok` / `falhou` / `não` | `ok` / `failed` / `no` | 03 |
| `baixa` / `média` / `alta` | `low` / `medium` / `high` | 04, 11, 15 |
| `baixo` / `médio` / `alto` | `low` / `medium` / `high` | 16, 23 |
| `baixa` / `adequada` / `alta` | `low` / `adequate` / `high` | 09 |
| `baixo` / `adequado` / `excessivo` | `low` / `adequate` / `excessive` | 10 |
| `fraca` / `média` / `forte` | `weak` / `medium` / `strong` | 17 |
| `rasa` / `média` / `detalhada` | `shallow` / `medium` / `detailed` | 18 |
| integer | integer, preserved | 06, 14 |
| 1–5 | 1–5, preserved | 24 |

Ordering used for the median: `no < failed < ok` (03), `low < adequate < high` (09), `low < adequate < excessive` (10); the remaining ordinal criteria follow the natural order of their scale.

For criterion 07, the terms recorded by the evaluators were normalized to canonical section names before counting:

| Canonical section | Terms grouped |
|---|---|
| `header` | header, navbar, site-header, menu |
| `hero` | hero, main-content, main-content (hero), slogan |
| `features` | features, recursos, diferenciais, vantagens, benefits, "por que baixar?" |
| `curation` | curadoria, showcase |
| `catalog` | catalog, catálogo, catálogo de imóveis, imóveis, properties |
| `about us` | about, sobre nós |
| `reviews` | testimonials, depoimentos, depoimento de clientes, avaliações, reviews |
| `download` | download, baixar, baixar app, baixe o app, instalar app, CTA |
| `footer` | footer, site-footer |
| `empty section` | vazio |

`Não gerado` was treated as an absence of sections. Only sections named by at least two evaluators enter the consolidated result, which is why `footer` — named by exactly one evaluator on every artifact — appears in no consolidated cell.

---

## 2. `evaluations/raw/evaluator-NN_landing-page-assessment.csv`

One file per evaluator. Long format, one row per criterion per artifact.

| Column | Type | Description |
|---|---|---|
| `evaluator_id` | string | `evaluator-01` … `evaluator-04` |
| `model` | string | `gemini-3-flash`, `gpt-oss-120b`, `claude-opus-4-6` |
| `condition` | integer | `1` simple prompt, `2` prompt with skills, `3` detailed prompt with skills |
| `criterion_id` | integer | `1`–`24`, as defined in section 4 below |
| `value` | string | The assigned value, using the scale defined for that criterion |
| `notes` | string | Free-text observation, optional |

Each evaluator produced 216 assignments (24 criteria × 9 artifacts), totalling 864.

---

## 3. `evaluations/consolidated/`

### `consolidated-results.csv`

One row per criterion, one column per artifact. This is Table 3 of the article.

| Column | Type | Description |
|---|---|---|
| `criterion_id` | integer | `1`–`24` |
| `<model>_condition-<n>` | string | Consolidated value; `DIV` marks an unresolved even split among evaluators |

Consolidation rules: dichotomous criteria by simple majority; ordinal, count and five-point criteria by the median of the four assignments, adopting the lower scale point when the median falls between two points. Five cells remained as `DIV`, all in dichotomous criteria.

### `agreement-analysis.csv`

| Column | Type | Description |
|---|---|---|
| `criterion_type` | string | `dichotomous`, `ordinal-3`, `count`, `scale-5`, plus an `all` row |
| `n_records` | integer | Valid records of this type |
| `full_agreement_pct` | float | Share with all four evaluators in agreement |
| `three_of_four_pct` | float | Share with at least three evaluators in agreement |
| `n_full_agreement` | integer | Absolute count behind `full_agreement_pct` |
| `n_three_of_four` | integer | Absolute count behind `three_of_four_pct` |

Computed over 192 valid records, excluding the descriptive criterion 07 and the omitted cells listed in section 1.1. A record is a (criterion, artifact) cell for which all four evaluators supplied a value on the criterion's scale.

| Type | Criteria | n | Full agreement | At least three |
|---|---|---|---|---|
| Dichotomous | 01, 02, 05, 08, 12, 13, 19, 20, 21, 22 | 86 | 72.1% (62) | 94.2% (81) |
| Three-point ordinal | 03, 04, 09, 10, 11, 15, 16, 17, 18, 23 | 83 | 43.4% (36) | 69.9% (58) |
| Count | 06, 14 | 14 | 0.0% (0) | 35.7% (5) |
| Five-point scale | 24 | 9 | 11.1% (1) | 55.6% (5) |
| **All** | | **192** | **51.6% (99)** | **77.6% (149)** |

These are the values reported in section 4 of the article.

---

## 4. `instrument/evaluation-instrument.csv`

The 24 criteria. Criteria marked `Emergent` have no direct counterpart in the consolidated literature and constitute the original contribution of the instrument.

| Dim. | # | Criterion | Description | Scale | Reference |
|---|---|---|---|---|---|
| Visual identity | 01 | Favicon | presence of the icon in the browser tab | yes / no | Emergent |
| | 02 | Icons | use of visual elements in the sections | yes / no | Emergent |
| | 03 | Store icons | App Store / Google Play generated correctly | ok / failed / no | Emergent |
| | 04 | Illustrative images | relevance and quality of the generated images | low / medium / high | Lidwell et al. (2010) |
| Structure and layout | 05 | Understanding of the LP | model understood the landing-page structure | yes / no | Meslem and Abbaci (2022) |
| | 06 | No. of sections | total number of sections | count | Emergent |
| | 07 | Section themes | which sections were generated | descriptive | Emergent |
| | 08 | Navigation menu | presence of a functional nav/header | yes / no | Krug (2014) |
| | 09 | Repetition of elements | excessive reuse of components | low / adequate / high | Emergent |
| | 10 | Spacing | visual rhythm between elements | low / adequate / excessive | Lidwell et al. (2010) |
| Technique and code | 11 | Responsiveness | adaptation to different screen sizes | low / medium / high | Marcotte (2014); ISO 9241-11 (2018) |
| | 12 | General animations | scroll, entrance, CSS transitions | yes / no | Nielsen (1994) |
| | 13 | Hover / interaction | visual feedback on buttons and links | yes / no | Nielsen (1994) |
| | 14 | CSS failures | number of visual errors in the code | count | Emergent |
| | 15 | Severity of failures | impact of failures on the experience | low / medium / high | Nielsen (1994) |
| Readability and hierarchy | 16 | Contrast and readability | readable text on backgrounds | low / medium / high | ISO 9241-11 (2018) |
| | 17 | Typographic hierarchy | emphasis and weight of headings/texts | weak / medium / strong | Lidwell et al. (2010) |
| | 18 | Content depth | informative or generic texts | shallow / medium / detailed | Krug (2014) |
| | 19 | Content filters | interaction for hiding part of the content | yes / no | Emergent |
| UI components | 20 | Recognizable buttons | CTAs with button-like appearance | yes / no | Norman (2013) |
| | 21 | False buttons | non-clickable texts with button-like appearance | yes / no | Norman (2013) |
| | 22 | Rounded corners | use of border-radius on elements | yes / no | Emergent |
| Overall evaluation | 23 | Level of adjustment required | effort required to reach the final product | low / medium / high | Emergent |
| | 24 | Overall quality | consolidated impression of the interface | 1–5 | Brooke (1996) |

Colors were deliberately excluded from the instrument, since they are directly specified in the prompts and would reflect the user's instructions rather than the model's autonomous contribution.

---

## 5. `prompts/`

| File | Content |
|---|---|
| `prompt-01-simple_pt.md` / `_en.md` | Condition 1, without additional detail |
| `prompt-02-skills_pt.md` / `_en.md` | Condition 2, non-detailed prompt supplemented with skills |
| `prompt-03-detailed_pt.md` / `_en.md` | Condition 3, fully detailed prompt combined with skills |

Prompts were written and applied in Portuguese and subsequently translated. The Portuguese files are the ones actually submitted to the models.

---

## 6. `skills/`

The three skill folders referenced in conditions 2 and 3, reproduced in full: `brand-landingpage`, `security-best-practices` and `web-design-guidelines`.

These are the versions actually supplied to the models, recovered from the `.agents/skills/` folders committed with the artifacts on 26 May 2026 and verified byte-identical across the six repositories that carry them. `skills-lock.json` records the upstream origin and content hash of each one. The upstream repositories have since moved on and are not expected to match. See `skills/PROVENANCE.md`.

---

## 7. `artifacts/`

Source code of the nine generated landing pages, preserved exactly as delivered by the models. Per-folder source repository, commit hash, technology stack and deployment URL are recorded in `artifacts/PROVENANCE.md`. Failures were not corrected, since they are the object of criteria 14 and 15.
