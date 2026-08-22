/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Intelligent Elevator Collaborative Modeling and Simulation',
    position: 'Continuous Dynamics & PID Control Modeling',
    startDate: '2026-07-01',
    endDate: '2026-07-31',
    summary: `A five-member course project using SysML and Simulink to model and verify an
      intelligent elevator system from system requirements and state behavior to communication,
      continuous dynamics, and motion control. I was responsible for the continuous elevator
      dynamics and PID control model.`,
    highlights: [
      'Constructed the physical model of the elevator car and counterweight system based on force, mass, damping, displacement, velocity, and acceleration relationships.',
      'Built the continuous dynamic model in Simulink using force calculation, PID control, acceleration, velocity, position, feedback, and output modules.',
      'Designed and compared control behavior under different loading conditions to evaluate tracking accuracy and system stability.',
      'Improved the semi-load final position error from 0.0163 m to 0.0062 m and reduced the maximum error from 0.1174 m to 0.0699 m through PID parameter adjustment.',
      'Verified that the final position errors under the tested operating conditions remained below 0.01 m.',
    ],
  },
  {
    name: 'Dynamic High-Dimensional Vector Indexing System',
    position: 'Algorithm Design & Performance Optimization',
    startDate: '2026-03-01',
    endDate: '2026-06-30',
    summary: `A Mini-VDB course project focused on the indexing and retrieval core of a vector
      database. The system supports dynamic insertion, deletion, Top-K search, and threshold-based
      similarity queries over high-dimensional vectors.`,
    highlights: [
      'Analyzed the computational bottlenecks of exhaustive similarity search under dynamic high-dimensional data.',
      'Designed dynamic vector storage and indexing structures supporting insertion, deletion, traversal, and similarity retrieval.',
      'Explored KD-tree-based partitioning, bounding-region pruning, heap-based candidate maintenance, and query-specific search strategies.',
      'Optimized Top-K and threshold queries by reducing unnecessary distance calculations and improving pruning efficiency.',
      'Evaluated algorithm behavior across different vector dimensions, dataset sizes, and query workloads, with dimensions below 2,000 and datasets ranging from 100 to 10,000 vectors.',
      'Connected traditional data-structure concepts with modern embedding retrieval, semantic search, and vector-database applications.',
    ],
  },
  {
    name: 'ScaffoldMind',
    position: 'Independent Developer · Full-Stack Development',
    url: 'https://github.com/Y-Sehnsucht/scaffoldmind',
    startDate: '2026-06-01',
    summary: `ScaffoldMind is a local-first learning workspace designed for computer
      science courses such as CSAPP and Data Structures. I independently developed
      the project from product concept to a functional full-stack MVP, covering
      interface design, frontend implementation, backend APIs, LLM integration,
      streaming responses, and local learning records.`,
    highlights: [
      'Designed the main learning flows across chat, practice, review, history, learner profiles, and local settings.',
      'Built the React, Vite, and Tailwind CSS frontend together with a Node.js and Express backend.',
      'Implemented Server-Sent Events for streaming responses and isolated LLM credentials behind the backend service.',
      'Developed local learning records, question history, feedback memory, practice statistics, review planning, and data export.',
    ],
  },
  {
    name: 'Maple',
    position: 'Backend Developer',
    url: 'https://github.com/boyu-by/Maple_Backend',
    startDate: '2026-02-01',
    summary: `Maple is a local, no-login mind-map notebook with editing, version management,
      and AI-assisted features. I was responsible for the backend foundation and worked through
      a task-driven vibe-coding workflow with IntelliJ IDEA, Codex, and GitHub.`,
    highlights: [
      'Designed the database structure for mind maps, nodes, and edges, including their relationships and persistence requirements.',
      'Initialized the Java 17 and Spring Boot backend project and established its controller, service, repository, DTO, configuration, and exception-handling structure.',
      'Configured JPA persistence with H2 and SQLite support, and addressed database dialect and dependency compatibility issues.',
      'Contributed to the planning and organization of RESTful APIs for mind-map data and core backend operations.',
      'Collaborated through a task-based GitHub workflow using feature branches, pull requests, code review, and squash merges.',
    ],
  },
  {
    name: 'Zhiyi',
    position: 'Technical & Functional Design Contributor',
    startDate: '2025-07-01',
    summary: `Zhiyi is an AI-enabled education project combining personalized learning software
      with intelligent educational hardware. I was responsible for articulating its technical
      approach, functional design, and the technology-related sections of the project proposal.`,
    highlights: [
      'Translated the project’s educational objectives into concrete software functions, interaction processes, and application scenarios.',
      'Developed the technical and functional narrative for personalized learning, learning-state analysis, intelligent guidance, and educational hardware integration.',
      'Explained how concepts such as AIGC, multimodal interaction, intelligent agents, and embodied AI could support the proposed educational experience.',
      'Organized the project’s technical architecture, functional relationships, innovation points, and product advantages for competition materials.',
      'Worked with team members from different disciplines to ensure that the technical description remained consistent with the product and educational objectives.',
    ],
  },
  {
    name: 'Intelligent Water Quality Monitoring and Early-Warning System',
    position: 'Team Lead · System & Technical Proposal Design',
    startDate: '2026-07-01',
    summary: `A multidimensional sensing system designed to transform conventional fixed-point
      water monitoring into dynamic area-wide monitoring, integrating water-quality sensing,
      edge intelligence, multimodal communication, and cloud-based warning capabilities.`,
    highlights: [
      'Led the development of the overall technical proposal and organized the system around a monitoring–warning–response workflow.',
      'Designed a multidimensional sensing architecture combining multi-parameter water-quality sensors, spectral sensing, visual sensing, and water-pressure data.',
      'Proposed an embedded acquisition system based on STM32, RS485/Modbus communication, and 4G/BeiDou dual-mode data transmission.',
      'Designed a layered data-fusion architecture incorporating ETL processing, priority-based fallback, LSTM forecasting, and WebGIS-based watershed evaluation.',
      'Integrated edge-AI concepts for local pollution-source identification and structured second-level warning transmission.',
      'Proposed a hybrid energy architecture combining wave and solar energy with lithium-battery and supercapacitor storage for long-term field deployment.',
      'Extended the system proposal to include underwater visual perception and temporal motion analysis for abnormal human-behavior and drowning-risk detection.',
    ],
  },
];

export default work;