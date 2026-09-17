import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import doctorHero from "@/assets/quiz/doctor-hero-fast.webp";
import genderMale from "@/assets/quiz/gender-male-fast.webp";
import genderFemale from "@/assets/quiz/gender-female-fast.webp";
import age1829Asset from "@/assets/quiz/age-18-29-sa.webp.asset.json";
import age3039Asset from "@/assets/quiz/age-30-39-sa.webp.asset.json";
import age4049Asset from "@/assets/quiz/age-40-49-sa.webp.asset.json";
import age50Asset from "@/assets/quiz/age-50-plus-sa.webp.asset.json";
import scale20 from "@/assets/quiz/scale-20kg-fast.webp";
import scaleUnknown from "@/assets/quiz/scale-unknown-fast.webp";

import bodyRegular from "@/assets/quiz/body-regular.webp";
import bodyBarriga from "@/assets/quiz/body-barriga.webp";
import bodySobrepeso from "@/assets/quiz/body-sobrepeso.webp";
import comoFunciona from "@/assets/quiz/como-funciona-fast.webp";
import antesDespues from "@/assets/quiz/antes-despues-maria-fast.webp";
import transformBefore from "@/assets/quiz/transform-before.png";
import transformAfter from "@/assets/quiz/transform-after.png";
import dreamNatural from "@/assets/quiz/dream-natural.webp";
import dreamFitAsset from "@/assets/quiz/fit-man-updated.webp.asset.json";
import antesDespuesGabriela from "@/assets/quiz/antes-despues-gabriela-fast.webp";
import southAfricaAudioAsset from "@/assets/quiz/voice-south-africa.mp3.asset.json";

const age1829 = age1829Asset.url;
const age3039 = age3039Asset.url;
const age4049 = age4049Asset.url;
const age50 = age50Asset.url;
const fatAreasMan = dreamFitAsset.url;
const southAfricaAudio = southAfricaAudioAsset.url;
const dreamFit = dreamFitAsset.url;

// All image URLs - used for eager preloading so steps never flash white
const ALL_IMAGES = [
  doctorHero, genderMale, genderFemale,
  age1829, age3039, age4049, age50,
  scale20, scaleUnknown, fatAreasMan,
  bodyRegular, bodyBarriga, bodySobrepeso,
  comoFunciona, antesDespues, transformBefore, transformAfter,
  dreamNatural, dreamFit, antesDespuesGabriela,
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mounjaro Jelly - Lose Up To 10kg in 30 Days" },
      {
        name: "description",
        content:
          "Take the 1-minute assessment and get your personalised Mounjaro Jelly recipe.",
      },
      { property: "og:title", content: "Mounjaro Jelly - Personalised Recipe Quiz" },
      {
        property: "og:description",
        content: "Take the 1-minute assessment and get your personalised Mounjaro Jelly recipe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: ALL_IMAGES.map((href) => ({ rel: "preload", href, as: "image" })),
  }),
  component: QuizPage,
});

// ====== CONFIG ======
const CHECKOUT_URL = "https://pay.hotmart.com/B103766805E?off=hbmfjvle&utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}&xcod=FBhQwK21wXxR{{campaign.name}}|{{campaign.id}}hQwK21wXxR{{adset.name}}|{{adset.id}}hQwK21wXxR{{ad.name}}|{{ad.id}}hQwK21wXxR{{placement}}";
const VSL_1_ID = "6aac501c74d3f01a568278fe";
const VSL_2_ID = "6aac4e8ab900a2ba0f9904e4";
const VTURB_ACCOUNT = "c61a8b58-6802-46ca-8406-04efd37d2ff3";
const TOTAL_STEPS = 33;


// ====== STATE ======
type QuizAnswers = {
  goals: string[];
  gender: string;
  fatAreas: string[];
  ageGroup: string;
  weightToLose: string;
  name: string;
  bodyType: string;
  weightAffects: string[];
  satisfaction: string;
  difficulties: string[];
  impediment: string;
  benefits: string[];
  height: number;
  desiredWeight: number;
  currentWeight: number;
  routine: string;
  sleep: string;
  water: string;
  fruits: string[];
  healthCondition: string;
  healthProblem: string;
  contactMethod: string;
  contactValue: string;
  dreamBody: string;
};

const initialAnswers: QuizAnswers = {
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
  dreamBody: "",
};

// ====== UI PRIMITIVES ======
function ProgressBar({ step }: { step: number }) {
  const pct = Math.min(100, Math.round((step / TOTAL_STEPS) * 100));
  return (
    <div className="w-full max-w-xl mx-auto px-4 pt-3 pb-2">
      <div className="h-2 w-full rounded-full bg-quiz-pink-light overflow-hidden">
        <div
          className="h-full bg-quiz-pink transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go back"
      className="flex items-center gap-1 text-quiz-pink hover:text-quiz-pink-dark text-sm font-semibold transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back
    </button>
  );
}

function QuizShell({
  children,
  step,
  back,
  showProgress = true,
}: {
  children: ReactNode;
  step: number;
  back?: () => void;
  showProgress?: boolean;
}) {
  return (
    <div className="min-h-screen bg-quiz-bg text-quiz-text flex flex-col">
      <header className="w-full bg-white border-b border-neutral-200 py-2.5 px-4">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          {back ? <BackButton onClick={back} /> : <span className="w-16" />}
          <div className="font-bold text-sm text-quiz-text tracking-tight">Mounjaro Jelly</div>
          <span className="w-16" />
        </div>
      </header>
      {showProgress && <ProgressBar step={step} />}
      <main className="flex-1 w-full max-w-xl mx-auto px-4 pb-12 pt-2">{children}</main>
    </div>
  );
}



function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-xl sm:text-2xl font-extrabold text-center mb-4 leading-snug">
      {children}
    </h1>
  );
}

function Subtitle({ children }: { children: ReactNode }) {
  return <p className="text-center text-sm text-neutral-600 mb-5">{children}</p>;
}

