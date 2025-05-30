import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';

export class ExperienceTimeline extends BoxBoundTimeline {
  constructor() {
    super('experienceTimeline', '#gsapBoxExperience');
  }

  init(): void {
    this.shiftColorables(theme.getSectionBackground('experience'));
  }
}
