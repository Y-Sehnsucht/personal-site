export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Dynamic High-Dimensional Vector Indexing System',
    subtitle: 'Algorithm Design & Performance Optimization',
    image: '/images/projects/vector-index.jpg',
    date: '2026-03-01',
    desc: 'Designed the indexing and retrieval core of a Mini-VDB supporting dynamic insertion, deletion, Top-K search, and threshold queries. Explored KD-tree partitioning, bounding-region pruning, heap-based candidate maintenance, and query-specific optimization for datasets of up to 10,000 vectors and dimensions below 2,000.',
    tech: [
      'C++',
      'KD-tree',
      'Nearest-neighbor Search',
      'Heap',
      'Performance Analysis',
    ],
    featured: true,
  },
  {
    title: 'Intelligent Elevator Collaborative Modeling and Simulation',
    subtitle: 'Continuous Dynamics & PID Control Modeling',
    image: '/images/projects/elevator-control.jpg',
    date: '2026-07-01',
    desc: 'Developed the continuous elevator dynamics and PID control model in a five-member SysML and Simulink project. PID adjustment reduced the semi-load final position error from 0.0163 m to 0.0062 m and the maximum error from 0.1174 m to 0.0699 m.',
    tech: ['MATLAB', 'Simulink', 'PID Control', 'Physical Modeling', 'SysML'],
    featured: true,
  },
  {
    title: 'ScaffoldMind',
    subtitle: 'Independent Full-Stack Learning Workspace',
    link: 'https://github.com/Y-Sehnsucht/scaffoldmind',
    image: '/images/projects/scaffoldmind.jpg',
    date: '2026-06-01',
    desc: 'Independently developed a local-first learning workspace for CSAPP and Data Structures, covering chat, practice, review, history, learner profiles, and local settings. The system combines a React frontend, Express backend, SSE streaming, backend LLM integration, and local learning memory.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'SSE', 'LLM API'],
    featured: true,
  },
  {
    title: 'Intelligent Water Quality Monitoring and Early-Warning System',
    subtitle: 'Team Lead · System & Technical Proposal Design',
    image: '/images/projects/water-quality.jpg',
    date: '2026-07-01',
    desc: 'Led the technical proposal for a dynamic area-wide water monitoring system integrating multi-parameter, spectral, visual, and pressure sensing. Designed its embedded acquisition, multimodal communication, data-fusion, edge-intelligence, warning, and hybrid-energy architecture.',
    tech: [
      'STM32',
      'RS485 / Modbus',
      'Edge Intelligence',
      'LSTM',
      'WebGIS',
      'Multi-sensor Fusion',
    ],
    featured: true,
  },
  {
    title: 'Maple',
    subtitle: 'Backend Development',
    link: 'https://github.com/boyu-by/Maple_Backend',
    image: '/images/projects/maple.jpg',
    date: '2026-02-01',
    desc: 'Established the backend foundation for a local mind-map notebook with data editing, historical versions, and intelligent suggestions. Worked on persistence modeling, RESTful service structure, database integration, exception handling, and collaborative GitHub development.',
    tech: ['Java 17', 'Spring Boot', 'JPA', 'H2 / SQLite', 'REST API', 'Git'],
  },
  {
    title: 'Zhiyi',
    subtitle: 'Technical & Functional Design',
    link: 'https://boyuanclub.feishu.cn/wiki/YIx6wtleniqOjtkpCI8c6wKVnSg',
    image: '/images/projects/zhiyi.jpg',
    date: '2025-07-01',
    desc: 'Translated an AI-enabled education concept into concrete software functions, interaction processes, technical architecture, and application scenarios. Contributed the technology-related sections and innovation analysis for the project proposal.',
    tech: [
      'Product Design',
      'Technical Architecture',
      'AIGC',
      'Multimodal Interaction',
      'Educational Technology',
    ],
  },
];

export default data;
