export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'C++',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Programming Languages'],
  },

  //Computer Science
  {
    title: 'Data Structures & Algorithms',
    competency: 4,
    category: ['Computer Science'],
  },
  {
    title: 'Computer Systems',
    competency: 3,
    category: ['Computer Science'],
  },
  {
    title: 'Object-Oriented Programming',
    competency: 4,
    category: ['Computer Science'],
  },
  
  // Artificial Intelligence
  {
    title: 'LLM Application Development',
    competency: 3,
    category: ['Artificial Intelligence'],
  },
  {
    title: 'Prompt Engineering',
    competency: 3,
    category: ['Artificial Intelligence'],
  },
  {
    title: 'Vector Search & Similarity Retrieval',
    competency: 2,
    category: ['Artificial Intelligence', 'Computer Science'],
  },

 // Modeling & Simulation
  {
    title: 'MATLAB / Simulink',
    competency: 3,
    category: ['Modeling & Simulation'],
  },
  {
    title: 'Dynamic System Modeling & Simulation',
    competency: 3,
    category: ['Modeling & Simulation'],
  },
  {
    title: 'SysML',
    competency: 3,
    category: ['Modeling & Simulation'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
