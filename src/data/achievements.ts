export interface Achievement {
  title: string;
  award: string;
  level: 'National' | 'Municipal' | 'University' | 'Organization';
  certificate?: string;
}

const achievements: Achievement[] = [
  {
    title: '18th Advanced Robotics and Simulation Technology Competition',
    award: 'National Third Prize',
    level: 'National',
    certificate: '/images/achievements/rst-national-third.jpg',
  },
  {
    title: '18th Advanced Robotics and Simulation Technology Competition',
    award: 'Shanghai Second Prize',
    level: 'Municipal',
    certificate: '/images/achievements/rst-shanghai-second.jpg',
  },
  {
    title:
      '11th Huichuang Qingchun — Shanghai College Student Cultural and Creative Works Showcase',
    award: 'Shanghai Second Prize',
    level: 'Municipal',
  },
  {
    title:
      '15th Challenge Cup Chinese College Students Entrepreneurship Plan Competition — ECNU Preliminary Round',
    award: 'Silver Award',
    level: 'University',
  },
  {
    title:
      'China International College Students’ Innovation Competition (2026) — ECNU Round',
    award: 'Third Prize',
    level: 'University',
  },
  {
    title: '2025 ECNU Coder Freshman Programming Challenge',
    award: 'Third Prize',
    level: 'University',
    certificate: '/images/achievements/ecnu-coder-2025.jpg',
  },
  {
    title: 'Boyuan Information Technology Club Owner-Pro (2026)',
    award: 'Third Prize',
    level: 'Organization',
  },
];

export default achievements;