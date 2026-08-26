import type { Locale } from './types';

export const routeLabels = {
  '/': { en: 'Zijun Yan', zh: '闫子珺' },
  '/about': { en: 'About', zh: '关于' },
  '/projects': { en: 'Projects', zh: '项目' },
  '/achievements': { en: 'Achievements', zh: '获奖' },
  '/resume': { en: 'Resume', zh: '简历' },
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
  viewResume: { en: 'View Resume', zh: '查看简历' },
  aboutMe: { en: 'About Me', zh: '关于我' },
  projectImageDialog: { en: 'Project image preview', zh: '项目图片预览' },
  closePreview: { en: 'Close image preview', zh: '关闭图片预览' },
  previewImage: { en: 'Preview image', zh: '预览图片' },
  resume: { en: 'Resume', zh: '简历' },
  resumeSummary: {
    en: 'Undergraduate student in Software Engineering at East China Normal University. My coursework and projects focus on computer systems, data structures, software development, and modeling and simulation. I am interested in developing a stronger research foundation through practical projects and systematic study.',
    zh: '华东师范大学软件工程专业本科生。课程学习与项目实践主要围绕计算机系统、数据结构、软件开发、建模与仿真展开；我希望通过持续的系统学习和实践项目，进一步打牢研究与工程基础。',
  },
  resumeSections: { en: 'Resume sections', zh: '简历目录' },
  resumeProjects: { en: 'Projects & Experience', zh: '项目与经历' },
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
    rest: '. My main focus is on the foundations of software engineering, including data structures and algorithms, computer systems, software design, and reliable implementation. I am also interested in AI-assisted development, LLM-based agents, and reliable and efficient AI systems.',
  },
  zh: {
    firstBeforeSchool: '',
    school: '华东师范大学',
    rest: '软件工程专业大二本科生。当前学习重点包括数据结构与算法、计算机系统、软件设计与工程实践；在此基础上，也关注 AI 辅助开发、基于大模型的智能体，以及可靠、高效的智能系统。',
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
