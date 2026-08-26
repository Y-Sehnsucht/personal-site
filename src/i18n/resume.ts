import type { Locale } from './types';

const resumeTextZh: Record<string, string> = {
  'Algorithm Design & Performance Optimization': '算法设计与性能优化',
  'Artificial Intelligence': '人工智能',
  'Backend Developer': '后端开发',
  'B.Eng. in Software Engineering (Expected)': '软件工程工学学士（预计毕业）',
  'Computer Systems': '计算机系统',
  'Computer Systems 路 4.0/4.0 90/100': '计算机系统 · 4.0/4.0 90/100',
  'Continuous Dynamics & PID Control Modeling': '连续动力学与 PID 控制建模',
  'Data Structure and Algorithm Practice 路 4.0/4.0':
    '数据结构与算法实践 · 4.0/4.0',
  'Data Structures & Algorithms': '数据结构与算法',
  'Data Structures and Algorithm 路 4.0/4.0 98/100':
    '数据结构与算法 · 4.0/4.0 98/100',
  'Dynamic High-Dimensional Vector Indexing System': '动态高维向量索引系统',
  'Dynamic System Modeling & Simulation': '动态系统建模与仿真',
  'East China Normal University': '华东师范大学',
  'Intelligent Elevator Collaborative Modeling and Simulation':
    '智能电梯协同建模与仿真',
  'Intelligent Water Quality Monitoring and Early-Warning System':
    '智能水质监测与预警系统',
  'Introduction to Mathematics for Information Security 路 4.0/4.0':
    '信息安全数学导论 · 4.0/4.0',
  'LLM Application Development': '大模型应用开发',
  'Linear Algebra 路 4.0/4.0': '线性代数 · 4.0/4.0',
  'Mathematical thinking of artificial intelligence 路 4.0/4.0':
    '人工智能数学思维 · 4.0/4.0',
  'Mathematics for Software Engineering(Discrete Mathematics) 路 4.0/4.0':
    '软件工程数学（离散数学）· 4.0/4.0',
  'Modeling & Simulation': '建模与仿真',
  'Object-Oriented Programming': '面向对象程序设计',
  'Object-Oriented Programming(Based on C++) 路 4.0/4.0':
    '面向对象程序设计（基于 C++）· 4.0/4.0',
  'Programming Languages': '编程语言',
  'Prompt Engineering': '提示词工程',
  ScaffoldMind: 'ScaffoldMind',
  'Technical & Functional Design Contributor': '技术与功能设计贡献者',
  'Vector Search & Similarity Retrieval': '向量搜索与相似度检索',
  Zhiyi: '知翊',
};

