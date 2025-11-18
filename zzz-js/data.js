// =========================
// PORTAL EDUCAÇÃO FÍSICA – BASE DE DADOS
// =========================

// ---------- Módulos / Matérias ----------
const modulesData = [
  {
    title: "Anatomia Humana",
    description: "Estudo do corpo humano, sistemas e estruturas.",
    contents: [
      "Sistema Ósseo",
      "Sistema Muscular",
      "Sistema Cardiorrespiratório",
      "Anatomia Funcional",
      "Biomecânica básica"
    ]
  },

  {
    title: "Fisiologia do Exercício",
    description: "Adaptações corporais ao esforço físico.",
    contents: [
      "Energia e Metabolismo",
      "VO2 Máx",
      "Respostas ao exercício",
      "Treinamento de força",
      "Fisiologia do emagrecimento"
    ]
  },

  {
    title: "Treinamento Desportivo",
    description: "Técnicas de treinamento, periodização e performance.",
    contents: [
      "Periodização",
      "Avaliação Física",
      "Treinamento Funcional",
      "Hipertrofia",
      "Condicionamento muscular"
    ]
  }
];

// ---------- Biblioteca Interna ----------
const libraryTexts = {
  anatomia: `
<h2>• Anatomia Humana – Conteúdo Completo</h2>
<p>Estudo detalhado dos sistemas do corpo...</p>
`,

  fisiologia: `
<h2>• Fisiologia do Exercício – Conteúdo Completo</h2>
<p>O corpo reage ao exercício através de...</p>
`,

  treinamento: `
<h2>• Treinamento – Conteúdo Completo</h2>
<p>Princípios, métodos e adaptações...</p>
`,
};

// ---------- Exercícios ----------
const exerciseList = [
  {
    question: "Qual músculo é responsável pela extensão do joelho?",
    options: ["Bíceps", "Quadríceps", "Deltóide", "Peitoral"],
    answer: 1
  }
];

// ---------- Simulados ----------
const examSimulados = [
  {
    title: "Simulado de Anatomia",
    questions: 15,
    difficulty: "Médio"
  }
];

// ---------- Buscador Inteligente ----------
function smartSearch(query) {
  query = query.toLowerCase();
  let results = [];

  modulesData.forEach(mod => {
    mod.contents.forEach(item => {
      if (item.toLowerCase().includes(query)) {
        results.push({
          type: "Conteúdo do Módulo",
          module: mod.title,
          result: item
        });
      }
    });
  });

  return results;
}
