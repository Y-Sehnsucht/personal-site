export interface Achievement {
  title: string;
  titleZh?: string;
  award: string;
  awardZh?: string;
  level: 'National' | 'Municipal' | 'University' | 'Organization';
  certificate?: string;
}

const achievements: Achievement[] = [
  {
    title: '18th Advanced Robotics and Simulation Technology Competition',
    titleZh: '第十八届先进机器人及仿真技术大赛',
    award: 'National Third Prize',
    awardZh: '国家三等奖',
    level: 'National',
    certificate: '/images/achievements/rst-national-third.jpg',
  },
  {
    title: '18th Advanced Robotics and Simulation Technology Competition',
    titleZh: '第十八届先进机器人及仿真技术大赛',
    award: 'Shanghai Second Prize',
    awardZh: '上海市二等奖',
    level: 'Municipal',
    certificate: '/images/achievements/rst-shanghai-second.jpg',
  },
  {
    title:
      '11th Huichuang Qingchun - Shanghai College Student Cultural and Creative Works Showcase',
    titleZh: '第十一届“汇创青春”上海大学生文化创意作品展示活动',
    award: 'Shanghai Second Prize',
    awardZh: '上海市二等奖',
    level: 'Municipal',
  },
  {
    title:
      '15th Challenge Cup Chinese College Students Entrepreneurship Plan Competition - ECNU Preliminary Round',
    titleZh: '第十五届“挑战杯”中国大学生创业计划竞赛华东师范大学校内选拔赛',
    award: 'Silver Award',
    awardZh: '银奖',
    level: 'University',
  },
  {
    title:
      "China International College Students' Innovation Competition (2026) - ECNU Round",
    titleZh: '中国国际大学生创新大赛（2026）华东师范大学校内赛',
    award: 'Third Prize',
    awardZh: '三等奖',
    level: 'University',
  },
  {
    title: '2025 ECNU Coder Freshman Programming Challenge',
    titleZh: '2025 ECNU Coder 新生编程挑战赛',
    award: 'Third Prize',
    awardZh: '三等奖',
    level: 'University',
    certificate: '/images/achievements/ecnu-coder-2025.jpg',
  },
  {
    title: 'Boyuan Information Technology Club Owner-Pro (2026)',
    titleZh: '博远信息技术社 Owner-Pro（2026）',
    award: 'Third Prize',
    awardZh: '三等奖',
    level: 'Organization',
  },
];

export default achievements;