function OptionCard({
  onClick,
  selected,
  children,
  trailing,
  leading,
}: {
  onClick: () => void;
  selected?: boolean;
  children: ReactNode;
  trailing?: ReactNode;
  leading?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-3 rounded-full border-2 px-4 py-3 mb-3 text-left transition-all ${
        selected
          ? "bg-quiz-pink-light border-quiz-pink shadow-sm"
          : "bg-quiz-pink-light/70 border-quiz-pink-border hover:border-quiz-pink"
      }`}
    >
      {leading && <span className="shrink-0">{leading}</span>}
      <span className="flex-1 text-sm sm:text-base font-medium">{children}</span>
      {trailing}
    </button>
  );
}

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <span
      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 ${
        checked ? "bg-quiz-pink border-quiz-pink" : "border-quiz-pink bg-white"
      }`}
    >
      {checked && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}

function ArrowRight() {
  return (
    <span className="w-7 h-7 rounded-full border-2 border-quiz-pink flex items-center justify-center shrink-0 text-quiz-pink">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PrimaryButton({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="w-full mt-4 rounded-full py-4 text-white font-bold text-base shadow-md transition-all disabled:opacity-50"
      style={{ background: "var(--quiz-gradient)" }}
    >
      {children}
    </button>
  );
}

// ====== STEP TYPES ======
type StepProps = {
  answers: QuizAnswers;
  set: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void;
  next: () => void;
  goto: (step: number) => void;
};

function QuizImage({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="sync"
      fetchPriority="high"
      className={className}
      style={style}
    />
  );
}

// iOS-style emoji (Apple emoji images from CDN) for consistent, high-quality glyphs
function emojiCode(e: string) {
  return Array.from(e)
    .map((c) => c.codePointAt(0)!.toString(16))
    .filter((c) => c !== "fe0f")
    .join("-");
}
function Emoji({ e, className = "" }: { e: string; className?: string }) {
  return (
    <img
      src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.1.2/img/apple/64/${emojiCode(e)}.png`}
      alt=""
      aria-hidden
      loading="eager"
      decoding="sync"
      draggable={false}
      className={`inline-block object-contain ${className || "w-[1.15em] h-[1.15em] align-[-0.2em]"}`}
    />
  );
}

function toggle<T>(arr: T[], v: T): T[] {
  return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
}

// ====== STEPS ======

// Step 1 — Landing (with new doctor image)
function StepLanding({ next }: StepProps) {
  return (
    <div className="min-h-screen bg-quiz-bg text-quiz-text">
      <div className="max-w-xl mx-auto px-4 py-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-5 leading-tight">
          MAKE THIS MOUNJARO JELLY AT HOME AND LOSE UP TO 10KG IN 30 DAYS!
        </h1>
        <QuizImage
          src={doctorHero}
          alt="Dr. Andres Navarro with the Mounjaro Jelly"
          className="w-full max-w-md mx-auto mb-6"
        />
        <p className="text-base mb-5 font-medium">
          Take the 1-minute assessment and get your personalised recipe <Emoji e="👇" />
        </p>
        <button
          type="button"
          onClick={next}
          className="w-full rounded-full py-4 text-white font-bold text-lg shadow-lg uppercase"
          style={{ background: "var(--quiz-gradient)" }}
        >
          I WANT THE RECIPE!
        </button>
      </div>
    </div>
  );
}

// Step 2 — Goals
function StepGoals({ answers, set, next }: StepProps) {
  const opts = [
    "Lose weight fast",
    "Burn belly fat",
    "Beat bloating and water retention",
    "Speed up my metabolism naturally",
    "Stop cravings and binge eating",
    "Feel confident in my body again",
    "Lower my diabetes and blood pressure risk",
    "Bring my cholesterol down",
  ];
  return (
    <>
      <Title>What do you want to change about your body?</Title>
      <p className="text-center text-sm font-medium mb-5 underline">
        Choose what matters most to you:
      </p>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => {
          const checked = answers.goals.includes(o);
          return (
            <button
              key={o}
              type="button"
              onClick={() => set("goals", toggle(answers.goals, o))}
              className={`flex items-start justify-between gap-2 rounded-2xl border-2 px-3 py-3 text-left min-h-[72px] ${
                checked
                  ? "bg-quiz-pink-light border-quiz-pink"
                  : "bg-quiz-pink-light/70 border-quiz-pink-border"
              }`}
            >
              <span className="text-xs sm:text-sm font-medium leading-tight">{o}</span>
              <Checkbox checked={checked} />
            </button>
          );
        })}
      </div>
      <PrimaryButton onClick={next} disabled={answers.goals.length === 0}>
        CONTINUE
      </PrimaryButton>
    </>
  );
}

// Step 3 — Gender (two image cards)
function StepGender({ set, next }: StepProps) {
  const opts = [
    { v: "Man", img: genderMale },
    { v: "Woman", img: genderFemale },
  ];
  return (
    <>
      <Title>What is your gender?</Title>
      <Subtitle>Select below</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.v}
            type="button"
            onClick={() => {
              set("gender", o.v);
              next();
            }}
            className="bg-white border-2 border-quiz-pink-border rounded-2xl p-1.5 hover:border-quiz-pink overflow-hidden"
          >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-white">
              <QuizImage
                src={o.img}
                alt={o.v}
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        ))}
      </div>
      <p className="text-center text-xs text-neutral-600 mt-4">
        This helps us match your Mounjaro Jelly protocol to how your metabolism works.
      </p>
    </>
  );
}

// Step 4 — Fat areas (man image on left + options on right)
function StepFatAreas({ answers, set, next }: StepProps) {
  const opts = ["Arms", "Chest", "Belly", "Bum", "Thighs"];
  return (
    <>
      <Title>Where do you want to lose fat first?</Title>
      <p className="text-center text-sm font-medium mb-5 underline">Select below:</p>
      <div className="grid grid-cols-[1fr_1.2fr] gap-3 items-center">
        <div className="flex items-center justify-center">
          <QuizImage src={fatAreasMan} alt="" className="w-full object-contain max-h-80" />
        </div>
        <div className="flex flex-col gap-2">
          {opts.map((o) => {
            const checked = answers.fatAreas.includes(o);
            return (
              <button
                key={o}
                type="button"
                onClick={() => set("fatAreas", toggle(answers.fatAreas, o))}
                className={`flex items-center justify-between gap-2 rounded-full border-2 px-4 py-3 text-left ${
                  checked
                    ? "bg-quiz-pink-light border-quiz-pink"
                    : "bg-quiz-pink-light/70 border-quiz-pink-border"
                }`}
              >
                <span className="font-medium text-sm">{o}</span>
                <Checkbox checked={checked} />
              </button>
            );
          })}
        </div>
      </div>
      <PrimaryButton onClick={next} disabled={answers.fatAreas.length === 0}>
        Continue
      </PrimaryButton>
    </>
  );
}

// Step 5 — Age (4 image cards 2x2)
function StepAge({ set, next }: StepProps) {
  const opts = [
    { v: "18 to 29", img: age1829 },
    { v: "30 to 39", img: age3039 },
    { v: "40 to 49", img: age4049 },
    { v: "50+", img: age50 },
  ];
  return (
    <>
      <Title>How old are you?</Title>
      <Subtitle>We tailor your plan to your stage of life.</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.v}
            type="button"
            onClick={() => {
              set("ageGroup", o.v);
              next();
            }}
            className="bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-2 flex flex-col items-center hover:border-quiz-pink"
          >
            <QuizImage src={o.img} alt={o.v} className="w-full aspect-square object-contain" />
            <span className="font-bold py-2">{o.v}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// Step 6 — Weight to lose (4 cards, same scale for first 3, unknown for last)
function StepWeightToLose({ set, next }: StepProps) {
  const opts = [
    { v: "5kg to 10kg", img: scale20 },
    { v: "10kg to 15kg", img: scale20 },
    { v: "15kg to 20kg", img: scale20 },
    { v: "Not sure yet", img: scaleUnknown },
  ];
  return (
    <>
      <Title>How many kilos do you want to lose?</Title>
      <Subtitle>The Mounjaro Jelly protocol speeds up fat loss.</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.v}
            type="button"
            onClick={() => {
              set("weightToLose", o.v);
              next();
            }}
            className="bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-2 flex flex-col items-center hover:border-quiz-pink"
          >
            <QuizImage src={o.img} alt={o.v} className="w-full aspect-square object-contain" />
            <span className="font-bold py-2 text-sm text-center">{o.v}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// Step 7 — Name
function StepName({ answers, set, next }: StepProps) {
  return (
    <>
      <Title>What is your name?</Title>
      <input
        type="text"
        value={answers.name}
        maxLength={60}
        onChange={(e) => set("name", e.target.value)}
        placeholder="Type your name"
        className="w-full rounded-full border-2 border-quiz-pink-border bg-quiz-pink-light px-5 py-3 text-base focus:outline-none focus:border-quiz-pink"
      />
      <PrimaryButton onClick={next} disabled={!answers.name.trim()}>
        Continue
      </PrimaryButton>
    </>
  );
}

// Step 8 — Body type (rows with image + label + arrow, per screenshot)
function StepBodyType({ set, next }: StepProps) {
  const opts = [
    { v: "Average", img: bodyRegular },
    { v: "A bit of a tummy", img: bodyBarriga },
    { v: "Overweight", img: bodySobrepeso },
  ];
  return (
    <>
      <Title>Which body shape is closest to yours?</Title>
      <div className="flex flex-col gap-3">
        {opts.map((o) => (
          <button
            key={o.v}
            type="button"
            onClick={() => { set("bodyType", o.v); next(); }}
            className="w-full flex items-center gap-4 bg-quiz-pink-light border-2 border-quiz-pink-border rounded-full pl-2 pr-5 py-2 hover:border-quiz-pink transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-white overflow-hidden flex items-center justify-center shrink-0">
              <QuizImage src={o.img} alt={o.v} className="w-full h-full object-cover" />
            </div>
            <span className="flex-1 text-left font-semibold text-base">{o.v}</span>
            <span className="w-8 h-8 rounded-full border-2 border-quiz-pink flex items-center justify-center text-quiz-pink">
              <ArrowRight />
            </span>
          </button>
        ))}
      </div>
    </>
  );
}


// Step 9
function StepWeightAffects({ answers, set, next }: StepProps) {
  const opts = [
    { emoji: "🤦", text: "I hide from photos" },
    { emoji: "😞", text: "My partner worries about my health" },
    { emoji: "😪", text: "I skip social events because of my body" },
    { emoji: "👋", text: "None of these" },
  ];
  return (
    <>
      <Title>{answers.name || "Hi"}, how is your weight affecting your life?</Title>
      <div className="grid grid-cols-1 gap-0">
        {opts.map((o) => (
          <OptionCard
            key={o.text}
            onClick={() => set("weightAffects", toggle(answers.weightAffects, o.text))}
            selected={answers.weightAffects.includes(o.text)}
            leading={<Emoji e={o.emoji} className="w-7 h-7" />}
            trailing={<Checkbox checked={answers.weightAffects.includes(o.text)} />}
          >
            {o.text}
          </OptionCard>
        ))}
      </div>
      <PrimaryButton onClick={next} disabled={answers.weightAffects.length === 0}>
        Continue
      </PrimaryButton>
    </>
  );
}

// Step 10
function StepSatisfaction({ set, next }: StepProps) {
  const opts = [
    { emoji: "😪", text: "No, I feel far heavier than I should be" },
    { emoji: "😞", text: "Yes, but I know my health could be better" },
    { emoji: "🙂", text: "No, I would like to lose weight and feel better" },
  ];
  return (
    <>
      <Title>Are you happy with the way you look right now?</Title>
      {opts.map((o) => (
        <OptionCard
          key={o.text}
          onClick={() => {
            set("satisfaction", o.text);
            next();
          }}
          leading={<Emoji e={o.emoji} className="w-7 h-7" />}
          trailing={<ArrowRight />}
        >
          {o.text}
        </OptionCard>
      ))}
    </>
  );
}

// Step 11 (two columns)
function StepDifficulties({ answers, set, next }: StepProps) {
  const opts = [
    { emoji: "🪜", text: "Climbing stairs" },
    { emoji: "🧘", text: "Sitting comfortably" },
    { emoji: "🦵", text: "Bending down" },
    { emoji: "🛌", text: "Lying down in bed" },
    { emoji: "🚶", text: "Walking long distances" },
    { emoji: "✅", text: "None" },
  ];
  return (
    <>
      <Title>Does your weight make daily things harder?</Title>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.text}
            type="button"
            onClick={() => set("difficulties", toggle(answers.difficulties, o.text))}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl border-2 text-center ${
              answers.difficulties.includes(o.text)
                ? "bg-quiz-pink-light border-quiz-pink"
                : "bg-quiz-pink-light/70 border-quiz-pink-border"
            }`}
          >
            <Emoji e={o.emoji} className="w-9 h-9" />
            <span className="text-xs font-medium">{o.text}</span>
          </button>
        ))}
      </div>
      <PrimaryButton onClick={next} disabled={answers.difficulties.length === 0}>
        Continue
      </PrimaryButton>
    </>
  );
}

