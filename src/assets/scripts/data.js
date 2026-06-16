export const data = {
  name: "Rosa Benchabane",
  role: "Développeuse Web · En reconversion",
  bio: "Après 8 ans au service client d'une entreprise Tech, j'ai fait le choix de me reconvertir vers le développement web. Passionnée par la création d'interfaces modernes et accessibles, je construis aujourd'hui des projets avec React, JavaScript et Node.js.",
  tags: ["React", "JavaScript", "Node.js", "UI Design"],
  email: "benchabane.rosa@outlook.com",
  phone: "06 42 22 85 82",
  city: "Stains, Île-de-France",
  website: "https://marie-dev.fr",
  websiteLabel: "RB-Portfolio",
  github: "https://github.com/RosaBen/myPortfolio",
  cv: "rosa-benchabane-cv.netlify.app",
  availability: "Disponible pour une alternance à partir de septembre 2026. Rythme 3j entreprise / 2j école. Télétravail partiel possible.",
  skills: ["React", "JavaScript", "HTML/CSS", "Node.js", "MySQL", "Postgres", "Git", "Figma"],
  reconversion: {
    parcours: "J'ai passé près de 4 ans à travailler entre le service client et l'équipe développement, et j'ai donc décidé de me reconvertir dans le développement web — un domaine qui me passionne depuis longtemps.",
    forces: "Sens du client, autonome, résolution de problèmes et rigueur. Ces compétences enrichissent mon approche du code : je pense toujours à l'utilisateur final.",
    recherche: "Alternance Développeur Web — Paris & remote",
  },
  projects: [
    {
      id: 1,
      title: "TaskFlow — App de gestion de tâches",
      desc: "Application React avec authentification, drag & drop et synchronisation en temps réel.",
      tech: ["React", "Node.js", "MySQL", "JWT"],
      url: "https://taskflow.marie-dev.fr",
      icon: "✓",
    },
    {
      id: 2,
      title: "Vitrine — Boulangerie Leroy",
      desc: "Site vitrine responsive avec galerie, formulaire de contact et intégration Google Maps.",
      tech: ["HTML", "CSS", "JS", "WordPress"],
      url: "https://boulangerie-leroy.fr",
      icon: "⌂",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      desc: "Interface de visualisation de données avec filtres dynamiques et exports CSV.",
      tech: ["React", "Recharts", "Express", "MongoDB"],
      url: "https://dashboard.marie-dev.fr",
      icon: "▦",
    },
    {
      id: 4,
      title: "API REST — Blog headless",
      desc: "API complète avec CRUD, pagination, authentification et documentation Swagger.",
      tech: ["Node.js", "Express", "MySQL", "Swagger"],
      url: "https://github.com/marie-dupont/blog-api",
      icon: "⚙",
    },
  ],
};


export const pages = [
  { left: "body", right: "cover" },
  { left: "blank", right: "table-contents" },
  { left: "about", right: "proj-1" },
  { left: "proj-2", right: "proj-3" },
  { left: "proj-4", right: "contact" },
  { left: "proj-4", right: "contact" },
  { left: "back-cover", right: "body" },
];


export const tableContents = [
  { label: "Mini Résumé & reconversion", page: 1 },
  { label: "Projet — App de tâches", page: 1 },
  { label: "Projet — Site vitrine", page: 2 },
  { label: "Projet — Dashboard", page: 2 },
  { label: "Projet — API REST", page: 3 },
  { label: "Contact & liens", page: 3 },
];

export const bottomPageLabels = {
  0: { left: "", right: "Table des matières" },
  1: { left: "Mini résumé", right: "Projet 01" },
  2: { left: "Projet 02", right: "Projet 03" },
  3: { left: "Projet 04", right: "Contact" },
};