const resumeIncludesZh: Array<[string, string]> = [
  ['Independent Developer', '独立开发者 / 全栈开发'],
  ['Team Lead', '团队负责人 / 系统与技术方案设计'],
  ['Data Structures and Algorithm', '数据结构与算法 · 4.0/4.0 98/100'],
  ['Computer Systems', '计算机系统 · 4.0/4.0 90/100'],
  [
    'Object-Oriented Programming(Based on C++)',
    '面向对象程序设计（基于 C++）· 4.0/4.0',
  ],
  ['Mathematics for Software Engineering', '软件工程数学（离散数学）· 4.0/4.0'],
  ['Linear Algebra', '线性代数 · 4.0/4.0'],
  [
    'Introduction to Mathematics for Information Security',
    '信息安全数学导论 · 4.0/4.0',
  ],
  [
    'Mathematical thinking of artificial intelligence',
    '人工智能数学思维 · 4.0/4.0',
  ],
  ['Data Structure and Algorithm Practice', '数据结构与算法实践 · 4.0/4.0'],
  [
    'A five-member course project using SysML and Simulink',
    '五人课程项目，使用 SysML 与 Simulink 对智能电梯系统进行建模与验证，覆盖系统需求、状态行为、通信、连续动力学和运动控制。我负责连续电梯动力学与 PID 控制模型。',
  ],
  [
    'Constructed the physical model of the elevator car',
    '基于力、质量、阻尼、位移、速度和加速度关系，构建电梯轿厢与对重系统的物理模型。',
  ],
  [
    'Built the continuous dynamic model in Simulink',
    '在 Simulink 中搭建包含力计算、PID 控制、加速度、速度、位置、反馈和输出模块的连续动力学模型。',
  ],
  [
    'Designed and compared control behavior under different loading conditions',
    '设计并比较不同载荷条件下的控制行为，用于评估跟踪精度和系统稳定性。',
  ],
  [
    'Improved the semi-load final position error',
    '通过 PID 参数调整，将半载最终位置误差从 0.0163 m 降至 0.0062 m，并将最大误差从 0.1174 m 降至 0.0699 m。',
  ],
  [
    'Verified that the final position errors',
    '验证测试工况下最终位置误差均保持在 0.01 m 以下。',
  ],
  [
    'A Mini-VDB course project focused on the indexing',
    'Mini-VDB 课程项目，聚焦向量数据库的索引与检索核心。系统支持高维向量的动态插入、删除、Top-K 搜索和基于阈值的相似度查询。',
  ],
  [
    'Analyzed the computational bottlenecks',
    '分析动态高维数据下穷举相似度搜索的计算瓶颈。',
  ],
  [
    'Designed dynamic vector storage and indexing structures',
    '设计支持插入、删除、遍历和相似度检索的动态向量存储与索引结构。',
  ],
  [
    'Explored KD-tree-based partitioning',
    '探索基于 KD-tree 的划分、边界区域剪枝、堆式候选维护和面向查询的搜索策略。',
  ],
  [
    'Optimized Top-K and threshold queries',
    '通过减少不必要的距离计算和提升剪枝效率，优化 Top-K 与阈值查询。',
  ],
  [
    'Evaluated algorithm behavior across different vector dimensions',
    '在不同向量维度、数据规模和查询负载下评估算法行为，测试维度低于 2,000，数据集规模从 100 到 10,000 个向量。',
  ],
  [
    'Connected traditional data-structure concepts',
    '将传统数据结构概念与现代 embedding 检索、语义搜索和向量数据库应用联系起来。',
  ],
  [
    'ScaffoldMind is a local-first learning workspace',
    'ScaffoldMind 是面向 CSAPP、数据结构等计算机课程的本地优先学习工作区。我从产品概念到可用的全栈 MVP 独立开发该项目，覆盖界面设计、前端实现、后端 API、LLM 集成、流式响应和本地学习记录。',
  ],
  [
    'Designed the main learning flows',
    '设计覆盖聊天、练习、复习、历史记录、学习者档案和本地设置的主要学习流程。',
  ],
  [
    'Built the React, Vite, and Tailwind CSS frontend',
    '构建 React、Vite、Tailwind CSS 前端，以及 Node.js 与 Express 后端。',
  ],
  [
    'Implemented Server-Sent Events',
    '实现用于流式响应的 Server-Sent Events，并将 LLM 凭据隔离在后端服务中。',
  ],
  [
    'Developed local learning records',
    '开发本地学习记录、题目历史、反馈记忆、练习统计、复习规划和数据导出功能。',
  ],
  [
    'Maple is a local, no-login mind-map notebook',
    'Maple 是一个本地、免登录的思维导图笔记工具，包含编辑、版本管理和 AI 辅助功能。我负责后端基础建设，并使用 IntelliJ IDEA、Codex 与 GitHub 完成任务驱动的开发流程。',
  ],
  [
    'Designed the database structure for mind maps',
    '设计思维导图、节点和边的数据库结构，包括它们之间的关系和持久化需求。',
  ],
  [
    'Initialized the Java 17 and Spring Boot backend project',
    '初始化 Java 17 与 Spring Boot 后端项目，并建立 controller、service、repository、DTO、配置和异常处理结构。',
  ],
  [
    'Configured JPA persistence',
    '配置基于 JPA 的持久化，支持 H2 与 SQLite，并处理数据库方言和依赖兼容性问题。',
  ],
  [
    'Contributed to the planning and organization of RESTful APIs',
    '参与思维导图数据与核心后端操作的 RESTful API 规划和组织。',
  ],
  [
    'Collaborated through a task-based GitHub workflow',
    '通过基于任务的 GitHub 流程协作，包括 feature branch、pull request、code review 和 squash merge。',
  ],
  [
    'Zhiyi is an AI-enabled education project',
    '知翊是一个结合个性化学习软件与智能教育硬件的 AI 教育项目。我负责梳理其技术路线、功能设计，以及项目方案中与技术相关的内容。',
  ],
  [
    'Translated the project',
    '将项目的教育目标转化为具体的软件功能、交互流程和应用场景。',
  ],
  [
    'Developed the technical and functional narrative',
    '撰写个性化学习、学习状态分析、智能引导和教育硬件融合相关的技术与功能叙述。',
  ],
  [
    'Explained how concepts such as AIGC',
    '说明 AIGC、多模态交互、智能体和具身智能等概念如何支撑拟议的教育体验。',
  ],
  [
    'Organized the project',
    '为竞赛材料组织项目技术架构、功能关系、创新点和产品优势。',
  ],
  [
    'Worked with team members from different disciplines',
    '与不同学科背景的团队成员协作，确保技术描述与产品和教育目标保持一致。',
  ],
  [
    'A multidimensional sensing system designed',
    '一个多维感知系统方案，旨在将传统固定点水质监测扩展为动态区域监测，融合水质感知、边缘智能、多模态通信和云端预警能力。',
  ],
  [
    'Led the development of the overall technical proposal',
    '主导整体技术方案撰写，并围绕“监测-预警-响应”工作流组织系统设计。',
  ],
  [
    'Designed a multidimensional sensing architecture',
    '设计融合多参数水质传感器、光谱感知、视觉感知和水压数据的多维感知架构。',
  ],
  [
    'Proposed an embedded acquisition system',
    '提出基于 STM32、RS485/Modbus 通信和 4G/北斗双模数据传输的嵌入式采集系统。',
  ],
  [
    'Designed a layered data-fusion architecture',
    '设计包含 ETL 处理、优先级 fallback、LSTM 预测和基于 WebGIS 的流域评价的分层数据融合架构。',
  ],
  [
    'Integrated edge-AI concepts',
    '融合边缘 AI 思路，用于本地污染源识别和结构化秒级预警传输。',
  ],
  [
    'Proposed a hybrid energy architecture',
    '提出波浪能、太阳能、锂电池和超级电容组合的混合能源架构，支持长期野外部署。',
  ],
  [
    'Extended the system proposal',
    '将系统方案扩展到水下视觉感知和时序运动分析，用于异常人体行为与溺水风险检测。',
  ],
];

export function resumeText(text: string, locale: Locale) {
  if (locale !== 'zh-CN') return text;
  return (
    resumeTextZh[text] ??
    resumeIncludesZh.find(([needle]) => text.includes(needle))?.[1] ??
    text
  );
}
