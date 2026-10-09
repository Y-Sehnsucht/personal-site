export interface ProjectImage {
  src: string;
  alt: string;
  altZh?: string;
  title?: string;
  titleZh?: string;
  caption?: string;
  captionZh?: string;
}

export interface CvProjectDetails {
  role: string;
  roleZh: string;
  startDate: string;
  endDate: string;
  context: string;
  contextZh: string;
  supervisor?: string;
  summary: string;
  summaryZh: string;
  highlights: string[];
  highlightsZh: string[];
}

export interface Project {
  id: string;
  title: string;
  titleZh?: string;
  subtitle?: string;
  subtitleZh?: string;
  link?: string;
  image: string;
  images?: ProjectImage[];
  date: string;
  desc: string;
  descZh?: string;
  tech?: string[];
  featured?: boolean;
  cv?: CvProjectDetails;
}

const data: Project[] = [
  {
    id: 'scaffoldmind',
    title: 'ScaffoldMind',
    subtitle: 'Independent Full-Stack Learning Workspace',
    subtitleZh: '独立开发的全栈学习工作区',
    link: 'https://y-sehnsucht.github.io/scaffoldmind/',
    image: '/images/projects/scaffoldmind.jpg',
    images: [
      {
        src: '/images/projects/scaffoldmind.jpg',
        alt: 'ScaffoldMind learning dashboard in light mode',
        altZh: 'ScaffoldMind 浅色模式学习仪表盘',
      },
      {
        src: '/images/projects/scaffoldmind-landing.png',
        alt: 'ScaffoldMind product landing page',
        altZh: 'ScaffoldMind 产品首页',
      },
      {
        src: '/images/projects/scaffoldmind-chat.jpg',
        alt: 'ScaffoldMind guided learning chat workspace',
        altZh: 'ScaffoldMind 引导式学习对话工作区',
      },
    ],
    date: '2026-06-03',
    desc: 'Built a local-first learning workspace spanning guided chat, practice, review, history, learner profiles, and local settings. The application uses a React frontend, an Express backend, SSE streaming, backend LLM integration, and local learning records.',
    descZh:
      '独立开发本地优先的学习工作区，覆盖引导式对话、练习、复习、历史记录、学习者画像和本地设置。应用采用 React 前端、Express 后端、SSE 流式响应、后端 LLM 接入和本地学习记录。',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'SSE', 'LLM API'],
    featured: true,
    cv: {
      role: 'Independent Developer',
      roleZh: '独立开发者',
      startDate: '2026-05-25',
      endDate: '2026-06-03',
      context: 'Independent project',
      contextZh: '个人独立项目',
      summary:
        'Designed and implemented a local-first workspace for structured computer-science learning, from product flows and interface design through backend APIs and persistence.',
      summaryZh:
        '从产品流程与界面设计到后端 API 和本地持久化，独立设计并实现面向计算机课程结构化学习的本地优先工作区。',
      highlights: [
        'Implemented guided chat, practice, review, history, learner-profile, and local-settings workflows.',
        'Built the React and TypeScript frontend with a Node.js and Express backend, using SSE for streaming responses.',
        'Secured API credentials behind the backend and stored learning records locally.',
      ],
      highlightsZh: [
        '实现引导式对话、练习、复习、历史记录、学习者画像和本地设置等学习流程。',
        '构建 React 与 TypeScript 前端、Node.js 与 Express 后端，并使用 SSE 实现流式响应。',
        '将 API 凭据隔离在后端，并在本地保存学习记录。',
      ],
    },
  },
  {
    id: 'vector-index',
    title: 'Mini-VDB: Dynamic Vector Index and Exact Top-K Retrieval',
    titleZh: 'Mini-VDB：动态向量索引与精确 Top-K 检索',
    subtitle: 'Data Structures & Retrieval Algorithms',
    subtitleZh: '数据结构与检索算法',
    image: '/images/projects/vector-index.jpg',
    date: '2026-06-30',
    desc: 'Implemented a Mini-VDB supporting insertion, deletion, exact Top-K search, and threshold queries with Euclidean distance and inner product. The project explores heap-based candidate maintenance, low-dimensional KD-tree pruning, high-dimensional sequential scanning, lazy deletion, and index rebuilding.',
    descZh:
      '实现支持插入、删除、精确 Top-K 搜索和阈值查询的 Mini-VDB，覆盖欧氏距离与内积度量；项目探索堆式候选维护、低维 KD-tree 剪枝、高维顺序扫描、惰性删除和索引重建。',
    tech: ['C++', 'KD-tree', 'Top-K Retrieval', 'Heap', 'AVX2'],
    featured: true,
    cv: {
      role: 'Independent Developer',
      roleZh: '独立开发者',
      startDate: '2026-06-01',
      endDate: '2026-06-30',
      context: 'Data Structures and Algorithm Practice · Solo course project',
      contextZh: '数据结构与算法实践 · 个人课程项目',
      supervisor: '王丽苹',
      summary:
        'Implemented the indexing and retrieval core of a small vector database and documented the design trade-offs of exact similarity search under dynamic updates.',
      summaryZh:
        '实现小型向量数据库的索引与检索核心，并分析动态更新条件下精确相似度检索的数据结构取舍。',
      highlights: [
        'Supported ADD, DELETE, Top-K QUERY, and threshold retrieval with Euclidean distance and inner product.',
        'Implemented contiguous storage, open-address hashing, heap-based Top-K selection, low-dimensional KD-tree pruning, and high-dimensional AVX2 sequential scanning.',
        'Developed eight progressive versions covering sorting, priority queues, BSTs, and AVL trees.',
      ],
      highlightsZh: [
        '支持 ADD、DELETE、Top-K QUERY 和阈值检索，并实现欧氏距离与内积两类度量。',
        '实现连续存储、开放寻址哈希、堆式 Top-K 选择、低维 KD-tree 剪枝和高维 AVX2 顺序扫描。',
        '完成从排序、优先队列到 BST、AVL 树的八个渐进版本。',
      ],
    },
  },
  {
    id: 'elevator-control',
    title: 'Intelligent Elevator Collaborative Modeling and Simulation',
    titleZh: '智能电梯协同建模与仿真',
    subtitle: 'Continuous Dynamics & PID Control',
    subtitleZh: '连续动力学与 PID 控制',
    image: '/images/projects/elevator-control.jpg',
    images: [
      {
        src: '/images/projects/elevator-dynamics.webp',
        alt: 'Simulink ElevatorDynamics subsystem for the elevator model',
        altZh: '电梯模型的 Simulink ElevatorDynamics 子系统',
        title: 'ElevatorDynamics module',
        titleZh: 'ElevatorDynamics 模块',
        caption:
          'I modeled the car, counterweight, load, gravity, friction, braking, and the integration from acceleration to velocity and position.',
        captionZh:
          '我建立了轿厢、对重、载荷、重力、摩擦与制动力模型，并完成从加速度到速度和位置的积分关系。',
      },
      {
        src: '/images/projects/elevator-feedback-controller.webp',
        alt: 'Simulink FeedbackController subsystem with PID feedback',
        altZh: '包含 PID 反馈的 Simulink FeedbackController 子系统',
        title: 'FeedbackController module',
        titleZh: 'FeedbackController 模块',
        caption:
          'I implemented position-error proportional and integral control together with velocity-error derivative feedback.',
        captionZh:
          '我使用位置误差构建比例与积分控制，并以速度误差实现微分反馈。',
      },
      {
        src: '/images/projects/elevator-load-compensation.webp',
        alt: 'Simulink LoadCompensation subsystem for feed-forward control',
        altZh: '用于前馈控制的 Simulink LoadCompensation 子系统',
        title: 'LoadCompensation module',
        titleZh: 'LoadCompensation 模块',
        caption:
          'I combined gravity, acceleration, and friction compensation to account for changes in load and motion state.',
        captionZh:
          '我组合重力、加速度与摩擦补偿，使控制输入能够响应载荷与运动状态的变化。',
      },
      {
        src: '/images/projects/elevator-half-load-comparison.webp',
        alt: 'Half-load comparison of standard PID and compensated PID metrics',
        altZh: '半载工况下普通 PID 与补偿 PID 的指标对比',
        title: 'Half-load controller comparison',
        titleZh: '半载控制指标对比',
        caption:
          'In the half-load simulation, compensation reduced final position error from 0.0163 m to 0.0062 m and maximum error from 0.1174 m to 0.0699 m.',
        captionZh:
          '在半载仿真中，补偿控制将最终位置误差从 0.0163 m 降至 0.0062 m，并将最大误差从 0.1174 m 降至 0.0699 m。',
      },
      {
        src: '/images/projects/elevator-load-adaptation.webp',
        alt: 'Compensated controller results under empty, half, and full loads',
        altZh: '补偿控制在空载、半载和满载工况下的结果',
        title: 'Adaptation across load conditions',
        titleZh: '不同载荷下的适应性',
        caption:
          'I evaluated the compensated controller under empty-, half-, and full-load conditions; final leveling error remained below 0.01 m in all three simulations.',
        captionZh:
          '我分别验证了空载、半载和满载工况，三组仿真的最终平层误差均保持在 0.01 m 以内。',
      },
    ],
    date: '2026-07-31',
    desc: 'Owned the continuous-dynamics and control subtask in a five-person SysML and Simulink course project. Built the car, counterweight, load, friction, brake, feedback-PID, feed-forward compensation, saturation, and simulation models. My contribution focused on control modeling and simulation.',
    descZh:
      '在五人 SysML 与 Simulink 课程项目中负责连续动力学与控制子任务，完成轿厢、对重、载荷、摩擦、制动、反馈 PID、前馈补偿、电机饱和与仿真模型。我的工作重点是控制建模与仿真。',
    tech: ['MATLAB', 'Simulink', 'PID Control', 'Physical Modeling', 'SysML'],
    featured: true,
    cv: {
      role: 'Dynamics and Control Subtask Owner',
      roleZh: '动力学与控制子任务负责人',
      startDate: '2026-07-01',
      endDate: '2026-07-31',
      context:
        'Advanced Software Development Methods · Five-person course project',
      contextZh: '高端软件开发方法 · 五人课程项目',
      supervisor: '刘静',
      summary:
        'I built and simulated the continuous elevator dynamics and PID-control model. The results below come from the control submodel I was responsible for.',
      summaryZh:
        '我完成了电梯连续动力学与 PID 控制模型的搭建和仿真，所列结果来自我负责的控制子模型。',
      highlights: [
        'Modeled the car, counterweight, load, friction, brake, motor saturation, feedback PID, and gravity/acceleration feed-forward compensation in Simulink.',
        'Reduced half-load final position error from 0.0163 m to 0.0062 m and maximum error from 0.1174 m to 0.0699 m.',
        'Verified final position error below 0.01 m across the tested empty-, half-, and full-load simulations.',
      ],
      highlightsZh: [
        '在 Simulink 中建立轿厢、对重、载荷、摩擦、制动、电机饱和、反馈 PID 及重力/加速度前馈补偿模型。',
        '将半载最终位置误差从 0.0163 m 降至 0.0062 m，最大误差从 0.1174 m 降至 0.0699 m。',
        '在空载、半载和满载仿真工况下验证最终位置误差低于 0.01 m。',
      ],
    },
  },
  {
    id: 'maple',
    title: 'Maple',
    subtitle: 'Database & Core API Subtask',
    subtitleZh: '数据库与核心 API 子任务',
    link: 'https://github.com/boyu-by/Maple_Backend',
    image: '/images/projects/maple.jpg',
    date: '2026-03-07',
    desc: 'Led the database and core API subtask for a four-person mind-map notebook project. Designed the node, connection, and metadata persistence model and implemented core data services for node CRUD, connection management, and layout storage.',
    descZh:
      '在四人思维导图笔记项目中负责数据库与核心 API 子任务，设计节点、连接和元数据持久化模型，并实现节点 CRUD、连接管理和布局数据存储等核心数据服务。',
    tech: ['Java 17', 'Spring Boot', 'JPA', 'H2 / SQLite', 'REST API', 'Git'],
    featured: true,
    cv: {
      role: 'Database and Core API Subtask Owner',
      roleZh: '数据库与核心 API 子任务负责人',
      startDate: '2026-01-29',
      endDate: '2026-03-07',
      context: 'ECNU Boyuan IT Club Owner-Pro · Four-person project',
      contextZh: '华东师范大学博远信息技术社 Owner-Pro · 四人项目',
      summary:
        'Owned the persistence and core-data-service subtask for a local mind-map notebook with editing and version-management features.',
      summaryZh:
        '负责本地思维导图笔记工具的持久化与核心数据服务子任务，支持编辑和版本管理等功能。',
      highlights: [
        'Designed the node, connection, and metadata schema and mapped the data model to Spring Boot entities.',
        'Implemented core APIs for node CRUD, connection management, and layout-data storage.',
        'Produced database design documentation, core data-service APIs, and database utility code within a collaborative Git workflow.',
      ],
      highlightsZh: [
        '设计节点、连接和元数据表结构，并完成数据模型与 Spring Boot 实体映射。',
        '实现节点 CRUD、连接管理和布局数据存储等核心 API。',
        '在协作式 Git 流程中产出数据库设计文档、核心数据服务 API 和数据库工具代码。',
      ],
    },
  },
  {
    id: 'water-quality',
    title: 'Intelligent Water Quality Monitoring and Early-Warning System',
    titleZh: '智能水质监测与预警系统',
    subtitle: 'Team Lead · Technical Proposal Design',
    subtitleZh: '团队负责人 · 技术方案设计',
    image: '/images/projects/water-quality.jpg',
    date: '2025-11-28',
    desc: 'Led a four-person technical proposal for the 18th Advanced Robotics and Simulation Technology Competition. Coordinated the overall submission and contributed to the proposed sensing, acquisition, communication, data-fusion, warning, and energy architecture. The deliverables were the technical proposal, functional diagrams, and device concept design.',
    descZh:
      '带领四人团队完成第十八届先进机器人及仿真技术大赛技术方案，统筹整体材料并参与感知、采集、通信、数据融合、预警和能源架构设计，交付技术方案、功能图与装置概念设计。',
    tech: [
      'Proposed Architecture',
      'Multi-sensor Fusion',
      'Embedded Systems',
      'Edge Intelligence',
      'WebGIS',
    ],
  },
  {
    id: 'zhiyi',
    title: 'Zhiyi',
    titleZh: '知翼',
    subtitle: 'Technical & Functional Proposal Design',
    subtitleZh: '技术与功能方案设计',
    image: '/images/projects/zhiyi.jpg',
    date: '2026-06-30',
    desc: 'Authored the technical and functional sections of a ten-person education-technology proposal for the Challenge Cup ECNU preliminary round. Translated educational goals into proposed software functions, interaction flows, technical architecture, and application scenarios. My contribution covered the proposal design and supporting materials.',
    descZh:
      '在十人团队参加“挑战杯”华东师范大学校内选拔赛的教育技术方案中，负责技术与功能板块全部内容，将教育目标转化为软件功能方案、交互流程、技术架构和应用场景，并完成相应方案材料。',
    tech: [
      'Proposal Design',
      'Product Design',
      'Technical Architecture',
      'Educational Technology',
    ],
  },
];

export default data;
