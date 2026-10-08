import type { Locale } from './types';

const resumeTextZh: Record<string, string> = {
  'Artificial Intelligence': '人工智能',
  'B.Eng. in Software Engineering (Expected)': '软件工程工学学士（预计毕业）',
  'Computer Science': '计算机科学',
  'Computer Systems': '计算机系统',
  'Data Structures & Algorithms': '数据结构与算法',
  'Development Tools': '开发工具',
  'Dynamic System Modeling & Simulation': '动态系统建模与仿真',
  'East China Normal University': '华东师范大学',
  'LLM Application Development': '大模型应用开发',
  'Modeling & Simulation': '建模与仿真',
  'Object-Oriented Programming': '面向对象程序设计',
  'Programming Languages': '编程语言',
  'Prompt Engineering': '提示词工程',
  'Unit Testing': '单元测试',
  'Vector Search & Similarity Retrieval': '向量搜索与相似度检索',
  'Data Structures and Algorithm · 4.0/4.0 98/100':
    '数据结构与算法 · 4.0/4.0 98/100',
  'Computer Systems · 4.0/4.0 90/100': '计算机系统 · 4.0/4.0 90/100',
  'Object-Oriented Programming(Based on C++) · 4.0/4.0':
    '面向对象程序设计（基于 C++）· 4.0/4.0',
  'Mathematics for Software Engineering(Discrete Mathematics) · 4.0/4.0':
    '软件工程数学（离散数学）· 4.0/4.0',
  'Linear Algebra · 4.0/4.0': '线性代数 · 4.0/4.0',
  'Introduction to Mathematics for Information Security · 4.0/4.0':
    '信息安全数学导论 · 4.0/4.0',
  'Mathematical thinking of artificial intelligence · 4.0/4.0':
    '人工智能数学思维 · 4.0/4.0',
  'Data Structure and Algorithm Practice · 4.0/4.0':
    '数据结构与算法实践 · 4.0/4.0',
};

export function resumeText(text: string, locale: Locale) {
  if (locale !== 'zh-CN') return text;
  return resumeTextZh[text] ?? text;
}
