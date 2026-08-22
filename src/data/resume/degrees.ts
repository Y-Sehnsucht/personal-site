export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'East China Normal University',
    degree: 'B.Eng. in Software Engineering (Expected)',
    link: 'https://www.ecnu.edu.cn/',
    year: 2029,
  },
];

export default degrees;