// VTurb smart player loader
function VTurbPlayer({ playerId }: { playerId: string }) {
  useEffect(() => {
    const scriptId = `vturb-${playerId}`;
    if (document.getElementById(scriptId)) return;
    const s = document.createElement("script");
    s.id = scriptId;
    s.src = `https://scripts.converteai.net/${VTURB_ACCOUNT}/players/${playerId}/v4/player.js`;
    s.async = true;
    document.head.appendChild(s);
  }, [playerId]);
  return (
    <div
      className="w-full mb-4"
      dangerouslySetInnerHTML={{
        __html: `<vturb-smartplayer id="vid-${playerId}" style="display:block;margin:0 auto;width:100%;max-width:400px;"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:133.33333333333331% 0 0;z-index:0;background-color:black;"></div></vturb-smartplayer>`,
      }}
    />
  );
}

// VSL
function StepVSL({
  playerId,
  title,
  cta,
  next,
}: {
  playerId: string;
  title: string;
  cta: string;
  next: () => void;
}) {
  return (
    <>
      <Title>{title}</Title>
      <VTurbPlayer playerId={playerId} />
      <PrimaryButton onClick={next}>{cta}</PrimaryButton>
    </>
  );
}


// Step 13
function StepImpediment({ set, next }: StepProps) {
  const opts = [
    { emoji: "🕗", title: "No time", desc: "My days are far too busy." },
    { emoji: "😬", title: "Self-control", desc: "I struggle to resist cravings." },
    { emoji: "💸", title: "Money", desc: "Healthy food costs more than takeaways." },
  ];
  return (
    <>
      <Title>What holds you back the most?</Title>
      {opts.map((o) => (
        <button
          key={o.title}
          type="button"
          onClick={() => {
            set("impediment", o.title);
            next();
          }}
          className="w-full flex items-center gap-3 rounded-2xl border-2 border-quiz-pink-border bg-quiz-pink-light px-4 py-3 mb-3 text-left hover:border-quiz-pink"
        >
          <Emoji e={o.emoji} className="w-9 h-9" />
          <div className="flex-1">
            <div className="font-bold">{o.title}</div>
            <div className="text-xs text-neutral-600">{o.desc}</div>
          </div>
          <ArrowRight />
        </button>
      ))}
    </>
  );
}

