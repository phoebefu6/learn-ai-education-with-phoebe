# Official course map - learn-ai-education-with-phoebe

Research date: 2026-08-03. All syllabi and studies fetched live and verified by 3 parallel research agents. Fast-moving space: re-verify vendor course URLs and adoption stats before delivery.

## Sources

| # | Source | URL | Depth |
|---|--------|-----|-------|
| S1 | Anthropic: AI Fluency (4D framework) + AI Fluency for Educators + Claude for Education / Learning Mode | anthropic.skilljar.com/ai-fluency-framework-foundations · coursera.org/learn/ai-fluency-for-educators · claude.com/solutions/education | 2 courses + product |
| S2 | Google "Generative AI for Educators with Gemini" (Grow with Google + MIT RAISE) | grow.google/ai-for-educators | 2h, certificate |
| S3 | Microsoft Learn "AI for educators" learning path | learn.microsoft.com/en-us/training/paths/ai-education/ | 4 modules |
| S4 | OpenAI "ChatGPT Foundations for Teachers" + educator FAQ + ChatGPT for Teachers workspace | coursera.org/learn/chatgpt-foundations-for-teachers · help.openai.com/en/articles/8313351 | 7 modules + FAQ |
| S5 | Common Sense Education AI PD (AI Basics · ChatGPT Foundations K-12 · Advanced ChatGPT) | commonsense.org/education/AI-PD-For-Educators | 3 courses |
| S6 | ISTE "AI Deep Dive for Educators" + "AI Deep(er) Dive" | iste.org/courses/ai-deep-dive-for-educators | 2 x 15h, grad credit |
| S7 | UNESCO AI Competency Frameworks - Teachers (2024) + Students (2024) | unesco.org/en/digital-education/ai-future-learning/competency-frameworks | 2 frameworks |
| S8 | Mollick x2: Wharton Coursera "AI in Education: Leveraging ChatGPT for Teaching" + "Assigning AI: Seven Approaches for Students" | coursera.org/learn/wharton-ai-in-education-leveraging-chatgpt-for-teaching · arxiv.org/abs/2306.10052 | 4 modules + paper |
| S9 | Learning-outcome + detection evidence base (peer-reviewed) | pnas.org (Bastani) · nature.com (Kestin) · cell.com/patterns (Liang) · dl.acm.org (Lee CHI) · arxiv 2506.08872 (Kosmyna) · vanderbilt.edu (detector guidance) | 6 studies/docs |
| S10 | Higher-ed teaching centers: Vanderbilt AdvancED · Harvard Bok/OUE · Stanford Teaching Commons | vanderbilt.edu/generative-ai/teaching · bokcenter.harvard.edu/artificial-intelligence · teachingcommons.stanford.edu | 3 institutions |
| S11 | Privacy rails: FERPA/COPPA guidance (FPF, Student Privacy Compass, NMU) + Singapore MOE/PDPA | studentprivacycompass.org · fpf.org · moe.gov.sg | guidance corpus |
| S12 | Corporate L&D: ATD Applying AI in L&D cert · LinkedIn Learning GenAI-for-L&D path · Bersin maturity model · Khanmigo · TeachAI toolkit · adoption data (Gallup 2025, EDUCAUSE 2025) | td.org · joshbersin.com · khanmigo.ai/teachers · teachai.org/toolkit · news.gallup.com | frameworks + data |

## Verified key facts (build against these)

