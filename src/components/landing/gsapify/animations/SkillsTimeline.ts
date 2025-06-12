import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';

export class SkillsTimeline extends BoxBoundTimeline {
  constructor() {
    super('skillsTimeline', '#gsapBoxSkills');
  }

  init(): void {
    this.shiftColorables(theme.getSectionBackground('skills'));
  }
}
