import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as ALL_IMAGES, d as doctorHero, t as transformBefore, a as transformAfter, b as dreamNatural, c as dreamFit, e as antesDespuesGabriela, f as antesDespues, g as comoFunciona, h as bodyRegular, i as bodyBarriga, j as bodySobrepeso, s as scale20, k as scaleUnknown, l as age1829, m as age3039, n as age4049, o as age50, p as fatAreasMan, q as genderMale, r as genderFemale } from "./router-BKQ-kf0M.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
const url = "/__l5e/assets-v1/03f9c3df-7a90-40f1-9ca2-ea3f58f1dd7d/voice-south-africa.mp3";
const southAfricaAudioAsset = {
  url
};
const southAfricaAudio = southAfricaAudioAsset.url;
const VSL_1_ID = "6aac501c74d3f01a568278fe";
const VSL_2_ID = "6aac4e8ab900a2ba0f9904e4";
const VTURB_ACCOUNT = "c61a8b58-6802-46ca-8406-04efd37d2ff3";
const TOTAL_STEPS = 33;
const initialAnswers = {
  goals: [],
  gender: "",
  fatAreas: [],
  ageGroup: "",
  weightToLose: "",
  name: "",
  bodyType: "",
  weightAffects: [],
  satisfaction: "",
  difficulties: [],
  impediment: "",
  benefits: [],
  height: 165,
  desiredWeight: 65,
  currentWeight: 80,
  routine: "",
  sleep: "",
  water: "",
  fruits: [],
  healthCondition: "",
  healthProblem: "",
  contactMethod: "",
  contactValue: "",
  dreamBody: ""
};
function ProgressBar({
  step
}) {
  const pct = Math.min(100, Math.round(step / TOTAL_STEPS * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-xl mx-auto px-4 pt-3 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full rounded-full bg-quiz-pink-light overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-quiz-pink transition-all duration-500", style: {
    width: `${pct}%`
  } }) }) });
}
function BackButton({
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, "aria-label": "Go back", className: "flex items-center gap-1 text-quiz-pink hover:text-quiz-pink-dark text-sm font-semibold transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 6l-6 6 6 6", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }),
    "Back"
  ] });
}
function QuizShell({
  children,
  step,
  back,
  showProgress = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-quiz-bg text-quiz-text flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "w-full bg-white border-b border-neutral-200 py-2.5 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto flex items-center justify-between", children: [
      back ? /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onClick: back }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-quiz-text tracking-tight", children: "Mounjaro Jelly" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16" })
    ] }) }),
    showProgress && /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { step }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 w-full max-w-xl mx-auto px-4 pb-12 pt-2", children })
  ] });
}
function Title({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-extrabold text-center mb-4 leading-snug", children });
}
function Subtitle({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-neutral-600 mb-5", children });
}
function OptionCard({
  onClick,
  selected,
  children,
  trailing,
  leading
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, className: `w-full flex items-center gap-3 rounded-full border-2 px-4 py-3 mb-3 text-left transition-all ${selected ? "bg-quiz-pink-light border-quiz-pink shadow-sm" : "bg-quiz-pink-light/70 border-quiz-pink-border hover:border-quiz-pink"}`, children: [
    leading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: leading }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm sm:text-base font-medium", children }),
    trailing
  ] });
}
function Checkbox({
  checked
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 ${checked ? "bg-quiz-pink border-quiz-pink" : "border-quiz-pink bg-white"}`, children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12l5 5L20 7", stroke: "white", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
}
function ArrowRight() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-full border-2 border-quiz-pink flex items-center justify-center shrink-0 text-quiz-pink", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 6l6 6-6 6", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
}
function PrimaryButton({
  onClick,
  children,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled, onClick, className: "w-full mt-4 rounded-full py-4 text-white font-bold text-base shadow-md transition-all disabled:opacity-50", style: {
    background: "var(--quiz-gradient)"
  }, children });
}
function QuizImage({
  src,
  alt,
  className,
  style
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, loading: "eager", decoding: "sync", fetchPriority: "high", className, style });
}
function emojiCode(e) {
  return Array.from(e).map((c) => c.codePointAt(0).toString(16)).filter((c) => c !== "fe0f").join("-");
}
function Emoji({
  e,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.1.2/img/apple/64/${emojiCode(e)}.png`, alt: "", "aria-hidden": true, loading: "eager", decoding: "sync", draggable: false, className: `inline-block object-contain ${className || "w-[1.15em] h-[1.15em] align-[-0.2em]"}` });
}
function toggle(arr, v) {
  return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
}
function StepLanding({
  next
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-quiz-bg text-quiz-text", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto px-4 py-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl font-extrabold mb-5 leading-tight", children: "MAKE THIS MOUNJARO JELLY AT HOME AND LOSE UP TO 10KG IN 30 DAYS!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: doctorHero, alt: "Dr. Andres Navarro with the Mounjaro Jelly", className: "w-full max-w-md mx-auto mb-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base mb-5 font-medium", children: [
      "Take the 1-minute assessment and get your personalised recipe ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "👇" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: next, className: "w-full rounded-full py-4 text-white font-bold text-lg shadow-lg uppercase", style: {
      background: "var(--quiz-gradient)"
    }, children: "I WANT THE RECIPE!" })
  ] }) });
}
function StepGoals({
  answers,
  set,
  next
}) {
  const opts = ["Lose weight fast", "Burn belly fat", "Beat bloating and water retention", "Speed up my metabolism naturally", "Stop cravings and binge eating", "Feel confident in my body again", "Lower my diabetes and blood pressure risk", "Bring my cholesterol down"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "What do you want to change about your body?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium mb-5 underline", children: "Choose what matters most to you:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => {
      const checked = answers.goals.includes(o);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => set("goals", toggle(answers.goals, o)), className: `flex items-start justify-between gap-2 rounded-2xl border-2 px-3 py-3 text-left min-h-[72px] ${checked ? "bg-quiz-pink-light border-quiz-pink" : "bg-quiz-pink-light/70 border-quiz-pink-border"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-medium leading-tight", children: o }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked })
      ] }, o);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, disabled: answers.goals.length === 0, children: "CONTINUE" })
  ] });
}
function StepGender({
  set,
  next
}) {
  const opts = [{
    v: "Man",
    img: genderMale
  }, {
    v: "Woman",
    img: genderFemale
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "What is your gender?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "Select below" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
      set("gender", o.v);
      next();
    }, className: "bg-white border-2 border-quiz-pink-border rounded-2xl p-1.5 hover:border-quiz-pink overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-[3/4] overflow-hidden rounded-xl bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: o.img, alt: o.v, className: "w-full h-full object-contain" }) }) }, o.v)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-neutral-600 mt-4", children: "This helps us match your Mounjaro Jelly protocol to how your metabolism works." })
  ] });
}
function StepFatAreas({
  answers,
  set,
  next
}) {
  const opts = ["Arms", "Chest", "Belly", "Bum", "Thighs"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "Where do you want to lose fat first?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium mb-5 underline", children: "Select below:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_1.2fr] gap-3 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: fatAreasMan, alt: "", className: "w-full object-contain max-h-80" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: opts.map((o) => {
        const checked = answers.fatAreas.includes(o);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => set("fatAreas", toggle(answers.fatAreas, o)), className: `flex items-center justify-between gap-2 rounded-full border-2 px-4 py-3 text-left ${checked ? "bg-quiz-pink-light border-quiz-pink" : "bg-quiz-pink-light/70 border-quiz-pink-border"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: o }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked })
        ] }, o);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, disabled: answers.fatAreas.length === 0, children: "Continue" })
  ] });
}
function StepAge({
  set,
  next
}) {
  const opts = [{
    v: "18 to 29",
    img: age1829
  }, {
    v: "30 to 39",
    img: age3039
  }, {
    v: "40 to 49",
    img: age4049
  }, {
    v: "50+",
    img: age50
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "How old are you?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "We tailor your plan to your stage of life." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
      set("ageGroup", o.v);
      next();
    }, className: "bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-2 flex flex-col items-center hover:border-quiz-pink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: o.img, alt: o.v, className: "w-full aspect-square object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold py-2", children: o.v })
    ] }, o.v)) })
  ] });
}
function StepWeightToLose({
  set,
  next
}) {
  const opts = [{
    v: "5kg to 10kg",
    img: scale20
  }, {
    v: "10kg to 15kg",
    img: scale20
  }, {
    v: "15kg to 20kg",
    img: scale20
  }, {
    v: "Not sure yet",
    img: scaleUnknown
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "How many kilos do you want to lose?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "The Mounjaro Jelly protocol speeds up fat loss." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
      set("weightToLose", o.v);
      next();
    }, className: "bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-2 flex flex-col items-center hover:border-quiz-pink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: o.img, alt: o.v, className: "w-full aspect-square object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold py-2 text-sm text-center", children: o.v })
    ] }, o.v)) })
  ] });
}
function StepName({
  answers,
  set,
  next
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "What is your name?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: answers.name, maxLength: 60, onChange: (e) => set("name", e.target.value), placeholder: "Type your name", className: "w-full rounded-full border-2 border-quiz-pink-border bg-quiz-pink-light px-5 py-3 text-base focus:outline-none focus:border-quiz-pink" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, disabled: !answers.name.trim(), children: "Continue" })
  ] });
}
function StepBodyType({
  set,
  next
}) {
  const opts = [{
    v: "Average",
    img: bodyRegular
  }, {
    v: "A bit of a tummy",
    img: bodyBarriga
  }, {
    v: "Overweight",
    img: bodySobrepeso
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "Which body shape is closest to yours?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
      set("bodyType", o.v);
      next();
    }, className: "w-full flex items-center gap-4 bg-quiz-pink-light border-2 border-quiz-pink-border rounded-full pl-2 pr-5 py-2 hover:border-quiz-pink transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-white overflow-hidden flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: o.img, alt: o.v, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left font-semibold text-base", children: o.v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-full border-2 border-quiz-pink flex items-center justify-center text-quiz-pink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {}) })
    ] }, o.v)) })
  ] });
}
function StepWeightAffects({
  answers,
  set,
  next
}) {
  const opts = [{
    emoji: "🤦",
    text: "I hide from photos"
  }, {
    emoji: "😞",
    text: "My partner worries about my health"
  }, {
    emoji: "😪",
    text: "I skip social events because of my body"
  }, {
    emoji: "👋",
    text: "None of these"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
      answers.name || "Hi",
      ", how is your weight affecting your life?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-0", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { onClick: () => set("weightAffects", toggle(answers.weightAffects, o.text)), selected: answers.weightAffects.includes(o.text), leading: /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: o.emoji, className: "w-7 h-7" }), trailing: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: answers.weightAffects.includes(o.text) }), children: o.text }, o.text)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, disabled: answers.weightAffects.length === 0, children: "Continue" })
  ] });
}
function StepSatisfaction({
  set,
  next
}) {
  const opts = [{
    emoji: "😪",
    text: "No, I feel far heavier than I should be"
  }, {
    emoji: "😞",
    text: "Yes, but I know my health could be better"
  }, {
    emoji: "🙂",
    text: "No, I would like to lose weight and feel better"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "Are you happy with the way you look right now?" }),
    opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { onClick: () => {
      set("satisfaction", o.text);
      next();
    }, leading: /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: o.emoji, className: "w-7 h-7" }), trailing: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {}), children: o.text }, o.text))
  ] });
}
function StepDifficulties({
  answers,
  set,
  next
}) {
  const opts = [{
    emoji: "🪜",
    text: "Climbing stairs"
  }, {
    emoji: "🧘",
    text: "Sitting comfortably"
  }, {
    emoji: "🦵",
    text: "Bending down"
  }, {
    emoji: "🛌",
    text: "Lying down in bed"
  }, {
    emoji: "🚶",
    text: "Walking long distances"
  }, {
    emoji: "✅",
    text: "None"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "Does your weight make daily things harder?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => set("difficulties", toggle(answers.difficulties, o.text)), className: `flex flex-col items-center gap-1 p-3 rounded-2xl border-2 text-center ${answers.difficulties.includes(o.text) ? "bg-quiz-pink-light border-quiz-pink" : "bg-quiz-pink-light/70 border-quiz-pink-border"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: o.emoji, className: "w-9 h-9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: o.text })
    ] }, o.text)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, disabled: answers.difficulties.length === 0, children: "Continue" })
  ] });
}
function VTurbPlayer({
  playerId
}) {
  reactExports.useEffect(() => {
    const scriptId = `vturb-${playerId}`;
    if (document.getElementById(scriptId)) return;
    const s = document.createElement("script");
    s.id = scriptId;
    s.src = `https://scripts.converteai.net/${VTURB_ACCOUNT}/players/${playerId}/v4/player.js`;
    s.async = true;
    document.head.appendChild(s);
  }, [playerId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mb-4", dangerouslySetInnerHTML: {
    __html: `<vturb-smartplayer id="vid-${playerId}" style="display:block;margin:0 auto;width:100%;max-width:400px;"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:133.33333333333331% 0 0;z-index:0;background-color:black;"></div></vturb-smartplayer>`
  } });
}
function StepVSL({
  playerId,
  title,
  cta,
  next
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VTurbPlayer, { playerId }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, children: cta })
  ] });
}
function StepImpediment({
  set,
  next
}) {
  const opts = [{
    emoji: "🕗",
    title: "No time",
    desc: "My days are far too busy."
  }, {
    emoji: "😬",
    title: "Self-control",
    desc: "I struggle to resist cravings."
  }, {
    emoji: "💸",
    title: "Money",
    desc: "Healthy food costs more than takeaways."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "What holds you back the most?" }),
    opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
      set("impediment", o.title);
      next();
    }, className: "w-full flex items-center gap-3 rounded-2xl border-2 border-quiz-pink-border bg-quiz-pink-light px-4 py-3 mb-3 text-left hover:border-quiz-pink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: o.emoji, className: "w-9 h-9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: o.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-neutral-600", children: o.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
    ] }, o.title))
  ] });
}
function StepProtocolMessage({
  next
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "Our protocol handles that for you!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-base mb-4", children: "The Mounjaro Jelly works while you sleep, speeding up fat burning." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: comoFunciona, alt: "How the Mounjaro Jelly works", className: "w-full max-w-md mx-auto mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, children: "Continue" })
  ] });
}
function StepTestimony({
  next
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "🔥" }),
      " Real Transformation Stories ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "🔥" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: antesDespues, alt: "Before and after - Lerato Mabena", className: "w-full max-w-md mx-auto rounded-xl mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center font-semibold mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "📍" }),
      " Precious: Durban, KwaZulu-Natal"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-neutral-700 leading-relaxed mb-4 px-1", children: '"I had tried everything to lose weight and nothing stuck. After adding the Mounjaro Jelly to my routine I lost 16kg without changing what I eat. The best part is that my hunger and cravings simply calmed down on their own."' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, children: "Continue" })
  ] });
}
function StepBenefits({
  answers,
  set,
  next
}) {
  const opts = ["Deeper sleep", "Less pain and inflammation", "More energy through the day", "Less stress and anxiety", "More confidence in myself", "Protection against metabolic disease", "Lose weight without struggle or rebound"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
      answers.name || "Hi",
      ", which benefits do you want most?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "We tailor your formula to get you the best results." }),
    opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { onClick: () => set("benefits", toggle(answers.benefits, o)), selected: answers.benefits.includes(o), trailing: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: answers.benefits.includes(o) }), children: o }, o)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, disabled: answers.benefits.length === 0, children: "Continue" })
  ] });
}
function SliderStep({
  title,
  subtitle,
  unit,
  altUnit,
  min,
  max,
  value,
  setValue,
  next,
  footer
}) {
  const [activeUnit, setActiveUnit] = reactExports.useState(unit);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mb-6", children: [unit, altUnit].map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveUnit(u), className: `px-6 py-2 rounded-full font-semibold border-2 ${activeUnit === u ? "bg-quiz-pink text-white border-quiz-pink" : "bg-white text-quiz-pink border-quiz-pink"}`, children: u }, u)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-4xl font-extrabold mb-4", children: [
      value,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl ml-1", children: unit })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min, max, value, onChange: (e) => setValue(Number(e.target.value)), className: "w-full accent-quiz-pink" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-neutral-500 mt-1 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: min }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Drag to adjust" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: max })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-neutral-600 mb-2", children: footer }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, children: "Continue" })
  ] });
}
function StepRoutine({
  set,
  next
}) {
  const opts = [{
    emoji: "🏃",
    text: "I work out of the house, busy days"
  }, {
    emoji: "💻",
    text: "I work from home, flexible days"
  }, {
    emoji: "👨‍👩‍👧",
    text: "I look after the family at home"
  }, {
    emoji: "🤷",
    text: "Something else"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "What do your days look like?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "Your routine shapes your plan." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
      set("routine", o.text);
      next();
    }, className: "flex flex-col items-center gap-1 p-4 rounded-2xl border-2 border-quiz-pink-border bg-quiz-pink-light/70 text-center hover:border-quiz-pink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: o.emoji, className: "w-9 h-9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: o.text })
    ] }, o.text)) })
  ] });
}
function StepSleep({
  set,
  next
}) {
  const opts = [{
    emoji: "😵",
    text: "Less than 5 hours"
  }, {
    emoji: "😴",
    text: "Between 5 and 7 hours"
  }, {
    emoji: "😌",
    text: "Between 7 and 9 hours"
  }, {
    emoji: "🛌",
    text: "More than 9 hours"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "How many hours do you sleep a night?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "Sleep quality has a big effect on your metabolism." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
      set("sleep", o.text);
      next();
    }, className: "flex flex-col items-center gap-1 p-4 rounded-2xl border-2 border-quiz-pink-border bg-quiz-pink-light/70 text-center hover:border-quiz-pink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: o.emoji, className: "w-9 h-9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: o.text })
    ] }, o.text)) })
  ] });
}
function StepWater({
  set,
  next
}) {
  const opts = [{
    emoji: "☕",
    text: "Only coffee or tea"
  }, {
    emoji: "💧",
    text: "1-2 glasses a day"
  }, {
    emoji: "🚰",
    text: "3-6 glasses a day"
  }, {
    emoji: "🥤",
    text: "More than 6 glasses"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "How much water do you drink a day?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "Hydration has a direct effect on fat loss." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
      set("water", o.text);
      next();
    }, className: "flex flex-col items-center gap-1 p-4 rounded-2xl border-2 border-quiz-pink-border bg-quiz-pink-light/70 text-center hover:border-quiz-pink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: o.emoji, className: "w-9 h-9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: o.text })
    ] }, o.text)) })
  ] });
}
function StepFruits({
  answers,
  set,
  next
}) {
  const opts = [{
    emoji: "🍋",
    text: "Lemon"
  }, {
    emoji: "🍊",
    text: "Orange"
  }, {
    emoji: "🍌",
    text: "Banana"
  }, {
    emoji: "🍎",
    text: "Apple"
  }, {
    emoji: "🍓",
    text: "Strawberry"
  }, {
    emoji: "🍍",
    text: "Pineapple"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "Which fruit do you eat most often?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "Your preferences help us fine-tune the recipe." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => set("fruits", toggle(answers.fruits, o.text)), className: `flex flex-col items-center gap-1 p-4 rounded-2xl border-2 ${answers.fruits.includes(o.text) ? "border-quiz-pink bg-quiz-pink-light" : "border-quiz-pink-border bg-quiz-pink-light/60"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: o.emoji, className: "w-11 h-11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: o.text })
    ] }, o.text)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, disabled: answers.fruits.length === 0, children: "Continue" })
  ] });
}
function StepLoading({
  text,
  next,
  durationMs = 3e3
}) {
  const [pct, setPct] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, Math.round(elapsed / durationMs * 100));
      setPct(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(next, 400);
      }
    }, 60);
    return () => clearInterval(id);
  }, [durationMs, next]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-20 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-extrabold text-quiz-pink mb-4", children: [
      pct,
      "%"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base mb-8", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full rounded-full bg-quiz-pink-light overflow-hidden max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-quiz-pink transition-all duration-100", style: {
      width: `${pct}%`
    } }) })
  ] });
}
function buildDiagnosis(a) {
  const heightM = a.height / 100;
  const imc = a.currentWeight / (heightM * heightM);
  let imcLabel = "normal";
  if (imc < 18.5) imcLabel = "underweight";
  else if (imc < 25) imcLabel = "normal";
  else if (imc < 30) imcLabel = "overweight";
  else if (imc < 35) imcLabel = "class I obesity";
  else if (imc < 40) imcLabel = "class II obesity";
  else imcLabel = "class III obesity";
  const ageMid = a.ageGroup === "18 to 29" ? 24 : a.ageGroup === "30 to 39" ? 34 : a.ageGroup === "40 to 49" ? 44 : 55;
  const sex = a.gender === "Man" ? 1 : 0;
  const bodyFat = Math.max(8, Math.min(55, 1.2 * imc + 0.23 * ageMid - 10.8 * sex - 5.4));
  let metabolism = 70;
  if (a.sleep.includes("Less than 5")) metabolism -= 18;
  else if (a.sleep.includes("5 and 7")) metabolism -= 8;
  else if (a.sleep.includes("More than 9")) metabolism -= 5;
  if (a.water.includes("Only coffee")) metabolism -= 15;
  else if (a.water.includes("1-2")) metabolism -= 8;
  else if (a.water.includes("More than 6")) metabolism += 5;
  if (a.routine.includes("busy days")) metabolism -= 5;
  if (ageMid >= 40) metabolism -= 8;
  if (ageMid >= 50) metabolism -= 5;
  if (imc >= 30) metabolism -= 10;
  metabolism = Math.max(15, Math.min(95, metabolism));
  const visceralRisk = imc >= 30 ? "high" : imc >= 25 ? "moderate" : "low";
  const obs = [];
  if (a.fatAreas.length) {
    obs.push(`We picked up stubborn fat in: ${a.fatAreas.join(", ")}. That pattern usually points to insulin resistance and a hormone imbalance in those areas.`);
  }
  if (a.sleep.includes("Less than 5") || a.sleep.includes("5 and 7")) {
    obs.push(`Your sleep (${a.sleep.toLowerCase()}) is lowering leptin and pushing cortisol up, which drives hunger and makes fat loss much harder.`);
  }
  if (a.water.includes("Only coffee") || a.water.includes("1-2")) {
    obs.push(`Your water intake is very low, which can slow your metabolism by up to 30% and cause water retention.`);
  }
  if (a.difficulties.length && !a.difficulties.includes("None")) {
    obs.push(`The struggles you mentioned (${a.difficulties.filter((d) => d !== "None").slice(0, 2).join(", ")}) point to joint strain that comes with excess belly fat.`);
  }
  if (a.impediment === "Self-control") {
    obs.push(`Struggling with cravings points to insulin spikes and poor fullness signals, which the Mounjaro Jelly settles by steadying your blood sugar.`);
  }
  if (a.impediment === "No time") {
    obs.push(`With no time for complicated diets, a 1-minute-a-day routine like the Mounjaro Jelly fits your life perfectly.`);
  }
  if (ageMid >= 40) {
    obs.push(`From 40 onward your resting metabolism drops around 5% per decade, so losing weight needs a metabolic trigger, not just dieting.`);
  }
  const lossPotential = a.weightToLose.includes("15kg to 20") ? "14 a 20 kg" : a.weightToLose.includes("10kg to 15") ? "10 a 15 kg" : a.weightToLose.includes("5kg to 10") ? "6 a 10 kg" : "8 a 12 kg";
  return {
    imc: imc.toFixed(1),
    imcLabel,
    bodyFat: bodyFat.toFixed(1),
    metabolism,
    visceralRisk,
    obs,
    lossPotential
  };
}
function WhatsAppAudio({
  src
}) {
  const audioRef = reactExports.useRef(null);
  const [playing, setPlaying] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  const [time, setTime] = reactExports.useState("00:00");
  reactExports.useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      const cur = a.currentTime;
      const dur = a.duration || 1;
      setProgress(cur / dur * 100);
      const m = Math.floor(cur / 60).toString().padStart(2, "0");
      const s = Math.floor(cur % 60).toString().padStart(2, "0");
      setTime(`${m}:${s}`);
    };
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
      setTime("00:00");
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnd);
    };
  }, []);
  const toggle2 = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play();
      setPlaying(true);
    }
  };
  const bars = Array.from({
    length: 40
  });
  const activeBar = Math.floor(progress / 100 * bars.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl p-3 mb-4 shadow-sm", style: {
    background: "#e7f6d5",
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><circle cx='5' cy='5' r='1.2' fill='%23c7e3a8' opacity='0.5'/><circle cx='20' cy='15' r='1.2' fill='%23c7e3a8' opacity='0.5'/><circle cx='32' cy='28' r='1.2' fill='%23c7e3a8' opacity='0.5'/></svg>")`
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { ref: audioRef, src, preload: "auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-white rounded-full pl-2 pr-3 py-2 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
        !playing && progress === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-quiz-pink/40 animate-ping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-3 h-3 rounded-full bg-quiz-pink border-2 border-white" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: toggle2, "aria-label": playing ? "Pause" : "Play audio", className: "relative w-9 h-9 rounded-full flex items-center justify-center bg-quiz-pink text-white hover:opacity-90 transition shrink-0", children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5v14l11-7L8 5z" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center gap-[2px] h-8", children: bars.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 rounded-full transition-colors", style: {
        height: `${20 + i * 37 % 70 / 4 + i % 5 * 4}%`,
        background: i <= activeBar ? "#34b7f1" : "#bcbcbc",
        minHeight: 4
      } }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-quiz-pink shrink-0 flex items-center justify-center text-white text-xs font-bold", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "🎤" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1 ml-12 mr-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-neutral-600", children: time }),
      !playing && progress === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-quiz-pink animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "👉" }),
        " Tap to listen"
      ] })
    ] })
  ] });
}
function StepIMC({
  answers,
  next
}) {
  const d = buildDiagnosis(answers);
  const pos = Math.max(0, Math.min(100, (parseFloat(d.imc) - 15) / 25 * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
      answers.name || "Hi",
      ", listen to how the Mounjaro Jelly is changing lives and see what our community achieved"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppAudio, { src: southAfricaAudio }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-lg", children: "Body Mass Index (BMI)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-1", children: [
        "Your BMI: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500 font-bold", children: d.imc })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-neutral-700 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Body Mass Index (BMI)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "50%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-neutral-700 mb-2", children: "Your BMI:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-3 rounded-full overflow-hidden flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-[#8db86a]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-[#c4c84a]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-[#f0c14a]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-[#e88a3a]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-[#d83a2a]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 w-5 h-5 rounded-full border-[3px] border-quiz-pink bg-white -ml-2.5", style: {
          left: `${pos}%`
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-neutral-700 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "underweight" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "lean" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "normal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "overweight" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "obese" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-4 mb-4 text-sm leading-relaxed space-y-3", style: {
      background: "#d9f5c4"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "⚠️" }),
        " Your metabolism could be working against you without you noticing!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Even sitting in the ",
        d.imcLabel,
        " range, your body can be holding on to waste and running slower than it should, making fat harder to burn and leaving you low on energy."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "🔔" }),
        " Warning signs to watch for:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "❌" }),
        " A slow metabolism and weight that will not shift."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "❌" }),
        " Constant tiredness and a bloated feeling."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "❌" }),
        " Fat building up in specific areas of your body."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "💡" }),
        " With the Mounjaro Jelly your body can start burning fat naturally again!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The right mix of ingredients wakes up your metabolism, cuts water retention and lifts your energy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "🔽" }),
        " See how the Mounjaro Jelly changed Mabena's body, and what it can do for yours:"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 rounded-2xl overflow-hidden border border-quiz-pink-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: antesDespuesGabriela, alt: "Gabriela before and after", className: "w-full block" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, children: "Continue" })
  ] });
}
function StepHealthCondition({
  set,
  goto
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "Do you have any health condition?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "One important detail before we finish." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
        set("healthCondition", "Yes");
        goto(27);
      }, className: "bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-6 flex flex-col items-center hover:border-quiz-pink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "✅", className: "w-14 h-14 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Yes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
        set("healthCondition", "No");
        set("healthProblem", "");
        goto(28);
      }, className: "bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-6 flex flex-col items-center hover:border-quiz-pink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "❌", className: "w-14 h-14 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "No" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-600 text-center mt-4", children: "This makes sure your formula is completely safe for you." })
  ] });
}
function StepHealthProblem({
  answers,
  set,
  goto
}) {
  const [stage, setStage] = reactExports.useState("input");
  const disease = answers.healthProblem.trim();
  if (stage === "insight" && disease) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
        answers.name || "Hi",
        ", this matters for your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-quiz-pink", children: disease }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "⚠️" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-5 text-[15px] leading-relaxed space-y-3 text-quiz-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "😟" }),
          " Clinical studies show that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "excess body fat" }),
          " can make a condition like ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: disease }),
          " up to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3 times" }),
          " more severe."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Belly fat releases ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "inflammatory compounds" }),
          " that overload your body, worsen the symptoms of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: disease }),
          " and blunt how well treatment works for you."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "🚨" }),
          " Every extra day carrying that weight is another day your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: disease }),
          " quietly gets worse."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "💚" }),
          " The good news: the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mounjaro Jelly" }),
          " was built to speed up fat burning naturally, easing the load your body carries with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: disease }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: () => goto(28), children: "Continue" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
      "Which one is it? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "👇" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-center text-neutral-600 mb-4", children: "Diabetes, high blood pressure, heart disease, menopause, underactive thyroid, depression, anxiety, IBS, digestive trouble..." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: answers.healthProblem, maxLength: 200, onChange: (e) => set("healthProblem", e.target.value), placeholder: "Which condition?", className: "w-full rounded-full border-2 border-quiz-pink-border bg-quiz-pink-light px-5 py-3 text-base focus:outline-none focus:border-quiz-pink" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: () => setStage("insight"), disabled: !answers.healthProblem.trim(), children: "Continue" })
  ] });
}
function StepContactMethod({
  set,
  next
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "Where should we send your personalised plan?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "Choose one:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
        set("contactMethod", "WhatsApp");
        next();
      }, className: "bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-6 flex flex-col items-center hover:border-quiz-pink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "💚", className: "w-14 h-14 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
        set("contactMethod", "Email");
        next();
      }, className: "bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-6 flex flex-col items-center hover:border-quiz-pink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Emoji, { e: "📧", className: "w-14 h-14 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Email" })
      ] })
    ] })
  ] });
}
function StepContactValue({
  answers,
  set,
  next
}) {
  const isEmail = answers.contactMethod === "Email";
  const placeholder = isEmail ? "Type your email" : "Type your WhatsApp number";
  const valid = isEmail ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.contactValue) : answers.contactValue.replace(/\D/g, "").length >= 8;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: isEmail ? "What is your email?" : "What is your WhatsApp number?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: isEmail ? "email" : "tel", value: answers.contactValue, maxLength: isEmail ? 100 : 20, onChange: (e) => set("contactValue", e.target.value), placeholder, className: "w-full rounded-full border-2 border-quiz-pink-border bg-quiz-pink-light px-5 py-3 text-base focus:outline-none focus:border-quiz-pink" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, disabled: !valid, children: "Continue" })
  ] });
}
function StepDreamBody({
  set,
  next
}) {
  const opts = [{
    v: "Natural",
    img: dreamNatural
  }, {
    v: "Toned",
    img: dreamFit
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "What is your dream body?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, { children: "Pick one below:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 max-w-[220px] mx-auto", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
      set("dreamBody", o.v);
      next();
    }, className: "bg-quiz-pink-light border-2 border-quiz-pink-border rounded-3xl px-4 py-2 flex flex-col items-center hover:border-quiz-pink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center justify-center", style: {
        height: 140
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: o.img, alt: o.v, className: "h-full object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm mt-1", children: o.v })
    ] }, o.v)) })
  ] });
}
function StepBeforeAfter({
  answers,
  next
}) {
  const d = buildDiagnosis(answers);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
      answers.name || "Hi",
      ", are you ready to change your body and your health?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-neutral-200 overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-bold text-sm py-2 border-b border-neutral-200", children: "Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-center h-56 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: transformBefore, alt: "Before", className: "h-full object-contain" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-neutral-200 overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-bold text-sm py-2 border-b border-neutral-200", children: "Goal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-center h-56 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuizImage, { src: transformAfter, alt: "After", className: "h-full object-contain" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-neutral-700 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "This is you before the Mounjaro Jelly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
            d.metabolism,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-2 rounded-full bg-neutral-200 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-red-400", style: {
          width: `${d.metabolism}%`
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-600 mt-2", children: "Your metabolism is running slow, which leaves you tired." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-neutral-700 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "And this is you after the Mounjaro Jelly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "90%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-2 rounded-full bg-neutral-200 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-green-500", style: {
          width: "90%"
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-600 mt-2", children: "Here your metabolism runs the way it should." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: next, children: "Yes, I want to start now!" })
  ] });
}
function StepFinalVSL({
  answers
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { children: [
      answers.name || "Hi",
      ", watch the video and get your Mounjaro Jelly recipe!"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VTurbPlayer, { playerId: VSL_2_ID })
  ] });
}
function QuizPage() {
  const [history, setHistory] = reactExports.useState([1]);
  const step = history[history.length - 1];
  const [answers, setAnswers] = reactExports.useState(initialAnswers);
  const topRef = reactExports.useRef(null);
  const set = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value
    }));
  };
  const next = () => setHistory((h) => [...h, h[h.length - 1] + 1]);
  const goto = (s) => setHistory((h) => [...h, s]);
  const back = () => setHistory((h) => h.length > 1 ? h.slice(0, -1) : h);
  reactExports.useEffect(() => {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [step]);
  reactExports.useEffect(() => {
    ALL_IMAGES.forEach((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
    });
  }, []);
  const props = {
    answers,
    set,
    next,
    goto
  };
  const content = reactExports.useMemo(() => {
    switch (step) {
      case 1:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepLanding, { ...props });
      case 2:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepGoals, { ...props });
      case 3:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepGender, { ...props });
      case 4:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepFatAreas, { ...props });
      case 5:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepAge, { ...props });
      case 6:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepWeightToLose, { ...props });
      case 7:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepName, { ...props });
      case 8:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepBodyType, { ...props });
      case 9:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepWeightAffects, { ...props });
      case 10:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepSatisfaction, { ...props });
      case 11:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepDifficulties, { ...props });
      case 12:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepVSL, { playerId: VSL_1_ID, title: `${answers.name || "Hi"}, watch Dr. Andres Navarro explain exactly how this works`, cta: "Continue", next });
      case 13:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepImpediment, { ...props });
      case 14:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepProtocolMessage, { ...props });
      case 15:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepBenefits, { ...props });
      case 16:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepTestimony, { ...props });
      case 17:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderStep, { title: "How tall are you?", subtitle: "Your height also affects your metabolism.", unit: "cm", altUnit: "in", min: 140, max: 220, value: answers.height, setValue: (v) => set("height", v), next, footer: "This lets us work out the exact dose for your body." });
      case 18:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderStep, { title: "What is your goal weight?", subtitle: "Almost there! Let us tune the plan to your body.", unit: "kg", altUnit: "lb", min: 40, max: 150, value: answers.desiredWeight, setValue: (v) => set("desiredWeight", v), next, footer: "We use this to set the ideal dose for the best results." });
      case 19:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderStep, { title: "What do you weigh right now?", subtitle: "We need your real weight for an accurate reading.", unit: "kg", altUnit: "lb", min: 40, max: 250, value: answers.currentWeight, setValue: (v) => set("currentWeight", v), next, footer: "We will set the ideal dose for the best results." });
      case 20:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepRoutine, { ...props });
      case 21:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepSleep, { ...props });
      case 22:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepWater, { ...props });
      case 23:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepFruits, { ...props });
      case 24:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepLoading, { text: "Analysing your answers...", next });
      case 25:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepIMC, { ...props });
      case 26:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepHealthCondition, { ...props });
      case 27:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepHealthProblem, { ...props });
      case 28:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepContactMethod, { ...props });
      case 29:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepContactValue, { ...props });
      case 30:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepDreamBody, { ...props });
      case 31:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepLoading, { text: "Building your personalised plan...", next, durationMs: 4e3 });
      case 32:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepBeforeAfter, { ...props });
      case 33:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepFinalVSL, { ...props });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StepLanding, { ...props });
    }
  }, [step, answers]);
  if (step === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: topRef, children: content });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: topRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuizShell, { step, back: history.length > 1 ? back : void 0, children: content }) });
}
export {
  QuizPage as component
};