// Step 14
function StepProtocolMessage({ next }: StepProps) {
  return (
    <>
      <Title>Our protocol handles that for you!</Title>
      <p className="text-center text-base mb-4">
        The Mounjaro Jelly works while you sleep, speeding up fat burning.
      </p>
      <QuizImage
        src={comoFunciona}
        alt="How the Mounjaro Jelly works"
        className="w-full max-w-md mx-auto mb-4"
      />
      <PrimaryButton onClick={next}>Continue</PrimaryButton>
    </>
  );
}

// Testimony — Maria
function StepTestimony({ next }: StepProps) {
  return (
    <>
      <Title><Emoji e="🔥" /> Real Transformation Stories <Emoji e="🔥" /></Title>
      <QuizImage
        src={antesDespues}
        alt="Before and after - Lerato Mabena"
        className="w-full max-w-md mx-auto rounded-xl mb-4"
      />
      <p className="text-center font-semibold mb-2">
        <Emoji e="📍" /> Precious: Durban, KwaZulu-Natal
      </p>
      <p className="text-sm text-neutral-700 leading-relaxed mb-4 px-1">
        "I had tried everything to lose weight and nothing stuck. After adding the Mounjaro Jelly
        to my routine I lost 16kg without changing what I eat. The best part is that my hunger
        and cravings simply calmed down on their own."
      </p>
      <PrimaryButton onClick={next}>Continue</PrimaryButton>
    </>
  );
}

// Step 15
function StepBenefits({ answers, set, next }: StepProps) {
  const opts = [
    "Deeper sleep",
    "Less pain and inflammation",
    "More energy through the day",
    "Less stress and anxiety",
    "More confidence in myself",
    "Protection against metabolic disease",
    "Lose weight without struggle or rebound",
  ];
  return (
    <>
      <Title>
        {answers.name || "Hi"}, which benefits do you want most?
      </Title>
      <Subtitle>We tailor your formula to get you the best results.</Subtitle>
      {opts.map((o) => (
        <OptionCard
          key={o}
          onClick={() => set("benefits", toggle(answers.benefits, o))}
          selected={answers.benefits.includes(o)}
          trailing={<Checkbox checked={answers.benefits.includes(o)} />}
        >
          {o}
        </OptionCard>
      ))}
      <PrimaryButton onClick={next} disabled={answers.benefits.length === 0}>
        Continue
      </PrimaryButton>
    </>
  );
}

// Slider
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
  footer,
}: {
  title: string;
  subtitle: string;
  unit: string;
  altUnit: string;
  min: number;
  max: number;
  value: number;
  setValue: (v: number) => void;
  next: () => void;
  footer: string;
}) {
  const [activeUnit, setActiveUnit] = useState(unit);
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <div className="flex justify-center gap-2 mb-6">
        {[unit, altUnit].map((u) => (
          <button
            key={u}
            type="button"
            onClick={() => setActiveUnit(u)}
            className={`px-6 py-2 rounded-full font-semibold border-2 ${
              activeUnit === u
                ? "bg-quiz-pink text-white border-quiz-pink"
                : "bg-white text-quiz-pink border-quiz-pink"
            }`}
          >
            {u}
          </button>
        ))}
      </div>
      <div className="text-center text-4xl font-extrabold mb-4">
        {value}
        <span className="text-xl ml-1">{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-quiz-pink"
      />
      <div className="flex justify-between text-xs text-neutral-500 mt-1 mb-6">
        <span>{min}</span>
        <span>Drag to adjust</span>
        <span>{max}</span>
      </div>
      <p className="text-center text-sm text-neutral-600 mb-2">{footer}</p>
      <PrimaryButton onClick={next}>Continue</PrimaryButton>
    </>
  );
}

