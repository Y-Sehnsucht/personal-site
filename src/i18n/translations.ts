import type { Locale } from './types';

export const routeLabels = {
  '/': { en: 'Zijun Yan', zh: '颜子竣' },
  '/about': { en: 'About', zh: '关于' },
  '/projects': { en: 'Projects', zh: '项目' },
  '/achievements': { en: 'Achievements', zh: '获奖' },
  '/resume': { en: 'CV', zh: '学术简历' },
  '/contact': { en: 'Contact', zh: '联系' },
} as const;

export function routeLabel(path: string, locale: Locale) {
  const label = routeLabels[path as keyof typeof routeLabels];
  if (!label) return path;
  return locale === 'zh-CN' ? label.zh : label.en;
}

export const uiText = {
  primaryNav: { en: 'Primary', zh: '主导航' },
  openMenu: { en: 'Open navigation menu', zh: '打开导航菜单' },
  closeMenu: { en: 'Close navigation menu', zh: '关闭导航菜单' },
  skip: { en: 'Skip to content', zh: '跳到正文' },
  explore: { en: 'Explore', zh: '浏览' },
  connect: { en: 'Connect', zh: '联系' },
  source: { en: 'Source', zh: '源码' },
  opensNewTab: { en: ' (opens in new tab)', zh: '（在新标签页打开）' },
  viewAll: { en: 'View All', zh: '查看全部' },
  projects: { en: 'Projects', zh: '项目' },
  about: { en: 'About', zh: '关于' },
  achievements: { en: 'Achievements', zh: '获奖' },
  selectedWork: { en: 'Selected Work', zh: '代表作品' },
  featuredProjects: { en: 'Featured Projects', zh: '精选项目' },
  selectedProjects: { en: 'Selected Projects', zh: '精选项目' },
  additionalProjects: { en: 'Additional Projects', zh: '更多项目' },
  viewResume: { en: 'View CV', zh: '查看学术简历' },
  aboutMe: { en: 'About Me', zh: '关于我' },
  projectImageDialog: { en: 'Project image preview', zh: '项目图片预览' },
  closePreview: { en: 'Close image preview', zh: '关闭图片预览' },
  previewImage: { en: 'Preview image', zh: '预览图片' },
  resume: { en: 'Academic CV', zh: '学术简历' },
  resumeSummary: {
    en: 'I am a Software Engineering undergraduate at East China Normal University and expect to graduate in 2029. My interests include software engineering and developer tools, AI-assisted software engineering, and algorithms and reliable systems. I am seeking a long-term undergraduate research or research assistant opportunity.',
    zh: '我是华东师范大学软件工程专业本科生，预计于 2029 年毕业。目前主要关注软件工程与开发工具、AI 辅助软件工程，以及算法与可靠系统，希望长期参与本科科研或科研助理工作。',
  },
  resumeSections: { en: 'CV sections', zh: '学术简历目录' },
  cvResearchProfile: { en: 'Research Profile', zh: '科研方向' },
  cvAvailability: { en: 'Availability', zh: '可投入时间' },
  cvAwards: { en: 'Selected Awards', zh: '代表性奖项' },
  resumeProjects: { en: 'Selected Projects', zh: '代表性项目' },
  resumeEducation: { en: 'Education', zh: '教育经历' },
  resumeSkills: { en: 'Skills', zh: '技能' },
  resumeCourses: { en: 'Selected Courses', zh: '精选课程' },
  resumeReferences: { en: 'References', zh: '推荐人' },
  resumeReferencesText: {
    en: 'References available upon request.',
    zh: '如需推荐人信息，可通过联系页面沟通。',
  },
  getInTouch: { en: 'Get in touch', zh: '联系我' },
  present: { en: 'Present', zh: '至今' },
  to: { en: ' to ', zh: ' 至 ' },
  all: { en: 'All', zh: '全部' },
  filterSkills: { en: 'Filter skills by category', zh: '按类别筛选技能' },
} as const;

export function t(key: keyof typeof uiText, locale: Locale) {
  const text = uiText[key];
  return locale === 'zh-CN' ? text.zh : text.en;
}

export const heroCopy = {
  en: {
    firstBeforeSchool:
      "I'm a sophomore undergraduate student in Software Engineering at ",
    school: 'East China Normal University',
    rest: '. My current interests include software engineering and developer tools, AI-assisted software engineering, and algorithms and reliable systems. I continue to build my foundations through coursework and implementation projects.',
  },
  zh: {
    firstBeforeSchool: '',
    school: '华东师范大学',
    rest: '软件工程专业大二本科生。当前主要关注软件工程与开发工具、AI 辅助软件工程，以及算法与可靠系统，并通过课程和项目持续夯实数据结构、计算机系统与软件设计基础。',
  },
} as const;

export const pageCopy = {
  projectsSubtitle: {
    en: 'Selected work in algorithms, system modeling, full-stack development, intelligent sensing, and educational technology.',
    zh: '这里整理了我在算法、系统建模、全栈开发、智能感知和教育技术方向上的部分项目。',
  },
  achievementsSubtitle: {
    en: 'Selected awards from programming, innovation, engineering, and interdisciplinary competitions.',
    zh: '部分编程、创新、工程和交叉学科竞赛获奖记录。',
  },
  contactTitle: { en: 'Get in Touch', zh: '联系我' },
  contactHint: {
    en: 'Email is usually the best way to reach me.',
    zh: '邮件通常是最适合联系我的方式。',
  },
  contactDivider: { en: 'or find me on', zh: '也可以在这里找到我' },
} as const;

export function copy<K extends keyof typeof pageCopy>(key: K, locale: Locale) {
  const text = pageCopy[key];
  return locale === 'zh-CN' ? text.zh : text.en;
}
