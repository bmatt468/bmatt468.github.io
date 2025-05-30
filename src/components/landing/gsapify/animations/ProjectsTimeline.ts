import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';

export class ProjectsTimeline extends BoxBoundTimeline {
  constructor() {
    super('projectsTimeline', '#gsapBoxProjects');
  }

  init(): void {}
}