### Frameworks
- **Anthropic 4D AI Fluency (S1, exact):** Delegation (whether/when/how to engage AI) · Description (communicating goals) · Discernment (assessing outputs) · Diligence (responsibility: academic integrity, data privacy, accuracy, transparency about AI's role). Educator course = 3h delta on the base course.
- **Learning Mode (S1):** Socratic questioning ("What evidence supports your conclusion?"), guided reasoning, no direct answers. Khanmigo same design DNA: Socratic hints, "won't give answers"; free for educators 18+ in 44+ countries (Microsoft-funded).
- **UNESCO AI CFT for Teachers (S7, exact):** 5 dimensions (Human-centred mindset · Ethics of AI · AI foundations and applications · AI pedagogy · AI for professional development) x 3 levels (Acquire / Deepen / Create) = 15 blocks. Student framework: 4 dimensions x 3 levels (Understand / Apply / Create) = 12 blocks.
- **Mollick's 7 student-facing AI roles (S8, exact names + function):** AI-tutor (knowledge) · AI-coach (metacognition) · AI-mentor (feedback) · AI-teammate (collaborative intelligence) · AI-tool (performance) · AI-simulator (practice) · AI-student (checks understanding - the teach-the-AI / protege-effect pattern).
- **3-tier syllabus policy pattern (S10):** Vanderbilt exact tiers: "allowed" / "allowed only in certain scenarios" / "never allowed". Harvard variant: "maximally restrictive" / "mixed" / "fully-encouraging". Harvard FAS REQUIRES every faculty to state a policy; Stanford: syllabus statement must be self-contained, students cite AI use.
- **Bersin Corporate Learning Maturity Model (S12):** 4 levels - Static Training (~33% of market) · Scaled Learning · Integrated Development · Dynamic Enablement. $400B global spend; >$1,400/employee/yr; Level-4 orgs 10x more likely innovation leaders.
- **ADGIE (Hardman, instructional design):** ADDIE with AI per phase - Analysis (AI personas/skill maps) · Design (AI training-plan prototypes) · Generation (AI first drafts, designer QC) · Individualisation (real-time adaptation) · Evaluation (continuous). Cite for ID-with-AI, NOT for Bloom's/rubrics (her article does not cover those; anchor rubric/objective generation on Khanmigo features + Vanderbilt course-design page instead).

### The evidence spine (quote these exactly)
- **Bastani et al., PNAS 122 (2025), e2422633122:** RCT, ~1,000 Turkish high-school math students. Vanilla GPT-4 ("GPT Base"): practice +48% but unassisted exam **-17% vs control**. Guardrailed "GPT Tutor" (hints, no direct answers): practice **+127%**, exam harm eliminated (~level with control, not reversed).
- **Kestin et al., Scientific Reports 15 (2025):** Harvard physics RCT - well-designed AI tutor: students learned **more than twice as much in less time** vs active-learning classroom.
- **Liang et al., Patterns 4(7) 2023:** GPT detectors flagged **61%+ of honest TOEFL essays by non-native English speakers** as AI (avg 61.22% across 7 detectors; ~19% flagged by ALL 7); near-perfect on native-speaker 8th-grade essays. Also trivially evadable (prompt to "elevate" text: 61% -> 12% flags).
- **OpenAI (2023 + FAQ):** own classifier caught only **26%** of AI text, 9% false positives on human text; retired July 20, 2023 "due to its low rate of accuracy". FAQ verdict: detectors do not reliably work; their tests flagged Shakespeare and the Declaration of Independence.
- **Vanderbilt (Aug 16, 2023):** disabled Turnitin's AI detector. Arithmetic: claimed 1% false-positive rate x ~75,000 papers/yr = **~750 falsely accused students/yr**. Michigan State, Northwestern followed.
- **Kosmyna et al., arXiv 2506.08872 (MIT, 2025):** EEG essay study - LLM group weakest neural connectivity, could not quote own essays minutes later. Preprint, n=54: present as suggestive, not conclusive.
- **Lee et al., CHI 2025 (Microsoft/CMU):** 319 knowledge workers - higher confidence in AI <-> less critical thinking; work shifts from doing to verifying. The corporate-L&D bridge evidence.
- **Convergence (S1-S6):** all six vendors teach redesign + transparency; ZERO endorse detection. OpenAI is on record: don't rely on detectors. ISTE is the only vendor naming "maintaining academic integrity" in a course description (via assessment integration).

### Adoption + governance numbers
- **Gallup/Walton (June 2025, n=2,232 US K-12 teachers):** 60% used AI this school year; 32% weekly; weekly users save **5.9 h/wk ≈ 6 weeks/school-year**. Top tasks: preparing to teach 37%, worksheets 33%, modifying materials 28%.
- **EDUCAUSE 2025 (n≈800 higher-ed):** 57% say AI strategic priority; only 22% have institution-wide AI strategy; 39% have acceptable-use policies (up from 23%); top strategy elements: faculty training 63%, staff training 56%.
- **TeachAI/RAND:** only **18%** of US principals' schools provide AI guidance - **13% high-poverty vs 25% affluent** (the equity gap number).
- Student adoption (Digital Education Council 2025): 86% use AI in studies, 54% weekly - secondary-sourced, label as reported-not-verified if used.

### Privacy rails (exact)
- **FERPA:** student PII from education records into a consumer AI tool = unauthorized disclosure unless vendor is a "school official" under written agreement, school keeps control, no reuse/training. Practical rail: never enter student PII into consumer chatbots; use district-vetted tools with DPAs.
- **COPPA:** under-13 needs verifiable parental consent; schools may consent only for educational use; consumer chatbot ToS are 13+ (OpenAI: 13+, 13-18 with parental consent) -> elementary use routes through teacher-mediated / walled-garden tools.
- **~12 US states** explicitly say do not input student PII into AI systems; ~20 anchor guidance on FERPA/COPPA/CIPA/IDEA.
- **Singapore:** MOE routes classroom AI through Student Learning Space (SLS) with built-in guardrails (AI Learning Assistant "LEA", from Primary 4, teacher-supervised P4-6). PDPA: student data fully protected; minors' consent via parents/guardians (verify exact PDPC age wording before quoting).

### L&D specifics (S12)
- ATD "Applying AI in L&D" certificate: 3-day, hands-on multi-tool, 21 CE credits, working AI project deliverable.
- LinkedIn Learning "Generative AI for L&D" professional certificate: 5 courses ~5h (upskilling frameworks, personalization, skills-gap per role).
- What L&D teams DO with AI: skills-gap analysis, per-role skill maps, hyper-personalized paths, AI-assisted content creation, performance support, content rationalization.

## Running case - Riverview (canon: pages must quote exactly these)

**Riverview Secondary. Ms. Tan. Grade 9, 28 students. Persuasive-essay unit: "Should our city ban single-use plastics?"** The educator track redesigns this one unit end-to-end; b9 mirrors the same moves onto a corporate onboarding module.

Canon characters + numbers:
- Students: **Dana Okafor** (honest B+ writer, non-native English speaker, IEP for written expression) · **Marcus** (answer-machine temptation) · **Priya** (debate practice) · **Jae** (voluntary discloser) · **Aiden** (aces take-home, blanks the oral) · **Yusuf** (second false detector flag).
- The polished-drafts moment: **14 of 28** final drafts read above in-term writing. Portfolio evidence splits them: **9 grammar-polish (allowed tier) / 3 argument-restructure (restricted tier) / 2 outsourced sections (prohibited tier)**.
- Detector run: flags **4 essays - 2 real (the outsourcers), 2 false (Dana + Yusuf, honest non-native writers)**.
- Unit redesign artifacts: 3-tier policy statement -> scaffolded AI roles -> process portfolio (outline, 2 drafts, AI transcript, in-class paragraph) -> 5-minute oral defense -> AI-transparent rubric.

## edu-live.js - lever ladder (hard-coded rungs, quote exactly)

12 classroom moments ("does learning survive?"). Levers: policy / roles / redesign / privacy + **detector (anti-lever)**.

| Rung | Levers on | Score |
|------|-----------|-------|
| 0 | none | **2 / 12** |
| 1 | policy | **5 / 12** |
| 2 | policy + roles | **8 / 12** |
| 3 | policy + roles + redesign | **10 / 12** |
| 4 | all four | **12 / 12** |
| trap | all four + detector | **11 / 12** (Dana falsely flagged) |

Trace scenarios: `essay` (polished-drafts moment; fails without redesign, fails differently without policy) · `detector` (false-accusation trap; detector ON always fails) · `tutor` (Marcus; PNAS -17% vs +127% numbers) · `privacy` (IEP paste; FERPA/PDPA catch). Embed: `<div class="edubox" data-mode="trace|score" data-scenario="..." data-levers="...">`. Empty data-levers = all OFF; absent attribute = four ON, detector OFF. Honesty rail: scripted teaching sim, statistics from the cited verified studies.

## Per-session coverage - leader track (6 x 45 min)

| Session | Covers | S1 | S7 | S8 | S9 | S10 | S11 | S12 |
|---------|--------|----|----|----|----|-----|-----|-----|
| a1 What AI changes in learning | adoption reality (60%/5.9h/86%), answer-machine problem, hype vs evidence | ◐ | ◐ | | ◐ | | | ✓ |
| a2 The evidence, in plain English | Bastani/Kestin/Kosmyna/Lee - design determines outcome | | | ◐ | ✓ | | | ◐ |
| a3 Detection is broken - redesign instead | Liang/OpenAI/Vanderbilt, 3-tier policy pattern, detector trace demo | ◐ | | ◐ | ✓ | ✓ | | |
| a4 Privacy, equity, governance | FERPA/COPPA/PDPA+SLS, TeachAI toolkit, vetted tools, 13%-vs-25% equity gap | | ◐ | | | | ✓ | ✓ |
| a5 Your institution's AI roadmap | UNESCO CFT, PD strategy, build-vs-buy (Khanmigo/Claude for Edu/ChatGPT for Teachers), Bersin for L&D | ✓ | ✓ | | | | | ✓ |
| a6 Leading the change | rollout, champions, measurement, false-accusation protocol, next 12 months | ◐ | ◐ | | ◐ | ✓ | ◐ | ◐ |

## Per-session coverage - educator track (10 x 45 min)

| Session | Covers | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 | S11 | S12 |
|---------|--------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| b1 The educator's AI loop | 4D fluency spine, delegation judgment, edu-live rung-0 disaster | ✓ | ◐ | ◐ | ◐ | ◐ | | ◐ | | ◐ | | | |
| b2 Prompting for teaching | prompt-iterate-evaluate, context-rich teaching prompts, Mollick patterns | ◐ | ✓ | ✓ | ✓ | ◐ | | | ◐ | | | | |
| b3 The 7 student-facing AI roles | Assigning AI hands-on, role prompts, protege effect | | | | | | | ◐ | ✓ | ◐ | | | |
| b4 Design lessons + units with AI | backward design + ADGIE, objectives, differentiation, Riverview unit v1 | | ✓ | ◐ | ✓ | ◐ | ◐ | | ◐ | | ◐ | | ◐ |
| b5 Assessment redesign | process portfolios, orals, in-class, AI-transparent rubrics; simulator centerpiece | | | | ◐ | | ✓ | | ✓ | ✓ | ✓ | | |
| b6 Build a guardrailed tutor | Socratic system prompts, Learning Mode/Khanmigo pattern, Bastani guardrails | ✓ | | | ◐ | | | | ✓ | ✓ | | | ◐ |
| b7 Integrity + policy in practice | 3-tier statements, disclosure norms, suspicion without detectors | | | | ✓ | ◐ | ✓ | ◐ | | ✓ | ✓ | | |
| b8 Privacy + safety rails | PII discipline, COPPA reality, vetted tools, PDPA/SLS | | | ◐ | ◐ | ✓ | | ◐ | | | | ✓ | ◐ |
| b9 AI for corporate L&D | skills gaps, personalization, Bersin levels, ATD/LinkedIn patterns, ADGIE | ◐ | | | | | | | | ◐ | | | ✓ |
| b10 Capstone: redesign the full unit | Riverview assembled: policy + roles + redesigned assessment + rails; 12/12 | ✓ | | | | | ◐ | ✓ | ✓ | ✓ | ✓ | ✓ | |

✓ = session teaches ~80% of that source's working content for the topic. ◐ = partial/contextual. Certificates/assessments stay with the official providers - say so honestly on the pages.

## Overlap analysis (scoping lever)

Shared core taught ONCE (4+ sources): prompt-iterate-evaluate loop · teacher time-saving use cases (planning, differentiation, materials, comms) · responsible-use basics · critically evaluating AI output. Sessions b1-b2 + b4 carry this spine; per-vendor deltas become pointers, not repeats.

Unique deltas: S1-only (4D framework, Learning Mode design) -> b1/b6. S8-only (7 roles, GPT-building for teaching) -> b3. S9-only (the RCT evidence + detection stats) -> a2/a3/b5/b6. S10-only (3-tier policy language) -> a3/b7. S11-only (FERPA/COPPA/PDPA specifics) -> a4/b8. S12-only (Bersin, ATD, skills-gap methods) -> a5/b9. S7-only (UNESCO dimensions) -> a5.

## Open lane (nobody teaches yet - this course's differentiation)

A detector ANTI-LEVER in a live simulator (turning the "obvious fix" on makes the score visibly worse, quoting real false-positive research) · one unit redesigned end-to-end as the running case with process-portfolio artifacts · the two-sided evidence base (same tool, -17% or 2x learning, design decides) taught with exact citations · K-12 + higher-ed + corporate L&D in one arc with an explicit mirror session · PDPA/SLS alongside FERPA/COPPA.

## Not covered by design (honest list)

- Building AI products or edtech startups (pointer to ship-idea territory)
- K-12 student-facing AI-literacy curriculum (pointer to UNESCO student framework + learn-ai-literacy sibling course)
- LMS administration and edtech procurement mechanics
- AI-detection tool tutorials (deliberately - the course teaches why not)
- Custom GPT / tutor-bot hosting infrastructure (b6 builds the prompt + pattern, not the platform)
