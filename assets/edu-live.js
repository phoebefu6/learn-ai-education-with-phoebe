/* edu-live.js - the Riverview assignment-redesign simulator + scorecard.
   Usage:
     <div class="edubox" data-mode="trace" data-scenario="essay" data-levers="policy"></div>
     <div class="edubox" data-mode="score" data-levers="policy,roles,redesign,privacy"></div>
   data-levers = which levers start ON (comma list of: policy,roles,redesign,privacy,detector).
   The fifth lever, "detector", is deliberately an anti-lever: it never raises the score,
   and in one documented scenario it makes things worse. That is the point.
   Honesty rail: the classroom moments are a scripted teaching simulation; the statistics
   quoted (61%, 26%, -17%, +127%, ~750/yr) come from the verified studies cited on the
   course pages (Liang et al. Patterns 2023; OpenAI 2023; Bastani et al. PNAS 2025;
   Vanderbilt 2023).
*/
(function () {
  "use strict";

  /* ---------- levers ---------- */

  var LEVERS = [
    { key: "policy",   label: "Policy",        hint: "A clear 3-tier syllabus AI policy: what is allowed, restricted, prohibited - plus a disclosure norm." },
    { key: "roles",    label: "AI roles",      hint: "Scaffolded AI roles for students (tutor, coach, simulator, teammate) and a guardrailed Socratic tutor instead of an answer machine." },
    { key: "redesign", label: "Redesign",      hint: "Redesigned assessment: process portfolios, in-class writing, oral checkpoints, AI-transparent rubrics." },
    { key: "privacy",  label: "Privacy rails", hint: "PII discipline: vetted tools only, student identity stripped, under-13 use teacher-mediated." },
    { key: "detector", label: "AI detector",   hint: "Run submissions through an AI-writing detector. Try it and watch what it does to the score." }
  ];

  /* ---------- the 12 classroom moments (golden set) ---------- */
  /* lever: which lever makes this moment survivable. null = survives at rung 0.
     detectorTrap: the detector anti-lever flips this moment to a fail when ON. */

  var TASKS = [
    { q: "Dana, a non-native English speaker, submits an honest B+ essay",
      lever: null, detectorTrap: true,
      pass: "Graded on its merits. Dana keeps trusting the class.",
      trapText: "Detector flags it \"likely AI\". False accusation - detectors flag 61% of honest non-native TOEFL essays." },
    { q: "Ms. Tan drafts the weekly parent newsletter with AI",
      lever: null,
      pass: "20 minutes saved on a low-stakes task. Reviewed before sending." },
    { q: "A parent asks: is my kid allowed to use ChatGPT for homework?",
      lever: "policy",
      pass: "The syllabus statement answers it in one sentence, per assignment tier.",
      fail: "Every teacher gives a different answer. Trust erodes at home." },
    { q: "Jae voluntarily discloses AI help on a bibliography draft",
      lever: "policy",
      pass: "Disclosure norm exists - honesty is the expected path, not a confession.",
      fail: "No disclosure norm - Jae's honesty reads as an admission of cheating." },
    { q: "Two teachers set opposite AI rules for the same course",
      lever: "policy",
      pass: "One policy template, per-assignment tiers. Students know where they stand.",
      fail: "Allowed in period 2, banned in period 5. Students conclude the rules are theater." },
    { q: "Marcus asks the chatbot for his essay thesis - and gets one",
      lever: "roles",
      pass: "The guardrailed tutor answers with questions, not a thesis. Marcus builds his own.",
      fail: "The answer machine hands him a thesis. He submits words he cannot defend." },
    { q: "Priya rehearses counterarguments the night before the debate",
      lever: "roles",
      pass: "AI-as-simulator argues back. Priya practices, stumbles, recovers - ready.",
      fail: "AI writes her arguments for her. Live rebuttal exposes she never owned them." },
    { q: "A study group wants AI as a fifth teammate on research",
      lever: "roles",
      pass: "AI-teammate has a defined job: source-finder and devil's advocate, credited in the log.",
      fail: "The \"teammate\" quietly becomes the ghostwriter for all four students." },
    { q: "Half of period 3 submits suspiciously polished final drafts",
      lever: "redesign",
      pass: "Process portfolios show every draft + AI transcript. The work is visible and gradable.",
      fail: "Final-draft-only grading: no evidence trail, so every option is a guess or an accusation." },
    { q: "Aiden aces the take-home essay, then blanks on a 5-minute oral",
      lever: "redesign",
      pass: "The oral checkpoint is part of the grade - the gap surfaces in week 3, fixable.",
      fail: "No oral component. The gap stays hidden until the exam, when it is too late." },
    { q: "Ms. Tan wants differentiation ideas for a student with an IEP",
      lever: "privacy",
      pass: "Vetted tool, identity stripped: \"a Grade 9 student who struggles with written organization\".",
      fail: "Name + diagnosis pasted into a free consumer chatbot - student data leaves district control." },
    { q: "The Primary 5 class (age 11) wants to chat with the AI directly",
      lever: "privacy",
      pass: "Teacher-mediated, walled-garden route - under-13 use never touches consumer tools.",
      fail: "Consumer chatbot terms require 13+. The class is set up to break them on day one." }
  ];

  function taskResult(t, on) {
    if (t.detectorTrap && on.detector) {
      return { ok: false, lever: "detector backfired", text: t.trapText };
    }
    if (!t.lever) return { ok: true, text: t.pass };
    if (on[t.lever]) return { ok: true, text: t.pass };
    var lv = LEVERS.filter(function (l) { return l.key === t.lever; })[0];
    return { ok: false, lever: lv ? lv.label : t.lever, text: t.fail };
  }

  /* ---------- trace scenarios ---------- */
  /* Step kinds: user / plan / call / result / guard / answer. */

  function s(kind, label, body) { return { kind: kind, label: label, body: body }; }

  var SCENARIOS = {

    essay: {
      title: "Moment: half of period 3 submits suspiciously polished essays",
      build: function (on) {
        if (!on.redesign) {
          return { verdict: { ok: false, note: "Final-draft-only grading leaves no evidence trail. Every option on the table is a guess or an accusation." },
            steps: [
              s("user", "SITUATION", "14 of 28 final drafts read far above the class's in-term writing. The unit grade is one artifact: the final draft."),
              s("plan", "MS. TAN'S OPTIONS", "1) Accuse on gut feel - risk false accusations.\n2) Ignore it - the grade stops meaning anything.\n3) Re-test everyone - punishes the honest half."),
              s("result", "WHAT SHE HAS", "No drafts. No process record. No disclosure norm. The essay is a black box with a name on it."),
              s("answer", "OUTCOME ✗", "Whatever she picks, she is deciding on suspicion instead of evidence. This is the assessment design failing, not the students.")
            ] };
        }
        if (!on.policy) {
          return { verdict: { ok: false, note: "Evidence without a rulebook: the portfolio shows AI use, but nobody agreed what use was allowed. You cannot enforce a rule you never set." },
            steps: [
              s("user", "SITUATION", "14 of 28 final drafts read far above the class's in-term writing."),
              s("call", "ACTION - open portfolios", "Process portfolios exist: outlines, two drafts, AI-chat transcripts, in-class paragraphs."),
              s("result", "EVIDENCE", "9 students used AI to polish grammar. 3 had it restructure arguments. 2 had it write whole sections."),
              s("plan", "THE SNAG", "Which of those was allowed? The syllabus never said. Each student made their own honest guess."),
              s("answer", "OUTCOME ✗", "The evidence is clear but the standard is not - grading now means applying a rule retroactively.")
            ] };
        }
        return { verdict: { ok: true, note: "Policy set the standard, redesigned assessment made the work visible. Nobody needed a detector." },
          steps: [
            s("user", "SITUATION", "14 of 28 final drafts read far above the class's in-term writing."),
            s("call", "ACTION - open portfolios", "Process portfolios exist: outlines, two drafts, AI-chat transcripts, in-class paragraphs."),
            s("result", "EVIDENCE", "9 polished grammar (allowed tier, disclosed). 3 restructured arguments (restricted tier - disclosed, minor deduction per rubric). 2 outsourced sections (prohibited tier)."),
            s("guard", "RAIL - due process", "The 2 prohibited cases get a conversation + redo with process evidence, per the policy everyone signed in week 1. No accusations, no detector."),
            s("answer", "OUTCOME ✓", "27 grades stand on visible work. The rubric graded the thinking, the policy graded the conduct - and the honest majority never fell under suspicion.")
          ] };
      }
    },

    detector: {
      title: "Moment: \"just run the flagged essays through an AI detector\"",
      build: function (on) {
        if (on.detector) {
          return { verdict: { ok: false, note: "The detector manufactured a false accusation out of statistical bias. This failure mode is documented, not hypothetical." },
            steps: [
              s("user", "SITUATION", "The department buys an AI-writing detector and runs period 3's essays through it."),
              s("call", "ACTION - detector scan", "28 essays scanned. 4 flagged \"likely AI-generated\"."),
              s("result", "THE FLAGS", "Two flags are the section-outsourcers. The other two: Dana and Yusuf - honest essays by non-native English speakers."),
              s("guard", "WHAT THE RESEARCH SAYS", "Detectors falsely flagged 61% of honest TOEFL essays by non-native speakers (Liang et al., Patterns 2023). OpenAI retired its own detector at a 26% catch rate. At a claimed 1% false-positive rate, Vanderbilt computed ~750 wrongly flagged students per year - and disabled Turnitin's detector."),
              s("plan", "THE MEETING", "Dana's parents are called in. Dana cannot prove a negative. The accusation is the punishment."),
              s("answer", "OUTCOME ✗", "Two real cases were already catchable by process evidence. The detector's only unique contribution was accusing two honest students.")
            ] };
        }
        if (!on.redesign) {
          return { verdict: { ok: false, note: "Refusing the detector was right - but with no process evidence either, there is still no way to answer the question. This is why the Redesign lever exists." },
            steps: [
              s("user", "SITUATION", "The department debates buying an AI-writing detector for period 3's essays."),
              s("plan", "MS. TAN", "She has read the research: 26% catch rate, 61% false-positive rate on non-native writers. She says no."),
              s("result", "BUT", "Final-draft-only grading means there is also no portfolio, no drafts, no in-class baseline to compare against."),
              s("answer", "OUTCOME ✗", "No detector and no evidence. The question \"did learning happen?\" is still unanswerable.")
            ] };
        }
        return { verdict: { ok: true, note: "The redesigned assessment answers the question the detector pretended to: not \"did AI touch this text?\" but \"can this student do the thing?\"" },
          steps: [
            s("user", "SITUATION", "The department debates buying an AI-writing detector for period 3's essays."),
            s("plan", "MS. TAN", "Wrong question. A detector guesses whether AI touched the text. Our assessment already shows whether the student can argue, draft, and defend."),
            s("call", "ACTION - the evidence that exists", "Portfolios: outline -> draft 1 -> AI transcript -> draft 2 -> in-class paragraph -> 5-minute oral defense."),
            s("guard", "RAIL - the standard", "Grades attach to visible process and live performance. AI use is disclosed and graded by tier, per policy."),
            s("answer", "OUTCOME ✓", "Nothing to buy. The redesign made the detector question irrelevant - and no honest student gets fed to a 61% false-positive machine.")
          ] };
      }
    },

    tutor: {
      title: "Moment: Marcus studies with AI for Friday's in-class essay",
      build: function (on) {
        if (!on.roles) {
          return { verdict: { ok: false, note: "Unguarded access made practice look great and learning get worse - the documented answer-machine effect (Bastani et al., PNAS 2025: -17% on the unassisted test)." },
            steps: [
              s("user", "SITUATION", "Friday is an in-class, no-devices persuasive essay. Marcus opens a vanilla chatbot Tuesday night to \"study\"."),
              s("call", "MARCUS -> CHATBOT", "\"Write a persuasive essay on banning single-use plastics, 5 paragraphs.\""),
              s("result", "CHATBOT", "A polished essay appears. Marcus reads it, nods, feels ready. His practice scores this week look excellent."),
              s("plan", "WHAT DIDN'T HAPPEN", "No thesis was built. No counterargument was wrestled with. The feeling of fluency belongs to the machine."),
              s("answer", "OUTCOME ✗", "Friday, no devices: Marcus stares at a blank page. In the PNAS randomized trial, students with vanilla chatbot access scored about 17% WORSE than the no-AI group once the tool was taken away.")
            ] };
        }
        return { verdict: { ok: true, note: "Same student, same AI, different design: the guardrailed tutor kept the thinking on Marcus's side of the table. Design determines outcome." },
          steps: [
            s("user", "SITUATION", "Friday is an in-class, no-devices persuasive essay. Marcus opens the class's guardrailed tutor Tuesday night."),
            s("call", "MARCUS -> TUTOR", "\"Write a persuasive essay on banning single-use plastics.\""),
            s("guard", "TUTOR - Socratic rail", "\"I won't write it - but let's build yours. What's the strongest reason FOR a ban you can think of? And who loses if it passes?\""),
            s("result", "20 MINUTES LATER", "Marcus has a thesis he chose, two counterarguments he answered, and an outline in his own words. The tutor gave hints, never paragraphs."),
            s("plan", "THE EVIDENCE", "In the same PNAS trial, a guardrailed tutor raised practice performance (+127%) WITHOUT the exam-day collapse. A Harvard RCT found a well-designed AI tutor doubled learning vs an active classroom."),
            s("answer", "OUTCOME ✓", "Friday, no devices: Marcus writes a real essay, because the practice was really his.")
          ] };
      }
    },

    privacy: {
      title: "Moment: differentiation ideas for a student with an IEP",
      build: function (on) {
        if (!on.privacy) {
          return { verdict: { ok: false, note: "One helpful instinct, one paste, and protected student data left district control. Privacy failures in schools are quiet - until they are not." },
            steps: [
              s("user", "SITUATION", "Ms. Tan wants to adapt the essay unit for Dana, who has an IEP for written expression."),
              s("call", "ACTION - the paste", "Into a free consumer chatbot: \"Dana Okafor, Grade 9, IEP for written-expression disorder, reads at grade level but panics on timed writing - adapt this essay unit for her.\""),
              s("result", "WHERE THAT WENT", "Name + disability + educational record, submitted to a consumer service with no district agreement - outside the school-official exception, usable per the vendor's own terms."),
              s("guard", "THE RULE THAT BROKE", "FERPA protects exactly this: PII from education records requires a vendor agreement under school control (Singapore's PDPA draws the same line). ~12 US states' guidance says it plainly: never put student PII in consumer AI tools."),
              s("answer", "OUTCOME ✗", "The lesson ideas were fine. The disclosure was the incident. Nobody will know until it matters.")
            ] };
        }
        return { verdict: { ok: true, note: "Same help, zero exposure: strip identity, use the vetted tool, keep the judgment human. The 10-second de-identification habit is the whole rail." },
          steps: [
            s("user", "SITUATION", "Ms. Tan wants to adapt the essay unit for Dana, who has an IEP for written expression."),
            s("plan", "THE RAIL", "Vetted district tool only - and Dana's identity never enters the prompt."),
            s("call", "ACTION - the safe prompt", "\"A Grade 9 student reads at grade level but struggles with organizing written arguments under time pressure. Suggest 3 scaffolds for a persuasive-essay unit.\""),
            s("result", "RESULT", "Sentence starters, a paragraph-planning template, an untimed outline stage - solid options, no record disclosed."),
            s("guard", "HUMAN IN THE LOOP", "Ms. Tan picks what fits Dana - the IEP knowledge stays in her head and the district's systems, where it belongs."),
            s("answer", "OUTCOME ✓", "Dana gets the support. The data never left. Under-13 classes run the same pattern with teacher-mediated access only.")
          ] };
      }
    }
  };

  /* ---------- rendering ---------- */

  function esc(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  var KIND_META = {
    user: { cls: "ag-user", icon: "🏫" },
    plan: { cls: "ag-plan", icon: "🧠" },
    call: { cls: "ag-call", icon: "✏️" },
    result: { cls: "ag-result", icon: "📦" },
    guard: { cls: "ag-guard", icon: "🛡" },
    answer: { cls: "ag-answer", icon: "🎓" }
  };

  function stepCard(step, idx) {
    var meta = KIND_META[step.kind] || KIND_META.plan;
    var card = document.createElement("div");
    card.className = "ag-step " + meta.cls;
    card.innerHTML =
      '<div class="ag-step-head"><span class="mcp-step-n">' + (idx + 1) + "</span>" +
      '<span class="ag-icon">' + meta.icon + '</span>' +
      '<span class="ag-label">' + esc(step.label) + "</span></div>" +
      '<pre class="ag-body">' + esc(step.body) + "</pre>";
    return card;
  }

  function leverBar(on, onChange) {
    var bar = document.createElement("div");
    bar.className = "ag-levers";
    LEVERS.forEach(function (lv) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "ag-lever" + (on[lv.key] ? " ag-on" : "");
      chip.title = lv.hint;
      chip.textContent = lv.label;
      chip.addEventListener("click", function () {
        on[lv.key] = !on[lv.key];
        chip.classList.toggle("ag-on", on[lv.key]);
        onChange();
      });
      bar.appendChild(chip);
    });
    return bar;
  }

  function parseLevers(block) {
    var attr = block.getAttribute("data-levers");
    var start = attr === null ? "policy,roles,redesign,privacy" : attr;
    var on = { policy: false, roles: false, redesign: false, privacy: false, detector: false };
    start.split(",").forEach(function (k) {
      k = k.trim(); if (on.hasOwnProperty(k)) on[k] = true;
    });
    return on;
  }

  function honestyRail() {
    var p = document.createElement("p");
    p.className = "ag-rail";
    p.textContent = "The classroom moments are a scripted teaching simulation - the failure modes are the documented ones, replayed. The statistics quoted (61%, 26%, -17%, +127%, ~750/yr) come from the verified studies cited on the course pages.";
    return p;
  }

  /* ---- trace mode ---- */

  function wireTrace(block) {
    var key = block.getAttribute("data-scenario");
    var sc = SCENARIOS[key];
    if (!sc) { block.innerHTML = '<p class="sql-err">Unknown scenario: ' + esc(key) + "</p>"; return; }
    var on = parseLevers(block);
    block.classList.add("agentbox-ready");

    var bar = document.createElement("div");
    bar.className = "sql-bar";
    bar.innerHTML = '<span class="sql-dot"></span>';
    var title = document.createElement("span"); title.className = "sql-title";
    title.textContent = sc.title; bar.appendChild(title);
    var spacer = document.createElement("span"); spacer.className = "sql-spacer"; bar.appendChild(spacer);
    var counter = document.createElement("span"); counter.className = "mcp-counter"; bar.appendChild(counter);
    var backBtn = document.createElement("button");
    backBtn.type = "button"; backBtn.className = "sql-btn"; backBtn.textContent = "◀ Back"; bar.appendChild(backBtn);
    var nextBtn = document.createElement("button");
    nextBtn.type = "button"; nextBtn.className = "sql-btn sql-run"; nextBtn.textContent = "Next ▶"; bar.appendChild(nextBtn);
    var allBtn = document.createElement("button");
    allBtn.type = "button"; allBtn.className = "sql-btn"; allBtn.textContent = "Show all"; bar.appendChild(allBtn);
    block.appendChild(bar);

    var feed = document.createElement("div"); feed.className = "ag-feed";
    var verdict = document.createElement("div");
    var shown = 1, current = sc.build(on);

    block.appendChild(leverBar(on, function () {
      current = sc.build(on); shown = current.steps.length; render();
    }));
    block.appendChild(feed);
    block.appendChild(verdict);
    block.appendChild(honestyRail());

    function render() {
      feed.innerHTML = "";
      current.steps.slice(0, shown).forEach(function (st, i) { feed.appendChild(stepCard(st, i)); });
      counter.textContent = shown + " / " + current.steps.length;
      backBtn.disabled = shown <= 1;
      nextBtn.disabled = shown >= current.steps.length;
      if (shown >= current.steps.length) {
        verdict.className = "ag-verdict " + (current.verdict.ok ? "ag-pass" : "ag-fail");
        verdict.textContent = (current.verdict.ok ? "PASS - " : "FAIL - ") + current.verdict.note;
      } else { verdict.className = "ag-verdict ag-quiet"; verdict.textContent = ""; }
    }
    nextBtn.addEventListener("click", function () { if (shown < current.steps.length) { shown++; render(); } });
    backBtn.addEventListener("click", function () { if (shown > 1) { shown--; render(); } });
    allBtn.addEventListener("click", function () { shown = current.steps.length; render(); });
    render();
  }

  /* ---- scorecard mode ---- */

  function wireScore(block) {
    var on = parseLevers(block);
    block.classList.add("agentbox-ready");

    var bar = document.createElement("div");
    bar.className = "sql-bar";
    bar.innerHTML = '<span class="sql-dot"></span><span class="sql-title">Riverview essay unit - 12 classroom moments</span>';
    block.appendChild(bar);

    var big = document.createElement("div"); big.className = "ag-score-big";
    block.appendChild(leverBar(on, render));
    block.appendChild(big);
    var table = document.createElement("div"); table.className = "ag-score-table";
    block.appendChild(table);
    block.appendChild(honestyRail());

    function render() {
      var passN = 0;
      table.innerHTML = "";
      TASKS.forEach(function (t) {
        var r = taskResult(t, on);
        if (r.ok) passN++;
        var row = document.createElement("div");
        row.className = "ag-score-row " + (r.ok ? "ag-row-pass" : "ag-row-fail");
        var leverTag = r.ok ? "" : '<span class="ag-why">missing: ' + esc(r.lever) + "</span>";
        row.innerHTML =
          '<span class="ag-mark">' + (r.ok ? "✓" : "✗") + "</span>" +
          '<span class="ag-q">' + esc(t.q) + leverTag + "</span>" +
          '<span class="ag-out">' + esc(r.text) + "</span>";
        table.appendChild(row);
      });
      big.textContent = passN + " / " + TASKS.length + " moments where learning survives";
      big.className = "ag-score-big " + (passN === TASKS.length ? "ag-pass" : passN >= 7 ? "ag-mid" : "ag-fail");
    }
    render();
  }

  /* ---------- boot ---------- */

  function boot() {
    var blocks = document.querySelectorAll(".edubox");
    Array.prototype.forEach.call(blocks, function (block) {
      if (block.classList.contains("agentbox-ready")) return;
      var mode = block.getAttribute("data-mode") || "trace";
      if (mode === "score") wireScore(block); else wireTrace(block);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
