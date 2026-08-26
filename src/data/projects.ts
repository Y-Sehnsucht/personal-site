export interface Project {
  id?: string;
  title: string;
  titleZh?: string;
  subtitle?: string;
  subtitleZh?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  descZh?: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    id: 'vector-index',
    title: 'Dynamic High-Dimensional Vector Indexing System',
    titleZh: '动态高维向量索引系统',
    subtitle: 'Algorithm Design & Performance Optimization',
    subtitleZh: '算法设计与性能优化',
    image: '/images/projects/vector-index.jpg',
    date: '2026-03-01',
    desc: 'Designed the indexing and retrieval core of a Mini-VDB supporting dynamic insertion, deletion, Top-K search, and threshold queries. Explored KD-tree partitioning, bounding-region pruning, heap-based candidate maintenance, and query-specific optimization for datasets of up to 10,000 vectors and dimensions below 2,000.',
    descZh:
      '设计 Mini-VDB 的索引与检索核心，支持动态插入、删除、Top-K 搜索和阈值查询。围绕最多 10,000 条向量、维度低于 2,000 的数据集，探索 KD-tree 分区、边界区域剪枝、堆维护候选集和面向查询的优化。',
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
    id: 'elevator-control',
    title: 'Intelligent Elevator Collaborative Modeling and Simulation',
    titleZh: '智能电梯协同建模与仿真',
    subtitle: 'Continuous Dynamics & PID Control Modeling',
    subtitleZh: '连续动力学与 PID 控制建模',
    image: '/images/projects/elevator-control.jpg',
    date: '2026-07-01',
    desc: 'Developed the continuous elevator dynamics and PID control model in a five-member SysML and Simulink project. PID adjustment reduced the semi-load final position error from 0.0163 m to 0.0062 m and the maximum error from 0.1174 m to 0.0699 m.',
    descZh:
      '在五人 SysML 与 Simulink 项目中负责电梯连续动力学和 PID 控制模型。PID 调整后，半载最终位置误差从 0.0163 m 降至 0.0062 m，最大误差从 0.1174 m 降至 0.0699 m。',
    tech: ['MATLAB', 'Simulink', 'PID Control', 'Physical Modeling', 'SysML'],
    featured: true,
  },
  {
    id: 'scaffoldmind',
    title: 'ScaffoldMind',
    subtitle: 'Independent Full-Stack Learning Workspace',
    subtitleZh: '独立开发的全栈学习工作区',
    link: 'https://github.com/Y-Sehnsucht/scaffoldmind',
    image: '/images/projects/scaffoldmind.jpg',
    date: '2026-06-01',
    desc: 'Independently developed a local-first learning workspace for CSAPP and Data Structures, covering chat, practice, review, history, learner profiles, and local settings. The system combines a React frontend, Express backend, SSE streaming, backend LLM integration, and local learning memory.',
    descZh:
      '独立开发面向 CSAPP 和数据结构学习的本地优先工作区，覆盖聊天、练习、复习、历史记录、学习者画像和本地设置。系统包含 React 前端、Express 后端、SSE 流式响应、后端 LLM 接入和本地学习记忆。',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'SSE', 'LLM API'],
    featured: true,
  },
  {
    id: 'water-quality',
    title: 'Intelligent Water Quality Monitoring and Early-Warning System',
    titleZh: '智能水质监测与预警系统',
    subtitle: 'Team Lead - System & Technical Proposal Design',
    subtitleZh: '团队负责人 · 系统与技术方案设计',
    image: '/images/projects/water-quality.jpg',
    date: '2026-07-01',
    desc: 'Led the technical proposal for a dynamic area-wide water monitoring system integrating multi-parameter, spectral, visual, and pressure sensing. Designed its embedded acquisition, multimodal communication, data-fusion, edge-intelligence, warning, and hybrid-energy architecture.',
    descZh:
      '负责动态区域水质监测系统的技术方案，整合多参数、光谱、视觉和压力传感。设计嵌入式采集、多模态通信、数据融合、边缘智能、预警和混合能源架构。',
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
    id: 'maple',
    title: 'Maple',
    subtitle: 'Backend Development',
    subtitleZh: '后端开发',
    link: 'https://github.com/boyu-by/Maple_Backend',
    image: '/images/projects/maple.jpg',
    date: '2026-02-01',
    desc: 'Established the backend foundation for a local mind-map notebook with data editing, historical versions, and intelligent suggestions. Worked on persistence modeling, RESTful service structure, database integration, exception handling, and collaborative GitHub development.',
    descZh:
      '为本地思维导图笔记工具建立后端基础，支持数据编辑、历史版本和智能建议。参与持久化建模、RESTful 服务结构、数据库集成、异常处理和 GitHub 协作开发。',
    tech: ['Java 17', 'Spring Boot', 'JPA', 'H2 / SQLite', 'REST API', 'Git'],
  },
  {
    id: 'zhiyi',
    title: 'Zhiyi',
    titleZh: '知翊',
    subtitle: 'Technical & Functional Design',
    subtitleZh: '技术与功能设计',
    image: '/images/projects/zhiyi.jpg',
    date: '2025-07-01',
    desc: 'Translated an AI-enabled education concept into concrete software functions, interaction processes, technical architecture, and application scenarios. Contributed the technology-related sections and innovation analysis for the project proposal.',
    descZh:
      '将 AI 教育概念转化为具体软件功能、交互流程、技术架构和应用场景，负责项目方案中的技术相关部分和创新分析。',
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
