import projects from '@/data/projects';

export interface Position {
  name: string;
  nameZh?: string;
  position: string;
  positionZh?: string;
  context?: string;
  contextZh?: string;
  supervisor?: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  summaryZh?: string;
  highlights?: string[];
  highlightsZh?: string[];
}

const selectedProjectIds = [
  'scaffoldmind',
  'vector-index',
  'elevator-control',
  'maple',
] as const;

const work: Position[] = selectedProjectIds.map((id) => {
  const project = projects.find((candidate) => candidate.id === id);

  if (!project?.cv) {
    throw new Error(`Missing CV details for project: ${id}`);
  }

  return {
    name: project.title,
    nameZh: project.titleZh,
    position: project.cv.role,
    positionZh: project.cv.roleZh,
    context: project.cv.context,
    contextZh: project.cv.contextZh,
    supervisor: project.cv.supervisor,
    url: project.link,
    startDate: project.cv.startDate,
    endDate: project.cv.endDate,
    summary: project.cv.summary,
    summaryZh: project.cv.summaryZh,
    highlights: project.cv.highlights,
    highlightsZh: project.cv.highlightsZh,
  };
});

export default work;