// Step 18 (two columns)
function StepRoutine({ set, next }: StepProps) {
  const opts = [
    { emoji: "🏃", text: "I work out of the house, busy days" },
    { emoji: "💻", text: "I work from home, flexible days" },
    { emoji: "👨‍👩‍👧", text: "I look after the family at home" },
    { emoji: "🤷", text: "Something else" },
  ];
  return (
    <>
      <Title>What do your days look like?</Title>
      <Subtitle>Your routine shapes your plan.</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.text}
            type="button"
            onClick={() => {
              set("routine", o.text);
              next();
            }}
            className="flex flex-col items-center gap-1 p-4 rounded-2xl border-2 border-quiz-pink-border bg-quiz-pink-light/70 text-center hover:border-quiz-pink"
          >
            <Emoji e={o.emoji} className="w-9 h-9" />
            <span className="text-xs font-medium">{o.text}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// Step 19 (two columns)
function StepSleep({ set, next }: StepProps) {
  const opts = [
    { emoji: "😵", text: "Less than 5 hours" },
    { emoji: "😴", text: "Between 5 and 7 hours" },
    { emoji: "😌", text: "Between 7 and 9 hours" },
    { emoji: "🛌", text: "More than 9 hours" },
  ];
  return (
    <>
      <Title>How many hours do you sleep a night?</Title>
      <Subtitle>Sleep quality has a big effect on your metabolism.</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.text}
            type="button"
            onClick={() => {
              set("sleep", o.text);
              next();
            }}
            className="flex flex-col items-center gap-1 p-4 rounded-2xl border-2 border-quiz-pink-border bg-quiz-pink-light/70 text-center hover:border-quiz-pink"
          >
            <Emoji e={o.emoji} className="w-9 h-9" />
            <span className="text-xs font-medium">{o.text}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// Step 20 (two columns)
function StepWater({ set, next }: StepProps) {
  const opts = [
    { emoji: "☕", text: "Only coffee or tea" },
    { emoji: "💧", text: "1-2 glasses a day" },
    { emoji: "🚰", text: "3-6 glasses a day" },
    { emoji: "🥤", text: "More than 6 glasses" },
  ];
  return (
    <>
      <Title>How much water do you drink a day?</Title>
      <Subtitle>Hydration has a direct effect on fat loss.</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.text}
            type="button"
            onClick={() => {
              set("water", o.text);
              next();
            }}
            className="flex flex-col items-center gap-1 p-4 rounded-2xl border-2 border-quiz-pink-border bg-quiz-pink-light/70 text-center hover:border-quiz-pink"
          >
            <Emoji e={o.emoji} className="w-9 h-9" />
            <span className="text-xs font-medium">{o.text}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// Step 21 (two columns already)
function StepFruits({ answers, set, next }: StepProps) {
  const opts = [
    { emoji: "🍋", text: "Lemon" },
    { emoji: "🍊", text: "Orange" },
    { emoji: "🍌", text: "Banana" },
    { emoji: "🍎", text: "Apple" },
    { emoji: "🍓", text: "Strawberry" },
    { emoji: "🍍", text: "Pineapple" },
  ];
  return (
    <>
      <Title>Which fruit do you eat most often?</Title>
      <Subtitle>Your preferences help us fine-tune the recipe.</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.text}
            type="button"
            onClick={() => set("fruits", toggle(answers.fruits, o.text))}
            className={`flex flex-col items-center gap-1 p-4 rounded-2xl border-2 ${
              answers.fruits.includes(o.text)
                ? "border-quiz-pink bg-quiz-pink-light"
                : "border-quiz-pink-border bg-quiz-pink-light/60"
            }`}
          >
            <Emoji e={o.emoji} className="w-11 h-11" />
            <span className="font-medium">{o.text}</span>
          </button>
        ))}
      </div>
      <PrimaryButton onClick={next} disabled={answers.fruits.length === 0}>
        Continue
      </PrimaryButton>
    </>
  );
}

