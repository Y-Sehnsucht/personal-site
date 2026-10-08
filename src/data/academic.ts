export interface LocalizedText {
  en: string;
  zh: string;
}

export const academicMetrics = [
  {
    label: { en: 'GPA', zh: '绩点' },
    value: '3.81 / 4.0',
  },
  {
    label: { en: 'Major rank', zh: '专业排名' },
    value: '35 / 253 · Top 14%',
  },
  {
    label: { en: 'Comprehensive rank', zh: '综合排名' },
    value: '17 / 253 · Top 7%',
  },
  {
    label: { en: 'CET-4', zh: '大学英语四级' },
    value: '589',
  },
] as const;

export const researchInterests: Array<{
  title: LocalizedText;
  description: LocalizedText;
}> = [
  {
    title: {
      en: 'Software engineering and developer tools',
      zh: '软件工程与开发工具',
    },
    description: {
      en: 'Software design, requirements, modeling, testing, code quality, and tools that support development and learning.',
      zh: '关注软件设计、需求分析、建模、测试、代码质量，以及支持开发与学习的软件工具。',
    },
  },
  {
    title: {
      en: 'AI-assisted software engineering',
      zh: 'AI 辅助软件工程',
    },
    description: {
      en: 'How LLMs and agents can support requirements, code generation, testing, debugging, and practical development workflows.',
      zh: '关注大模型与智能体如何支持需求分析、代码生成、测试、调试和实际开发流程。',
    },
  },
  {
    title: {
      en: 'Algorithms and reliable systems',
      zh: '算法与可靠系统',
    },
    description: {
      en: 'Data structures, retrieval algorithms, system modeling, performance analysis, reliability, and security.',
      zh: '关注数据结构、检索算法、系统建模、性能分析，以及软件系统的可靠性与安全性。',
    },
  },
];

export const researchPreparation = {
  objective: {
    en: 'Seeking a long-term undergraduate research internship or research-assistant opportunity where I can develop rigorous research habits through implementation, reproduction, experimentation, and technical writing.',
    zh: '希望长期参与本科科研实习或科研助理工作，通过实现、复现、实验和技术写作逐步建立严谨的科研训练。',
  },
  availability: {
    en: 'Available now · 15-20 hours per week during term · Long-term through undergraduate study · Shanghai',
    zh: '可随时开始 · 学期内每周可稳定投入 15-20 小时 · 本科阶段长期参与 · 上海',
  },
} as const;
