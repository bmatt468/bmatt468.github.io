import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';

export class ProjectsTimeline extends BoxBoundTimeline {
  constructor() {
    super('projectsTimeline', '#gsapBoxProjects');
  }

  init(): void {
    this.shiftColorables(theme.getSectionBackground('projects'));
  }
}
