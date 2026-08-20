import type { CriteriaLangCode } from "@/data/criteriaI18n";

/** Short "how it works" orientation for the front page, in the same languages
 *  as the self-assessment criteria. Getting oriented isn't the skill the TOEIC
 *  tests, so a native-language intro lowers the first-visit barrier without
 *  undercutting an English-learning site.
 *
 *  These translations are MACHINE-ASSISTED and not native-reviewed — the `note`
 *  field says so in each language, shown under the section, so the provenance is
 *  honest on the landing page. Keep the copy short (a heading + three points);
 *  it is deliberately not a full localisation of the site UI. */
export interface FrontIntroCopy {
  eyebrow: string;
  heading: string;
  intro: string;
  points: { title: string; body: string }[];
  note: string;
}

export const frontIntroI18n: Record<CriteriaLangCode, FrontIntroCopy> = {
  en: {
    eyebrow: "New here?",
    heading: "How ToeicPath works",
    intro: "Free, complete TOEIC preparation — read the essentials in your language.",
    points: [
      {
        title: "Everything, no account",
        body: "Complete preparation for the whole TOEIC — free, with nothing to sign up for.",
      },
      {
        title: "Practise every part",
        body: "All seven Listening & Reading parts, plus timed Speaking and Writing drills.",
      },
      {
        title: "Check your own work",
        body: "Grade your Speaking and Writing against the official criteria, explained in your language.",
      },
    ],
    note: "Machine-assisted translation.",
  },
  fr: {
    eyebrow: "Nouveau ici ?",
    heading: "Comment fonctionne ToeicPath",
    intro: "Une préparation complète et gratuite au TOEIC — l'essentiel dans votre langue.",
    points: [
      {
        title: "Tout, sans compte",
        body: "Une préparation complète à tout le TOEIC — gratuite et sans inscription.",
      },
      {
        title: "Entraînez-vous à chaque partie",
        body: "Les sept parties de compréhension orale et écrite, plus des exercices chronométrés d'expression orale et écrite.",
      },
      {
        title: "Évaluez votre travail",
        body: "Notez votre expression orale et écrite selon les critères officiels, expliqués dans votre langue.",
      },
    ],
    note: "Traduction assistée par ordinateur.",
  },
  es: {
    eyebrow: "¿Nuevo por aquí?",
    heading: "Cómo funciona ToeicPath",
    intro: "Preparación completa y gratuita para el TOEIC: lo esencial en tu idioma.",
    points: [
      {
        title: "Todo, sin cuenta",
        body: "Preparación completa para todo el TOEIC: gratis y sin registrarte.",
      },
      {
        title: "Practica cada parte",
        body: "Las siete partes de comprensión auditiva y de lectura, más ejercicios cronometrados de expresión oral y escrita.",
      },
      {
        title: "Evalúa tu trabajo",
        body: "Califica tu expresión oral y escrita según los criterios oficiales, explicados en tu idioma.",
      },
    ],
    note: "Traducción asistida por ordenador.",
  },
  pt: {
    eyebrow: "Novo por aqui?",
    heading: "Como o ToeicPath funciona",
    intro: "Preparação completa e gratuita para o TOEIC — o essencial no seu idioma.",
    points: [
      {
        title: "Tudo, sem conta",
        body: "Preparação completa para todo o TOEIC — grátis e sem cadastro.",
      },
      {
        title: "Pratique todas as partes",
        body: "As sete partes de compreensão auditiva e de leitura, além de exercícios cronometrados de fala e escrita.",
      },
      {
        title: "Avalie seu desempenho",
        body: "Avalie sua fala e escrita segundo os critérios oficiais, explicados no seu idioma.",
      },
    ],
    note: "Tradução assistida por computador.",
  },
  ja: {
    eyebrow: "はじめての方へ",
    heading: "ToeicPath の使い方",
    intro: "無料で本格的な TOEIC 対策 — 要点をあなたの言語で読めます。",
    points: [
      {
        title: "登録不要、すべて無料",
        body: "TOEIC 全体の対策を、登録なしで無料でご利用いただけます。",
      },
      {
        title: "すべてのパートを練習",
        body: "リスニングとリーディングの全 7 パートに加え、時間制限つきのスピーキング・ライティング練習も。",
      },
      {
        title: "自分の解答を採点",
        body: "スピーキングとライティングを公式の評価基準で採点。基準はあなたの言語で説明します。",
      },
    ],
    note: "この翻訳は機械翻訳を利用しています。",
  },
  ko: {
    eyebrow: "처음 오셨나요?",
    heading: "ToeicPath 이용 방법",
    intro: "무료로 즐기는 완벽한 TOEIC 대비 — 핵심 내용을 모국어로 확인하세요.",
    points: [
      {
        title: "가입 없이 모두 무료",
        body: "TOEIC 전체를 위한 완벽한 대비를 가입 없이 무료로 이용하세요.",
      },
      {
        title: "모든 파트 연습",
        body: "리스닝과 리딩 7개 파트 전체와 시간제한 스피킹·라이팅 연습까지.",
      },
      {
        title: "스스로 채점하기",
        body: "공식 기준에 따라 스피킹과 라이팅을 채점하세요. 기준은 모국어로 설명해 드립니다.",
      },
    ],
    note: "기계 번역의 도움을 받은 번역입니다.",
  },
  zh: {
    eyebrow: "第一次來嗎？",
    heading: "ToeicPath 使用說明",
    intro: "免費、完整的 TOEIC 備考——用你的語言掌握重點。",
    points: [
      {
        title: "免註冊，全部免費",
        body: "完整的 TOEIC 備考，免費且無需註冊。",
      },
      {
        title: "每個題型都能練習",
        body: "聽力與閱讀全部七個部分，外加計時的口說與寫作練習。",
      },
      {
        title: "自我評分",
        body: "依官方評分標準為你的口說與寫作評分，標準以你的語言說明。",
      },
    ],
    note: "本翻譯為機器輔助翻譯。",
  },
};
