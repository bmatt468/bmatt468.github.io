import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';

export class AboutTimeline extends BoxBoundTimeline {
  constructor() {
    super('aboutTimeline', '#gsapBoxAbout');
  }

  init(): void {
    this.shiftColorables(theme.getSectionBackground('about'));
  }
}