// Loading
function StepLoading({
  text,
  next,
  durationMs = 3000,
}: {
  text: string;
  next: () => void;
  durationMs?: number;
}) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setPct(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(next, 400);
      }
    }, 60);
    return () => clearInterval(id);
  }, [durationMs, next]);
  return (
    <div className="py-20 text-center">
      <div className="text-5xl font-extrabold text-quiz-pink mb-4">{pct}%</div>
      <p className="text-base mb-8">{text}</p>
      <div className="h-3 w-full rounded-full bg-quiz-pink-light overflow-hidden max-w-md mx-auto">
        <div
          className="h-full bg-quiz-pink transition-all duration-100"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ====== INTELLIGENT DIAGNOSIS ======
function buildDiagnosis(a: QuizAnswers) {
  const heightM = a.height / 100;
  const imc = a.currentWeight / (heightM * heightM);

  let imcLabel = "normal";
  if (imc < 18.5) imcLabel = "underweight";
  else if (imc < 25) imcLabel = "normal";
  else if (imc < 30) imcLabel = "overweight";
  else if (imc < 35) imcLabel = "class I obesity";
  else if (imc < 40) imcLabel = "class II obesity";
  else imcLabel = "class III obesity";

  // Estimated body fat (Deurenberg formula, gender-based)
  const ageMid =
    a.ageGroup === "18 to 29" ? 24 :
    a.ageGroup === "30 to 39" ? 34 :
    a.ageGroup === "40 to 49" ? 44 : 55;
  const sex = a.gender === "Man" ? 1 : 0;
  const bodyFat = Math.max(8, Math.min(55, 1.20 * imc + 0.23 * ageMid - 10.8 * sex - 5.4));

  // Metabolism score (0-100, lower = slower metabolism)
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

  // Visceral / inflammation risk
  const visceralRisk = imc >= 30 ? "high" : imc >= 25 ? "moderate" : "low";

  // Personalized observations
  const obs: string[] = [];

  if (a.fatAreas.length) {
    obs.push(
      `We picked up stubborn fat in: ${a.fatAreas.join(", ")}. That pattern usually points to insulin resistance and a hormone imbalance in those areas.`
    );
  }
  if (a.sleep.includes("Less than 5") || a.sleep.includes("5 and 7")) {
    obs.push(
      `Your sleep (${a.sleep.toLowerCase()}) is lowering leptin and pushing cortisol up, which drives hunger and makes fat loss much harder.`
    );
  }
  if (a.water.includes("Only coffee") || a.water.includes("1-2")) {
    obs.push(
      `Your water intake is very low, which can slow your metabolism by up to 30% and cause water retention.`
    );
  }
  if (a.difficulties.length && !a.difficulties.includes("None")) {
    obs.push(
      `The struggles you mentioned (${a.difficulties.filter(d => d !== "None").slice(0, 2).join(", ")}) point to joint strain that comes with excess belly fat.`
    );
  }
  if (a.impediment === "Self-control") {
    obs.push(
      `Struggling with cravings points to insulin spikes and poor fullness signals, which the Mounjaro Jelly settles by steadying your blood sugar.`
    );
  }
  if (a.impediment === "No time") {
    obs.push(
      `With no time for complicated diets, a 1-minute-a-day routine like the Mounjaro Jelly fits your life perfectly.`
    );
  }
  if (ageMid >= 40) {
    obs.push(
      `From 40 onward your resting metabolism drops around 5% per decade, so losing weight needs a metabolic trigger, not just dieting.`
    );
  }

  const lossPotential =
    a.weightToLose.includes("15kg to 20") ? "14 a 20 kg" :
    a.weightToLose.includes("10kg to 15") ? "10 a 15 kg" :
    a.weightToLose.includes("5kg to 10") ? "6 a 10 kg" :
    "8 a 12 kg";

  return {
    imc: imc.toFixed(1),
    imcLabel,
    bodyFat: bodyFat.toFixed(1),
    metabolism,
    visceralRisk,
    obs,
    lossPotential,
  };
}

// WhatsApp-style audio player
function WhatsAppAudio({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      const cur = a.currentTime;
      const dur = a.duration || 1;
      setProgress((cur / dur) * 100);
      const m = Math.floor(cur / 60).toString().padStart(2, "0");
      const s = Math.floor(cur % 60).toString().padStart(2, "0");
      setTime(`${m}:${s}`);
    };
    const onEnd = () => { setPlaying(false); setProgress(0); setTime("00:00"); };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play(); setPlaying(true); }
  };

  // 40 fake waveform bars
  const bars = Array.from({ length: 40 });
  const activeBar = Math.floor((progress / 100) * bars.length);

  return (
    <div
      className="relative rounded-2xl p-3 mb-4 shadow-sm"
      style={{
        background: "#e7f6d5",
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><circle cx='5' cy='5' r='1.2' fill='%23c7e3a8' opacity='0.5'/><circle cx='20' cy='15' r='1.2' fill='%23c7e3a8' opacity='0.5'/><circle cx='32' cy='28' r='1.2' fill='%23c7e3a8' opacity='0.5'/></svg>\")",
      }}
    >
      <audio ref={audioRef} src={src} preload="auto" />
      <div className="flex items-center gap-3 bg-white rounded-full pl-2 pr-3 py-2 shadow-sm">
        <div className="relative shrink-0">
          {!playing && progress === 0 && (
            <>
              <span className="absolute inset-0 rounded-full bg-quiz-pink/40 animate-ping" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-quiz-pink border-2 border-white" />
            </>
          )}
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play audio"}
            className="relative w-9 h-9 rounded-full flex items-center justify-center bg-quiz-pink text-white hover:opacity-90 transition shrink-0"
          >
            {playing ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5z"/></svg>
            )}
          </button>
        </div>
        <div className="flex-1 flex items-center gap-[2px] h-8">
          {bars.map((_, i) => (
            <span
              key={i}
              className="flex-1 rounded-full transition-colors"
              style={{
                height: `${20 + ((i * 37) % 70) / 4 + (i % 5) * 4}%`,
                background: i <= activeBar ? "#34b7f1" : "#bcbcbc",
                minHeight: 4,
              }}
            />
          ))}
        </div>
        <div
          className="w-9 h-9 rounded-full bg-quiz-pink shrink-0 flex items-center justify-center text-white text-xs font-bold"
          aria-hidden
        >
          <Emoji e="🎤" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-1 ml-12 mr-2">
        <span className="text-[11px] text-neutral-600">{time}</span>
        {!playing && progress === 0 && (
          <span className="text-[11px] font-semibold text-quiz-pink animate-pulse">
            <Emoji e="👉" /> Tap to listen
          </span>
        )}
      </div>
    </div>
  );
}

