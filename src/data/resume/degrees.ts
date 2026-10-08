export interface Degree {
  school: string;
  degree: string;
  link: string;
  startYear?: number;
  year: number;
  details?: string[];
  detailsZh?: string[];
}

const degrees: Degree[] = [
  {
    school: 'East China Normal University',
    degree: 'B.Eng. in Software Engineering (Expected)',
    link: 'https://www.ecnu.edu.cn/',
    startYear: 2025,
    year: 2029,
    details: [
      'GPA: 3.81/4.0',
      'Major rank: 35/253 (top 14%)',
      'Comprehensive scholarship rank: 17/253 (top 7%)',
      'CET-4: 589',
    ],
    detailsZh: [
      '绩点：3.81/4.0',
      '专业排名：35/253（前 14%）',
      '综合排名（奖学金评奖）：17/253（前 7%）',
      '大学英语四级：589',
    ],
  },
];

export default degrees;
