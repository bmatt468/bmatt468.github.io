import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';

export class SkillsTimeline extends BoxBoundTimeline {
  constructor() {
    super('skillsTimeline', '#gsapBoxSkills');
  }

  init(): void {}
}