// Step 23 — Intelligent diagnosis
function StepIMC({ answers, next }: StepProps) {
  const d = buildDiagnosis(answers);
  const pos = Math.max(0, Math.min(100, ((parseFloat(d.imc) - 15) / 25) * 100));

  return (
    <>
      <Title>
        {answers.name || "Hi"}, listen to how the Mounjaro Jelly is changing lives and see what our community achieved
      </Title>

       <WhatsAppAudio src={southAfricaAudio} />

      <div className="text-center mb-2">
        <h3 className="font-extrabold text-lg">Body Mass Index (BMI)</h3>
        <p className="text-sm mt-1">
          Your BMI: <span className="text-blue-500 font-bold">{d.imc}</span>
        </p>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-neutral-700 mb-1">
          <span>Body Mass Index (BMI)</span>
          <span className="font-semibold">50%</span>
        </div>
        <div className="text-xs text-neutral-700 mb-2">Your BMI:</div>
        <div className="relative h-3 rounded-full overflow-hidden flex">
          <div className="flex-1 bg-[#8db86a]" />
          <div className="flex-1 bg-[#c4c84a]" />
          <div className="flex-1 bg-[#f0c14a]" />
          <div className="flex-1 bg-[#e88a3a]" />
          <div className="flex-1 bg-[#d83a2a]" />
          <div
            className="absolute -top-1 w-5 h-5 rounded-full border-[3px] border-quiz-pink bg-white -ml-2.5"
            style={{ left: `${pos}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-neutral-700 mt-2">
          <span>underweight</span>
          <span>lean</span>
          <span>normal</span>
          <span>overweight</span>
          <span>obese</span>
        </div>
      </div>

      <div
        className="rounded-2xl p-4 mb-4 text-sm leading-relaxed space-y-3"
        style={{ background: "#d9f5c4" }}
      >
        <p className="font-bold">
          <Emoji e="⚠️" /> Your metabolism could be working against you without you noticing!
        </p>
        <p>
          Even sitting in the {d.imcLabel} range, your body can be holding on to waste and running slower than it should, making fat harder to burn and leaving you low on energy.
        </p>
        <p className="font-semibold"><Emoji e="🔔" /> Warning signs to watch for:</p>
        <p><Emoji e="❌" /> A slow metabolism and weight that will not shift.</p>
        <p><Emoji e="❌" /> Constant tiredness and a bloated feeling.</p>
        <p><Emoji e="❌" /> Fat building up in specific areas of your body.</p>
        <p className="font-semibold">
          <Emoji e="💡" /> With the Mounjaro Jelly your body can start burning fat naturally again!
        </p>
        <p>
          The right mix of ingredients wakes up your metabolism, cuts water retention and lifts your energy.
        </p>
        <p className="font-semibold">
          <Emoji e="🔽" /> See how the Mounjaro Jelly changed Mabena's body, and what it can do for yours:
        </p>
      </div>

      <div className="mb-4 rounded-2xl overflow-hidden border border-quiz-pink-border">
        <QuizImage src={antesDespuesGabriela} alt="Gabriela before and after" className="w-full block" />
      </div>

      <PrimaryButton onClick={next}>Continue</PrimaryButton>
    </>
  );
}

// Step 24
function StepHealthCondition({ set, goto }: StepProps) {
  return (
    <>
      <Title>Do you have any health condition?</Title>
      <Subtitle>One important detail before we finish.</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            set("healthCondition", "Yes");
            goto(27);
          }}
          className="bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-6 flex flex-col items-center hover:border-quiz-pink"
        >
          <Emoji e="✅" className="w-14 h-14 mb-2" />
          <span className="font-semibold">Yes</span>
        </button>
        <button
          type="button"
          onClick={() => {
            set("healthCondition", "No");
            set("healthProblem", "");
            goto(28);
          }}
          className="bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-6 flex flex-col items-center hover:border-quiz-pink"
        >
          <Emoji e="❌" className="w-14 h-14 mb-2" />
          <span className="font-semibold">No</span>
        </button>
      </div>
      <p className="text-xs text-neutral-600 text-center mt-4">
        This makes sure your formula is completely safe for you.
      </p>
    </>
  );
}

// Step 25
function StepHealthProblem({ answers, set, goto }: StepProps) {
  const [stage, setStage] = useState<"input" | "insight">("input");
  const disease = answers.healthProblem.trim();

  if (stage === "insight" && disease) {
    return (
      <>
        <Title>{answers.name || "Hi"}, this matters for your <span className="text-quiz-pink">{disease}</span> <Emoji e="⚠️" /></Title>
        <div className="bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-5 text-[15px] leading-relaxed space-y-3 text-quiz-text">
          <p>
            <Emoji e="😟" /> Clinical studies show that <strong>excess body fat</strong> can make a condition like <strong>{disease}</strong> up to <strong>3 times</strong> more severe.
          </p>
          <p>
            Belly fat releases <strong>inflammatory compounds</strong> that overload your body, worsen the symptoms of <strong>{disease}</strong> and blunt how well treatment works for you.
          </p>
          <p className="font-semibold">
            <Emoji e="🚨" /> Every extra day carrying that weight is another day your <strong>{disease}</strong> quietly gets worse.
          </p>
          <p>
            <Emoji e="💚" /> The good news: the <strong>Mounjaro Jelly</strong> was built to speed up fat burning naturally, easing the load your body carries with <strong>{disease}</strong>.
          </p>
        </div>
        <PrimaryButton onClick={() => goto(28)}>Continue</PrimaryButton>
      </>
    );
  }

  return (
    <>
      <Title>Which one is it? <Emoji e="👇" /></Title>
      <p className="text-sm text-center text-neutral-600 mb-4">
        Diabetes, high blood pressure, heart disease, menopause, underactive thyroid, depression, anxiety, IBS, digestive trouble...
      </p>
      <input
        type="text"
        value={answers.healthProblem}
        maxLength={200}
        onChange={(e) => set("healthProblem", e.target.value)}
        placeholder="Which condition?"
        className="w-full rounded-full border-2 border-quiz-pink-border bg-quiz-pink-light px-5 py-3 text-base focus:outline-none focus:border-quiz-pink"
      />
      <PrimaryButton onClick={() => setStage("insight")} disabled={!answers.healthProblem.trim()}>
        Continue
      </PrimaryButton>
    </>
  );
}

// Step 26 (two columns)
function StepContactMethod({ set, next }: StepProps) {
  return (
    <>
      <Title>Where should we send your personalised plan?</Title>
      <Subtitle>Choose one:</Subtitle>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            set("contactMethod", "WhatsApp");
            next();
          }}
          className="bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-6 flex flex-col items-center hover:border-quiz-pink"
        >
          <Emoji e="💚" className="w-14 h-14 mb-2" />
          <span className="font-semibold">WhatsApp</span>
        </button>
        <button
          type="button"
          onClick={() => {
            set("contactMethod", "Email");
            next();
          }}
          className="bg-quiz-pink-light border-2 border-quiz-pink-border rounded-2xl p-6 flex flex-col items-center hover:border-quiz-pink"
        >
          <Emoji e="📧" className="w-14 h-14 mb-2" />
          <span className="font-semibold">Email</span>
        </button>
      </div>
    </>
  );
}

// Step 27
function StepContactValue({ answers, set, next }: StepProps) {
  const isEmail = answers.contactMethod === "Email";
  const placeholder = isEmail ? "Type your email" : "Type your WhatsApp number";
  const valid = isEmail
    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.contactValue)
    : answers.contactValue.replace(/\D/g, "").length >= 8;
  return (
    <>
      <Title>{isEmail ? "What is your email?" : "What is your WhatsApp number?"}</Title>
      <input
        type={isEmail ? "email" : "tel"}
        value={answers.contactValue}
        maxLength={isEmail ? 100 : 20}
        onChange={(e) => set("contactValue", e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border-2 border-quiz-pink-border bg-quiz-pink-light px-5 py-3 text-base focus:outline-none focus:border-quiz-pink"
      />
      <PrimaryButton onClick={next} disabled={!valid}>
        Continue
      </PrimaryButton>
    </>
  );
}

// Step 28
function StepDreamBody({ set, next }: StepProps) {
  const opts = [
    { v: "Natural", img: dreamNatural },
    { v: "Toned", img: dreamFit },
  ];
  return (
    <>
      <Title>What is your dream body?</Title>
      <Subtitle>Pick one below:</Subtitle>
      <div className="flex flex-col gap-3 max-w-[220px] mx-auto">
        {opts.map((o) => (
          <button
            key={o.v}
            type="button"
            onClick={() => {
              set("dreamBody", o.v);
              next();
            }}
            className="bg-quiz-pink-light border-2 border-quiz-pink-border rounded-3xl px-4 py-2 flex flex-col items-center hover:border-quiz-pink"
          >
            <div className="w-full flex items-center justify-center" style={{ height: 140 }}>
              <QuizImage src={o.img} alt={o.v} className="h-full object-contain" />
            </div>
            <span className="font-semibold text-sm mt-1">{o.v}</span>
          </button>
        ))}
      </div>
    </>
  );
}


// Step 30 (uses diagnosis)
function StepBeforeAfter({ answers, next }: StepProps) {
  const d = buildDiagnosis(answers);
  return (
    <>
      <Title>
        {answers.name || "Hi"}, are you ready to change your body and your health?
      </Title>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
          <div className="text-center font-bold text-sm py-2 border-b border-neutral-200">Now</div>
          <div className="flex items-end justify-center h-56 bg-white">
            <QuizImage src={transformBefore} alt="Before" className="h-full object-contain" />
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
          <div className="text-center font-bold text-sm py-2 border-b border-neutral-200">Goal</div>
          <div className="flex items-end justify-center h-56 bg-white">
            <QuizImage src={transformAfter} alt="After" className="h-full object-contain" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <div className="flex justify-between text-xs text-neutral-700 mb-1">
            <span>This is you before the Mounjaro Jelly</span>
            <span className="font-semibold">{d.metabolism}%</span>
          </div>
          <div className="relative h-2 rounded-full bg-neutral-200 overflow-hidden">
            <div className="h-full bg-red-400" style={{ width: `${d.metabolism}%` }} />
          </div>
          <p className="text-xs text-neutral-600 mt-2">
            Your metabolism is running slow, which leaves you tired.
          </p>
        </div>
        <div>
          <div className="flex justify-between text-xs text-neutral-700 mb-1">
            <span>And this is you after the Mounjaro Jelly</span>
            <span className="font-semibold">90%</span>
          </div>
          <div className="relative h-2 rounded-full bg-neutral-200 overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: "90%" }} />
          </div>
          <p className="text-xs text-neutral-600 mt-2">
            Here your metabolism runs the way it should.
          </p>
        </div>
      </div>
      <PrimaryButton onClick={next}>Yes, I want to start now!</PrimaryButton>
    </>
  );
}

// Step 31
function StepFinalVSL({ answers }: StepProps) {
  return (
    <>
      <Title>
        {answers.name || "Hi"}, watch the video and get your Mounjaro Jelly recipe!
      </Title>
      <VTurbPlayer playerId={VSL_2_ID} />
    </>
  );
}

// ====== ROOT ======
function QuizPage() {
  const [history, setHistory] = useState<number[]>([1]);
  const step = history[history.length - 1];
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const topRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };
  const next = () => setHistory((h) => [...h, h[h.length - 1] + 1]);
  const goto = (s: number) => setHistory((h) => [...h, s]);
  const back = () => setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  // Preload every quiz image once at mount so no step shows a white flash
  useEffect(() => {
    ALL_IMAGES.forEach((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
    });
  }, []);

  const props: StepProps = { answers, set, next, goto };

  const content = useMemo(() => {
    switch (step) {
      case 1: return <StepLanding {...props} />;
      case 2: return <StepGoals {...props} />;
      case 3: return <StepGender {...props} />;
      case 4: return <StepFatAreas {...props} />;
      case 5: return <StepAge {...props} />;
      case 6: return <StepWeightToLose {...props} />;
      case 7: return <StepName {...props} />;
      case 8: return <StepBodyType {...props} />;
      case 9: return <StepWeightAffects {...props} />;
      case 10: return <StepSatisfaction {...props} />;
      case 11: return <StepDifficulties {...props} />;
      case 12: return (
        <StepVSL
          playerId={VSL_1_ID}
          title={`${answers.name || "Hi"}, watch Dr. Andres Navarro explain exactly how this works`}
          cta="Continue"
          next={next}
        />
      );
      case 13: return <StepImpediment {...props} />;
      case 14: return <StepProtocolMessage {...props} />;
      case 15: return <StepBenefits {...props} />;
      case 16: return <StepTestimony {...props} />;
      case 17: return (
        <SliderStep
          title="How tall are you?"
          subtitle="Your height also affects your metabolism."
          unit="cm"
          altUnit="in"
          min={140}
          max={220}
          value={answers.height}
          setValue={(v) => set("height", v)}
          next={next}
          footer="This lets us work out the exact dose for your body."
        />
      );
      case 18: return (
        <SliderStep
          title="What is your goal weight?"
          subtitle="Almost there! Let us tune the plan to your body."
          unit="kg"
          altUnit="lb"
          min={40}
          max={150}
          value={answers.desiredWeight}
          setValue={(v) => set("desiredWeight", v)}
          next={next}
          footer="We use this to set the ideal dose for the best results."
        />
      );
      case 19: return (
        <SliderStep
          title="What do you weigh right now?"
          subtitle="We need your real weight for an accurate reading."
          unit="kg"
          altUnit="lb"
          min={40}
          max={250}
          value={answers.currentWeight}
          setValue={(v) => set("currentWeight", v)}
          next={next}
          footer="We will set the ideal dose for the best results."
        />
      );
      case 20: return <StepRoutine {...props} />;
      case 21: return <StepSleep {...props} />;
      case 22: return <StepWater {...props} />;
      case 23: return <StepFruits {...props} />;
      case 24: return <StepLoading text="Analysing your answers..." next={next} />;
      case 25: return <StepIMC {...props} />;
      case 26: return <StepHealthCondition {...props} />;
      case 27: return <StepHealthProblem {...props} />;
      case 28: return <StepContactMethod {...props} />;
      case 29: return <StepContactValue {...props} />;
      case 30: return <StepDreamBody {...props} />;
      case 31: return <StepLoading text="Building your personalised plan..." next={next} durationMs={4000} />;
      case 32: return <StepBeforeAfter {...props} />;
      case 33: return <StepFinalVSL {...props} />;
      default: return <StepLanding {...props} />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, answers]);

  if (step === 1) {
    return <div ref={topRef}>{content}</div>;
  }

  return (
    <div ref={topRef}>
      <QuizShell step={step} back={history.length > 1 ? back : undefined}>
        {content}
      </QuizShell>
    </div>
  );
}
